import type { Dictionary } from "@/content/types";
import { Section } from "@/components/ui/Section";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills" index="03" label={dict.skills.title}>
      <div className="grid border-l border-t border-line sm:grid-cols-2">
        {dict.skills.groups.map((group, i) => (
          <div
            key={group.title}
            data-reveal
            className="border-b border-r border-line p-8 md:p-10"
          >
            <p className="label text-crimson-bright">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="display mt-4 text-3xl md:text-4xl">{group.title}</h3>
            <ul className="mt-6 space-y-2 text-sm text-silver">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-px w-4 bg-line" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
