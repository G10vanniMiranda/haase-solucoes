import type { Metadata } from "next";
import Content from "./content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "eSocial SST",
    description:
        "Gestão completa e envio de eventos de SST para o eSocial com conformidade legal, segurança jurídica e suporte técnico especializado.",
    path: "/esocial",
});

export default function EsocialPage() {
    return <Content />;
}
