import { readFile } from "node:fs/promises";

const faviconPath = "D:/Digital Marketing/Photos/site_icon_DC.png";

export async function GET() {
  try {
    const file = await readFile(faviconPath);

    return new Response(file, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Favicon not found", { status: 404 });
  }
}
