import Script from "next/script";

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué diferencia a un dulce artesanal de uno industrial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los dulces artesanales se elaboran en pequeños lotes con frutas seleccionadas y sin conservantes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se hace un dulce artesanal regional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Se seleccionan frutas frescas del Valle, se cocinan a fuego lento con recetas tradicionales.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son las mejores frutas del Valle para mermeladas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Frutilla, durazno, membrillo, ciruela y naranja.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuáles son los beneficios de consumir dulces sin conservantes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Son más naturales, tienen menos químicos y mantienen el sabor original de la fruta.",
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Banner */}
<div className="relative w-full h-[calc(100svh-80px)] overflow-hidden">        <picture>
          <source media="(min-width:1024px)" srcSet="/images/banner/banner-home-desktop.png" />
          <source media="(min-width:640px)" srcSet="/images/banner/banner-home-tablet.png" />
          <img
            src="/images/banner/banner-home-mobile.png"
            alt="Dulces artesanales"
            className="w-full h-full object-cover"
          />
        </picture>

        <div className="absolute inset-0 bg-black/15" />
      </div>

      <h1 className="text-center text-2xl leading-tight md:text-4xl font-semibold text-[#2A2D34] mt-8">
        Dulces artesanales con sabor a tradición patagónica
      </h1>
    </>
  );
}
