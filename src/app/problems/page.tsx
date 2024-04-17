"use client";
import React, { useEffect } from "react";
import { TableDemo } from "../me/[userId]/_components/Table";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export type Problem = {
  id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  AcceptanceRate: string;
  templateId: string;
  templates: templates;
  submissions: {
    correct: number;
    wrong: number;
  };
  testcases: [
    {
      input: string;
      output: string;
    }
  ];
};

export type templates = {
  python: {
    userCode: string;
    hiddenTestCode: string;
  };
  golang: {
    userCode: string;
    hiddenTestCode: string;
  };
  c: {
    userCode: string;
    hiddenTestCode: string;
  };
  java: {
    userCode: string;
    hiddenTestCode: string;
  };
  javascript: {
    userCode: string;
    hiddenTestCode: string;
  };
  cpp: {
    userCode: string;
    hiddenTestCode: string;
  };
};
const page = () => {
  const [problems, setProblems] = React.useState<Problem[]>([]);
  useEffect(() => {
    (async function () {
      const response = await fetch("/api/getAllProblems");
      const data = await response.json();
      setProblems(data.problems);
      console.log(problems, "problems");
    })();
  }, []);
  return (
    <div className="flex justify-center py-20 bg-slate-300 ">
      <div className="w-[80vw] max-w-4xl dark bg-slate-950 text-white rounded-xl border-2 border-slate-600">
        <Table>
          <TableHeader className="font-bold">
            <TableRow className="font-bold">
              <TableHead>Title</TableHead>
              <TableHead className="">Category</TableHead>
              <TableHead>Difficulty level</TableHead>
              <TableHead className="text-right">Acceptance Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {problems.map((problem) => {
              return (
                <TableRow key={problem.id}>
                  <Link href={`/problems/${problem.id}`}>
                    <TableCell className="cursor-pointer">
                      {problem.title}
                    </TableCell>
                  </Link>
                  <TableCell className="">{problem.category}</TableCell>
                  <TableCell>{problem.difficulty}</TableCell>
                  <TableCell className="text-right">
                    {
                      // Calculate acceptance percentage only if both correct and wrong submissions are non-zero
                      problem.submissions.correct !== 0 ||
                      problem.submissions.wrong !== 0
                        ? `${Math.round(
                            (problem.submissions.correct /
                              (problem.submissions.correct +
                                problem.submissions.wrong)) *
                              100
                          )}%`
                        : "100%"
                    }
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
