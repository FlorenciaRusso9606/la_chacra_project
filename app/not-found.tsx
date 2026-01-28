"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAF8] px-4">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-5xl font-semibold text-[#2A2D34]">404</h1>

        <p className="text-lg text-gray-600">
          La página que estás buscando no existe
        </p>

        <p className="text-sm text-gray-500">
          Tal vez el enlace está mal escrito o la página fue movida.
        </p>

        <Link
          href="/"
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-[#639251]
            text-white
            hover:bg-[#4f7a3f]
            transition
          "
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
