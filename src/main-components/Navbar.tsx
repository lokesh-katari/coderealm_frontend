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

import Link from "next/link";
import { Button } from "@/components/ui/button";
export const Navbar = () => {
  let isLoggedin = 0;
  return (
    <>
      <div className="flex justify-between p-2 dark bg-slate-950 ">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-3xl dark font-bold leading-none flex items-center space-x-4"
              >
                <span className="text-slate-300 "> CodeRealm</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="text-slate-300">
              <Link href="/Editor" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Editor
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem className="text-slate-300">
              <Link href="/problems" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  All Problems
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>{" "}
            <NavigationMenuItem className="text-slate-300">
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {isLoggedin ? (
              <>
                <div className="px-4 ">
                  <NavigationMenuItem className="text-slate-300 ">
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
                <NavigationMenuItem className="text-slate-300">
                  <Link href="/auth/login" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Login
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>{" "}
                <NavigationMenuItem className="text-slate-300">
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
