"use client";

import { motion } from "framer-motion";
import { AudioLines, Gauge, Rocket, ShieldCheck, Workflow, Layers3 } from "lucide-react";
import { Container } from "@/components/landing/Container";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function BentoFeatures() {
  return (
    <section id="platform" className="relative scroll-mt-24 border-t border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.14),transparent_55%)]" />
      <Container className="relative py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.1, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h2
            variants={reveal}
            className={cn(
              "max-w-4xl text-balance text-[2.2rem] font-semibold leading-[0.98] tracking-[-0.02em] text-white sm:text-[3.15rem] lg:text-[4.35rem]",
              "font-[var(--font-display)]"
            )}
          >
            <span className="text-white/95">Voice AI infrastructure</span>
            <span className="mt-1 block bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text font-bold text-transparent drop-shadow-[0_10px_30px_rgba(168,85,247,0.35)] sm:mt-2">
              built to scale.
            </span>
          </motion.h2>
          <motion.div variants={reveal} className="mt-8">
            <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-violet-300/35 bg-gradient-to-b from-[#261764] via-[#201057] to-[#140b3d] p-1 shadow-[0_20px_60px_-30px_rgba(124,58,237,0.65)]">
              <div className="rounded-[1.7rem] border border-white/20 bg-[#0a0a12] p-2 sm:p-3">
                <div className="relative aspect-[16/9] overflow-hidden rounded-[1.3rem] border border-white/10 bg-black">
                  <iframe
                    src="https://www.youtube.com/embed/XeIrrErzEbw?autoplay=1&mute=1&loop=1&playlist=XeIrrErzEbw&playsinline=1&rel=0&modestbranding=1"
                    title="VocalLabs Demo Video"
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-4"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.22),transparent_55%)]" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Telephony</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Any Protocol. One API.</h3>
                </div>
                <Workflow className="h-5 w-5 text-violet-300/90" />
              </div>
              <p className="relative mt-3 text-sm leading-[1.75] text-white/67">
                SIP, WebRTC, and PSTN unified under a single developer-friendly interface.
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-4"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.18),transparent_55%)]" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Reliability</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/92 font-[var(--font-display)]">99.9% Uptime. Always.</h3>
                </div>
                <ShieldCheck className="h-5 w-5 text-cyan-300/90" />
              </div>
              <p className="relative mt-3 text-sm leading-[1.75] text-white/67">
                Global redundancy and automatic failover, built into every call.
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-4"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.2),transparent_60%)]" />
              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Scale</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Millions of Concurrent Calls</h3>
                </div>
                <Gauge className="h-5 w-5 text-fuchsia-300/85" />
              </div>
              <p className="relative mt-3 text-sm leading-[1.75] text-white/67">
                Horizontal auto-scaling from a single call to millions without manual provisioning.
              </p>
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-7"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.2),transparent_55%)]" />
              <div className="relative grid gap-6 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">AI Stack</div>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Host Your AI Models</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/67">
                    Co-locate your LLM, TTS, and ASR alongside telephony for the lowest possible latency.
                  </p>
                </div>
                <div className="relative h-40 overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.25),transparent_62%)]" />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-gradient-to-br from-violet-500/25 to-blue-500/15 shadow-[0_0_40px_-10px_rgba(59,130,246,0.75)]"
                    animate={{ rotateZ: [0, 6, -4, 0], y: [0, -6, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                    style={{ rotateX: 68 }}
                    animate={{ rotateZ: [0, 360] }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  />
                  <Layers3 className="absolute bottom-3 right-3 h-5 w-5 text-white/35" />
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.14),transparent_55%)]" />
              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start">
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Dev-First</div>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Ship in Hours, Not Months</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-white/67">
                    Clean REST APIs, typed SDKs, and webhooks—your first call is minutes away.
                  </p>
                </div>
                <div className="flex h-24 w-full items-center justify-center rounded-2xl border border-white/10 bg-black/30 lg:w-44">
                  <Rocket className="h-8 w-8 text-blue-300/80" />
                </div>
              </div>
            </motion.article>

            <motion.article
              variants={reveal}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl lg:col-span-12"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_55%)]" />
              <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Latency</div>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Sub-300ms. Every Call.</h3>
                  <p className="mt-3 max-w-xl text-sm leading-[1.75] text-white/67">
                    Real-time barge-in, live context updates, and studio-grade audio at any scale.
                  </p>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center gap-2 lg:justify-end">
                  {[12, 18, 26, 34, 44, 52, 44, 34, 26, 18, 12].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-2 rounded-full bg-gradient-to-t from-white/10 via-violet-400/70 to-cyan-200/75"
                      animate={{ height: [10, h, 14] }}
                      transition={{ duration: 1.6, delay: i * 0.05, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                    />
                  ))}
                  <AudioLines className="ml-2 h-6 w-6 text-amber-200/90" />
                </div>
              </div>
            </motion.article>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
