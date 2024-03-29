"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./LanguageSelect";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";

export const CodeEditor = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [code, setCode] = React.useState<string>("");
  const handleLanguageSelect = (value: string) => {
    setLanguage(value);
  };
  const handleSubmit = async () => {
    console.log(code);
    try {
      let pid = generatePID();

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
      const result = PollAPI(`/api/pollgraphqlresult/?pid=${pid}`, 100, 10);
      await result;
    } catch (error) {}
  };

  const handleRun = async () => {
    try {
      let pid = generatePID();

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

      const result = PollAPI(`/api/pollresult/${pid}`, 100, 10);

      await result;
    } catch (error) {}
  };
  return (
    <div>
      <LanguageSelect
        data={["javascript", "typescript", "python", "java"]}
        onSelect={handleLanguageSelect}
      />
      <Editor
        onChange={(e) => setCode(e || "")}
        height="70vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue="// some comment"
        theme="vs-dark"
      />
      <Button onClick={handleRun}>Run</Button>;
      <Button onClick={handleSubmit}>Submit</Button>;
    </div>
  );
};
