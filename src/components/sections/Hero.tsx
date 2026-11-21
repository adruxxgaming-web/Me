import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";
import type { Locale } from "@/i18n";

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <section
      id="top"
      data-section="hero"
      className="relative flex min-h-screen items-center pt-16"
    >
      {/* Reserved for the animated background (nodes / workflow motif). */}
      <div
        data-anim="hero-bg"
        aria-hidden
        className="absolute inset-x-6 bottom-6 top-24 -z-10 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800"
      />

      <div className="mx-auto w-full max-w-6xl px-6">
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          {dict.hero.greeting}
        </p>
        <h1
          data-anim="hero-title"
          className="mt-2 text-5xl font-semibold tracking-tight sm:text-7xl"
        >
          {site.name}
        </h1>
        <p className="mt-4 text-xl text-zinc-700 dark:text-zinc-300">
          {dict.hero.role}
        </p>
        <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {dict.hero.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded bg-foreground px-5 py-3 font-medium text-background"
          >
            {dict.hero.ctaWork}
          </a>
          <a
            href={site.cv[lang]}
            download
            className="rounded border border-zinc-300 px-5 py-3 font-medium dark:border-zinc-700"
          >
            {dict.hero.ctaCv}
          </a>
          <a
            href="#contact"
            className="rounded px-5 py-3 font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            {dict.hero.ctaContact}
          </a>
        </div>
      </div>

      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-zinc-500">
        {dict.hero.scroll}
      </span>
    </section>
  );
}
