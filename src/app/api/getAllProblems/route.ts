import { db } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { queId: string } }
) {
  const problems = await db.codeQue.findMany();

  return Response.json({ problems: problems });
}
