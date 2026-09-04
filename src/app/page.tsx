import type { Metadata } from "next";
import { Hero } from "../components/Hero";
import { ServicosResumo } from "../components/ServicosResumo";
import { TreinamentosSection } from "../components/TreinamentosSection";
import { ContatoRapido } from "../components/ContatoRapido";
import { createPageMetadata, SITE_URL } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Segurança do Trabalho e Meio Ambiente em Porto Velho - RO",
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
  path: "/",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Haase Soluções",
  image: `${SITE_URL}/logo.jpg`,
  url: SITE_URL,
  telephone: "+55-69-99246-4034",
  email: "haasesolucoes@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Porto Velho",
    addressRegion: "RO",
    addressCountry: "BR",
  },
  areaServed: "Rondônia",
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-slate-50 text-slate-900">
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
