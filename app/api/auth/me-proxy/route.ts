import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function GET(req: NextRequest) {
  try {
    const backendBase =
      process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

    const cookieHeader = req.headers.get("cookie");

    if (!cookieHeader) {
      return NextResponse.json({ error: "No token" }, { status: 401 });
    }

    const backendResp = await fetch(`${backendBase}/auth/me`, {
      headers: {
        cookie: cookieHeader,
      },
      credentials: "include",
    });

    const data = await backendResp.json();
    return NextResponse.json(data, { status: backendResp.status });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "Proxy failure" }, { status: 500 });
  }
}


