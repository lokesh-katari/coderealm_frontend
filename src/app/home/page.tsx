"use client";
import { CodeEditor } from "@/main-components/CodeEditor";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import React from "react";

const Page = () => {
  const [code, setCode] = React.useState("");

  const handleRun = async () => {
    // Run code

    const { data } = await axios.post("/api/getCodeString", { code });

    console.log(data);
  };
  return (
    <div className="h-[80vh] w-screen">
      <Editor value={code} onChange={(e) => setCode(e || "")} theme="vs-dark" />
      <button onClick={handleRun} className="p-5 bg-slate-500">
        Run
      </button>
    </div>
  );
};

export default Page;
