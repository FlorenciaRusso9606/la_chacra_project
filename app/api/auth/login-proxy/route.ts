import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const backendBase =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  const backendResp = await fetch(`${backendBase}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const response = NextResponse.json(await backendResp.json(), {
    status: backendResp.status,
  });

  const setCookie = backendResp.headers.get("set-cookie");
  if (setCookie) {
    response.headers.append("set-cookie", setCookie);
  }

  return response;
}
