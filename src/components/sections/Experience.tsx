import type { Dictionary, Role } from "@/content/types";
import { Section } from "@/components/ui/Section";

function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol className="border-t border-line">
      {roles.map((role) => (
        <li
          key={role.id}
          data-reveal
          className="grid gap-4 border-b border-line py-10 md:grid-cols-12"
        >
          <p className="label pt-1 text-crimson-bright md:col-span-3">
            {role.period}
          </p>
          <div className="md:col-span-9">
            <h3 className="display text-3xl md:text-5xl">{role.title}</h3>
            <p className="mt-2 text-silver">
              {role.org}
              {role.location ? (
                <span className="text-mute"> · {role.location}</span>
              ) : null}
            </p>
            {role.summary ? (
              <p className="mt-5 max-w-3xl leading-relaxed text-bone">
                {role.summary}
              </p>
            ) : null}
            <ul className="mt-5 space-y-2 text-sm text-silver">
              {role.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-crimson" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;
  return (
    <Section
      id="experience"
      index="05"
      label={experience.title}
      title={experience.title}
    >
      <RoleList roles={experience.roles} />

      <h3 data-reveal className="display mb-8 mt-24 text-4xl md:text-5xl">
        {experience.complementaryTitle}
      </h3>
      <RoleList roles={experience.complementary} />

      <h3 data-reveal className="display mb-8 mt-24 text-4xl md:text-5xl">
        {experience.educationTitle}
      </h3>
      <ul className="grid border-l border-t border-line md:grid-cols-3">
        {experience.education.map((edu) => (
          <li
            key={edu.id}
            data-reveal
            className="border-b border-r border-line p-6"
          >
            <p className="label text-crimson-bright">{edu.period}</p>
            <p className="mt-4 text-lg font-medium leading-snug">{edu.degree}</p>
            <p className="mt-1 text-sm text-silver">{edu.school}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
