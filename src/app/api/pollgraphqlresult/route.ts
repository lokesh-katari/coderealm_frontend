import { db } from "@/lib/prisma";

export async function GET(request: Request) {
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

  try {
    let data = await db.codeResponse.findUnique({
      select: {
        PID: true,
        id: true,
        language: true,
        memory: true,
        runtime: true,
        testcases: true,
      },
      where: {
        PID: pid,
      },
    });
    return Response.json({
      status: "success",
      data: {
        data,
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
