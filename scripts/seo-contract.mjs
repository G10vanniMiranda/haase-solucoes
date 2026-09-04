import assert from "node:assert/strict";

const origin = process.env.SEO_BASE_URL ?? "http://localhost:3000";
const canonicalOrigin = "https://www.haasesolucoes.com.br";

const routes = [
  ["/", "Segurança do Trabalho e Meio Ambiente em Porto Velho - RO | Haase Soluções"],
  ["/sobre", "Sobre a empresa | Haase Soluções"],
  ["/servicos", "Serviços de Segurança do Trabalho, Perícias e Meio Ambiente | Haase Soluções"],
  ["/contato", "Contato em Porto Velho - RO | Haase Soluções"],
  ["/seguranca-do-trabalho", "Segurança do Trabalho | Haase Soluções"],
  ["/meio-ambiente", "Meio Ambiente | Haase Soluções"],
  ["/pericias-judiciais", "Perícias Judiciais | Haase Soluções"],
  ["/ergonomia-e-riscos-psicossociais", "Ergonomia e Riscos Psicossociais | Haase Soluções"],
  ["/esocial", "eSocial SST | Haase Soluções"],
  ["/politica-de-privacidade", "Política de Privacidade | Haase Soluções"],
  ["/termos-de-uso", "Termos de Uso | Haase Soluções"],
];

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function attribute(html, selectorName, selectorValue, attributeName = "content") {
  const tags = html.match(/<(?:meta|link)\s[^>]*>/g) ?? [];
  const tag = tags.find((candidate) => {
    const selector = candidate.match(
      new RegExp(`${selectorName}=["']([^"']+)["']`, "i"),
    );
    return selector?.[1] === selectorValue;
  });

  if (!tag) return "";
  const attribute = tag.match(
    new RegExp(`${attributeName}=["']([^"']*)["']`, "i"),
  );
  return decodeHtml(attribute?.[1] ?? "");
}

function textContent(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, "i"));
  return decodeHtml((match?.[1] ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

const seenTitles = new Set();
const seenDescriptions = new Set();

for (const [path, expectedTitle] of routes) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path}: expected HTTP 200`);
  const html = await response.text();

  const title = textContent(html, "title");
  const description = attribute(html, "name", "description");
  const canonical = attribute(html, "rel", "canonical", "href");
  const robots = attribute(html, "name", "robots");
  const ogTitle = attribute(html, "property", "og:title");
  const ogDescription = attribute(html, "property", "og:description");
  const ogUrl = attribute(html, "property", "og:url");
  const ogImage = attribute(html, "property", "og:image");
  const twitterCard = attribute(html, "name", "twitter:card");
  const twitterTitle = attribute(html, "name", "twitter:title");
  const twitterDescription = attribute(html, "name", "twitter:description");
  const twitterImage = attribute(html, "name", "twitter:image");
  const h1 = textContent(html, "h1");

  assert.equal(title, expectedTitle, `${path}: unexpected title`);
  assert.ok(description.length >= 50, `${path}: missing or weak description`);
  assert.equal(canonical, `${canonicalOrigin}${path === "/" ? "" : path}`, `${path}: bad canonical`);
  assert.match(robots, /index/i, `${path}: must be indexable`);
  assert.match(robots, /follow/i, `${path}: must be followable`);
  assert.ok(ogTitle, `${path}: missing og:title`);
  assert.ok(ogDescription, `${path}: missing og:description`);
  assert.equal(ogUrl, canonical, `${path}: og:url must match canonical`);
  assert.ok(ogImage, `${path}: missing OG image`);
  assert.equal(new URL(ogImage).origin, canonicalOrigin, `${path}: bad OG image origin`);
  assert.equal(new URL(ogImage).pathname, "/opengraph-image", `${path}: bad OG image path`);
  assert.equal(twitterCard, "summary_large_image", `${path}: bad Twitter card`);
  assert.ok(twitterTitle, `${path}: missing twitter:title`);
  assert.ok(twitterDescription, `${path}: missing twitter:description`);
  assert.ok(twitterImage, `${path}: missing Twitter image`);
  assert.equal(new URL(twitterImage).origin, canonicalOrigin, `${path}: bad Twitter image origin`);
  assert.equal(new URL(twitterImage).pathname, "/opengraph-image", `${path}: bad Twitter image path`);
  assert.ok(h1, `${path}: missing H1`);
  assert.ok(!seenTitles.has(title), `${path}: duplicate title`);
  assert.ok(!seenDescriptions.has(description), `${path}: duplicate description`);
  seenTitles.add(title);
  seenDescriptions.add(description);
}

const robotsResponse = await fetch(`${origin}/robots.txt`);
assert.equal(robotsResponse.status, 200, "/robots.txt: expected HTTP 200");
const robotsText = await robotsResponse.text();
assert.match(robotsText, /User-Agent:\s*\*/i, "robots: missing wildcard rule");
assert.match(robotsText, /Allow:\s*\//i, "robots: missing allow rule");
assert.match(
  robotsText,
  /Sitemap:\s*https:\/\/www\.haasesolucoes\.com\.br\/sitemap\.xml/i,
  "robots: missing canonical sitemap",
);

const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200, "/sitemap.xml: expected HTTP 200");
const sitemapText = await sitemapResponse.text();
assert.doesNotMatch(sitemapText, /<lastmod>/i, "sitemap: unverifiable lastModified must be omitted");
assert.doesNotMatch(sitemapText, /<changefreq>/i, "sitemap: unsupported changeFrequency must be omitted");
assert.doesNotMatch(sitemapText, /<priority>/i, "sitemap: unsupported priority must be omitted");
for (const [path] of routes) {
  const canonical = `${canonicalOrigin}${path === "/" ? "" : path}`;
  assert.equal(
    (sitemapText.match(new RegExp(`<loc>${canonical.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>`, "g")) ?? []).length,
    1,
    `sitemap: ${canonical} must appear exactly once`,
  );
}

const ogResponse = await fetch(`${origin}/opengraph-image`);
assert.equal(ogResponse.status, 200, "/opengraph-image: expected HTTP 200");
assert.match(ogResponse.headers.get("content-type") ?? "", /^image\/png/i, "OG image: expected PNG");

const missingResponse = await fetch(`${origin}/rota-inexistente-w0-d-01`);
assert.equal(missingResponse.status, 404, "unknown route: expected HTTP 404");

console.log(`SEO contract passed for ${routes.length} public routes at ${origin}`);
