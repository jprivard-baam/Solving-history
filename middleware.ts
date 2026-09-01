import { NextResponse, type NextRequest } from "next/server";

const FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/shop" || pathname === "/shop/") {
    return NextResponse.redirect(new URL("/help", request.url));
  }
  if (pathname === "/fr/shop" || pathname === "/fr/shop/") {
    return NextResponse.redirect(new URL("/fr/help", request.url));
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const stripped = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(new URL(stripped, request.url));
  }

  const locale = pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en";

  if (locale === "en") {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
    const response = NextResponse.rewrite(url);
    response.headers.set("x-locale", "en");
    return response;
  }

  const response = NextResponse.next();
  response.headers.set("x-locale", "fr");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
