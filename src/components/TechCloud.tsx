"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

// Heavy (canvas + react-dom/server) and below the fold, so load it on demand.
const IconCloud = dynamic(
  () => import("@/components/ui/icon-cloud").then((mod) => mod.IconCloud),
  {
    ssr: false,
  },
);

export type CloudLogo = {
  label: string;
  path: string;
};

type Props = {
  logos: CloudLogo[];
};

// The canvas can't read CSS variables, so resolve the current accent color to a literal.
function readAccent(): string {
  const channels = getComputedStyle(document.documentElement).getPropertyValue(
    "--accent",
  );
  return `rgb(${channels.trim().split(/\s+/).join(", ")})`;
}

export function TechCloud({ logos }: Props) {
  const [color, setColor] = useState<string | null>(null);

  // Re-read the accent whenever the theme class on <html> changes.
  useEffect(() => {
    setColor(readAccent());
    const observer = new MutationObserver(() => setColor(readAccent()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const icons = useMemo(
    () =>
      color
        ? logos.map(({ label, path }) => (
            <svg
              key={label}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              fill={color}
            >
              <path d={path} />
            </svg>
          ))
        : undefined,
    [logos, color],
  );

  return icons ? <IconCloud icons={icons} /> : null;
}
