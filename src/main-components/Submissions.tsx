import React from "react";

interface SubmissionsProps {
  problemCount: number;
  Easy: number;
  Hard: number;
  Medium: number;
}

const Submissions: React.FC<SubmissionsProps> = ({
  problemCount,
  Easy,
  Hard,
  Medium,
}) => {
  return (
    <>
      <div className="flex max-w-3xl mx-auto border-slate-950 border-solid border-2 flex-col items-center rounded-md  md:flex-row w-full">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          {/* // className="h-full w-full rounded-md object-cover" */}
          <div className="h-full w-full flex rounded-md object-cover flex-col">
            <div className="text-8xl p-2 flex justify-center items-center h-3/4">
              {problemCount}
            </div>
            <span className=" flex justify-center items-center">Solved!</span>
          </div>
        </div>
        <div>
          <div className="p-4 flex flex-col ">
            <h1 className="inline-flex items-center text-lg font-semibold p-2 ">
              Easy: {Easy}
            </h1>
            <h1 className="inline-flex items-center text-lg font-semibold p-2">
              Medium: {Medium}
            </h1>
            <h1 className="inline-flex items-center text-lg font-semibold p-2 ">
              Hard: {Hard}
            </h1>

            <div className="mt-3 flex items-center space-x-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submissions;
