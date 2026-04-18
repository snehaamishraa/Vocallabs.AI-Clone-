"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/landing/Container";
import { easeOutExpo, reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const items = [
  {
    quote:
      "We replaced a week of pickup sessions with a voice profile our producers actually trust. The motion polish in the product matches the audio quality—rare.",
    name: "Maya Chen",
    title: "Head of Content, Lumen Labs",
  },
  {
    quote:
      "Latency feels invisible. Our interactive demo went from ‘cool prototype’ to ‘production-ready’ once streaming stayed stable under real network conditions.",
    name: "Jordan Patel",
    title: "Product Lead, Arcade",
  },
  {
    quote:
      "The carousel UI is silly-good. Glass cards, crisp type, and animations that don’t fight the content—exactly what we wanted for an AI audio brand.",
    name: "Elena Ruiz",
    title: "Creative Director, Helio",
  },
];

export function Testimonials() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIdx((n) => (n + 1) % items.length), 5200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const t = items[idx]!;

  function prev() {
    setIdx((n) => (n - 1 + items.length) % items.length);
  }

  function next() {
    setIdx((n) => (n + 1) % items.length);
  }

  return (
    <section className="relative scroll-mt-24">
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
            Proof, not promises
          </motion.h2>
          <motion.p variants={reveal} className="mt-3 max-w-2xl text-white/65 leading-relaxed">
            A sliding carousel with glass surfaces—built for the kind of trust signals investors and buyers scan for.
          </motion.p>

          <motion.div variants={reveal} className="relative mt-10">
            <div className="pointer-events-none absolute -inset-10 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.18),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.12),transparent_55%)] blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-70px_rgba(124,58,237,0.65)]">
              <div className="absolute inset-0 opacity-[0.55] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_55%,transparent_80%)]" />

              <div className="relative p-6 sm:p-10">
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/65">
                    <Quote className="h-3.5 w-3.5 text-white/45" />
                    Customer stories
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      type="button"
                      onClick={prev}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/75"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={next}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] text-white/75"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="relative mt-8 min-h-[190px] sm:min-h-[170px]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={t.name}
                      initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                      transition={{ duration: 0.65, ease: easeOutExpo }}
                      drag={reduce ? false : "x"}
                      dragElastic={0.18}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, info) => {
                        if (info.offset.x > 70) prev();
                        if (info.offset.x < -70) next();
                      }}
                      className="cursor-grab active:cursor-grabbing"
                    >
                      <div className="text-xl sm:text-2xl font-medium tracking-tight text-white/85 leading-snug">
                        “{t.quote}”
                      </div>
                      <div className="mt-8 flex items-center gap-3">
                        <div className="h-11 w-11 rounded-2xl border border-white/12 bg-gradient-to-br from-violet-400/35 via-blue-400/25 to-cyan-300/20 shadow-[0_0_26px_-14px_rgba(124,58,237,0.95)]" />
                        <div>
                          <div className="text-sm font-semibold text-white/85">{t.name}</div>
                          <div className="text-xs text-white/50">{t.title}</div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      className={cn(
                        "h-2 rounded-full transition-all",
                        i === idx ? "w-8 bg-gradient-to-r from-violet-400 to-cyan-300" : "w-2 bg-white/20 hover:bg-white/30"
                      )}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
