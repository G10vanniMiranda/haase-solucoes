import type { Metadata } from "next";
import Content from "./content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Ergonomia e Riscos Psicossociais",
    description:
        "Ergonomia ocupacional e gestão de riscos psicossociais com integração ao PGR (NR 01) e foco em conformidade legal.",
    path: "/ergonomia-e-riscos-psicossociais",
});

export default function ErgonomiaRiscosPage() {
    return <Content />;
}
