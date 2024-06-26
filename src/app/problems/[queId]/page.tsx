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
  submissionMode,
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
import { problemAtomLoadingState } from "@/atoms/problems.atom";

const Page = () => {
  const [sizes, setSizes] = useState<(number | string)[]>([600, "auto"]);
  const [sizes1, setSizes1] = useState<(number | string)[]>([400, "auto"]);
  const [sizes2, setSizes2] = useState<(number | string)[]>([500, "auto"]);
  let output = useRecoilValue(codeResponseState);
  let loading = useRecoilValue(codeSubmissionLoadingState);
  let [problemLoading, setProblemLoading] = useState(true);

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
  const [mode, setMode] = useRecoilState(submissionMode);
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
      setProblemLoading(false);
      setTestCases(data.problems.testCases);
      setTemplate(data.problems.templates);
    })();
  }, [queId]);

  useEffect(() => {
    setMode("IDLE");
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
    <div
      style={{ height: "90vh", backgroundColor: "#004E63" }}
      className="mt-2"
    >
      <SplitPane
        split="vertical"
        sizes={sizes}
        onChange={setSizes}
        sashRender={() => null}
      >
        <Pane
          maxSize={"60%"}
          minSize={"30%"}
          className="border-cyan-900 border-2 rounded-xl"
        >
          <div
            style={{ background: "#1e1e1e" }}
            className="flex flex-col h-full text-slate-100"
          >
            {problemLoading ? (
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
            className="border-b-4 border-cyan-900 rounded-xl"
            minSize={"50%"}
            maxSize={"70%"}
          >
            <div
              style={{ ...layoutCSS }}
              className="border-cyan-900 border-2 rounded-xl"
            >
              <CodeEditor
                queId={queId}
                Difficulty={problem?.difficulty || "easy"}
                Title={problem?.title || ""}
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
                className="h-full flex flex-col items-center justify-center border-2 border-cyan-900 rounded-xl"
              >
                {loading ? (
                  <>
                    <SubmissionSkeleton />
                  </>
                ) : (
                  <>
                    {console.log(
                      output?.passesTestcase?.length,
                      output?.passesTestcase,
                      "output"
                    )}
                    <TestCasesPassed
                      testcasespassed={output?.passesTestcase}
                      mode={mode}
                    />
                  </>
                )}
              </div>
            </Pane>
            <Pane className="w-2/6" minSize={"30%"} maxSize={"70%"}>
              <div
                style={{ background: "#1e1e1e" }}
                className="border-cyan-900 h-full flex flex-col 
              border-2
              rounded-xl overflow-auto p-4"
              >
                <p className="font-mono " style={{ color: "rgb(9, 186, 30)" }}>
                  ~ Welcome to CodeRealm..
                </p>
                <pre className="font-mono ">
                  {loading ? (
                    <span className="text-slate-300 ml-3">
                      Submission Queued...
                    </span>
                  ) : (
                    <span className="text-slate-300 ml-3">
                      {/* {output.pid} */}
                      {output?.output}
                    </span>
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
