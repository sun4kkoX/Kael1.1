import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KAEL 1.1 | Inteligência Operacional",
    template: "%s | KAEL 1.1",
  },
  applicationName: "KAEL 1.1",
  description:
    "Plataforma de inteligência operacional para organizar dados, planilhas, análises e resultados com precisão e rastreabilidade.",
};

export const viewport: Viewport = {
  themeColor: "#07110f",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
