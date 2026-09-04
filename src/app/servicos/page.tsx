import type { Metadata } from "next";
import ServicosPageClient from "./ServicosPageClient";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Serviços de Segurança do Trabalho, Perícias e Meio Ambiente",
    description:
        "Veja os serviços da HAASE em Porto Velho - RO: Segurança do Trabalho, perícias judiciais, eSocial SST, ergonomia e gestão ambiental.",
    path: "/servicos",
});

export default function ServicosPage() {
    return <ServicosPageClient />;
}
