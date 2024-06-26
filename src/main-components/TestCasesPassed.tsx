import React, { useState, useEffect } from "react";
import axios from "axios";

interface TestCasesPassedProps {
  testcasespassed: number[];
  mode: string;
}

const TestCasesPassed: React.FC<TestCasesPassedProps> = ({
  testcasespassed,
  mode,
}) => {
  // const updateUserSubmissions = async (id: number, diff: string) => {
  //   if (testcasespassed.length === 5) {
  //     await axios.post("/api/v1/user/updatesubmission", {
  //       P_id: id,
  //       difficultyLevel: diff,
  //     });
  //   }
  // };
  console.log(mode, "mode");

  let totalTestCases: number;
  let result = "WRONG ANSWER";

  mode === "RUN" ? (totalTestCases = 2) : (totalTestCases = 5);

  if (testcasespassed.length === 2) {
    result = "CORRECT ANSWER";
  }

  if (testcasespassed.length === 5) {
    result = "CORRECT ANSWER";
  }

  if (mode === "IDLE") {
    totalTestCases = 5;
  }

  useEffect(() => {
    const resultDivs = document.querySelectorAll("#result");

    if (mode === "IDLE") {
      resultDivs.forEach((resultDiv, index) => {
        const testCaseNumber = index + 1;
        const lockSymbol = "<span>&#128274;</span>";
        resultDiv.innerHTML = `Test Case ${testCaseNumber}: ${lockSymbol}`;
      });
    } else {
      resultDivs.forEach((resultDiv, index) => {
        console.log(index, "tjo so s asdindex");
        const testCaseNumber = index + 1;
        if (testcasespassed.includes(index + 1)) {
          resultDiv.textContent = `Test Case ${testCaseNumber}: Passed`;
          resultDiv.classList.add("passed");
        } else {
          resultDiv.textContent = `Test Case ${testCaseNumber}: Failed`;
          resultDiv.classList.add("failed");
        }
      });
    }
  }, [testcasespassed, mode]);

  return (
    <>
      {Array.from({ length: totalTestCases }, (_, index) => (
        <div
          key={index}
          id="result"
          className="w-4/5 h-9 p-2 rounded-md m-1 mb-2 flex justify-between text-white  "
          style={{ backgroundColor: "rgb(86 ,91 ,86)" }}
        />
      ))}
      {mode === "IDLE" || mode === "SUBMIT" ? (
        ""
      ) : (
        <div className="mt-8">
          <p
            className={
              result === "CORRECT ANSWER"
                ? "bg-green-700 rounded-md p-1"
                : "bg-red-700 rounded-md p-1"
            }
          >
            {result}
          </p>
        </div>
      )}
    </>
  );
};

export default TestCasesPassed;
