import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const websiteUrl = request.cookies.get("websiteUrl");
  const eventId = request.cookies.get("eventId");

  if (!websiteUrl || !eventId) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/dashboard",
};
