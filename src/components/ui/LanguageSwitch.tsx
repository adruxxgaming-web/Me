"use client";

import { ViewTransition } from "react";
import Link from "next/link";
import type { Locale } from "@/i18n";

const order: Locale[] = ["es", "en"];

/** Read (and removed) by <Animations /> on the next page. */
export const SKIP_INTRO_ID = "skip-intro";

/**
 * Show the next page as-is instead of replaying its entrance animations.
 * A <style> in <head> is used because React rewrites the <html>/<body>
 * attributes when the locale changes, which would drop a flag set there.
 */
function showNextPageWithoutIntro() {
  if (document.getElementById(SKIP_INTRO_ID)) return;
  const style = document.createElement("style");
  style.id = SKIP_INTRO_ID;
  style.textContent =
    "[data-line]>span{transform:none!important}[data-hero-fade]{opacity:1!important}";
  document.head.appendChild(style);
}

/**
 * Pill ES/EN switch. Switching language is a route change, so the smooth
 * part comes from a view transition: the thumb is a named <ViewTransition>
 * that morphs from one side to the other, the page crossfades (see
 * `lang-switch` in globals.css), and the new page skips its entrance
 * animations (see showNextPageWithoutIntro).
 */
export function LanguageSwitch({
  lang,
  path,
  label,
  switchLabel,
  className = "",
}: {
  lang: Locale;
  /** Path after the locale, e.g. "/links". */
  path: string;
  /** Accessible name of the whole control ("Idioma" / "Language"). */
  label: string;
  /** Accessible name of the inactive option ("Switch to English"). */
  switchLabel: string;
  className?: string;
}) {
  return (
    <nav aria-label={label} className={className}>
      <div className="relative grid grid-cols-2 rounded-full border border-line bg-charcoal p-1">
        <ViewTransition name="lang-switch-thumb" share="lang-thumb" default="none">
          <span
            aria-hidden
            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full bg-paper ${lang === "en" ? "translate-x-full" : ""}`}
          />
        </ViewTransition>
        {order.map((code) =>
          code === lang ? (
            <span
              key={code}
              aria-current="true"
              className="display relative px-4 py-1.5 text-center text-lg text-ink"
            >
              {code.toUpperCase()}
            </span>
          ) : (
            <Link
              key={code}
              href={`/${code}${path}`}
              hrefLang={code}
              lang={code}
              aria-label={switchLabel}
              transitionTypes={["lang-switch"]}
              onNavigate={showNextPageWithoutIntro}
              className="display relative px-4 py-1.5 text-center text-lg text-mute transition-colors hover:text-paper"
            >
              {code.toUpperCase()}
            </Link>
          ),
        )}
      </div>
    </nav>
  );
}
