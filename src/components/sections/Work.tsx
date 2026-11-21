import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";

export function Work({ dict }: { dict: Dictionary }) {
  const { work } = dict;
  return (
    <Section id="work" title={work.title} intro={work.intro}>
      <ul className="grid gap-6 md:grid-cols-2">
        {work.projects.map((project, index) => (
          <li
            key={project.id}
            data-anim="project-card"
            className="flex flex-col rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-sm text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-xs uppercase tracking-wide text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                {project.type}
              </span>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>

            <p className="mt-5 text-xs font-medium uppercase tracking-wide text-zinc-500">
              {work.focusLabel}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.focus.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>

            {project.draft ? (
              <p className="mt-6 border-t border-dashed border-zinc-300 pt-4 text-sm text-zinc-500 dark:border-zinc-700">
                {work.draftBadge}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
