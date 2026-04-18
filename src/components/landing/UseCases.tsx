"use client";

import { motion } from "framer-motion";
import { Headphones, Mic, Radio, Sparkles, Video, Waves } from "lucide-react";
import { Container } from "@/components/landing/Container";
import { TiltCard } from "@/components/landing/TiltCard";
import { ParallaxSection } from "@/components/landing/ParallaxSection";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const cases = [
  {
    title: "Marketing",
    icon: Sparkles,
    description: "Launch faster with consistent voice across ads, landing pages, and lifecycle email.",
  },
  {
    title: "Podcasts",
    icon: Mic,
    description: "Generate pickups, intros, and sponsor reads with a signature tone.",
  },
  {
    title: "YouTube",
    icon: Video,
    description: "Narrate edits, explainers, and shorts with tight pacing and clean diction.",
  },
  {
    title: "E-learning",
    icon: Headphones,
    description: "Scale course audio with pronunciation control and calm delivery.",
  },
  {
    title: "Audiobooks",
    icon: Waves,
    description: "Keep characters distinct with style presets and long-form stability.",
  },
  {
    title: "Games & apps",
    icon: Radio,
    description: "Ship reactive VO lines and UI prompts with streaming-friendly latency.",
  },
];

export function UseCases() {
  return (
    <ParallaxSection intensity={32}>
      <section className="scroll-mt-24">
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
              Use cases that love great voice UX
            </motion.h2>
            <motion.p variants={reveal} className="mt-3 max-w-2xl text-white/65 leading-relaxed">
              Cards lift, glow, and tilt—because “premium” is partly tactile, partly motion, partly craft.
            </motion.p>

            <motion.div
              variants={staggerContainer(0.08, 0.08)}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {cases.map((c) => (
                <TiltCard key={c.title} intensity={8}>
                  <motion.div
                    variants={reveal}
                    whileHover={{ y: -6, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-2xl"
                  >
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_15%,rgba(124,58,237,0.22),transparent_55%),radial-gradient(circle_at_90%_70%,rgba(34,211,238,0.16),transparent_55%)]" />
                    <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[0_0_0_1px_rgba(124,58,237,0.22),0_24px_90px_-55px_rgba(59,130,246,0.85)]" />

                    <div className="relative flex items-start gap-3">
                      <div className="h-11 w-11 rounded-xl border border-white/12 bg-white/6 backdrop-blur-xl grid place-items-center">
                        <c.icon className="h-5 w-5 text-white/80" />
                      </div>
                      <div>
                        <div className="text-lg font-semibold tracking-tight text-white/90">{c.title}</div>
                        <div className="mt-2 text-sm text-white/65 leading-relaxed">{c.description}</div>
                      </div>
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
