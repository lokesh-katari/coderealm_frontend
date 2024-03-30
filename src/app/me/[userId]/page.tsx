import Submissions from "@/main-components/Submissions";
import { TableDemo } from "./_components/Table";
import UserDetails from "./_components/UserDetails";
export default function UserProfile() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center m-0 ">
        <div className="h-4/5  w-11/12 grid grid-cols-3 grid-rows-3 gap-4 ">
          <div className="row-span-3 ">
            <UserDetails />
          </div>
          <div className=" col-span-2">
            <Submissions problemCount={12} Easy={12} Hard={14} Medium={3} />
          </div>
          <div className=" col-span-2 row-span-2 overflow-y-auto no-scrollbar  border-2 border-black rounded-lg">
            <TableDemo />
          </div>
        </div>
      </div>
    </>
  );
}
