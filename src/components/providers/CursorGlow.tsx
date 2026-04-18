"use client";

import { motion, useMotionTemplate, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 140, damping: 22, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 140, damping: 22, mass: 0.35 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${sx}px ${sy}px, rgba(124,58,237,0.22), rgba(59,130,246,0.10) 35%, transparent 60%)`;

  useEffect(() => {
    const mq = window.matchMedia("(pointer:fine)");
    const apply = () => setEnabled(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[70] mix-blend-screen"
      style={{ backgroundImage: glow }}
    />
  );
}
