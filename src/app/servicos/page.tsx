import type { Metadata } from "next";
import ServicosPageClient from "./ServicosPageClient";

export const metadata: Metadata = {
    title: "Serviços | Segurança do Trabalho, Perícias e Meio Ambiente",
    description:
        "Veja os serviços da HAASE em Porto Velho - RO: Segurança do Trabalho, perícias judiciais, eSocial SST, ergonomia e gestão ambiental.",
    alternates: {
        canonical: "/servicos",
    },
    openGraph: {
        title: "Serviços da HAASE | Segurança do Trabalho e Meio Ambiente",
        description:
            "Soluções técnicas para conformidade legal, prevenção de riscos e regularização ambiental de empresas e obras.",
        url: "/servicos",
    },
    twitter: {
        title: "Serviços da HAASE",
        description:
            "Assessoria técnica em Segurança do Trabalho, Meio Ambiente e perícias com foco em conformidade legal.",
    },
};

export default function ServicosPage() {
    return <ServicosPageClient />;
}
