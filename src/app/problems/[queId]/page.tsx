"use client";
import {
  cCodeatom,
  codeResponseState,
  codeSubmissionLoadingState,
  cppCodeatom,
  golangCodeatom,
  javaCodeatom,
  jsCodeatom,
  pythonCodeatom,
  userCode,
} from "@/atoms/codeSubmission.atom";
import { CodeEditor } from "@/main-components/CodeEditor";
import TestCasesPassed from "@/main-components/TestCasesPassed";
import { rgbToHex } from "@mui/material";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { Problem, templates } from "../page";
import { languageAtom } from "@/atoms/language.atom";

const Page = () => {
  const [sizes, setSizes] = useState<(number | string)[]>([250, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([400, "auto"]);
  const [sizes2, setSizes2] = useState<(number | string)[]>([500, "auto"]);
  let output = useRecoilValue(codeResponseState);
  let loading = useRecoilValue(codeSubmissionLoadingState);
  const [problem, setProblem] = useState<Problem>();
  const [testCases, setTestCases] = useState<Problem["testcases"]>();
  const [template, setTemplate] = useState<templates>();
  const language = useRecoilValue(languageAtom);
  const [cCode, setCCode] = useRecoilState(cCodeatom);
  const [cppCode, setCppCode] = useRecoilState(cppCodeatom);
  const [javaCode, setJavaCode] = useRecoilState(javaCodeatom);
  const [jsCode, setJsCode] = useRecoilState(jsCodeatom);
  const [pythonCode, setPythonCode] = useRecoilState(pythonCodeatom);
  const [golangCode, setGolangCode] = useRecoilState(golangCodeatom);
  const layoutCSS = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const params = useParams<{ queId: string }>();
  const queId = params.queId;
  useEffect(() => {
    (async function () {
      console.log(queId, "params");
      const response = await fetch(`/api/getAllProblems/${queId}`);
      const data = await response.json();
      setProblem(data.problems);
      setTestCases(data.problems.testCases);
      setTemplate(data.problems.templates);
    })();
  }, []);

  useEffect(() => {
    if (template) {
      setCCode(template.c.userCode);
      setCppCode(template.cpp.userCode);
      setJavaCode(template.java.userCode);
      setJsCode(template.javascript.userCode);
      setPythonCode(template.python.userCode);
      setGolangCode(template.golang.userCode);
    }
  }, [template]);
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
            <div className="p-3 mt-2 overflow-auto">
              <div className="text-2xl p-1 text-left">{problem?.title}</div>
              <div className="text-xl p-1 text-left">
                {problem?.description}
              </div>
              <div className="text-xl p-1 text-left ">
                {testCases?.map((testCase, index) => {
                  return (
                    <div className="mt-3">
                      <div>Testcase {index + 1} :</div>
                      <div className="bg-zinc-700 rounded-2xl mt-2 p-2">
                        <div className="text-xl p-1 text-left">
                          Input:
                          {testCase.input}
                        </div>
                        <div className="text-xl p-1 text-left">
                          output:
                          {testCase.output}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between mt-6 p-3">
                <div className="">
                  Acceptance Rate:{" "}
                  <span className="p-1 px-2 bg-zinc-700 rounded-full">
                    {problem &&
                      (problem.submissions.correct !== 0 ||
                      problem.submissions.wrong !== 0
                        ? `${Math.round(
                            (problem.submissions.correct /
                              (problem.submissions.correct +
                                problem.submissions.wrong)) *
                              100
                          )}%`
                        : "100%")}
                  </span>
                </div>
                <div className="">
                  Difficulty Level:{" "}
                  <span className="p-1 px-2 bg-zinc-700 rounded-full">
                    {problem?.difficulty === "easy" ? (
                      <span style={{ color: "green" }}>Easy</span>
                    ) : problem?.difficulty === "medium" ? (
                      <span style={{ color: "yellow" }}>Medium</span>
                    ) : (
                      <span style={{ color: "red" }}>Hard</span>
                    )}
                  </span>
                </div>
              </div>
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
