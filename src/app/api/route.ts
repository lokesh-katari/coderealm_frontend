import { db } from "@/lib/prisma";

export async function GET() {
  return Response.json({ message: "Hello, World!" });
}

export async function POST() {
  const data = await db.codeResponse.create({
    data: {
      code: "console.log('Hello, World!')",
      language: "javascript",
      email: "1a3@gmail.com",
      memory: "asdf",
      runtime: "asdf",
      PID: "123",
      testcases: [1, 2, 3],
    },
  });
  return Response.json({ message: "code added", data });
}
