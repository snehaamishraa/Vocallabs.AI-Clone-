"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/Container";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const pillars = [
  {
    label: "Global Telephony",
    title: "Phone numbers in 50+ countries",
    body: "Any protocol, any region, any destination—without jumping between dashboards.",
    image: "/landing_page/a5b0f0a3-3f37-490d-beeb-caefd8266d06.png",
  },
  {
    label: "API-native",
    title: "Build and ship with clean APIs",
    body: "Modern interfaces that stay understandable when the product gets complicated.",
    image: "/landing_page/7c9f694e-0652-4d1f-babc-58a5216ea298.png",
  },
  {
    label: "Model routing",
    title: "Route to any LLM, TTS, or ASR provider",
    body: "Choose the right model per call, tenant, or locale with live policy control.",
    image: "/landing_page/4a3868af-c0d6-4b44-92cf-ca43b4ed31ce.png",
  },
  {
    label: "Quality gates",
    title: "Test your infrastructure before going live",
    body: "Synthetic calls and regression flows that catch issues before customers do.",
    image: "/landing_page/8739a565-a3dc-426c-8110-f1cc95cf1f8a.png",
  },
  {
    label: "Traffic splitting",
    title: "Split traffic across AI providers",
    body: "Shift calls in real time to keep performance, cost, and quality in balance.",
    image: "/landing_page/40138650-667f-4161-a901-b969a7d1915c.png",
  },
  {
    label: "Bring your own models",
    title: "Host your own stack on our infra",
    body: "Keep LLM, TTS, or ASR under your control while using the same telephony plane.",
    image: "/landing_page/c69ea3fd-5ff2-4abe-9d8d-eec4c31bc31a.png",
  },
] as const;

function Visual({ image, title }: { image: string; title: string }) {
  return (
    <div className="relative mx-auto h-36 w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.22),transparent_55%)]" />
      <img src={`https://cdn.vocallabs.ai${image}`} alt={title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-90" />
    </div>
  );
}

export function PillarsSection() {
  return (
    <section id="solutions" className="relative scroll-mt-24 border-t border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)]" />
      <Container className="relative py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.1, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="text-center"
        >
          <motion.h2
            variants={reveal}
            className={cn("text-3xl sm:text-5xl font-semibold tracking-[-0.02em] text-white font-[var(--font-display)]")}
          >
            Reliable. Scalable. Secure.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.article
              key={p.title}
              variants={reveal}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900/55 to-black/40 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.18),transparent_55%)]" />
              <div className="relative">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-white/45">{p.label}</div>
                <h3 className="mt-2 text-base font-semibold tracking-tight text-white/92 leading-snug font-[var(--font-display)]">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-[1.72]">{p.body}</p>
                <div className="mt-5"><Visual image={p.image} title={p.title} /></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
