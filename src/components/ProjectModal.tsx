"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { Check, ExternalLink, X } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { ProjectGallery, iconButton } from "@/components/ProjectGallery";
import { TechBadge } from "@/components/TechBadge";
import type { Project } from "@/data/portfolio";

type Props = {
  project: Project;
  onClose: () => void;
};

const action =
  "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
const heading = "text-xs font-medium uppercase tracking-wider text-muted";

export function ProjectModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();
  const { slug, title, category, description, overview, features, tags, images, repoUrl, liveUrl } = project;

  // Native modal dialog gives us focus trapping, Esc to close and focus return for free.
  // Every close goes through dialog.close(), whose "close" event is the only path to onClose;
  // closing it from the effect cleanup would fire that event during React's strict-mode remount.
  const close = () => ref.current?.close();

  useEffect(() => {
    const dialog = ref.current;
    if (dialog && !dialog.open) dialog.showModal();
    lenis?.stop();
    return () => lenis?.start();
  }, [lenis]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={`${slug}-modal-title`}
      onClose={onClose}
      onClick={(event) => event.target === event.currentTarget && close()}
      data-lenis-prevent
      className="w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-foreground/10 bg-background p-0 text-foreground backdrop:bg-background/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        {images && images.length > 0 && <ProjectGallery title={title} images={images} />}

        <div className="space-y-8 p-5 sm:p-8">
          {/* Right padding keeps the title clear of the close button when there is no image. */}
          <header className="pr-12">
            {category && <p className="font-mono text-xs text-accent">{category}</p>}
            <h2 id={`${slug}-modal-title`} className="mt-2 text-2xl font-semibold tracking-tight">
              {title}
            </h2>
            {(repoUrl || liveUrl) && (
              <div className="mt-5 flex flex-wrap gap-3">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={`${action} bg-accent text-background hover:bg-accent/90`}>
                    <ExternalLink aria-hidden="true" className="size-4" />
                    Live Demo<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
                {repoUrl && (
                  <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={`${action} border border-foreground/20 hover:border-foreground/40`}>
                    <GithubIcon className="size-4" />
                    GitHub<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </div>
            )}
          </header>

          <section>
            <h3 className={heading}>Overview</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{overview ?? description}</p>
          </section>

          {features && features.length > 0 && (
            <section>
              <h3 className={heading}>Key Features</h3>
              <ul className="mt-3 space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm">
                    <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h3 className={heading}>Tech Stack</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <TechBadge key={tag} label={tag} />
              ))}
            </ul>
          </section>
        </div>

        <button type="button" onClick={close} aria-label="Close" className={`${iconButton} absolute right-3 top-3`} autoFocus>
          <X aria-hidden="true" className="size-5" />
        </button>
      </div>
    </dialog>
  );
}
