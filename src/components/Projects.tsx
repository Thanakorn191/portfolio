import { existsSync } from "node:fs";
import { join } from "node:path";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

// Drop image paths with no file in public/ so the modal only shows real images.
const withRealImages = projects.map((project) => ({
  ...project,
  images: project.images?.filter((src) => existsSync(join(process.cwd(), "public", src))),
}));

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="mt-16 scroll-mt-8">
      <Reveal>
        <h2 id="projects-heading" className="text-lg font-medium">
          Projects
        </h2>
      </Reveal>
      <ProjectGrid projects={withRealImages} />
    </section>
  );
}
