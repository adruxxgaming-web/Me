"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/content/types";
import type { Locale } from "@/i18n";

export function Nav({
  lang,
  name,
  cvHref,
  labels,
}: {
  lang: Locale;
  name: string;
  cvHref: string;
  labels: Dictionary["nav"];
}) {
  const pathname = usePathname();
  // The menu is "open" only for the route it was opened on, so navigating
  // closes it without needing an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === pathname;
  const setOpen = (value: boolean) => setOpenAt(value ? pathname : null);
  const other: Locale = lang === "en" ? "es" : "en";

  const home = `/${lang}`;
  const onHome = pathname === home;
  // On the home page use plain hash links; elsewhere go back home first.
  const anchor = (id: string) => (onHome ? `#${id}` : `${home}#${id}`);

  const links = [
    { href: anchor("about"), label: labels.about },
    { href: anchor("work"), label: labels.work },
    { href: anchor("certifications"), label: labels.certifications },
    { href: anchor("experience"), label: labels.experience },
    { href: anchor("contact"), label: labels.contact },
  ];

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-6 md:px-10"
      >
        <Link
          href={home}
          className="display text-2xl tracking-normal"
          aria-label={name}
        >
          AH<span className="text-crimson">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="label text-silver transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href={`${home}/me`}
              className="label text-crimson-bright transition-colors hover:text-paper"
            >
              {labels.personal} ↗
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={`/${other}`}
            hrefLang={other}
            lang={other}
            aria-label={labels.switchToLabel}
            className="label rounded-[2px] border border-line px-3 py-2 text-silver transition-colors hover:border-crimson hover:text-paper"
          >
            {labels.switchTo}
          </Link>
          <a
            href={cvHref}
            download
            className="label hidden rounded-[2px] bg-crimson px-4 py-2 text-paper transition-colors hover:bg-crimson-bright sm:inline-block"
          >
            {labels.cv}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="label rounded-[2px] border border-line px-3 py-2 text-paper lg:hidden"
          >
            {open ? labels.close : labels.menu}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-ink px-6 py-10 lg:hidden"
        >
          <ul className="border-t border-line">
            {links.map((link) => (
              <li key={link.label} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="display block py-5 text-5xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="border-b border-line">
              <Link
                href={`${home}/me`}
                className="display block py-5 text-5xl text-crimson"
              >
                {labels.personal} ↗
              </Link>
            </li>
          </ul>
          <a
            href={cvHref}
            download
            className="label mt-8 inline-block rounded-[2px] bg-crimson px-5 py-3 text-paper"
          >
            {labels.cv} (PDF)
          </a>
        </div>
      ) : null}
    </header>
  );
}
