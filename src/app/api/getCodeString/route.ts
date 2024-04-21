export async function POST(request: Request) {
  const { code } = await request.json();

  return new Response(JSON.stringify({ code }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
