import type { Metadata } from "next";
import SobrePageClient from "./SobrePageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Sobre a empresa",
    description:
        "Conheça a HAASE Assessoria e Consultoria em Porto Velho - RO: atuação técnica em Segurança do Trabalho, Meio Ambiente, perícias e conformidade legal.",
    path: "/sobre",
});

export default function SobrePage() {
    return <SobrePageClient />;
}
