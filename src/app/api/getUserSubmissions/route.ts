import { db } from "@/lib/prisma";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = url.searchParams;
  let a = params.get("email");

  const where = a ? { email: a } : undefined;

  const submissions = await db.codesubmissions.findMany({ where });

  return Response.json({ message: "Hello, World!", uro: url, a, submissions });
}
