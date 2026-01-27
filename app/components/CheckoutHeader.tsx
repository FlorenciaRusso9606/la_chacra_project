"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CheckoutHeader() {
  const router = useRouter();

  return (
    <header className="w-full bg-white border-b border-[#e3efdd]">
      <div className="max-w-xl mx-auto px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="
            flex items-center gap-1
            text-sm text-gray-600
            hover:text-[#639251]
            transition
          "
        >
          <ArrowLeft size={16} />
          Volver
        </button>

        <div className="flex-1 text-center">
           <a href="/">
      <img
        src="/images/logotipo.png"
        alt="Logo"
        className="h-10 w-auto"
      />
    </a>

        </div>

        <div className="w-12" />
      </div>
    </header>
  );
}
