import type { Metadata } from "next";
import Content from "./content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Segurança do Trabalho",
    description:
        "Assessoria e consultoria em SST com gestão completa de segurança do trabalho, documentos legais e treinamentos conforme NR's.",
    path: "/seguranca-do-trabalho",
});

export default function SegurancaDoTrabalhoPage() {
    return <Content />;
}

