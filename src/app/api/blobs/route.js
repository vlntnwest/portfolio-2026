import { list } from "@vercel/blob";

export async function GET(req) {
  const prefix = req.nextUrl.searchParams.get("prefix") || "";

  try {
    const token = process.env.FOLIO_READ_WRITE_TOKEN;
    const { blobs } = await list({
      prefix,
      token,
    });
    return new Response(JSON.stringify({ blobs }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error listing blobs:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
