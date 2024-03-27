"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import LanguageSelect from "./LanguageSelect";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";

export const Editor2 = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [code, setCode] = React.useState<string>("");
  const handleLanguageSelect = (value: string) => {
    setLanguage(value);
  };
  const handleSubmit = async () => {
    console.log(code);
    try {
      const pid = generatePID();

      let { data } = await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {}
  };

  const handleRun = async () => {
    try {
      const pid = generatePID();

      let { data } = await axios.post(
        "/api/submitCode",
        {
          code,
          language,
          pid,
          email: "asdf",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      <Button onClick={handleSubmit}>Run</Button>;
    </div>
  );
};