"use server";
import { getRedisClient } from "@/lib/redisClient";
import { NextRequest } from "next/server";
export async function GET(
  request: Request,
  route: { params: { pid: string } }
) {
  try {
    // let url = new URL(request.url);
    // let params = url.searchParams;
    // let pid = params.get("pid");
    // let req = request.body;
    let pid = route.params.pid;
    // let pid = "123123";
    console.log(pid, "Sdfasfd");

    if (pid === null) {
      return Response.json({
        status: "error",
        data: {
          message: "No pid provided",
        },
      });
    }

    let redisClient = getRedisClient();
    let data = await redisClient.get(pid);
    if (data === null) {
      return Response.json({
        status: "error",
        data: {
          message: "No data found",
        },
      });
    }

    return Response.json({
      status: "success",
      data: {
        output: data,
      },
    });
  } catch (error) {
    return Response.json({
      status: "error",
      data: {
        message: "Something went wrong",
      },
      error: error,
    });
  }
}
