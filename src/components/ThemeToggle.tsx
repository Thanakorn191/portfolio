"use client";

import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

// Dark is the default; light is opt-in. The class on <html> is the source of truth, so no
// React state is needed and both icons are swapped with CSS (no hydration mismatch).
export function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Storage can be blocked; the toggle still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="group grid size-9 place-items-center rounded-full text-muted transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <Sun
        aria-hidden="true"
        className="hidden size-4 transition-transform duration-300 group-hover:rotate-45 motion-reduce:transition-none dark:block"
      />
      <Moon
        aria-hidden="true"
        className="size-4 transition-transform duration-300 group-hover:-rotate-12 motion-reduce:transition-none dark:hidden"
      />
    </button>
  );
}
