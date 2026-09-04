import type { Metadata } from "next";
import Content from "./content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Meio Ambiente",
    description:
        "Licenciamento ambiental, auditorias, perícias ambientais e gestão ambiental com foco em regularização e sustentabilidade.",
    path: "/meio-ambiente",
});

export default function MeioAmbientePage() {
    return <Content />;
}
