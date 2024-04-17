import { db } from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { queId: string } }
) {
  const problems = await db.codeQue.findUnique({
    where: {
      id: params.queId,
    },
    include: {
      templates: true,
    },
  });

  return Response.json({ problems: problems });
}
