"use client";
import React from "react";
import Editor from "@monaco-editor/react";

import { Button } from "@/components/ui/button";
import axios from "axios";

const CodeEditor = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [code, setCode] = React.useState<string>("");

  const handleRun = async () => {
    try {
      await axios.post(
        "/api/getCodeString",
        {
          code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(code);
    } catch (error) {}
  };
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between">
        <div className="mx-9 ">
          <Button onClick={handleRun} className="mx-4">
            Run
          </Button>
        </div>
      </div>
      <Editor
        className="h-full"
        onChange={(e) => setCode(e || "")}
        height="70vh"
        defaultLanguage="javascript"
        language={language}
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </div>
  );
};
export default CodeEditor;
