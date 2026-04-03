import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const protectedBaseRoutes = ["/share", "/join"];

  const isProtectedRoute = protectedBaseRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !session) {
    const signInUrl = new URL("/sign-in", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
};
