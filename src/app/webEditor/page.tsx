"use client";
import {
  codeGeneralResponseState,
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";
import { Button } from "@/components/ui/button";
import * as monaco from "monaco-editor";
import LanguageSelect from "@/main-components/LanguageSelect";

import { Editor } from "@monaco-editor/react";
import "monaco-editor/esm/vs/basic-languages/css/css.contribution";

import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import axios from "axios";
import { generatePID } from "@/lib/generatePID";
import { PollAPI } from "@/lib/pollAPI";
import "monaco-editor/esm/vs/basic-languages/html/html.contribution";

// Register the HTML language definition
monaco.languages.register({ id: "html" });
monaco.languages.register({ id: "css" });

const Page = () => {
  const [language, setLanguage] = React.useState("javascript");
  const [html, setHtml] = React.useState("");
  const [css, setCss] = React.useState("");
  const [js, setJs] = React.useState("");
  const [doc, setDoc] = React.useState("");

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
                onChange={(e) => setHtml(e || "")}
                height="94%"
                language="html"
                value={html}
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
                onChange={(e) => setCss(e || "")}
                height="94%"
                language="css"
                value={css}
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
                onChange={(e) => setJs(e || "")}
                height="94%"
                language={"javascript"}
                value={js}
                theme="vs-dark"
              />
            </div>
          </Pane>
        </SplitPane>

        <Pane
          minSize={"30%"}
          maxSize={"70%"}
          className=" border-2 rounded-xl bg-slate-900 ml-1"
        >
          <div className="flex justify-between border-x-slate-200">
            <Button variant="ghost" className="dark text-slate-300 ">
              Preview
            </Button>
          </div>{" "}
          <div className="flex items-center space-x-2 p-2 bg-white h-full"></div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Page;
