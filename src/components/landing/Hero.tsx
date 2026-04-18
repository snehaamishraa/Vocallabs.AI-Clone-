"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/landing/Container";
import { NavBar } from "@/components/landing/NavBar";
import { cn } from "@/lib/cn";
import { reveal, staggerContainer } from "@/lib/motion";

function LightStreaks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-[18%] top-[24%] h-[10px] w-[76%] rotate-[13deg] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(139,92,246,0.12)_12%,rgba(168,85,247,0.95)_50%,rgba(216,180,254,0.55)_66%,transparent_100%)] blur-[1px]"
        animate={{ opacity: [0.3, 0.85, 0.35], x: [0, 18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-[6%] top-[29%] h-[8px] w-[78%] rotate-[13deg] rounded-full bg-[linear-gradient(90deg,transparent_0%,rgba(139,92,246,0.12)_10%,rgba(168,85,247,0.7)_52%,rgba(216,180,254,0.32)_70%,transparent_100%)] blur-[1px]"
        animate={{ opacity: [0.22, 0.68, 0.25], x: [0, 14, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
      />
      <motion.div
        className="absolute right-[-2%] top-[-4%] h-[78%] w-[28%] rotate-[4deg] rounded-full bg-[linear-gradient(180deg,rgba(168,85,247,0.58)_0%,rgba(139,92,246,0.2)_28%,transparent_82%)] blur-[22px]"
        animate={{ opacity: [0.2, 0.52, 0.24], y: [0, 12, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] bottom-[3%] h-[58%] w-[30%] rotate-[-28deg] rounded-full bg-[linear-gradient(180deg,rgba(168,85,247,0.42)_0%,rgba(139,92,246,0.16)_30%,transparent_82%)] blur-[24px]"
        animate={{ opacity: [0.16, 0.42, 0.2], x: [0, -12, 0] }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(76,29,149,0.06),transparent_56%)]" />
    </div>
  );
}

function DotWaveform() {
  const reduceMotion = useReducedMotion();
  const cols = 92;
  const rows = 8;

  return (
    <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] pt-4 sm:pt-6">
      <div className="mx-auto flex min-h-[220px] w-full items-end justify-center gap-[4px] opacity-85 [mask-image:linear-gradient(90deg,transparent,black_4%,black_96%,transparent)] sm:min-h-[240px]">
        {Array.from({ length: cols }).map((_, i) => (
          <div key={i} className="flex flex-col-reverse gap-[4px]">
            {Array.from({ length: rows }).map((__, r) => {
              const on = (i * 13 + r * 7) % 15 > 6;

              return (
                <motion.span
                  key={r}
                  className={cn("h-1.5 w-1.5 rounded-full", on ? "bg-white/26" : "bg-white/[0.07]")}
                  animate={
                    reduceMotion
                      ? undefined
                      : { opacity: on ? [0.32, 0.82, 0.42] : [0.08, 0.22, 0.08] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: 2.2 + (i % 8) * 0.05,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.01,
                        }
                  }
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-0">
      <div className="absolute inset-0 bg-[#050515]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_12%,rgba(48,33,129,0.42),transparent_52%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_82%,rgba(76,29,149,0.16),transparent_58%)]" />
        <LightStreaks />
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_80%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[42%] bg-[linear-gradient(180deg,transparent_0%,rgba(5,5,21,0.56)_35%,rgba(5,5,21,0.95)_100%)]" />
      </div>

      <NavBar />

      <Container className="relative flex min-h-[calc(100svh-92px)] flex-col justify-center pb-0 pt-6 sm:pt-8 lg:pt-10">
        <motion.div
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-5xl -translate-y-2 flex-col items-center text-center sm:-translate-y-4 lg:-translate-y-6"
        >
          <motion.h1
            variants={reveal}
            className={cn(
              "max-w-5xl text-balance text-[2.95rem] font-semibold tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.9rem] lg:leading-[0.96]",
              "font-[var(--font-display)]"
            )}
          >
            Deploy and Scale <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">Voice AI</span>
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-5 max-w-2xl text-pretty text-[1.04rem] leading-[1.8] tracking-[0.01em] text-white/78 sm:text-[1.14rem]"
          >
            Voice AI infrastructure for developers. Telephony + AI model hosting that
            scales from zero to millions of concurrent calls.
          </motion.p>
          <motion.div variants={reveal} className="mt-8">
            <Link
              href="#voice-demo"
              className={cn(
                "inline-flex items-center gap-3 rounded-full border border-violet-400/15 bg-[#1a1230]/90 px-7 py-3.5",
                "text-sm font-semibold text-white/95 backdrop-blur-xl",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_32px_rgba(124,58,237,0.42),0_18px_60px_-40px_rgba(124,58,237,0.78)]",
                "transition hover:border-violet-300/30 hover:bg-[#20163b]/95"
              )}
            >
              <span>Talk to an Expert</span>
              <Phone className="h-4 w-4 text-white/90" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute inset-x-0 bottom-0 pb-0">
          <DotWaveform />
        </div>
      </Container>
    </section>
  );
}
