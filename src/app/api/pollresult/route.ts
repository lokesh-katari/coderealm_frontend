import { getRedisClient } from "@/lib/redisClient";

export async function GET(request: Request) {
  try {
    let url = new URL(request.url);
    let params = url.searchParams;
    let pid = params.get("pid");

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
        code: "console.log('Hello, World!')",
        language: "javascript",
        pid: pid,
        data: data,
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
