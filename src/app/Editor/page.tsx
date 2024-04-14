"use client";
import {
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";
import { Button } from "@/components/ui/button";
import { CodeEditor } from "@/main-components/CodeEditor";
import LanguageSelect from "@/main-components/LanguageSelect";
import TestCasesPassed from "@/main-components/TestCasesPassed";
import { Editor } from "@monaco-editor/react";
import { rgbToHex } from "@mui/material";
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
  const [sizes, setSizes] = useState<(number | string)[]>([250, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([400, "auto"]);
  const [sizes2, setSizes2] = useState<(number | string)[]>([500, "auto"]);
  let output = useRecoilValue(codeResponseState);
  const [codeResponse, setCodeResponse] = useRecoilState(codeResponseState);
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
    <div style={{ height: "93vh" }} className="bg-slate-400 px-1">
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
          <div className="flex justify-between border-x-slate-200">
            <LanguageSelect
              data={["asdf", "sdfasdf"]}
              onSelect={handleChange}
            />
            <Button
              variant="outline"
              onClick={handleRun}
              className="dark text-slate-300"
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
              defaultValue="// some comment"
              theme="vs-dark"
            />
          </div>
        </Pane>

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
            <pre className="font-mono ">
              {output}loading:{loading.toString()}
            </pre>
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Page;
