"use client";

import { Button } from "@/app/components/ui/Button";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function PendingPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center bg-white border border-[#e9eceb] rounded-2xl p-8 shadow-sm">
        <div className="flex justify-center mb-4 text-[#9bcb88]">
          <Clock size={48} />
        </div>

        <h1 className="text-2xl font-semibold mb-3">
          Pago pendiente
        </h1>

        <p className="text-[#2A2D34]/70 mb-6 leading-relaxed">
          Estamos esperando la confirmación del pago.
          <br />
          Te avisaremos por email cuando se acredite.
        </p>

        <Link href="/">
          <Button
            className="
              w-full
              bg-[#639251]
              text-white
              py-2
              hover:bg-[#4f7a3f]
            "
          >
            Volver a la tienda
          </Button>
        </Link>
      </div>
    </main>
  );
}
