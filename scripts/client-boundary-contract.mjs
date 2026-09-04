import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const srcRoot = path.join(root, "src");

const expectedClientFiles = [
  "src/components/Header.tsx",
  "src/components/MeasurementBridge.tsx",
  "src/components/MotionPrimitives.tsx",
];

const conversionCandidates = [
  "src/components/Hero.tsx",
  "src/components/TreinamentosSection.tsx",
  "src/app/sobre/SobrePageClient.tsx",
  "src/app/servicos/ServicosPageClient.tsx",
  "src/app/esocial/content.tsx",
  "src/app/seguranca-do-trabalho/content.tsx",
  "src/app/meio-ambiente/content.tsx",
  "src/app/pericias-judiciais/content.tsx",
  "src/app/ergonomia-e-riscos-psicossociais/content.tsx",
];

async function collectSourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return collectSourceFiles(fullPath);
      return /\.(?:ts|tsx)$/.test(entry.name) ? [fullPath] : [];
    }),
  );
  return files.flat();
}

function relativePath(file) {
  return path.relative(root, file).replaceAll("\\", "/");
}

const files = await collectSourceFiles(srcRoot);
const sources = new Map(
  await Promise.all(
    files.map(async (file) => [relativePath(file), await readFile(file, "utf8")]),
  ),
);

const actualClientFiles = [...sources]
  .filter(([, source]) => /^\uFEFF?["']use client["'];/u.test(source))
  .map(([file]) => file)
  .sort();

assert.deepEqual(
  actualClientFiles,
  [...expectedClientFiles].sort(),
  `Unexpected client boundaries:\n${actualClientFiles.join("\n")}`,
);

const directFramerConsumers = [...sources]
  .filter(([, source]) => /from ["']framer-motion["']/.test(source))
  .map(([file]) => file)
  .sort();

assert.deepEqual(
  directFramerConsumers,
  ["src/components/Header.tsx", "src/components/MotionPrimitives.tsx"],
  `Unexpected direct Framer Motion consumers:\n${directFramerConsumers.join("\n")}`,
);

for (const candidate of conversionCandidates) {
  const source = sources.get(candidate);
  assert.ok(source, `Missing conversion candidate: ${candidate}`);
  assert.doesNotMatch(source, /^\uFEFF?["']use client["'];/u, `${candidate} must be a Server Component`);
  assert.doesNotMatch(source, /from ["']framer-motion["']/, `${candidate} must consume the shared island`);
}

const footer = sources.get("src/components/Footer.tsx");
assert.ok(footer, "Missing Footer.tsx");
assert.doesNotMatch(footer, /^\uFEFF?["']use client["'];/u, "Footer must remain a Server Component");

console.log(`Client boundary contract passed: ${actualClientFiles.length} client files, ${directFramerConsumers.length} direct Framer Motion consumers.`);
