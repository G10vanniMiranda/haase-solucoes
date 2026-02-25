import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Segurança do Trabalho | HAASE Assessoria e Consultoria",
    description:
        "Assessoria e consultoria em SST com gestão completa de segurança do trabalho, documentos legais e treinamentos conforme NR's.",
    alternates: {
        canonical: "/seguranca-do-trabalho",
    },
    openGraph: {
        title: "Segurança do Trabalho | HAASE",
        description:
            "Gestão completa de SST, documentos legais e treinamentos para conformidade da sua empresa.",
        url: "/seguranca-do-trabalho",
    },
};

export default function SegurancaDoTrabalhoPage() {
    return <Content />;
}

