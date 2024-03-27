export async function GET(request: Request) {
  const url = new URL(request.url);
  const params = url.searchParams;
  let a = params.get("pid");

  return Response.json({ message: "Hello, World!", uro: url, a });
}
