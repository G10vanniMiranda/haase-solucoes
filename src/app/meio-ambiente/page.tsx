import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Meio Ambiente | HAASE Assessoria e Consultoria",
    description:
        "Licenciamento ambiental, auditorias, perícias ambientais e gestão ambiental com foco em regularização e sustentabilidade.",
    alternates: {
        canonical: "/meio-ambiente",
    },
    openGraph: {
        title: "Meio Ambiente | HAASE",
        description:
            "Licenciamento ambiental, auditorias e gestão ambiental com foco em conformidade legal.",
        url: "/meio-ambiente",
    },
};

export default function MeioAmbientePage() {
    return <Content />;
}