import { Reveal } from "@/components/Reveal";
import { TechCloud } from "@/components/TechCloud";
import type { CloudLogo } from "@/components/TechCloud";
import { projects, skills } from "@/data/portfolio";
import { getTechLogo } from "@/lib/tech-logos";

// Every skill and project tag that has a real logo, once each (C++ and C/C++ share one).
const labels = [
  ...skills.flatMap((group) => group.items),
  ...projects.flatMap((p) => p.tags),
];
const seen = new Set<string>();
const logos: CloudLogo[] = [];
for (const label of labels) {
  const logo = getTechLogo(label);
  if (logo && !seen.has(logo.slug)) {
    seen.add(logo.slug);
    logos.push({ label, path: logo.path });
  }
}

export function TechStack() {
  return (
    <section
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
      className="mt-16 scroll-mt-8"
    >
      <Reveal>
        <h2 id="tech-stack-heading" className="text-lg font-medium">
          Tech Stack
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tools I work with. Drag to spin, click an icon to focus it.
        </p>
        <ul className="sr-only">
          {logos.map(({ label }) => (
            <li key={label}>{label}</li>
          ))}
        </ul>
        <div className="mt-6">
          <TechCloud logos={logos} />
        </div>
      </Reveal>
    </section>
  );
}
