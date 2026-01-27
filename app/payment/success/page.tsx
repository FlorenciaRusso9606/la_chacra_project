"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg p-8 border">
        <CheckCircle size={56} className="mx-auto text-green-600 mb-4" />

        <h1 className="text-2xl font-semibold text-[#2A2D34] mb-2">
          ¡Pago recibido!
        </h1>

        <p className="text-[#2A2D34]/80 mb-6 leading-relaxed">
          Recibimos tu pago correctamente.
          <br />
          En breve vamos a confirmar tu pedido y te contactaremos por email.
        </p>

        <Link
          href="/"
          className="
            inline-block
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
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
