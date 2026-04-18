"use client";

import { motion } from "framer-motion";
import { AudioLines, Cpu, Globe2, Mic2, SlidersHorizontal, Sparkles } from "lucide-react";
import { Container } from "@/components/landing/Container";
import { TiltCard } from "@/components/landing/TiltCard";
import { ParallaxSection } from "@/components/landing/ParallaxSection";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const items = [
  {
    icon: Mic2,
    title: "Clone with character",
    description: "Capture timbre and micro-expressiveness—great for narrators, hosts, and brand voices.",
  },
  {
    icon: Sparkles,
    title: "Expressive TTS",
    description: "Dial in emphasis, pacing, and breath. Make promos punchy and support calm.",
  },
  {
    icon: Globe2,
    title: "Multilingual ready",
    description: "Ship localized audio without re-recording everything from scratch.",
  },
  {
    icon: Cpu,
    title: "Realtime streaming",
    description: "Low-latency playback for interactive experiences, bots, and live previews.",
  },
  {
    icon: SlidersHorizontal,
    title: "Creative controls",
    description: "Style presets, pronunciation locks, and SSML-friendly structure for teams.",
  },
  {
    icon: AudioLines,
    title: "Mix-ready output",
    description: "Cleaner stems, consistent loudness, and less time fixing artifacts in post.",
  },
];

export function Features() {
  return (
    <ParallaxSection className="scroll-mt-24" intensity={38}>
      <section id="features">
        <Container className="py-16 sm:py-20">
          <motion.div
            variants={staggerContainer(0.12, 0.06)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2
              variants={reveal}
              className={cn(
                "text-3xl sm:text-4xl font-semibold tracking-tight text-white",
                "font-[var(--font-display)]"
              )}
            >
              Built for teams who ship audio weekly
            </motion.h2>
            <motion.p variants={reveal} className="mt-3 max-w-2xl text-white/65 leading-relaxed">
              Premium cards, tactile hover, and subtle depth—so your product feels as good as it sounds.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.08, 0.1)}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((it) => (
                <TiltCard key={it.title} intensity={9}>
                  <motion.div
                    variants={reveal}
                    whileHover={{ scale: 1.035 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className="group relative h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.18),transparent_45%)]" />
                    <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_0_1px_rgba(124,58,237,0.22),0_20px_90px_-55px_rgba(59,130,246,0.85)]" />

                    <div className="relative">
                      <motion.div
                        whileHover={{ rotate: [-1, 1, -1, 0], scale: 1.06 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="h-11 w-11 rounded-xl border border-white/12 bg-white/6 backdrop-blur-xl grid place-items-center shadow-[0_0_24px_-10px_rgba(124,58,237,0.85)]"
                      >
                        <it.icon className="h-5 w-5 text-white/80" />
                      </motion.div>
                      <div className="mt-4 text-lg font-semibold tracking-tight text-white/90">{it.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/65">{it.description}</div>
                    </div>
                  </motion.div>
                </TiltCard>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </ParallaxSection>
  );
}
