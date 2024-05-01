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
  const [sizes, setSizes] = useState<(number | string)[]>([650, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([250, "auto"]);

  const [codeResponse, setCodeResponse] = useRecoilState(
    codeGeneralResponseState
  );

  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <div style={{ height: "92vh" }} className="bg-slate-400 px-1">
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <SplitPane
          split="horizontal"
          sizes={sizes1}
          onChange={setSizes1}
          sashRender={() => null}
        >
          <Pane
            maxSize={"70%"}
            minSize={"20%"}
            className=" border-2 rounded-xl bg-slate-900"
          >
            <div className="flex justify-between border-x-slate-200">
              <Button variant="ghost" className="dark text-slate-300 ">
                Html
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
          <Pane
            maxSize={"70%"}
            minSize={"20%"}
            className=" border-2 rounded-xl bg-slate-900"
          >
            <div className="flex justify-between border-x-slate-200">
              <Button variant="ghost" className="dark text-slate-300 ">
                Css
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
          <Pane
            maxSize={"70%"}
            minSize={"1%"}
            className=" border-2 rounded-xl bg-slate-900"
          >
            <div className="flex justify-between border-x-slate-200">
              <Button variant="ghost" className="dark text-slate-300 ">
                JavaScript
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
        </SplitPane>

        <Pane className="pl-1" minSize={"30%"} maxSize={"70%"}>
          <div
            style={{ background: "#1e1e1e" }}
            className=" h-full flex flex-col border-x-slate-200
              border-2
              rounded-xl overflow-auto p-4"
          >
            <p className="font-mono " style={{ color: "rgb(9, 186, 30)" }}>
              ~ Welcome to CodeRealm..
            </p>

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
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Page;
