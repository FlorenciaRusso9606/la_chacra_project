import { NextResponse } from "next/server";

export async function GET() {
  const backendBase =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  const resp = await fetch(`${backendBase}/products`, {
    cache: "no-store",
  });

  const data = await resp.json();
  return NextResponse.json(data, { status: resp.status });
}
