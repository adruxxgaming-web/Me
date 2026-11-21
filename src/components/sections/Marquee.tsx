/** Endless ticker of the core areas. Content is duplicated for a seamless loop. */
export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line py-6 md:py-8"
    >
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="display text-4xl text-paper/90 md:text-6xl">
              {item}
            </span>
            <span className="size-2 rotate-45 bg-crimson" />
          </span>
        ))}
      </div>
    </div>
  );
}
