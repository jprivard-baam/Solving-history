import { NextResponse, type NextRequest } from "next/server";

const FILE = /\.[^/]+$/;

function withLocale(response: NextResponse, locale: "en" | "fr") {
  response.headers.set("x-locale", locale);
  return response;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    return withLocale(NextResponse.next(), "fr");
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return withLocale(NextResponse.next(), "en");
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return withLocale(NextResponse.rewrite(url), "en");
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
