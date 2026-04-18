"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/landing/Container";
import { easeOutExpo, reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const steps = [
  {
    k: "01",
    title: "Upload",
    body: "Drop samples or scripts. We fingerprint timbre, cadence, and dynamics for a stable speaker profile.",
  },
  {
    k: "02",
    title: "Process",
    body: "Our models denoise, align, and optimize for clarity—without stripping the human imperfections that sell.",
  },
  {
    k: "03",
    title: "Generate",
    body: "Render speech in real time with expressive control: pacing, emphasis, language, and safety policies.",
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 35%"] });
  const pathOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.25, 1, 1, 0.25]);
  const pathDash = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.15, 1]);

  return (
    <section id="how" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <motion.div
          ref={ref}
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            variants={reveal}
            className={cn(
              "text-3xl sm:text-4xl font-semibold tracking-tight text-white",
              "font-[var(--font-display)]"
            )}
          >
            How it works
          </motion.h2>
          <motion.p variants={reveal} className="mt-3 max-w-2xl text-white/65 leading-relaxed">
            A tight three-step pipeline designed for creative teams: upload, process, generate—connected by a
            living timeline that animates as you scroll.
          </motion.p>

          <div className="relative mt-12">
            <div className="pointer-events-none absolute left-0 right-0 top-[44px] hidden lg:block">
              <motion.svg
                viewBox="0 0 1200 90"
                className="h-[90px] w-full"
                aria-hidden="true"
                style={{ opacity: pathOpacity }}
              >
                <defs>
                  <linearGradient id="line" x1="0" y1="0" x2="1200" y2="0">
                    <stop offset="0" stopColor="rgba(124,58,237,0.0)" />
                    <stop offset="0.2" stopColor="rgba(124,58,237,0.75)" />
                    <stop offset="0.55" stopColor="rgba(59,130,246,0.85)" />
                    <stop offset="0.85" stopColor="rgba(34,211,238,0.55)" />
                    <stop offset="1" stopColor="rgba(34,211,238,0.0)" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M40 55 C 220 20, 360 90, 520 55 C 680 20, 820 90, 980 55 C 1080 35, 1140 45, 1160 50"
                  fill="none"
                  stroke="url(#line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{ pathLength: pathDash }}
                />
              </motion.svg>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {steps.map((s, idx) => (
                <motion.div
                  key={s.k}
                  variants={reveal}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.22),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.16),transparent_45%)]" />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-white/50">Step</div>
                      <div className="rounded-full border border-white/12 bg-white/[0.04] px-2 py-1 text-[11px] text-white/60">
                        {s.k}
                      </div>
                    </div>
                    <div className="mt-3 text-lg font-semibold tracking-tight text-white/90">{s.title}</div>
                    <div className="mt-2 text-sm text-white/65 leading-relaxed">{s.body}</div>
                    <div className="mt-5 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-400/75 via-blue-400/65 to-cyan-300/60"
                        initial={{ width: "18%" }}
                        whileInView={{ width: `${42 + idx * 18}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 1.05, ease: easeOutExpo }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
