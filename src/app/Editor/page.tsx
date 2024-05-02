"use client";
import {
  codeGeneralResponseState,
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";
import { Button } from "@/components/ui/button";

import LanguageSelect from "@/main-components/LanguageSelect";

import { Editor } from "@monaco-editor/react";

import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";

const Page = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [code, setCode] = React.useState<string>("");
  const [sizes, setSizes] = useState<(number | string)[]>([550, "auto"]);
  let codeOutput = useRecoilValue(codeGeneralResponseState);
  const [codeResponse, setCodeResponse] = useRecoilState(
    codeGeneralResponseState
  );
  const [loading, setLoading] = useRecoilState(codeSubmissionLoadingState);
  const [error, setError] = useRecoilState(codeSubmissionErrorState);

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleChange = (value: string) => {
    setLanguage(value);
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
          email: "",
          reqType: "general",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await PollAPI(`/api/pollresult/${pid}`, 500, 10);
      setCodeResponse({
        output: (result as any)?.data.output,
      });
      console.log("loading finish");

      setLoading(false);
      console.log("loading finish", loading);
      console.log("loaded resiu;t", codeResponse);

      setError(null);
    } catch (error) {}
  };
  return (
    <div style={{ height: "93vh" }} className=" px-1">
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <Pane
          maxSize={"80%"}
          minSize={"30%"}
          className=" border-2 rounded-xl bg-slate-900"
        >
          <div className="flex justify-between">
            <LanguageSelect
              data={[
                "python",
                "javascript",
                "java",
                "c",
                "cpp",
                "csharp",
                "golang",
                "ruby",
                "rust",
                "swift",
                "php",
              ]}
              onSelect={handleChange}
            />
            <Button
              variant="outline"
              onClick={handleRun}
              className="dark text-slate-300 "
              disabled={loading ? true : false}
            >
              Run
            </Button>
          </div>{" "}
          <div style={{ ...layoutCSS, background: "#1e1e1e" }}>
            <Editor
              className="h-full"
              onChange={(e) => setCode(e || "")}
              height="94%"
              defaultLanguage="javascript"
              language={language}
              value={code}
              theme="vs-dark"
            />
          </div>
        </Pane>

        <Pane className="pl-1" minSize={"30%"} maxSize={"70%"}>
          <div
            style={{ background: "#1e1e1e" }}
            className=" h-full flex flex-col 
              border-2
              rounded-xl overflow-auto p-4"
          >
            <p className="font-mono " style={{ color: "rgb(9, 186, 30)" }}>
              ~ Welcome to CodeRealm..
            </p>
            {loading ? (
              <div className="flex items-center space-x-2 p-2">
                <span className="text-slate-200 animate-pulse font-bold">
                  Submission queued
                </span>
                <span className="animate-pulse  ">
                  <span className="animate-bounce inline-block w-[5px] h-[5px] rounded-full bg-slate-200 mr-1 [animation-delay:-0.15s]"></span>
                  <span className="animate-bounce inline-block w-[5px] h-[5px] rounded-full bg-slate-200 mr-1  [animation-delay:-0.3s]"></span>
                  <span className="animate-bounce inline-block w-[5px] h-[5px] rounded-full bg-slate-200  "></span>
                </span>
              </div>
            ) : (
              <div className="h-full pl-1">
                <pre className="text-slate-300">{codeOutput.output}</pre>
              </div>
            )}
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Page;
