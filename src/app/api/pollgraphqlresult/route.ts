import { db } from "@/lib/prisma";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let params = url.searchParams;
  let pid = params.get("pid");
  // pid = "17117063534174087";
  // let pid;
  if (pid === null) {
    return Response.json({
      status: "error",
      data: {
        message: "No pid provided",
      },
    });
  }

  try {
    let data = await db.codesubmissions.findUnique({
      select: {
        pid: true,
        id: true,
        language: true,
        runtime: true,
        testcases: true,
        code: true,
      },
      where: {
        pid: pid,
      },
    });

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
