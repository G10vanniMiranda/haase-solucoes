import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Perícias Judiciais | HAASE Assessoria e Consultoria",
    description:
        "Perícias judiciais de insalubridade e periculosidade, assistência técnica e laudos fundamentados em normas legais.",
    alternates: {
        canonical: "/pericias-judiciais",
    },
    openGraph: {
        title: "Perícias Judiciais | HAASE",
        description:
            "Atuação pericial em insalubridade, periculosidade e assistência técnica trabalhista.",
        url: "/pericias-judiciais",
    },
};

export default function PericiasJudiciaisPage() {
    return <Content />;
}