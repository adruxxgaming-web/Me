# Adrián Hinojosa — Portfolio

Bilingual (EN/ES) portfolio with two pages:

- **`/[lang]`** — professional page (dark editorial style: black, crimson, off-white; Anton + Inter).
- **`/[lang]/me`** — personal page (bright Minecraft-inspired style: cream, grass green, pixel headlines).

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
│  ├─ en.ts / es.ts         translatable text, projects, experience, personal page copy
│  ├─ certifications.ts     all certifications (shared by both languages) + issuer logos
│  └─ site.ts               non-translated data: email, socials, CV paths
├─ app/[lang]/              layout.tsx (fonts, metadata) · page.tsx (professional) · me/page.tsx (personal)
├─ components/
│  ├─ sections/             Hero, Marquee, About, Stats, Work, Skills, Certifications, Experience, Contact, Footer
│  ├─ ui/                   Nav, Section, Chip
│  ├─ craft/                personal page: CraftHeader, PixelIcon
│  └─ motion/               SmoothScroll (Lenis ↔ GSAP ticker) · Animations (data-attribute driven)
└─ lib/gsap.ts              registers GSAP plugins once
public/cv/                  AdrianHinojosa_CV_EN.pdf, AdrianHinojosa_CV_ES.pdf
public/images/              personal-page illustration + issuer logos (issuers/)
docs/original-profile-readme.md   the previous GitHub README (source material)
```

Edit content in `src/content/*` — never inside components.

## Animations

`Animations.tsx` is driven by data attributes, so sections stay Server Components:
`[data-line] > span` (masked line reveal), `[data-hero-fade]`, `[data-reveal]` (on scroll), `[data-count]` (counter).
Hidden initial states exist only under `prefers-reduced-motion: no-preference`. Mount `<Animations />`
inside each page (after the content), never in the layout, so it runs after hydration.

## Pending

- [ ] Profile photo (hero of the professional page)
- [ ] Replace the generic case studies in `work.projects` with real results as they happen
- [ ] Individual credential links (`url`) for Platzi, Huawei, Met Conecta, UPV, Maryland, Empower Data and IBM — for now the section links to the LinkedIn certifications page
- [ ] Issuer logos for Huawei, Met Conecta, UPV, Maryland, Empower Data and IBM
- [ ] Date for the IBM Python certificate

No phone numbers anywhere on the site or in the CV PDFs: contact is email + LinkedIn only.
