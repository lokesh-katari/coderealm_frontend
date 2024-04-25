"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight } from "lucide-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { AuthServiceClient } from "@/proto/auth_proto/AuthServiceClientPb";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  ChangePasswordRequest,
  RegisterUserRequest,
} from "@/proto/auth_proto/auth_pb";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/authServiceClient";
import { useRecoilState } from "recoil";
import { User, userState } from "@/atoms/user.atom";

const formSchema = z.object({
  email: z.string().email({
    message: "email must be valid",
  }),
  password: z.string().min(6, {
    message: "password must be valid",
  }),
  name: z.string().min(6, {
    message: "name must be valid",
  }),
});

const UserDetails = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userState);
  type FormValues = {
    email: string;
    password: string;
    name: string;
  };
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    console.log(values);
    try {
      const req = new ChangePasswordRequest();
      req.setNewpassword("lokeshk123@gmail.com");
      req.setOldpassword("lokesh123");
      req.setToken("token");
      let res = await authClient.changePassword(req, {});
      if (res.getSuccess()) {
        toast.success("password changed successfully");
      } else {
        toast.error("error changing password");
        return;
      }

      setUser({} as User);

      Cookies.remove("token");
      router.push("/login");
    } catch (error) {
      toast.error("error changing password");
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      setUser({} as User);
      Cookies.remove("token");
      router.push("/login");
    } catch (error) {
      toast.error("error logging out");
      console.log(error);
    }
  };
  return (
    <section>
      <div className="flex items-center justify-center px-4   sm:px-6 sm:py-6 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className=" box-border ">
            <div className="border-2 flex rounded-full w-3/5 items-center justify-center">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="container pl-2 ">
                <h1>hello! {"lokesh"}</h1>
              </div>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="space-y-5">
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="please enter your email"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="please enter your email"
                            {...field}
                          />
                        </FormControl>
                        {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <div className="mt-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Current Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter your password"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="enter your password"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    confirm changes <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </form>
          </Form>
          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              onClick={logout}
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Logout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
