"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./LanguageSelect";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";
import { useRecoilState } from "recoil";
import {
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";

export const CodeEditor = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [codeResponse, setCodeResponse] = useRecoilState(codeResponseState);
  const [loading, setLoading] = useRecoilState(codeSubmissionLoadingState);
  const [error, setError] = useRecoilState(codeSubmissionErrorState);
  const [code, setCode] = React.useState<string>("");
  const handleLanguageSelect = (value: string) => {
    setLanguage(value);
  };
  const handleSubmit = async () => {
    console.log(code);
    try {
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
      setLoading(false);
      setError(null);
    } catch (error) {}
  };

  const handleRun = async () => {
    try {
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
    } catch (error) {}
  };

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <LanguageSelect
          data={["javascript", "typescript", "python", "java"]}
          onSelect={handleLanguageSelect}
        />
        <div className="mx-9 ">
          <Button onClick={handleRun} className="mx-4">
            Run
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      </div>
      <Editor
        className="h-full"
        onChange={(e) => setCode(e || "")}
        height="94%"
        defaultLanguage="javascript"
        language={language}
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  );
};
