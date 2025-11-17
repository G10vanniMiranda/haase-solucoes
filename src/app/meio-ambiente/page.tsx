import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Consultoria Ambiental em Porto Velho – RO | Haase Soluções",
    description:
        "Licenciamento ambiental, planos e programas (PCA, PGRS, PRAD, PGRSS), estudos e relatórios ambientais para empresas de Porto Velho – RO e região.",
};

export default function MeioAmbientePage() {
    return <Content />;
}
