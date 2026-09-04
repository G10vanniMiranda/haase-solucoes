import assert from "node:assert/strict";

const origin = process.env.PERFORMANCE_BASE_URL ?? "http://localhost:3000";

const targets = [
  {
    path: "/servicos",
    text: "Serviços em Segurança do Trabalho, Perícias e Meio Ambiente",
    openingTag: "h1",
  },
  {
    path: "/seguranca-do-trabalho",
    text: "Assessoria e Consultoria em SST",
    openingTag: "h1",
  },
];

async function htmlFor(path) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `${path}: expected HTTP 200`);
  return response.text();
}

function openingTagBefore(html, text, tagName) {
  const textIndex = html.indexOf(text);
  assert.notEqual(textIndex, -1, `Missing measured LCP text: ${text}`);

  const tagStart = html.lastIndexOf(`<${tagName}`, textIndex);
  assert.notEqual(tagStart, -1, `Missing <${tagName}> ancestor for: ${text}`);

  const tagEnd = html.indexOf(">", tagStart);
  assert.notEqual(tagEnd, -1, `Unclosed <${tagName}> ancestor for: ${text}`);
  return html.slice(tagStart, tagEnd + 1);
}

for (const target of targets) {
  const html = await htmlFor(target.path);
  const openingTag = openingTagBefore(html, target.text, target.openingTag);

  assert.doesNotMatch(
    openingTag,
    /opacity:0(?:;|"|$)/,
    `${target.path}: measured LCP candidate must be visible in initial HTML`,
  );
  assert.match(
    openingTag,
    /transform:translateY\(20px\)/,
    `${target.path}: measured LCP candidate must retain y: 20 initial motion`,
  );
}

const esocialHtml = await htmlFor("/esocial");
const esocialCta = openingTagBefore(esocialHtml, "Solicitar avaliação técnica", "a");
assert.match(esocialCta, /opacity:0/, "eSocial CTA must retain its initial fade");
assert.match(esocialCta, /transform:translateY\(15px\)/, "eSocial CTA must retain its initial motion");

const belowFold = openingTagBefore(esocialHtml, "Diferenciais da HAASE", "div");
assert.match(belowFold, /opacity:0/, "Below-fold animation must retain its initial fade");
assert.match(belowFold, /transform:translateY\(20px\)/, "Below-fold animation must retain its initial motion");

console.log(`LCP visibility contract passed for ${targets.length} measured targets at ${origin}`);
