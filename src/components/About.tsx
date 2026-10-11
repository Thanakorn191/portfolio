import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { TechBadge } from "@/components/TechBadge";
import { profile, skills } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="mt-16 scroll-mt-8">
      <Reveal>
        <h2 id="about-heading" className="text-lg font-medium">
          About Me
        </h2>
        <div className="mt-6 grid items-start gap-8 sm:grid-cols-3">
          <Image
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width={1124}
            height={1500}
            sizes="(min-width: 640px) 224px, 192px"
            className="h-auto w-48 rounded-lg border border-foreground/10 sm:order-2 sm:w-full"
          />
          <p className="leading-relaxed text-muted sm:order-1 sm:col-span-2">{profile.bio}</p>
        </div>

        <h3 className="mt-10 text-sm font-medium">Core Skills</h3>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-sm text-muted">{group.category}</h4>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.category}>
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
