import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/i18n";
import { site } from "@/content/site";
import { Animations } from "@/components/motion/Animations";
import { LinkIcon, type LinkIconName } from "@/components/ui/LinkIcon";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { links } = getDictionary(lang);
  return {
    title: links.meta.title,
    description: links.meta.description,
    alternates: {
      canonical: `/${lang}/links`,
      languages: { en: "/en/links", es: "/es/links" },
    },
    // Setting openGraph here replaces the parent's, so point at the shared
    // social image explicitly.
    openGraph: {
      title: links.meta.title,
      description: links.meta.description,
      locale: lang === "es" ? "es_MX" : "en_US",
      type: "profile",
      images: [`/${lang}/opengraph-image`],
    },
    twitter: { card: "summary_large_image" },
  };
}

/** One full-width button row: icon, label + hint, trailing arrow. */
function Row({
  href,
  icon,
  label,
  hint,
  tone = "line",
  external = false,
  download = false,
}: {
  href: string;
  icon: LinkIconName;
  label: string;
  hint: string;
  tone?: "crimson" | "grass" | "line";
  external?: boolean;
  download?: boolean;
}) {
  const tones = {
    crimson:
      "border-crimson bg-crimson hover:bg-crimson-bright hover:border-crimson-bright",
    grass: "border-line hover:border-grass hover:bg-graphite",
    line: "border-line hover:border-crimson hover:bg-graphite",
  };
  const iconTone = {
    crimson: "text-paper",
    grass: "text-grass",
    line: "text-crimson-bright",
  };
  const className = `group flex min-h-16 items-center gap-4 rounded-[2px] border px-5 py-4 transition-colors ${tones[tone]}`;
  const content = (
    <>
      <LinkIcon name={icon} className={`size-6 shrink-0 ${iconTone[tone]}`} />
      <span className="min-w-0 flex-1">
        <span className="block font-medium leading-snug text-paper">{label}</span>
        <span
          className={`mt-0.5 block text-sm leading-snug ${tone === "crimson" ? "text-paper/80" : "text-mute"}`}
        >
          {hint}
        </span>
      </span>
      <span
        aria-hidden
        className="shrink-0 text-lg text-paper/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        {download ? "↓" : external ? "↗" : "→"}
      </span>
    </>
  );

  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default async function LinksPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const { links } = dict;

  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Burgundy wash behind the header */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_50%_0%,var(--color-burgundy)_0%,transparent_70%)] opacity-70"
      />

      {/* Language switch, top-right: the active language sits on the thumb. */}
      <LanguageSwitch
        lang={lang}
        path="/links"
        label={lang === "es" ? "Idioma" : "Language"}
        switchLabel={dict.nav.switchToLabel}
        className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6"
      />

      <main className="relative mx-auto flex min-h-svh w-full max-w-md flex-col px-5 pb-10 pt-20 sm:pt-24">
        {/* ── Header ── */}
        <header className="flex flex-col items-center text-center">
          <div
            data-hero-fade
            className="relative size-28 overflow-hidden rounded-full border-2 border-crimson shadow-[0_0_0_6px_rgb(183_25_37/0.15)]"
          >
            <Image
              src="/images/avatar.webp"
              alt={links.avatarAlt}
              fill
              priority
              sizes="112px"
              className="object-cover"
            />
          </div>
          <h1 className="display mt-6 text-[2.75rem] leading-[0.9] sm:text-5xl">
            <span data-line>
              <span>{site.name}</span>
            </span>
          </h1>
          <p data-hero-fade className="label mt-4 text-crimson-bright">
            {dict.hero.kicker}
          </p>
          <p
            data-hero-fade
            className="mt-4 max-w-xs text-sm leading-relaxed text-silver"
          >
            {links.tagline}
          </p>
        </header>

        {/* ── Main links ── */}
        <nav aria-label={links.meta.title} className="mt-10">
          <ul className="space-y-3">
            <li data-hero-fade>
              <Row
                href={`/${lang}`}
                icon="briefcase"
                label={links.portfolio.label}
                hint={links.portfolio.hint}
                tone="crimson"
              />
            </li>
            <li data-hero-fade>
              <Row
                href={`/${lang}/me`}
                icon="gamepad"
                label={links.personal.label}
                hint={links.personal.hint}
                tone="grass"
              />
            </li>
            <li data-hero-fade>
              <Row
                href={site.cv[lang]}
                icon="download"
                label={links.cv.label}
                hint={links.cv.hint}
                download
              />
            </li>
          </ul>

          {/* ── Socials ── */}
          <p data-hero-fade className="label mt-10 text-mute">
            {links.socialsTitle}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {site.socials.map((social) => (
              <li
                key={social.id}
                data-hero-fade
                className="last:odd:col-span-2"
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} — ${social.handle}`}
                  className="group flex h-full min-h-16 flex-col justify-between gap-3 rounded-[2px] border border-line p-4 transition-colors hover:border-crimson hover:bg-graphite"
                >
                  <span className="flex items-center justify-between">
                    <LinkIcon
                      name={social.id}
                      className="size-6 text-paper transition-colors group-hover:text-crimson-bright"
                    />
                    <span aria-hidden className="text-paper/50">
                      ↗
                    </span>
                  </span>
                  <span>
                    <span className="block font-medium text-paper">
                      {social.label}
                    </span>
                    <span className="block truncate text-xs text-mute">
                      {social.handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Footer ── */}
        <footer
          data-hero-fade
          className="mt-auto flex flex-col items-center gap-5 pt-12 text-center"
        >
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-silver transition-colors hover:text-paper"
          >
            <LinkIcon name="mail" className="size-4 text-crimson-bright" />
            <span className="sr-only">{links.emailLabel}: </span>
            {site.email}
          </a>
          <span className="display text-xl" aria-hidden>
            AH<span className="text-crimson">.</span>
          </span>
        </footer>
      </main>

      {/* Mounted last so its effects run after hydration. */}
      <Animations />
    </div>
  );
}
