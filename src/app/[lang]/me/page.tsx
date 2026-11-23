import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import { site } from "@/content/site";
import { Animations } from "@/components/motion/Animations";
import { CraftHeader } from "@/components/craft/CraftHeader";
import { PixelIcon } from "@/components/craft/PixelIcon";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { personal } = getDictionary(lang);
  return {
    title: personal.meta.title,
    description: personal.meta.description,
    alternates: {
      canonical: `/${lang}/me`,
      languages: { en: "/en/me", es: "/es/me" },
    },
    openGraph: {
      title: personal.meta.title,
      description: personal.meta.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "website",
    },
  };
}

const blockColors = [
  "bg-grass",
  "bg-oak",
  "bg-daylight",
  "bg-hay",
  "bg-clay",
  "bg-moss",
  "bg-sage",
];

const iconTints = {
  sports: "bg-meadow/30",
  gaming: "bg-sky/50",
  heroes: "bg-hay/50",
  movies: "bg-clay/25",
} as const;

function Heading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      data-reveal
      className={`pixel text-[clamp(1.25rem,3.2vw,2.25rem)] uppercase text-carbon ${className}`}
    >
      {children}
    </h2>
  );
}

export default async function PersonalPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { personal } = dict;

  // Last word of the title picks up the grass-green accent.
  const words = personal.title.split(" ");
  const lastWord = words.pop();

  return (
    <div className="craft min-h-svh">
      <CraftHeader
        lang={lang}
        name={site.name}
        nav={personal.nav}
        switchTo={dict.nav.switchTo}
        switchToLabel={dict.nav.switchToLabel}
      />

      <main>
        {/* ───────────── Hero ───────────── */}
        <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-28 md:px-8 md:pt-36">
          <div className="grid items-end gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
            <div>
              <p
                data-hero-fade
                className="inline-flex items-center gap-2 rounded-[10px] bg-cream px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate"
              >
                <span className="block-tile inline-block size-3 bg-grass" aria-hidden />
                {personal.eyebrow}
              </p>
              <h1
                data-hero-fade
                className="pixel mt-6 text-[clamp(2rem,5.6vw,4.5rem)] uppercase text-carbon"
              >
                {words.join(" ")}{" "}
                <span className="pixel-shadow text-grass">{lastWord}</span>
              </h1>
            </div>
            <div>
              <p
                data-hero-fade
                className="max-w-md text-lg leading-relaxed text-slate"
              >
                {personal.intro}
              </p>
              <div data-hero-fade className="mt-7 flex flex-wrap items-center gap-3">
                <a href="#social" className="btn-grass">
                  {personal.ctaPrimary}
                </a>
                <Link href={`/${lang}`} className="btn-line">
                  <span aria-hidden>←</span> {personal.back}
                </Link>
              </div>
            </div>
          </div>

          <div
            data-hero-fade
            className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[28px] border border-[#e9dfd1] bg-carbon shadow-[0_30px_60px_-36px_rgb(41_41_41/0.45)] sm:aspect-[4/3] md:rounded-[32px] lg:aspect-[16/9]"
          >
            <Image
              src="/images/adrian-sunset.webp"
              alt={personal.sceneLabel}
              fill
              priority
              sizes="(min-width: 1264px) 1200px, 100vw"
              className="object-cover object-[80%_50%] sm:object-[70%_50%] lg:object-center"
            />
            <p className="pointer-events-none absolute bottom-4 left-4 right-4 max-w-md rounded-[14px] bg-ivory/95 px-4 py-3 text-sm font-medium text-carbon shadow-[0_10px_24px_-16px_rgb(41_41_41/0.5)] md:bottom-6 md:left-6">
              {personal.sceneCaption}
            </p>
          </div>
        </section>

        {/* ───────────── About ───────────── */}
        <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <Heading>{personal.aboutTitle}</Heading>
            <div className="space-y-5 text-xl leading-relaxed text-slate md:text-2xl md:leading-relaxed">
              {personal.about.map((p) => (
                <p key={p} data-reveal>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Hobbies ───────────── */}
        <section
          id="hobbies"
          className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-14 md:px-8 md:py-20"
        >
          <Heading>{personal.hobbiesTitle}</Heading>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {personal.hobbies.map((hobby) => (
              <li key={hobby.id} data-reveal>
                <div className="craft-card flex h-full flex-col p-6">
                  <span
                    className={`flex size-[84px] items-center justify-center rounded-[20px] ${iconTints[hobby.id]}`}
                  >
                    <PixelIcon name={hobby.id} size={60} />
                  </span>
                  <h3 className="pixel mt-6 text-[0.8rem] uppercase leading-snug text-carbon">
                    {hobby.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                    {hobby.text}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                    {hobby.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[10px] bg-cream px-3 py-1.5 text-sm font-medium text-carbon"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── Games ───────────── */}
        <section
          id="games"
          className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-14 md:px-8 md:py-20"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Heading>{personal.gamesTitle}</Heading>
            <p data-reveal className="max-w-sm text-slate">
              {personal.gamesIntro}
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {personal.games.map((game, i) => (
              <li key={game} data-reveal>
                <div className="craft-card flex items-center gap-4 !rounded-[20px] p-4">
                  <span
                    aria-hidden
                    className={`block-tile pixel flex size-14 shrink-0 items-center justify-center rounded-[6px] text-lg text-white ${blockColors[i % blockColors.length]}`}
                  >
                    {game[0]}
                  </span>
                  <span className="font-semibold leading-snug text-carbon">
                    {game}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── Social ───────────── */}
        <section
          id="social"
          className="mx-auto max-w-[1200px] scroll-mt-24 px-5 py-14 md:px-8 md:py-20"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Heading>{personal.socialsTitle}</Heading>
            <p data-reveal className="max-w-sm text-slate">
              {personal.socialsText}
            </p>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {site.socials.map((social) => (
              <li key={social.id} data-reveal>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="craft-card group flex items-center justify-between gap-4 p-6 hover:!bg-button"
                >
                  <span>
                    <span className="pixel block text-[0.85rem] uppercase text-carbon transition-colors group-hover:text-white">
                      {social.label}
                    </span>
                    <span className="mt-3 block text-sm text-slate transition-colors group-hover:text-white/85">
                      {social.handle}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-sage text-lg text-button transition-colors group-hover:border-white group-hover:text-white"
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ───────────── Back to the professional page ───────────── */}
        <section className="mx-auto max-w-[1200px] px-5 pb-20 pt-10 md:px-8">
          <div
            data-reveal
            className="relative overflow-hidden rounded-[28px] border border-[#e9dfd1] bg-gradient-to-b from-daylight to-haze px-6 pb-24 pt-12 text-center md:rounded-[32px] md:px-10 md:pb-28 md:pt-16"
          >
            <h2 className="pixel mx-auto max-w-2xl text-[clamp(1.1rem,2.6vw,1.9rem)] uppercase text-carbon">
              {personal.closingTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-md text-slate">
              {personal.closingText}
            </p>
            <div className="mt-8">
              <Link href={`/${lang}`} className="btn-grass">
                {personal.back}
              </Link>
            </div>
            {/* grass-and-dirt strip */}
            <div aria-hidden className="absolute inset-x-0 bottom-0">
              <div className="h-4 bg-grass shadow-[inset_0_-4px_0_var(--color-leaf)]" />
              <div className="h-8 bg-soil md:h-10" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e9dfd1] py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-2 px-5 text-sm text-slate md:flex-row md:px-8">
          <p>
            © {site.fullName}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtWith}</p>
        </div>
      </footer>

      {/* Mounted last so its effects run after hydration. */}
      <Animations />
    </div>
  );
}
