import type { Dictionary } from "@/content/types";
import { Chip, Section } from "@/components/ui/Section";

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id="skills" title={dict.skills.title}>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {dict.skills.groups.map((group) => (
          <div key={group.title} data-anim="skill-group">
            <h3 className="font-semibold">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
