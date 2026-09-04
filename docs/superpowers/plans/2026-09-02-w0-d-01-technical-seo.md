# W0-D-01 Technical SEO Implementation Plan

> **For agentic workers:** Execute inline in the current worktree. Preserve all accumulated waves and stop before W0-D-02.

**Goal:** Make every public route emit coherent, crawlable, factual SEO metadata using the existing Next.js App Router infrastructure.

**Architecture:** Keep the root layout as the shared metadata baseline and use static route metadata for route-specific title, description, canonical, Open Graph, and Twitter fields. Keep `robots.ts`, `sitemap.ts`, and the dedicated `opengraph-image.tsx` as Next.js metadata files, with one canonical origin and no unverifiable dates or claims.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript.

**Spec:** User-provided W0-D-01 execution brief dated 2026-09-02.

## Global Constraints

- No new dependencies, analytics, cookies, storage, vendor, pages, broad copywriting, Local SEO execution, or W0-D-02 work.
- Preserve the approved logo, OG implementation, favicon, accessibility, acquisition, measurement, privacy policy, and accumulated worktree.
- Use only facts already supported by the site and omit unverifiable sitemap modification dates.

### Task 1: Establish the rendered SEO baseline

**Files:**
- Inspect: `src/app/**/page.tsx`, `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`
- Temporary test: process-local script only; do not persist test infrastructure

- [ ] Build the current application.
- [ ] Start the production server and crawl every public route.
- [ ] Record title, description, canonical, robots, OG, Twitter, H1, schema, robots.txt, sitemap.xml, status codes, and internal links.
- [ ] Run the intended contract and confirm RED failures correspond to missing/inconsistent SEO behavior.

### Task 2: Apply the smallest metadata correction

**Files:**
- Modify: route `page.tsx` files only where rendered metadata fails the contract
- Modify: `src/app/layout.tsx` only if the shared baseline requires correction
- Modify: `src/app/robots.ts` and `src/app/sitemap.ts` only where their rendered outputs are non-factual or inconsistent

- [ ] Remove duplicate brand suffixes by making page titles compatible with the root title template.
- [ ] Ensure every public route has factual title, description, canonical, Open Graph, and Twitter output.
- [ ] Preserve the dedicated Open Graph image and favicon.
- [ ] Remove generated sitemap dates, priorities, or frequencies that lack a factual source.
- [ ] Keep all public routes indexable unless evidence requires otherwise.

### Task 3: Verify GREEN and regressions

**Files:**
- Verify: all files affected by Task 2

- [ ] Rebuild and rerun the rendered SEO contract until all assertions pass.
- [ ] Verify robots.txt, sitemap.xml, OG image, canonical origin, JSON-LD syntax, internal links, 200 routes, and a representative 404.
- [ ] Verify mobile/desktop browser output and accessibility landmarks/focus behavior.
- [ ] Run TypeScript, relevant ESLint, build, `git diff --check`, acquisition/measurement/analytics checks, and asset/dependency hashes.
- [ ] Report the Local SEO fact gap and stop before W0-D-02 without commit, push, or deploy.
