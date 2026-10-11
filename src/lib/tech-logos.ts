import type { SimpleIcon } from "simple-icons";
import {
  siArduino,
  siCss,
  siCplusplus,
  siGit,
  siHtml5,
  siJavascript,
  siLucide,
  siNextdotjs,
  siOpenjdk,
  siPhp,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVite,
} from "simple-icons";

// Real logos for known technologies; matched by lowercase label.
const logos: Record<string, SimpleIcon> = {
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  "tailwind css": siTailwindcss,
  css: siCss,
  html: siHtml5,
  git: siGit,
  "next.js": siNextdotjs,
  vite: siVite,
  lucide: siLucide,
  python: siPython,
  java: siOpenjdk,
  php: siPhp,
  arduino: siArduino,
  "c++": siCplusplus,
  "c/c++": siCplusplus,
};

export function getTechLogo(label: string): SimpleIcon | undefined {
  return logos[label.toLowerCase()];
}
