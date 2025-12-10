// layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script"; // <-- necesario para JSON-LD
import { ClientProviders } from "./components/ClientProviders";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsappIcon } from "./components/Whatsapp";
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
    "Dulces artesanales regionales elaborados con frutas seleccionadas. De la chacra del valle a tu mesa.",

  keywords: [
    "dulces artesanales",
    "mermeladas",
    "productos regionales",
    "dulces naturales",
    "La Chacra",
    "dulces caseros",
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

  themeColor: "#b01a2f",

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} relative antialiased bg-[#FAFAF8] flex flex-col justify-between min-h-screen`}
      >
        {/* Fondo */}
        <div className="absolute inset-0 bg-[url('/images/texturas/paper-texture.jpg')] bg-repeat opacity-15 pointer-events-none z-0" />

        {/* Datos estructurados JSON-LD */}
        <Script
          id="json-ld-company"
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
        <ClientProviders />
      </body>
    </html>
  );
}
