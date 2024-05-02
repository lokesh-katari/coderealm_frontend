"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast from "react-hot-toast";
import { Metadata } from "grpc-web";
import { set } from "react-hook-form";
import { authClient } from "@/lib/authServiceClient";
import Cookies from "js-cookie";
import { GetUserRequest } from "@/proto/auth_proto/auth_pb";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRecoilState, useRecoilValue } from "recoil";
import { isUserLoggedIn, userState } from "@/atoms/user.atom";
export const Navbar = () => {
  let isLoggedin = useRecoilValue(isUserLoggedIn);
  let user = useRecoilValue(userState);
  const [_, setuser] = useRecoilState(userState);
  const [loggedIn, setLoggedIn] = useRecoilState(isUserLoggedIn);
  const [hasTokenRun, setHasTokenRun] = useRecoilState(isUserLoggedIn);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const hasToken = async () => {
      const authToken = Cookies.get("token");
      console.log(authToken, "authToken");
      const metadata: Metadata = {};
      if (authToken) {
        metadata["authorization"] = authToken;
        let req = new GetUserRequest();

        req.setToken(authToken);
        console.log(req.toObject());

        const response = await authClient.getUser(req, metadata);
        console.log(response.toObject());
        const userData = response.toObject().user;
        console.log(userData);
        if (userData) {
          setuser(userData);
          setLoggedIn(true);
          toast.success("Welcome back " + userData.name);
        }
      }
      setHasTokenRun(true);
      setShowToast(true);
    };

    if (!hasTokenRun) {
      hasToken();

      // setShowToast(false);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between p-2 bg-cyan-800">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-3xl dark font-bold leading-none flex items-center "
              >
                <span className="text-cyan-200 ">
                  {" "}
                  Code<span className="text-cyan-50">Realm</span>.
                </span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem className=" font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 ">
              <Link href="/webEditor" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  WebEditor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-">
              <Link href="/Editor" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Editor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            {"  "}
            <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-2">
              <Link href="/problems" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Problems
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-2">
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {isLoggedin ? (
              <>
                <div className="px-4 ">
                  <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-2">
                    <Link href="/me/123">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Link>
                  </NavigationMenuItem>
                </div>
              </>
            ) : (
              <>
                <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-2">
                  <Link href="/auth/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Login
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>{" "}
                <NavigationMenuItem className="font-semibold text-cyan-50 rounded-full bg-cyan-700 hover:rounded-full hover:text-black hover:bg-cyan-200 mr-2">
                  <Link href="/auth/register" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Register
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>{" "}
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};
