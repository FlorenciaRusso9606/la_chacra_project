"use client";
export const Footer = () => {
  return (
    <footer className="bg-[#414040] py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        {/* Logo */}
        <div className="flex flex-col items-start max-w-sm">
          <div className="flex items-start justify-center p-2">
            <img
              src="/images/logo.png"
              alt="Logo La Chacra"
              className="w-40 object-contain mb-2 filter brightness-0 invert"
            />
          </div>
        </div>

        {/* Descripción */}
        <div className="flex flex-col items-start text-white max-w-md">
          <p className="font-medium leading-relaxed">
            Dulces artesanales del Valle de Río Negro, elaborados con fruta fresca y tradición familiar.
          </p>
          <p className="font-medium mt-3">De la chacra del valle a tu mesa.</p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col text-white">
          <h3 className="font-semibold mb-3 text-lg">Contacto</h3>
          <a
            href="mailto:lachacra74@gmail.com"
            className="hover:text-[#9bcb88] transition-colors mb-2"
          >
            lachacra74@gmail.com
          </a>
          <a
            href="https://wa.me/542984212785"
            target="_blank"
            className="hover:text-[#9bcb88] transition-colors"
          >
            WhatsApp
          </a>
        </div>

        {/* Redes */}
        <div className="flex flex-col text-white">
          <h3 className="font-semibold mb-3 text-lg">Redes</h3>
          <a
            href="https://www.instagram.com/lachacra.dulces/"
            target="_blank"
            className="text-white/90 hover:text-[#9bcb88] transition-colors mb-2"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61583372517424&locale=es_LA"
            target="_blank"
            className="text-white/90 hover:text-[#9bcb88] transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 text-center text-sm text-white/90 border-t border-white/20 pt-4">
        © 2025 La Chacra. Todos los derechos reservados.
      </div>
    </footer>
  );
};
