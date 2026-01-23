import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsappIcon } from "./components/Whatsapp";
import { Providers } from "./providers/providers";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dulceslachacra.com"),

  title: {
    default: "La Chacra - Dulces Artesanales",
    template: "%s | La Chacra",
  },

  description:
    "Dulces artesanales regionales elaborados en el Valle. Mermeladas caseras 100% naturales, sin conservantes. Producción familiar con frutas seleccionadas. Hechos a mano con recetas tradicionales.",

  keywords: [
    "dulces artesanales regionales",
    "mermeladas caseras naturales",
    "dulces sin conservantes",
    "dulces del valle",
    "dulce artesanal de frutilla",
    "dulce artesanal de manzana",
    "dulce artesanal de pera",
    "dulce artesanal de higo",
    "dulce artesanal de durazno",
    "mermelada casera",
    "productos regionales artesanales",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      "/favicon.ico",
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.dulceslachacra.com",
    siteName: "La Chacra",
    title: "La Chacra - Dulces Artesanales",
    description:
      "Dulces artesanales regionales elaborados con frutas seleccionadas.",
    images: [
      {
        url: "https://www.dulceslachacra.com/images/Seo.png",
        width: 1200,
        height: 630,
        alt: "Dulces artesanales La Chacra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "La Chacra - Dulces Artesanales",
    description:
      "Dulces artesanales regionales elaborados con frutas seleccionadas.",
    images: ["https://www.dulceslachacra.com/images/Seo.png"],
  },

};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#b01a2f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} relative antialiased bg-[#FAFAF8] flex flex-col justify-between min-h-screen`}
      >
          <Providers>
        {/* Fondo */}
        <div className="absolute inset-0 bg-[url('/images/texturas/paper-texture.jpg')] bg-repeat opacity-15 pointer-events-none z-0" />

        {/* Datos estructurados JSON-LD */}
        <Script
          id="json-ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "La Chacra",
              description:
                "Dulces artesanales regionales elaborados con frutas seleccionadas.",
              url: "https://www.dulceslachacra.com",
              image: "https://www.dulceslachacra.com/images/Seo.png",
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressRegion: "Río Negro",
              },
              sameAs: [
                "https://www.instagram.com/lachacra_dulces",
              ],
            }),
          }}
        />

        <Navbar />

        <main className="flex-1 relative">
          {children}
          <WhatsappIcon />
        </main>

        <Footer />
        
        </Providers>
      </body>
    </html>
  );
}
