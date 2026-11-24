import type { Dictionary } from "@/content/types";
import { site } from "@/content/site";
import type { Locale } from "@/i18n";

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { hero } = dict;
  const [first, ...rest] = site.name.split(" ");

  return (
    <section
      id="top"
      data-section="hero"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-28 md:pb-14"
    >
      {/* Deep burgundy wash fading to black, bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/4 top-0 h-full w-3/4 bg-[radial-gradient(ellipse_at_70%_30%,var(--color-burgundy)_0%,transparent_65%)] opacity-60"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <p
          data-hero-fade
          className="label mb-6 flex items-center gap-3 text-silver md:mb-10"
        >
          <span className="inline-block h-px w-10 bg-crimson" />
          {hero.kicker}
        </p>

        <div className="relative flex flex-col lg:block">
          {/* Portrait placeholder — swap for a real photo later */}
          <div
            data-hero-fade
            className="relative order-2 mt-8 aspect-[4/5] w-2/3 max-w-xs overflow-hidden rounded-[2px] border border-line bg-gradient-to-b from-charcoal via-oxblood to-coal sm:w-1/2 lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[28%] lg:max-w-none"
          >
            <span className="label absolute left-4 top-4 text-mute">
              {hero.photoPending}
            </span>
            <span className="absolute right-4 top-4 size-3 rounded-full border border-crimson" />
          </div>

          <h1 className="display relative z-10 order-1 text-[clamp(4.25rem,23vw,21rem)] leading-[0.86] tracking-[-0.01em] lg:text-[clamp(4.25rem,19vw,21rem)]">
            <span data-line>
              <span>{first}</span>
            </span>
            <span data-line className="text-crimson">
              <span>{rest.join(" ")}</span>
            </span>
          </h1>
        </div>

        <div className="mt-12 grid gap-8 border-t border-line pt-6 md:mt-16 lg:grid-cols-12">
          <div data-hero-fade className="lg:col-span-3">
            <p className="label text-mute">{hero.currentLabel}</p>
            <p className="mt-2 text-sm text-bone">{hero.currentValue}</p>
          </div>

          <p
            data-hero-fade
            className="max-w-xl text-base leading-relaxed text-silver lg:col-span-5"
          >
            {hero.tagline}
          </p>

          <div
            data-hero-fade
            className="flex flex-wrap items-start gap-3 lg:col-span-4 lg:justify-end"
          >
            <a
              href="#work"
              className="label rounded-[2px] bg-crimson px-6 py-4 text-paper transition-colors hover:bg-crimson-bright"
            >
              {hero.ctaWork}
            </a>
            <a
              href={site.cv[lang]}
              download
              className="label rounded-[2px] border border-line px-6 py-4 text-paper transition-colors hover:border-crimson"
            >
              {hero.ctaCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
