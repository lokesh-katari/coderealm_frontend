"use client";

import { RecoilRoot, useRecoilState } from "recoil";
export default function RecoilContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
