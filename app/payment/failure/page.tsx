"use client";

import { XCircle } from "lucide-react";
import Link from "next/link";

export default function FailurePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8 border">
        <XCircle size={56} className="mx-auto text-[#b01a2f] mb-4" />

        <h1 className="text-2xl font-semibold text-[#2A2D34] mb-2">
          No se pudo completar el pago
        </h1>

        <p className="text-[#2A2D34]/80 mb-6 leading-relaxed">
          El pago fue cancelado o rechazado.
          <br />
          No se realizó ningún cobro.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/checkout"
            className="
              bg-[#639251]
              text-white
              font-medium
              px-6
              py-3
              rounded-xl
              hover:bg-[#4f7a3f]
              transition
            "
          >
            Intentar nuevamente
          </Link>

          <Link
            href="/"
            className="text-sm text-[#2A2D34]/70 hover:underline"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
