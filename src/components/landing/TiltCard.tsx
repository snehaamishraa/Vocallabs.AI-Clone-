"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export function TiltCard({
  className,
  children,
  intensity = 10,
}: {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.35 });
  const smy = useSpring(my, { stiffness: 220, damping: 24, mass: 0.35 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-intensity, intensity]);

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className={cn("relative [perspective:1200px]", className)}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
