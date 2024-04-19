import React from "react";
type ProblemTemplateProps = {
  title: string;
  description: string;
  difficulty: string;
  submissions: {
    correct: number;
    wrong: number;
  };
  testCases: {
    input: string;
    output: string;
  }[];
  topic: string;
};

const ProblemTemplate: React.FC<ProblemTemplateProps> = ({
  title,
  description,
  difficulty,
  submissions,
  testCases,
  topic,
}) => {
  return (
    <div className="p-3 mt-2 overflow-auto">
      <div className="text-2xl p-1 text-left">{title}</div>
      <div className="text-xl p-1 text-left">{description}</div>
      <div className="text-xl p-1 text-left ">
        {testCases?.map((testCase, index) => {
          return (
            <div className="mt-3" key={index}>
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
            {submissions &&
              (submissions.correct !== 0 || submissions.wrong !== 0
                ? `${Math.round(
                    (submissions.correct /
                      (submissions.correct + submissions.wrong)) *
                      100
                  )}%`
                : "100%")}
          </span>
        </div>
        <div className="">
          Difficulty Level:{" "}
          <span className="p-1 px-2 bg-zinc-700 rounded-full">
            {difficulty === "easy" ? (
              <span style={{ color: "green" }}>Easy</span>
            ) : difficulty === "medium" ? (
              <span style={{ color: "yellow" }}>Medium</span>
            ) : (
              <span style={{ color: "red" }}>Hard</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProblemTemplate;
