"use client";
import { isUserLoggedIn } from "@/atoms/user.atom";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedin = useRecoilValue(isUserLoggedIn);
  const router = useRouter();

  if (!isLoggedin) {
    router.push("/auth/login");
    return null;
  }

  return children;
};

export default PrivateRoute;
