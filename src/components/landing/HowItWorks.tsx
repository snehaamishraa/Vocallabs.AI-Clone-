"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/Container";
import { reveal, staggerContainer } from "@/lib/motion";

const steps = [
  {
    k: "01",
    title: "Connect your stack",
    body: "Bring your phone numbers, CRM, and knowledge sources. Map call types to policies and handoff rules.",
  },
  {
    k: "02",
    title: "Launch AI agents",
    body: "Pick a voice, tune tone and compliance, and deploy inbound + outbound workflows with guardrails.",
  },
  {
    k: "03",
    title: "Measure + improve",
    body: "Track outcomes, intent, and sentiment. Review transcripts and highlights to iterate quickly.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 lg:grid-cols-12 items-start"
        >
          <div className="lg:col-span-4">
            <motion.h2
              variants={reveal}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-[var(--font-display)]"
            >
              From idea to production—fast
            </motion.h2>
            <motion.p variants={reveal} className="mt-3 text-white/65 leading-relaxed">
              A clean setup flow with the right defaults: voice safety, human escalations, and
              analytics out of the box.
            </motion.p>
          </div>

          <motion.div
            variants={staggerContainer(0.08, 0.08)}
            className="lg:col-span-8 grid gap-4 sm:grid-cols-3"
          >
            {steps.map((s) => (
              <motion.div
                key={s.k}
                variants={reveal}
                className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs text-white/50">Step</div>
                  <div className="text-xs font-semibold text-white/60">{s.k}</div>
                </div>
                <div className="mt-3 text-base font-semibold text-white/90">{s.title}</div>
                <div className="mt-2 text-sm text-white/65 leading-relaxed">{s.body}</div>
                <div className="mt-5 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-violet-400/70 via-blue-400/60 to-cyan-300/60" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

