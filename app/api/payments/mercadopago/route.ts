import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const backendBase =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

  const body = await req.json();

  const resp = await fetch(
    `${backendBase}/payments/mercadopago`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: req.headers.get("cookie") || "",
      },
      body: JSON.stringify(body),
      credentials: "include",
    }
  );

  const data = await resp.json();

  return NextResponse.json(data, { status: resp.status });
}
