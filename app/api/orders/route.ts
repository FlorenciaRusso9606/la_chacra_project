import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const backendBase =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  const resp = await fetch(`${backendBase}/admin/orders`, {
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
    credentials: "include",
  });

  const data = await resp.json();
  return NextResponse.json(data, { status: resp.status });
}
