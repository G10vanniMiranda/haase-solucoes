import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "eSocial SST | HAASE Assessoria e Consultoria",
    description:
        "Gestão completa e envio de eventos de SST para o eSocial com conformidade legal, segurança jurídica e suporte técnico especializado.",
    alternates: {
        canonical: "/esocial",
    },
    openGraph: {
        title: "eSocial SST | HAASE",
        description:
            "Envio e gestão de eventos de SST no eSocial com suporte técnico especializado.",
        url: "/esocial",
    },
};

export default function EsocialPage() {
    return <Content />;
}