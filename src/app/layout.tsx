import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Refrisurca | Soluciones de Refrigeración Comercial e Industrial",
  description: "Ofrecemos servicios profesionales de refrigeración comercial e industrial con la más alta calidad y tecnología de vanguardia. Servicio 24/7 en Córdoba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
