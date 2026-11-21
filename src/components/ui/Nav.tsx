import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";
import type { Locale } from "@/i18n";

export function Nav({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const other: Locale = lang === "en" ? "es" : "en";
  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#work", label: dict.nav.work },
    { href: "#certifications", label: dict.nav.certifications },
    { href: "#experience", label: dict.nav.experience },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6"
      >
        <a href="#top" className="font-semibold tracking-tight">
          {site.name}
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-zinc-600 hover:text-foreground dark:text-zinc-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 text-sm">
          <a
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={dict.nav.switchToLabel}
            className="rounded border border-zinc-300 px-2.5 py-1 font-medium dark:border-zinc-700"
          >
            {dict.nav.switchTo}
          </a>
          <a
            href={site.cv[lang]}
            download
            className="rounded bg-foreground px-3 py-1 font-medium text-background"
          >
            {dict.nav.cv}
          </a>
        </div>
      </nav>
    </header>
  );
}
