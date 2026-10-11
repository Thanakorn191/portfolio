import { ButtonLink } from "@/components/ButtonLink";
import { FadeIn } from "@/components/FadeIn";
import { profile } from "@/data/portfolio";

export function Hero() {
  const lines = profile.headline.split(" ");

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[70vh] flex-col justify-center py-8 sm:py-16"
    >
      <div aria-hidden="true" className="pcb-grid" />

      <FadeIn>
        <p className="font-mono text-xs uppercase tracking-widest text-muted sm:text-sm">
          {profile.role}
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1
          id="hero-heading"
          className="mt-4 text-5xl font-black uppercase leading-none tracking-tighter text-foreground dark:text-white sm:text-7xl md:text-8xl"
        >
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary}
        </p>
      </FadeIn>
      <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="#projects">View Work</ButtonLink>
        <ButtonLink href="#contact" variant="secondary">
          Contact
        </ButtonLink>
      </FadeIn>
    </section>
  );
}
