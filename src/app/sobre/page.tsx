import type { Metadata } from "next";
import SobrePageClient from "./SobrePageClient";

export const metadata: Metadata = {
    title: "Sobre a HAASE | Consultoria em Segurança do Trabalho e Meio Ambiente",
    description:
        "Conheça a HAASE Assessoria e Consultoria em Porto Velho - RO: atuação técnica em Segurança do Trabalho, Meio Ambiente, perícias e conformidade legal.",
    alternates: {
        canonical: "/sobre",
    },
    openGraph: {
        title: "Sobre a HAASE | Segurança do Trabalho e Meio Ambiente",
        description:
            "Atuação multidisciplinar com foco em prevenção de riscos, gestão ambiental e regularização de empreendimentos.",
        url: "/sobre",
    },
    twitter: {
        title: "Sobre a HAASE",
        description:
            "Conheça a empresa, diferenciais e atuação técnica da HAASE em Segurança do Trabalho e Meio Ambiente.",
    },
};

export default function SobrePage() {
    return <SobrePageClient />;
}
