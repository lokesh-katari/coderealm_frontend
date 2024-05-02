import type { Metadata } from "next";

import RecoilContextProvider from "./recoilContextProvider";
import "./globals.css";
import { Navbar } from "@/main-components/Navbar";

import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" background-landing">
        <Toaster position="top-center" />
        <RecoilContextProvider>
          <Navbar />
          <div>{children}</div>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
