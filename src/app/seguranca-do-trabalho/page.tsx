import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Segurança do Trabalho | HAASE Assessoria e Consultoria",
    description:
        "Assessoria e consultoria em SST com gestão completa de segurança do trabalho, documentos legais e treinamentos conforme NR's.",
};

export default function SegurancaDoTrabalhoPage() {
    return <Content />;
}

