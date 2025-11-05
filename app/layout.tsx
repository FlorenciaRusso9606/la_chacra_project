// layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClientProviders } from "./components/ClientProviders";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsappIcon } from "./components/Whatsapp";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "La Chacra - Dulces Artesanales",
  description: "Dulces artesanales regionales - De la chacra del valle a tu mesa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} relative antialiased bg-[#FAFAF8] flex flex-col justify-between min-h-screen`}
      >
        <div className="absolute inset-0 bg-[url('/images/texturas/paper-texture.jpg')] bg-repeat opacity-15 pointer-events-none z-0"></div>

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
