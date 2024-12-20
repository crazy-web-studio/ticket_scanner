import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const websiteUrl = request.cookies.get("websiteUrl")?.value;
  const eventId = request.cookies.get("eventId")?.value;

  if (!websiteUrl || !eventId) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"],
};
