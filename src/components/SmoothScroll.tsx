"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
};

export function SmoothScroll({ children }: Props) {
  const reduceMotion = useReducedMotion();

  // With reduced motion, wheel and anchor scrolling fall back to native jumps.
  return (
    <ReactLenis root options={{ smoothWheel: !reduceMotion, anchors: !reduceMotion }}>
      {children}
    </ReactLenis>
  );
}
