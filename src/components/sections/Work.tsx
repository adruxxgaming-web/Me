import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";

export function Work({ dict }: { dict: Dictionary }) {
  const { work } = dict;
  return (
    <Section
      id="work"
      index="02"
      label={work.title}
      title={work.title}
      intro={work.intro}
    >
      <ul className="border-t border-line">
        {work.projects.map((project, index) => (
          <li
            key={project.id}
            data-reveal
            className="group border-b border-line transition-colors hover:bg-graphite"
          >
            <article className="grid gap-6 px-0 py-10 md:grid-cols-12 md:px-4 md:py-12">
              <p className="display text-5xl text-crimson md:col-span-2 md:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div className="md:col-span-6">
                <p className="label text-mute">{project.type}</p>
                <h3 className="display mt-3 text-4xl transition-transform duration-500 group-hover:translate-x-2 md:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-silver">
                  {project.summary}
                </p>
              </div>

              <div className="md:col-span-4">
                <p className="label text-mute">{work.focusLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.focus.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
                {project.draft ? (
                  <p className="label mt-6 flex items-center gap-2 text-mute">
                    <span className="size-1.5 rounded-full bg-crimson" />
                    {work.draftBadge}
                  </p>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
}
