import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    "/dashboard-lch-2026/orders/:path*",
    "/dashboard-lch-2026/products/:path*",
    "/dashboard-lch-2026"
  ],
};

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/dashboard-lch-2026/login", req.url)
    );
  }

  return NextResponse.next();
}
