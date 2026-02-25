import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haasesolucoes.com.br"),
  title: {
    default: "Haase Soluções",
    template: "%s | Haase Soluções",
  },
  description:
    "Empresa especializada em Segurança do Trabalho e Meio Ambiente. Laudos, programas, licenciamento ambiental e treinamentos para empresas em Rondônia.",
  keywords: [
    "segurança do trabalho",
    "meio ambiente",
    "laudos ocupacionais",
    "consultoria ambiental",
    "licenciamento ambiental",
    "treinamentos NR",
    "Haase Soluções",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Haase Soluções",
    title: "Haase Soluções",
    description:
      "Consultoria em Segurança do Trabalho e Meio Ambiente para empresas. Atuação com laudos, programas, treinamentos e licenciamento ambiental.",
    url: "/",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Haase Soluções em Segurança do Trabalho e Meio Ambiente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haase Soluções",
    description:
      "Segurança do Trabalho e Meio Ambiente para empresas de todos os portes.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#064e3b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}