import { NextResponse } from "next/server";
export function GET() {
  return new NextResponse(`User-agent: *\nAllow: /\nSitemap: https://example.com/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );
}
