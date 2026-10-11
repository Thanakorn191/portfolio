import { TechBadge } from "@/components/TechBadge";
import type { Project } from "@/data/portfolio";

type Props = {
  project: Project;
  onOpen: () => void;
};

const linkClass =
  "relative z-10 rounded text-sm font-medium text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ProjectCard({ project, onOpen }: Props) {
  const { title, description, tags, liveUrl, repoUrl } = project;

  return (
    <article className="relative flex h-full flex-col rounded-lg border border-foreground/10 p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 motion-reduce:transform-none motion-reduce:transition-none">
      <h3 className="font-medium">
        {/* The ::after overlay stretches this button over the whole card; links sit above it. */}
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="text-left after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent"
        >
          {title}
          <span className="sr-only">, view details</span>
        </button>
      </h3>
      <p className="mt-2 text-sm text-muted">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {tags.map((tag) => (
          <TechBadge key={tag} label={tag} />
        ))}
      </ul>

      {(liveUrl || repoUrl) && (
        <div className="mt-auto flex gap-4 pt-5">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Demo
              <span className="sr-only"> of {title} (opens in a new tab)</span>
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
              <span className="sr-only">
                {" "}
                repository for {title} (opens in a new tab)
              </span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
