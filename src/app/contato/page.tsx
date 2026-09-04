import type { Metadata } from "next";
import ContatoContent from "./ContatoContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Contato em Porto Velho - RO",
    description:
        "Entre em contato com a HAASE para suporte em Segurança do Trabalho, Meio Ambiente, eSocial SST, laudos e treinamentos.",
    path: "/contato",
});

export default function ContatoPage() {
    return <ContatoContent />;
}
