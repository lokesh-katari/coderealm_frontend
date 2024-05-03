"use client";
import {
  codeGeneralResponseState,
  codeResponseState,
  codeSubmissionErrorState,
  codeSubmissionLoadingState,
} from "@/atoms/codeSubmission.atom";
import { Button } from "@/components/ui/button";
import { Editor } from "@monaco-editor/react";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";

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
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  const layoutCSS = {
    height: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const handleChange = (value: string) => {
    setLanguage(value);
  };

  return (
    <div style={{ height: "93vh" }} className="bg-cyan-900 pl-2 pr-2 pt-2 pb-1">
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
          className="space-y-1"
        >
          <Pane
            maxSize={"70%"}
            minSize={"20%"}
            className="  rounded-xl bg-slate-900  mb-2 space-y-1 "
          >
            <div className="flex justify-between bg-red-500 h-8 border-x-slate-200">
              <Button className=" font-semibold text-white ">HTML</Button>
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
            className=" b rounded-xl bg-slate-900 mb-2 space-y-1"
          >
            <div className="flex justify-between bg-sky-500 h-8 border-x-slate-200 ">
              <Button className=" font-semibold text-white ">CSS</Button>
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
            minSize={"20%"}
            className="  rounded-xl bg-slate-900 "
          >
            <div className="flex justify-between bg-yellow-500 h-8 ">
              <Button className=" font-semibold text-white ">JS</Button>
            </div>{" "}
            <div style={{ ...layoutCSS, background: "#1e1e1e" }}>
              <Editor
                className="h-full"
                onChange={(e) => setJs(e || "")}
                height="94%"
                language="javascript"
                value={js}
                theme="vs-dark"
              />
            </div>
          </Pane>
        </SplitPane>

        <Pane
          minSize={"30%"}
          maxSize={"70%"}
          className=" border-2 rounded-xl  border-gray-700 bg-black ml-1 "
        >
          <div className="flex justify-between border-x-slate-200">
            <Button className=" text-white ">Preview</Button>
          </div>{" "}
          <div className="flex items-center space-x-2  bg-white h-full ">
            <iframe
              className="iframe"
              srcDoc={doc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        </Pane>
      </SplitPane>
    </div>
  );
};

export default Page;
