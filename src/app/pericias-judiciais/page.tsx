import type { Metadata } from "next";
import Content from "./content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Perícias Judiciais",
    description:
        "Perícias judiciais de insalubridade e periculosidade, assistência técnica e laudos fundamentados em normas legais.",
    path: "/pericias-judiciais",
});

export default function PericiasJudiciaisPage() {
    return <Content />;
}
