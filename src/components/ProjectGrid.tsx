"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/portfolio";

// Only needed after a click, so keep it out of the initial bundle.
const ProjectModal = dynamic(() =>
  import("@/components/ProjectModal").then((mod) => mod.ProjectModal),
);

type Props = {
  projects: Project[];
};

export function ProjectGrid({ projects }: Props) {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={(index % 2) * 0.1} className="h-full">
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          </li>
        ))}
      </ul>
      {active && (
        <ProjectModal key={active.slug} project={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
