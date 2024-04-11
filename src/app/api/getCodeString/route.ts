export async function POST(request: Request) {
  const { code } = await request.json();

  return new Response(
    JSON.stringify({ message: "Code submitted", code: code }),
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
