import type { MetadataRoute } from "next";

const baseUrl = "https://www.haasesolucoes.com.br";

const routes = [
    "",
    "/sobre",
    "/servicos",
    "/contato",
    "/seguranca-do-trabalho",
    "/meio-ambiente",
    "/esocial",
    "/ergonomia-e-riscos-psicossociais",
    "/pericias-judiciais",
    "/politica-de-privacidade",
    "/termos-de-uso",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : route === "/contato" || route === "/servicos" ? 0.9 : 0.8,
    }));
}
