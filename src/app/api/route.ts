import { db } from "@/lib/prisma";

export async function GET() {
  return Response.json({ message: "Hello, World!" });
}

export async function POST() {
  return Response.json({
    message: "code added",
    data: "welcome to the coderealm",
  });
}
