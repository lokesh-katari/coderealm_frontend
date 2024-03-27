import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilContextProvider from "./recoilContextProvider";
import "./globals.css";
import { Navbar } from "@/main-components/Navbar";
const inter = Inter({ subsets: ["latin"] });
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
      <body className={inter.className}>
        <Toaster position="top-center" />
        <RecoilContextProvider>
          <Navbar />
          <div>{children}</div>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
