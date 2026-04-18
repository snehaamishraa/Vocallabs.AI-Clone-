"use client";

import { useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

import { CursorGlow } from "@/components/providers/CursorGlow";

export function AppEffects({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        duration: reduceMotion ? 0 : 1.12,
        smoothWheel: !reduceMotion,
        wheelMultiplier: reduceMotion ? 1 : 0.92,
        touchMultiplier: 1.85,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      <div className="grain" aria-hidden />
      <CursorGlow />
      {children}
    </ReactLenis>
  );
}
