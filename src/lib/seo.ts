import type { Metadata } from "next";

export const SITE_NAME = "Haase Soluções";
export const SITE_URL = "https://www.haasesolucoes.com.br";
export const SOCIAL_IMAGE_URL = `${SITE_URL}/opengraph-image`;

export const PUBLIC_ROUTES = [
  "/",
  "/sobre",
  "/servicos",
  "/contato",
  "/seguranca-do-trabalho",
  "/meio-ambiente",
  "/pericias-judiciais",
  "/ergonomia-e-riscos-psicossociais",
  "/esocial",
  "/politica-de-privacidade",
  "/termos-de-uso",
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: (typeof PUBLIC_ROUTES)[number];
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const metadataTitle = path === "/" ? { absolute: `${title} | ${SITE_NAME}` } : title;

  return {
    title: metadataTitle,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: SOCIAL_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Haase Soluções — Segurança do Trabalho e Meio Ambiente",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SOCIAL_IMAGE_URL],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
