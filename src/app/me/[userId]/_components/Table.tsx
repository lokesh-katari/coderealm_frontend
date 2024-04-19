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
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export function TableDemo() {
  const user = useRecoilValue(userState);
  let email = user.email;
  useEffect(() => {
    (async function () {
      const res = await fetch(`/api/getUserSubmissions?email=${email}`);
      const data = await res.json();
      console.log(data);
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
          {/* {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
}
