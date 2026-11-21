/**
 * Swiss-style section: 1px rule, small crimson index + label on the left,
 * content on the right. `index` is the editorial number (01, 02…).
 */
export function Section({
  id,
  index,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  label: string;
  /** Optional oversized display heading above the content. */
  title?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      data-section={id}
      className="scroll-mt-16 border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="label flex items-center gap-3 text-silver lg:sticky lg:top-28">
            <span className="text-crimson-bright">({index})</span>
            {label}
          </p>
        </div>
        <div className="lg:col-span-9">
          {title ? (
            <h2
              data-reveal
              className="display text-6xl sm:text-7xl lg:text-8xl"
            >
              {title}
            </h2>
          ) : null}
          {intro ? (
            <p
              data-reveal
              className="mt-6 max-w-2xl text-lg leading-relaxed text-silver"
            >
              {intro}
            </p>
          ) : null}
          <div className={title || intro ? "mt-14" : ""}>{children}</div>
        </div>
      </div>
    </section>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[2px] border border-line px-3 py-1.5 text-xs text-silver">
      {children}
    </span>
  );
}
