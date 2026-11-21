import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n";

export function CraftHeader({
  lang,
  name,
  nav,
  switchTo,
  switchToLabel,
}: {
  lang: Locale;
  name: string;
  nav: Dictionary["personal"]["nav"];
  switchTo: string;
  switchToLabel: string;
}) {
  const other: Locale = lang === "en" ? "es" : "en";
  const links = [
    { href: "#hobbies", label: nav.hobbies },
    { href: "#games", label: nav.games },
    { href: "#social", label: nav.social },
  ];

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-4 md:px-6">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-4 rounded-[18px] border border-[#e9dfd1] bg-ivory/95 pl-4 pr-2 shadow-[0_14px_30px_-22px_rgb(41_41_41/0.4)]"
      >
        <a
          href={`/${lang}/me`}
          aria-label={name}
          className="pixel text-sm text-carbon"
        >
          AH<span className="text-grass">_</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-button"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`/${other}/me`}
            hrefLang={other}
            lang={other}
            aria-label={switchToLabel}
            className="rounded-[12px] px-3 py-2 text-sm font-semibold text-slate transition-colors hover:bg-cream hover:text-carbon"
          >
            {switchTo}
          </a>
          <a href={`/${lang}`} className="btn-line !px-4 !py-2.5 !text-sm">
            <span aria-hidden>←</span> {nav.portfolio}
          </a>
        </div>
      </nav>
    </header>
  );
}
