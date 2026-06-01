import { readFile } from "node:fs/promises";

const logoPath =
  "D:/Digital Marketing/Mission 6 Lead magnet/Minimalist Logo with Dark Green 'DC' Symbol.png";

export async function GET() {
  try {
    const file = await readFile(logoPath);

    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Logo not found", { status: 404 });
  }
}
