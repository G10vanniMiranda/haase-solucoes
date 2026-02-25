import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { ServicosResumo } from "../components/ServicosResumo";
import { TreinamentosSection } from "../components/TreinamentosSection";
import { ContatoRapido } from "../components/ContatoRapido";

export const metadata: Metadata = {
  title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente em Porto Velho - RO",
  description:
    "Consultoria em Segurança do Trabalho e Meio Ambiente em Porto Velho - RO. Programas, laudos, licenciamento ambiental e treinamentos para manter sua empresa em conformidade.",
  keywords: [
    "segurança do trabalho",
    "meio ambiente",
    "consultoria ambiental",
    "licenciamento ambiental",
    "laudos ocupacionais",
    "PGR",
    "PCMSO",
    "treinamentos NR",
    "consultoria em Rondônia",
    "Haase Soluções",
  ],
  openGraph: {
    title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente",
    description:
      "Soluções profissionais em segurança do trabalho, meio ambiente, laudos, programas e treinamentos.",
    url: "/",
    siteName: "Haase Soluções",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image",
        width: 1200,
        height: 630,
        alt: "Haase Soluções em Segurança do Trabalho e Meio Ambiente",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haase Soluções | Segurança do Trabalho e Meio Ambiente",
    description:
      "Consultoria especializada em Segurança do Trabalho e Meio Ambiente. Programas, laudos, licenciamento ambiental e treinamentos para empresas.",
    images: ["/og-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Haase Soluções",
  image: "https://www.haasesolucoes.com.br/og-image",
  url: "https://www.haasesolucoes.com.br",
  telephone: "+55-69-99246-4034",
  email: "haasesolucoes@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Velho",
    addressRegion: "RO",
    addressCountry: "BR",
  },
  areaServed: "Rondônia",
  sameAs: ["https://wa.me/5569992464034"],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <ServicosResumo />
      <TreinamentosSection />
      <ContatoRapido />
    </main>
  );
}