"use client";
import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./LanguageSelect";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  cCodeatom,
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
  cppCodeatom,
  golangCodeatom,
  javaCodeatom,
  jsCodeatom,
  pythonCodeatom,
  submissionMode,
  userCode,
} from "@/atoms/codeSubmission.atom";

import { languageAtom } from "@/atoms/language.atom";
import { isUserLoggedIn, userState } from "@/atoms/user.atom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

import { UpdateUserSubmissionsRequest } from "@/proto/auth_proto/auth_pb";
import { Metadata } from "grpc-web";
import { title } from "process";
import { CodeResponseType } from "@/constants/CodeResponseType";
import { authClient } from "@/lib/authServiceClient";

type CodeEditorProps = {
  queId: string;
  Difficulty: string;
  Title: string;
};
export const CodeEditor: React.FC<CodeEditorProps> = ({
  queId,
  Difficulty,
  Title,
}) => {
  const [language, setLanguage] = useRecoilState(languageAtom);
  const [codeResponse, setCodeResponse] = useRecoilState(codeResponseState);
  const [loading, setLoading] = useRecoilState(codeSubmissionLoadingState);
  const [error, setError] = useRecoilState(codeSubmissionErrorState);
  const [code, setCode] = useRecoilState(userCode);
  const [cCode, setCCode] = useRecoilState(cCodeatom);
  const [cppCode, setCppCode] = useRecoilState(cppCodeatom);
  const [javaCode, setJavaCode] = useRecoilState(javaCodeatom);
  const [jsCode, setJsCode] = useRecoilState(jsCodeatom);
  const [pythonCode, setPythonCode] = useRecoilState(pythonCodeatom);
  const [golangCode, setGolangCode] = useRecoilState(golangCodeatom);
  const [mode, setMode] = useRecoilState(submissionMode);
  const isUserLogged = useRecoilValue(isUserLoggedIn);
  const user = useRecoilValue(userState);
  const handleLanguageSelect = (value: string) => {
    setLanguage(value);
  };
  const handleSubmit = async () => {
    console.log("submitting code from the editor");
    try {
      if (!isUserLogged) {
        return toast.error("Please login to run the code");
      }
      setMode("SUBMIT");
      let pid = generatePID();
      setLoading(true);
      let { data } = await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: user.email,
          reqType: "submit",
          title: Title,
          queId: queId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await PollAPI(
        `/api/pollgraphqlresult/?pid=${pid}`,
        500,
        10
      );
      setCodeResponse({
        output: (result as any).data.data.output,
        status: (result as any).data.status,
        error: (result as any).data.error,
        language: (result as any).data.language,
        pid: (result as any).data.pid,
        passesTestcase: (result as any).data.data.testcases,
      });
      console.log("this is  resutl", result);
      const authToken = Cookies.get("token");
      console.log(authToken, "authToken");
      const metadata: Metadata = {};
      if (authToken) {
        let req = new UpdateUserSubmissionsRequest();

        metadata["authorization"] = authToken;

        req.setToken(authToken);
        req.setQueid(queId);
        req.setDifficulty(Difficulty);
        console.log(req.toObject());

        let updatesUser = await authClient.updateUserSubmissions(req, metadata);

        console.log("req", req);
        console.log(updatesUser);
        setLoading(false);
      }

      setError(null);
    } catch (error) {
      console.log(error, "error");
      setLoading(false);
    }
  };

  const handleRun = async () => {
    try {
      if (!isUserLogged) {
        return toast.error("Please login to run the code");
      }
      console.log("this is code", code);
      setMode("RUN");
      console.log(isUserLogged, "gasdf");

      let pid = generatePID();
      setLoading(true);
      console.log("loading", codeResponse);

      console.log("running code from the editor");
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios.post(
        "/api/submitCode",
        {
          code: code,
          language,
          pid,
          email: user.email,
          title: Title,
          queId: queId,
          reqType: "run",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await PollAPI(`/api/pollresult/${pid}`, 500, 10);
      console.log("this is  resutl", result);
      console.log("this is  resutl", (result as any).data);

      let jsonData = JSON.parse((result as any).data.data);
      console.log("this is json  resutl", jsonData);

      setCodeResponse({
        status: (result as any)?.data?.status,
        error: (result as any)?.data?.error,
        language: (result as any)?.data?.language,
        output: jsonData.output,
        pid: (result as any)?.data?.pid,
        passesTestcase: jsonData.testcases,
      });

      setLoading(false);
      console.log("loading finish", loading);

      setError(null);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    let newCode;

    switch (language) {
      case "c":
        newCode = cCode;
        break;
      case "cpp":
        newCode = cppCode;
        break;
      case "java":
        newCode = javaCode;
        break;
      case "javascript":
        newCode = jsCode;
        break;
      case "python":
        newCode = pythonCode;
        break;
      case "golang":
        newCode = golangCode;
        break;
      default:
        newCode = "";
    }
    setCode(newCode);
  }, [
    language,
    cCode,
    cppCode,
    javaCode,
    jsCode,
    pythonCode,
    golangCode,
    setCode,
  ]);

  const handleCodeChange = (newCode: string, lang: string) => {
    switch (lang) {
      case "cpp":
        setCppCode(newCode);
        break;
      case "java":
        setJavaCode(newCode);
        break;
      case "javascript":
        setJsCode(newCode);
        break;
      case "python":
        setPythonCode(newCode);
        break;
      case "golang":
        setGolangCode(newCode);
        break;
      default:
        break;
    }
    setCode(newCode);
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <LanguageSelect
          data={["javascript", "python", "java", "cpp", "golang"]}
          onSelect={handleLanguageSelect}
        />
        <div className="mx-9 ">
          <Button
            onClick={handleRun}
            className="mx-4 "
            disabled={loading ? true : false}
          >
            Run
          </Button>
          <Button
            onClick={handleSubmit}
            // disabled={!loading ? true : false}
            // className="disabled:text-slate-900 "
            disabled={loading ? true : false}
          >
            Submit
          </Button>
        </div>
      </div>
      <Editor
        className="h-full "
        onChange={(value, e) => {
          handleCodeChange(value || "", language);
        }}
        height="94%"
        defaultLanguage="javascript"
        language={language}
        theme="vs-dark"
        value={code}
      />
    </div>
  );
};
