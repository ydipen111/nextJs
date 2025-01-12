import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const themePrefence = request.cookies.get("theme");
  if (!themePrefence) {
    response.cookies.set("theme", "dark")
  }

  response.headers.set("custom-header", "custom-value");

  return response;
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
}

//matcher
// export const config = {
//   matcher: '/profile/:path*', // Matches /profile and all subpaths
// };
