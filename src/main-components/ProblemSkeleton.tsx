import { Skeleton } from "@mui/material";
import React from "react";

const ProblemSkeleton = () => {
  return (
    <div className="flex flex-col space-y-1 p-4 justify-center">
      <Skeleton
        className="h-44 w-3/4 rounded-xl"
        style={{ backgroundColor: "rgb(86 ,91 ,86)" }}
      />
      <div className="space-y-1">
        <Skeleton
          className=" w-4/5 rounded-xl"
          style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
        />
        <Skeleton
          className=" w-3/5 rounded-xl"
          style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
        />
        <Skeleton
          className=" w-1/3 rounded-xl"
          style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
        />
        <Skeleton
          className=" w-3/4 rounded-xl"
          style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "3rem" }}
        />
        <Skeleton
          className="h-9 w-1/4"
          style={{ backgroundColor: "rgb(86 ,91 ,86)" }}
        />
        <Skeleton
          className="h-9 w-2/4"
          style={{ backgroundColor: "rgb(86 ,91 ,86)" }}
        />
        <Skeleton
          className=" w-3/4 rounded-xl"
          style={{ backgroundColor: "rgb(86 ,91 ,86)", height: "10rem" }}
        />
      </div>
    </div>
  );
};

export default ProblemSkeleton;
