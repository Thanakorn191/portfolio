import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Binary,
  Cable,
  CircuitBoard,
  Code,
  Cpu,
  Globe,
  Layers,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { getTechLogo } from "@/lib/tech-logos";

type Props = {
  label: string;
};

// Generic icons for skills and topics that have no logo.
const symbols: Record<string, LucideIcon> = {
  microcontroller: Cpu,
  microcontrollers: Cpu,
  "embedded systems": Cpu,
  "embedded logic": Binary,
  "circuit design": CircuitBoard,
  "pcb design": CircuitBoard,
  "power electronics": Zap,
  "analog circuits": Activity,
  "hardware engineering": Wrench,
  "electrical wiring": Cable,
  "rest apis": Globe,
  "team project": Users,
  "full-stack": Layers,
};

const iconClass = "size-3.5 shrink-0";

export function TechBadge({ label }: Props) {
  const key = label.toLowerCase();
  const logo = getTechLogo(label);
  const Symbol = symbols[key] ?? Code;

  return (
    <li className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-xs text-accent">
      {logo ? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={iconClass}>
          <path d={logo.path} />
        </svg>
      ) : (
        <Symbol aria-hidden="true" className={iconClass} />
      )}
      {label}
    </li>
  );
}
