import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get("auth_token"); // Change to your actual cookie name

  // If user is not authenticated and tries to access a protected page, redirect them to login
  if (!authToken && req.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If user is authenticated and tries to access login page, redirect to dashboard
  if (authToken && req.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // Allow the request to continue if no redirect is needed
}

// (Optional) Define paths to apply middleware
export const config = {
  matcher: ["/", "/dashboard", "/login"], // Adjust based on your needs
};
