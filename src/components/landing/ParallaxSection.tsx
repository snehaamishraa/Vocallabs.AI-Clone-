"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export function ParallaxSection({
  className,
  children,
  intensity = 44,
}: {
  className?: string;
  children: React.ReactNode;
  intensity?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [intensity, -intensity]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div aria-hidden className="pointer-events-none absolute inset-0" style={{ y }}>
        <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-violet-600/18 blur-3xl" />
        <div className="absolute -right-44 bottom-0 h-[520px] w-[520px] rounded-full bg-cyan-400/14 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </motion.div>
      <div className="relative">{children}</div>
    </section>
  );
}
