"use client";

import toast from "react-hot-toast";
import { RecoilRoot, useRecoilState } from "recoil";
import Cookies from "js-cookie";
import { Metadata } from "grpc-web";
import { GetUserRequest } from "@/proto/auth_proto/auth_pb";
import { authClient } from "@/lib/authServiceClient";
import { isUserLoggedIn, userState } from "@/atoms/user.atom";

export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
