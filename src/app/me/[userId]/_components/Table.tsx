import { userState } from "@/atoms/user.atom";
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
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export function TableDemo() {
  const [submissions, setSubmissions] = useState<
    {
      id: string;
      pid: string;
      queId: string;
      email: string | null;
      code: string;
      language: string;
      testcases: number[];
      runtime: string;
      memory: string;
      submittedAt: Date;
      output: string;
    }[]
  >([]);
  const user = useRecoilValue(userState);
  let email = user.email;
  useEffect(() => {
    (async function () {
      const res = await fetch(`/api/getUserSubmissions?email=${email}`);
      const data = await res.json();
      console.log(data);
      setSubmissions(data.submissions);
    })();
  }, [email]);

  return (
    <div className="">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Language</TableHead>
            <TableHead className="text-right">Execution Time</TableHead>
            <TableHead className="text-right">SubmittedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell className="font-medium">{submission.email}</TableCell>
              <TableCell>{submission.output}</TableCell>
              <TableCell>{submission.language}</TableCell>
              <TableCell className="text-right">{submission.runtime}</TableCell>
              <TableCell className="text-right">
                {submission.submittedAt.toString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
