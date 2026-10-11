import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navLinks, profile } from "@/data/portfolio";

const focusRing =
  "rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/70 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="#top"
          className={`font-mono text-sm text-accent ${focusRing}`}
        >
          <span aria-hidden="true" className="sm:hidden">
            {initials}
          </span>
          <span className="sr-only sm:not-sr-only">{profile.name}</span>
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex gap-5 text-sm sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-muted transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
