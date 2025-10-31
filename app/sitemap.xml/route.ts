import { NextResponse } from "next/server";
export function GET() {
  const urls = ["/", "/vehicule", "/marci", "/finantare", "/angajamente", "/parteneri", "/contact"];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls.map(u => `<url><loc>https://example.com${u}</loc></url>`).join("") +
    `</urlset>`;
  return new NextResponse(body, { headers: { "Content-Type": "application/xml" } });
}
