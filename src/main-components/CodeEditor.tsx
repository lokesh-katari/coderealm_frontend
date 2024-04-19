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
  userCode,
} from "@/atoms/codeSubmission.atom";

import { languageAtom } from "@/atoms/language.atom";
import { isUserLoggedIn } from "@/atoms/user.atom";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { authClient } from "@/lib/authServiceClient";
import { UpdateUserSubmissionsRequest } from "@/proto/auth_proto/auth_pb";
import { Metadata } from "grpc-web";

type CodeEditorProps = {
  queId: string;
  Difficulty: string;
};
export const CodeEditor: React.FC<CodeEditorProps> = ({
  queId,
  Difficulty,
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
  const isUserLogged = useRecoilValue(isUserLoggedIn);
  const handleLanguageSelect = (value: string) => {
    setLanguage(value);
  };
  const handleSubmit = async () => {
    try {
      if (!isUserLogged) {
        return toast.error("Please login to run the code");
      }
      let pid = generatePID();
      setLoading(true);
      let { data } = await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",
          reqType: "submit",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = PollAPI(`/api/pollgraphqlresult/?pid=${pid}`, 500, 10);
      setCodeResponse(await result);
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
      setLoading(false);
    }
  };

  const handleRun = async () => {
    try {
      if (!isUserLogged) {
        return toast.error("Please login to run the code");
      }
      console.log(isUserLogged, "gasdf");

      let pid = generatePID();
      setLoading(true);
      console.log("loading", codeResponse);

      console.log("running code from the editor");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",

          reqType: "run",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = PollAPI(`/api/pollresult/${pid}`, 500, 10);

      setCodeResponse(await result);
      console.log("loading finish");
      setCodeResponse("this is result");

      setLoading(false);
      console.log("loading finish", loading);
      console.log("loaded resiu;t", codeResponse);

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
      case "c":
        setCCode(newCode);
        break;
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
          data={["javascript", "python", "java", "c", "cpp", "golang"]}
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
