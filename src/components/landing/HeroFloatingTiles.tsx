"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CalendarDays, BarChart3, Phone, Sparkles } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

function Tile({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 160, damping: 22 });
  const smy = useSpring(my, { stiffness: 160, damping: 22 });
  const rotateX = useTransform(smy, [-0.5, 0.5], [9, -9]);
  const rotateY = useTransform(smx, [-0.5, 0.5], [-10, 10]);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${smx}px ${smy}px, rgba(167,139,250,0.35), transparent 55%)`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, rotateX: 18 }}
      animate={{ opacity: 1, y: 0, rotateX: 12 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative [perspective:1200px]",
        "rounded-[22px] border border-white/[0.14] bg-gradient-to-b from-white/[0.09] to-white/[0.03]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_30px_80px_-40px_rgba(88,28,135,0.65)]",
        "backdrop-blur-xl",
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-70"
        style={{ backgroundImage: glow }}
      />
      <div className="relative h-full p-4">{children}</div>
    </motion.div>
  );
}

export function HeroFloatingTiles() {
  return (
    <div className="relative min-h-[420px] lg:min-h-[520px]">
      <div
        className="absolute inset-0 scale-[1.02]"
        style={{
          transform: "perspective(1400px) rotateX(14deg) rotateY(-12deg) translateZ(0)",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[2%] top-[6%] w-[46%] z-30"
        >
          <Tile delay={0.05} className="h-[168px]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">Assist</div>
                <div className="mt-1 text-sm font-semibold text-white/90">Smart scheduling</div>
              </div>
              <CalendarDays className="h-5 w-5 text-violet-300/90" />
            </div>
            <div className="mt-4 grid grid-cols-7 gap-1.5">
              {Array.from({ length: 14 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square rounded-md border border-white/10",
                    i === 8 ? "bg-violet-500/35 ring-1 ring-violet-400/40" : "bg-white/[0.04]"
                  )}
                />
              ))}
            </div>
          </Tile>
        </motion.div>

        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          className="absolute right-[0%] top-[0%] w-[52%] z-20"
        >
          <Tile delay={0.12} className="h-[200px] overflow-hidden">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">Voice</div>
                <div className="mt-1 text-sm font-semibold text-white/90">Natural waveform</div>
              </div>
              <Phone className="h-5 w-5 text-cyan-300/90" />
            </div>
            <div className="mt-5 flex h-24 items-end justify-between gap-1">
              {Array.from({ length: 28 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-white/10 via-violet-400/70 to-cyan-300/70"
                  animate={{ height: [10, 18 + (i % 5) * 5, 12] }}
                  transition={{ duration: 2.2 + (i % 7) * 0.08, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </Tile>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          className="absolute left-[8%] bottom-[4%] w-[48%] z-40"
        >
          <Tile delay={0.18} className="h-[176px]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">Insights</div>
                <div className="mt-1 text-sm font-semibold text-white/90">Quality trends</div>
              </div>
              <BarChart3 className="h-5 w-5 text-fuchsia-300/90" />
            </div>
            <div className="mt-4 h-20 rounded-xl border border-white/10 bg-black/30 p-3">
              <div className="flex items-end gap-1.5 h-full">
                {[40, 65, 48, 78, 55, 88, 62, 92].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-violet-600/30 to-blue-400/70" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </Tile>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
          className="absolute right-[6%] bottom-[10%] w-[44%] z-10"
        >
          <Tile delay={0.22} className="h-[150px]">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">Brand</div>
                <div className="mt-1 text-sm font-semibold text-white/90">On‑voice, on‑message</div>
              </div>
              <Sparkles className="h-5 w-5 text-amber-200/90" />
            </div>
            <p className="mt-3 text-[12px] leading-relaxed text-white/55">
              Lock tone, pacing, and pronunciation—then generate at scale without losing the human feel.
            </p>
          </Tile>
        </motion.div>
      </div>
    </div>
  );
}
