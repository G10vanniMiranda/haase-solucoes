import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Ergonomia e Riscos Psicossociais | HAASE Assessoria e Consultoria",
    description:
        "Ergonomia ocupacional e gestão de riscos psicossociais com integração ao PGR (NR 01) e foco em conformidade legal.",
};

export default function ErgonomiaRiscosPage() {
    return <Content />;
}
