import type { Dictionary, Role } from "@/content/types";
import { Section } from "@/components/ui/Section";

function Timeline({ roles }: { roles: Role[] }) {
  return (
    <ol className="space-y-10 border-l border-zinc-300 pl-8 dark:border-zinc-700">
      {roles.map((role) => (
        <li key={role.id} data-anim="timeline-item" className="relative">
          <span
            aria-hidden
            className="absolute -left-[37px] top-2 size-2.5 rounded-full bg-foreground"
          />
          <p className="font-mono text-sm text-zinc-500">{role.period}</p>
          <h3 className="mt-1 text-lg font-semibold">{role.title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            {role.org}
            {role.location ? ` · ${role.location}` : ""}
          </p>
          {role.summary ? (
            <p className="mt-3 max-w-3xl text-zinc-700 dark:text-zinc-300">
              {role.summary}
            </p>
          ) : null}
          <ul className="mt-3 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
            {role.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;
  return (
    <Section id="experience" title={experience.title}>
      <Timeline roles={experience.roles} />

      <h3 className="mb-8 mt-16 text-xl font-semibold">
        {experience.complementaryTitle}
      </h3>
      <Timeline roles={experience.complementary} />

      <h3 className="mb-6 mt-16 text-xl font-semibold">
        {experience.educationTitle}
      </h3>
      <ul className="grid gap-4 md:grid-cols-3">
        {experience.education.map((edu) => (
          <li
            key={edu.id}
            className="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <p className="font-mono text-sm text-zinc-500">{edu.period}</p>
            <p className="mt-1 font-medium">{edu.degree}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {edu.school}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
