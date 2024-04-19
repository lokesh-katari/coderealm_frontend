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

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { Problem, templates } from "../page";
import { languageAtom } from "@/atoms/language.atom";
import SubmissionSkeleton from "@/main-components/SubmissionSkeleton";
import ProblemTemplate from "@/main-components/ProblemTemplate";
import ProblemSkeleton from "@/main-components/ProblemSkeleton";

const Page = () => {
  const [sizes, setSizes] = useState<(number | string)[]>([350, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([400, "auto"]);
  const [sizes2, setSizes2] = useState<(number | string)[]>([500, "auto"]);
  let output = useRecoilValue(codeResponseState);
  let loading = useRecoilValue(codeSubmissionLoadingState);

  const [problem, setProblem] = useState<Problem>();
  const [testCases, setTestCases] = useState<Problem["testCases"]>();
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
  }, [queId]);

  useEffect(() => {
    if (template) {
      setCCode(template.c.userCode);
      setCppCode(template.cpp.userCode);
      setJavaCode(template.java.userCode);
      setJsCode(template.javascript.userCode);
      setPythonCode(template.python.userCode);
      setGolangCode(template.golang.userCode);
    }
  }, [
    template,
    setCCode,
    setCppCode,
    setJavaCode,
    setJsCode,
    setPythonCode,
    setGolangCode,
  ]);
  return (
    <div style={{ height: "90vh" }}>
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <Pane
          maxSize={"60%"}
          minSize={"30%"}
          className="border-red-100 border-2 rounded-xl"
        >
          <div
            style={{ background: "#1e1e1e" }}
            className="flex flex-col h-full text-slate-100"
          >
            {loading ? (
              <ProblemSkeleton />
            ) : (
              <>
                <ProblemTemplate
                  title={problem?.title || ""}
                  description={problem?.description || ""}
                  difficulty={problem?.difficulty || ""}
                  submissions={problem?.submissions || { correct: 0, wrong: 0 }}
                  testCases={problem?.testCases || []}
                  key={problem?.id}
                  topic="asdf"
                />
              </>
            )}
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
              style={{ ...layoutCSS }}
              className="border-red-100 border-2 rounded-xl"
            >
              <CodeEditor
                queId={queId}
                Difficulty={problem?.difficulty || "easy"}
              />
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
                {!loading ? (
                  <>
                    <SubmissionSkeleton />
                  </>
                ) : (
                  <>
                    <TestCasesPassed
                      testcasespassed={[]}
                      mode="IDLE"
                      id={1}
                      diff="easy"
                    />
                  </>
                )}
              </div>
            </Pane>
            <Pane className="w-2/6" minSize={"30%"} maxSize={"70%"}>
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
                  {!loading ? (
                    <span className="text-slate-300 ml-3">
                      Submission Queued...
                    </span>
                  ) : (
                    output
                  )}
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
