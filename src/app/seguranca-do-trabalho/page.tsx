import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
    title: "Segurança do Trabalho em Porto Velho – RO | Haase Soluções",
    description:
        "Consultoria em Segurança do Trabalho em Porto Velho – RO. Programas, laudos, diagnósticos de risco e treinamentos para reduzir acidentes, afastamentos e passivos trabalhistas.",
};

export default function SegurancaDoTrabalhoPage() {
    return <Content />;
}
