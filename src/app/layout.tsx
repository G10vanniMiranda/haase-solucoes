import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "../components/Footer";
import { Header } from "@/components/Header";
import MeasurementBridge from "@/components/MeasurementBridge";
import { SITE_NAME, SITE_URL, SOCIAL_IMAGE_URL } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
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
    siteName: SITE_NAME,
    title: SITE_NAME,
    description:
      "Consultoria em Segurança do Trabalho e Meio Ambiente para empresas. Atuação com laudos, programas, treinamentos e licenciamento ambiental.",
    url: "/",
    images: [SOCIAL_IMAGE_URL],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Segurança do Trabalho e Meio Ambiente para empresas de todos os portes.",
    images: [SOCIAL_IMAGE_URL],
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
        <MeasurementBridge />
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-10000 -translate-y-24 rounded-md bg-white px-4 py-3 font-semibold text-emerald-900 shadow-lg transition-transform focus:translate-y-0"
        >
          Ir para o conteúdo principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
