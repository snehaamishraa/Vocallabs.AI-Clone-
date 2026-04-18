"use client";

import { motion } from "framer-motion";

export function ReactiveWaveform({
  levels,
  isPlaying,
}: {
  levels: number[];
  isPlaying: boolean;
}) {
  return (
    <div className="flex h-16 items-end justify-center gap-[3px] px-2">
      {levels.map((v, i) => {
        const h = isPlaying ? 8 + v * 52 : 6 + (i % 5) * 0.35;
        return (
          <motion.div
            key={`bar-${i}`}
            className="w-[3px] max-w-[3px] rounded-full bg-gradient-to-t from-white/10 via-violet-300/70 to-cyan-200/75 shadow-[0_0_18px_-8px_rgba(124,58,237,0.9)]"
            animate={{ height: h }}
            transition={{ type: "spring", stiffness: 620, damping: 38, mass: 0.18 }}
          />
        );
      })}
    </div>
  );
}
