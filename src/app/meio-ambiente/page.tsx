import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Meio Ambiente | HAASE Assessoria e Consultoria",
    description:
        "Licenciamento ambiental, auditorias, perícias ambientais e gestão ambiental com foco em regularização e sustentabilidade.",
};

export default function MeioAmbientePage() {
    return <Content />;
}

