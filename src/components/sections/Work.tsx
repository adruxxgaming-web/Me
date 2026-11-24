import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";
import { ToggleIcon } from "@/components/ui/ToggleIcon";

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
          <li key={project.id} data-reveal className="border-b border-line">
            {/* Native disclosure: works without JS, keyboard accessible, and
                keeps this a Server Component. */}
            <details className="group">
              <summary className="grid cursor-pointer list-none gap-6 py-10 transition-colors hover:bg-graphite md:grid-cols-12 md:px-4 md:py-12 [&::-webkit-details-marker]:hidden">
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

                <div className="flex flex-col justify-between gap-6 md:col-span-4">
                  <div>
                    <p className="label text-mute">{work.toolsLabel}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Chip key={tool}>{tool}</Chip>
                      ))}
                    </div>
                  </div>
                  <span className="label inline-flex items-center gap-3 text-crimson-bright">
                    <ToggleIcon />
                    {work.openCase}
                  </span>
                </div>
              </summary>

              <div className="grid gap-10 border-t border-line pb-12 pt-10 md:grid-cols-12 md:px-4">
                <div className="md:col-span-5 md:col-start-3">
                  <p className="label text-crimson-bright">{work.challengeLabel}</p>
                  <p className="mt-4 text-lg leading-relaxed text-paper">
                    {project.challenge}
                  </p>

                  <p className="label mt-10 text-crimson-bright">
                    {work.approachLabel}
                  </p>
                  <ol className="mt-4 space-y-4">
                    {project.approach.map((step, i) => (
                      <li key={step} className="flex gap-4 text-sm leading-relaxed text-silver">
                        <span className="label shrink-0 pt-0.5 text-mute">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="md:col-span-5">
                  <p className="label text-crimson-bright">
                    {work.deliverablesLabel}
                  </p>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {project.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 py-3 text-sm leading-relaxed text-bone"
                      >
                        <span className="mt-2 h-px w-4 shrink-0 bg-crimson" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="label mt-10 text-crimson-bright">
                    {work.coursesLabel}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.courses.map((course) => (
                      <Chip key={course}>{course}</Chip>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          </li>
        ))}
      </ul>
    </Section>
  );
}
