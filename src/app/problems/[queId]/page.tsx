"use client";
import {
  codeResponseState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";
import { CodeEditor } from "@/main-components/CodeEditor";
import TestCasesPassed from "@/main-components/TestCasesPassed";
import { rgbToHex } from "@mui/material";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

const Page = () => {
  const [sizes, setSizes] = useState<(number | string)[]>([250, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([400, "auto"]);
  const [sizes2, setSizes2] = useState<(number | string)[]>([500, "auto"]);
  let output = useRecoilValue(codeResponseState);
  let loading = useRecoilValue(codeSubmissionLoadingState);
  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={{ height: "90vh" }}>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <Pane
          maxSize={"80%"}
          minSize={"30%"}
          className="border-red-100 border-2 rounded-xl"
        >
          <div
            style={{ background: "#1e1e1e" }}
            className="flex flex-col h-full text-slate-100"
          >
            <div className="pl-3">
              <div className="text-2xl p-1 text-left">Title</div>
              <div className="text-xl p-1 text-left">Description</div>
              <div className="text-xl p-1 text-left">Input</div>
              <div className="text-xl p-1 text-left">Output</div>
            </div>
          </div>
        </Pane>
        <SplitPane
          sizes={sizes1}
          split="horizontal"
          sashRender={() => null}
          onChange={setSizes1}
        >
          <Pane
            className="border-b-4 border-red-100 rounded-xl"
            minSize={"50%"}
            maxSize={"70%"}
          >
            <div
              style={{ ...layoutCSS, background: "#ddd" }}
              className="border-red-100 border-2 rounded-xl"
            >
              <CodeEditor />
            </div>
          </Pane>
          <SplitPane
            sizes={sizes2}
            onChange={setSizes2}
            sashRender={() => null}
          >
            <Pane minSize={"30%"} maxSize={"50%"}>
              <div
                style={{ background: "#1e1e1e" }}
                className="h-full flex flex-col items-center justify-center border-red-100 border-2 rounded-xl"
              >
                <TestCasesPassed
                  testcasespassed={[]}
                  mode="IDLE"
                  id={1}
                  diff="easy"
                />
              </div>
            </Pane>
            <Pane className="" minSize={"30%"} maxSize={"70%"}>
              <div
                style={{ background: "#1e1e1e" }}
                className="border-red-100 h-full flex flex-col bg-black
              border-2
              rounded-xl overflow-auto p-4"
              >
                <p className="font-mono " style={{ color: "rgb(9, 186, 30)" }}>
                  ~ Welcome to CodeRealm..
                </p>
                <pre className="font-mono ">
                  {output}loading:{loading.toString()}
                </pre>
              </div>
            </Pane>
          </SplitPane>
        </SplitPane>
      </SplitPane>
    </div>
  );
  //    <div>hi</div>;
};

export default Page;
