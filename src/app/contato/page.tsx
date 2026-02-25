import type { Metadata } from "next";
import ContatoPageClient from "./ContatoPageClient";

export const metadata: Metadata = {
    title: "Contato | HAASE Consultoria em Porto Velho - RO",
    description:
        "Entre em contato com a HAASE para suporte em Segurança do Trabalho, Meio Ambiente, eSocial SST, laudos e treinamentos.",
    alternates: {
        canonical: "/contato",
    },
    openGraph: {
        title: "Contato HAASE | Segurança do Trabalho e Meio Ambiente",
        description:
            "Fale com a equipe técnica da HAASE e receba orientação especializada para sua empresa.",
        url: "/contato",
    },
    twitter: {
        title: "Contato HAASE",
        description: "Atendimento técnico especializado em Porto Velho - RO e região.",
    },
};

export default function ContatoPage() {
    return <ContatoPageClient />;
}
