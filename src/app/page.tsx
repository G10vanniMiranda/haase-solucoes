import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { ServicosResumo } from "../components/ServicosResumo";
import { TreinamentosSection } from "../components/TreinamentosSection";
import { ContatoRapido } from "../components/ContatoRapido";

export const metadata: Metadata = {
  title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente em Porto Velho – RO",
  description:
    "Consultoria em Segurança do Trabalho e Meio Ambiente em Porto Velho – RO. Programas, laudos, licenciamento ambiental e treinamentos para manter sua empresa em conformidade e protegida.",
  keywords: [
    "segurança do trabalho",
    "meio ambiente",
    "consultoria ambiental",
    "licenciamento ambiental",
    "laudos ocupacionais",
    "PGR",
    "PCMSO",
    "Treinamentos NR",
    "consultoria em Rondônia",
    "Haase Soluções",
  ],
  openGraph: {
    title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente",
    description:
      "Soluções profissionais em segurança do trabalho, meio ambiente, laudos, programas e treinamentos. Empresa especializada em conformidade legal e prevenção.",
    url: "https://www.haasesolucoes.com.br",
    siteName: "Haase Soluções",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.haasesolucoes.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haase Soluções em Segurança do Trabalho e Meio Ambiente",
      },
    ],
  },
  alternates: {
    canonical: "https://www.haasesolucoes.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente",
    description:
      "Consultoria especializada em Segurança do Trabalho e Meio Ambiente. Programas, laudos, licenciamento ambiental e treinamentos para empresas.",
    images: ["https://www.haasesolucoes.com.br/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />
      <ServicosResumo />
      <TreinamentosSection />
      <ContatoRapido />
    </main>
  );
}
