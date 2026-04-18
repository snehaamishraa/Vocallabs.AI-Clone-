"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function TypingText({
  text,
  className,
  speedMs = 28,
}: {
  text: string;
  className?: string;
  speedMs?: number;
}) {
  const reduce = useReducedMotion();
  const [len, setLen] = useState(0);

  useEffect(() => {
    setLen(0);
  }, [text]);

  useEffect(() => {
    if (reduce) {
      setLen(text.length);
      return;
    }
    if (len >= text.length) return;
    const jitter = Math.round(Math.random() * 10);
    const id = window.setTimeout(() => setLen((n) => n + 1), speedMs + jitter);
    return () => window.clearTimeout(id);
  }, [len, reduce, speedMs, text]);

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span>{text.slice(0, len)}</span>
      {!reduce && len < text.length ? (
        <motion.span
          aria-hidden
          className="inline-block h-[1em] w-px translate-y-[2px] bg-gradient-to-b from-white/70 to-white/10"
          animate={{ opacity: [1, 0.15] }}
          transition={{ duration: 0.75, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}
    </span>
  );
}
