import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mint - Tu Socio Estratégico en Webs, Publicidad y Marketing",
  description: "Descubre Mint, tu aliado en la creación y venta de sitios web, estrategias publicitarias en redes sociales y servicios de marketing. Impulsamos tu presencia en línea y optimizamos tu estrategia empresarial para el éxito."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src={`//js-na1.hs-scripts.com/${45257961}${123456 ? `?portalId=${123456}` : ''}`}
      />
    </html>
  );
}
