import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "eSocial SST | HAASE Assessoria e Consultoria",
    description:
        "Gestão completa e envio de eventos de SST para o eSocial com conformidade legal, segurança jurídica e suporte técnico especializado.",
};

export default function EsocialPage() {
    return <Content />;
}
