import type { Dictionary } from "@/content/types";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <section
      data-section="stats"
      className="border-t border-line bg-gradient-to-b from-coal to-ink"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 px-6 md:px-10 lg:grid-cols-4">
        {dict.stats.items.map((stat, i) => (
          <div
            key={stat.label}
            data-reveal
            className={`flex flex-col justify-between gap-6 py-12 md:py-16 ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
            } ${i % 2 === 1 ? "border-l border-line pl-6 lg:pl-8" : ""}`}
          >
            <p className="display text-7xl text-crimson sm:text-8xl lg:text-9xl">
              <span data-count={stat.value}>{stat.value}</span>
              {stat.suffix}
            </p>
            <p className="label max-w-[16ch] leading-relaxed text-silver">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
