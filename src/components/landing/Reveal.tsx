"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/cn";
import { revealSoft } from "@/lib/motion";

export function Reveal({
  className,
  children,
  asChild,
  ...props
}: MotionProps & {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
}) {
  const Comp = asChild ? motion.div : motion.div;
  return (
    <Comp
      className={cn(className)}
      variants={revealSoft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      {...props}
    >
      {children}
    </Comp>
  );
}

