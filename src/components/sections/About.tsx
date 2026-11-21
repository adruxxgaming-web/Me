import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;
  const [statement, ...rest] = about.paragraphs;

  return (
    <Section id="about" index="01" label={about.title}>
      <p
        data-reveal
        className="text-3xl font-medium leading-[1.2] tracking-tight text-paper md:text-5xl"
      >
        {statement}
      </p>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div data-reveal className="space-y-5 text-base leading-relaxed text-silver">
          {rest.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div data-reveal>
          <h3 className="label text-crimson-bright">{about.focusTitle}</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {about.focus.map((item) => (
              <li key={item} className="py-4 text-sm leading-relaxed text-bone">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
        <div data-reveal>
          <h3 className="label text-crimson-bright">{about.areasTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.areas.map((area) => (
              <Chip key={area}>{area}</Chip>
            ))}
          </div>
        </div>
        <div data-reveal>
          <h3 className="label text-crimson-bright">{about.languagesTitle}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {about.languages.map((l) => (
              <li key={l.name} className="flex justify-between gap-4 border-b border-line pb-2">
                <span className="text-paper">{l.name}</span>
                <span className="text-mute">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
