import type { ReactNode } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30",
  secondary:
    "border border-foreground/20 hover:border-accent hover:text-accent",
} as const;

export function ButtonLink({ href, children, variant = "primary" }: Props) {
  return (
    <Link href={href} className={`${base} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
