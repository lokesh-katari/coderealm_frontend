import { Skeleton } from "@mui/material";
import React from "react";

const SubmissionSkeleton = () => {
  return (
    <>
      <div className="w-full p-2 ">
        <div className="flex flex-col space-y-0 justify-center items-center">
          <Skeleton
            className=" w-4/5 rounded-xl"
            style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
          />
          <Skeleton
            className=" w-4/5 rounded-xl"
            style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
          />
          <Skeleton
            className=" w-4/5 rounded-xl"
            style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
          />
          <Skeleton
            className=" w-4/5 rounded-xl"
            style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
          />
          <Skeleton
            className=" w-2/6 rounded-xl"
            style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
          />
        </div>
      </div>
    </>
  );
};

export default SubmissionSkeleton;
