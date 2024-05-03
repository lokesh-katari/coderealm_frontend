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

function formatDateWithTime(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toISOString().split("T")[1].split(".")[0];
  const formattedTime24h = formattedTime.substring(0, 5);

  return `${formattedDate} ${formattedTime24h}`;
}

export function TableDemo() {
  const [submissions, setSubmissions] = useState<
    {
      id: string;
      title: string;
      pid: string;
      queId: string;
      email: string | null;
      code: string;
      language: string;
      testcases: number[];
      runtime: string;
      memory: string;
      submittedat: string;
      output: string;
      accepted: boolean;
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
          {submissions.map((submission,i) => {
           if(i < 5){
            return(
              <TableRow key={submission.id}>
              <TableCell className="font-medium">{submission.title}</TableCell>
              <TableCell>{`${submission.accepted}`}</TableCell>
              <TableCell>{submission.language}</TableCell>
              <TableCell className="text-right">{submission.runtime}</TableCell>
              <TableCell className="text-right">
                {formatDateWithTime(submission.submittedat)}
              </TableCell>
            </TableRow>
            )
           }
})}
        </TableBody>
      </Table>
    </div>
  );
}
