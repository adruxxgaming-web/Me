import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;
  return (
    <Section id="about" title={about.title}>
      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        {/* Photo placeholder — pending */}
        <div
          data-anim="about-photo"
          className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-zinc-300 text-sm text-zinc-500 dark:border-zinc-700"
        >
          {about.photoPending}
        </div>

        <div className="space-y-10">
          <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">{about.focusTitle}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-600 dark:text-zinc-400">
                {about.focus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">{about.areasTitle}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {about.areas.map((area) => (
                  <Chip key={area}>{area}</Chip>
                ))}
              </div>

              <h3 className="mt-8 font-semibold">{about.languagesTitle}</h3>
              <ul className="mt-3 space-y-1 text-zinc-600 dark:text-zinc-400">
                {about.languages.map((l) => (
                  <li key={l.name}>
                    <span className="text-foreground">{l.name}</span> — {l.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
