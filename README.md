# Adrián Hinojosa — Portfolio

Bilingual (EN/ES) single-page portfolio.

**Stack:** Next.js 16 (App Router, Cache Components) · TypeScript · Tailwind CSS 4 · GSAP + ScrollTrigger · Lenis · deployed on Vercel.

> Next.js 16 has breaking changes. Before touching framework code, read the docs bundled in `node_modules/next/dist/docs/` (see `AGENTS.md`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000  (redirects to /en or /es by browser language)
npm run build
npm run lint
```

## Structure

```
src/
├─ proxy.ts                 locale redirect (/ → /en | /es)
├─ i18n.ts                  locales + getDictionary()
├─ content/
│  ├─ types.ts              Dictionary type (EN and ES must both satisfy it)
│  ├─ en.ts / es.ts         ALL translatable text, projects, certs, experience
│  └─ site.ts               non-translated data: email, socials, CV paths
├─ app/[lang]/              layout.tsx (metadata, <html lang>) + page.tsx
├─ components/
│  ├─ sections/             Hero, About, Work, Skills, Certifications, Experience, Contact, Footer
│  ├─ ui/                   Nav, Section, Chip
│  └─ motion/SmoothScroll   Lenis ↔ GSAP ticker ↔ ScrollTrigger
└─ lib/gsap.ts              registers GSAP plugins once
public/cv/                  AdrianHinojosa_CV_EN.pdf, AdrianHinojosa_CV_ES.pdf
docs/original-profile-readme.md   the previous GitHub README (source material)
```

Edit content in `src/content/*` — never inside components.
Elements marked `data-anim="…"` are the planned animation hooks.

## Pending (placeholders in the UI)

- [ ] Profile photo (`About`)
- [ ] Project case-study summaries (`work.projects[*].draft`)
- [ ] Certification years + credential links (`certifications.items[*].year/url`) and issuer logos
- [ ] Production domain in `src/content/site.ts` (`site.url`)
- [ ] Mobile navigation menu
- [ ] Visual design pass, then animations (hero background, scroll reveals, pinned sections)
