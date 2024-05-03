"use client";
import Submissions from "@/main-components/Submissions";
import { TableDemo } from "./_components/Table";
import UserDetails from "./_components/UserDetails";
import { useRecoilValue } from "recoil";
import { userState } from "@/atoms/user.atom";
import PrivateRoute from "@/main-components/PrivateRoute";

export default function UserProfile() {
  const user = useRecoilValue(userState);
  let problemCount =
    user.easyProblemCount + user.mediumProblemCount + user.hardProblemCount;
  console.log(user, "user");

  return (
    <>
      <PrivateRoute>
        <div className="h-[93vh] w-screen flex justify-center items-center m-0 ">
          <div className="w-4/5  ">
            <div className="h-[80vh]  w-11/12 grid grid-cols-3 grid-rows-3 gap-4 ">
              <div className="row-span-3 w-5/6 ">
                <UserDetails />
              </div>
              <div className=" col-span-2">
                <Submissions
                  problemCount={problemCount}
                  Easy={user.easyProblemCount}
                  Hard={user.hardProblemCount}
                  Medium={user.mediumProblemCount}
                />
              </div>
              <div className=" rounded-xl col-span-2 row-span-2 overflow-y-auto no-scrollbar  border-2 border-black ">
                <TableDemo />
              </div>
            </div>
          </div>
        </div>
      </PrivateRoute>
    </>
  );
}
