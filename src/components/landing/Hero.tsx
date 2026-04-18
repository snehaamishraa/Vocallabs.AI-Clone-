"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/Container";
import { Button } from "@/components/landing/Button";
import { easeOutExpo, reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const PARTICLES = Array.from({ length: 26 }, (_, i) => {
  const a = (i * 9973) % 1000 / 1000;
  const b = (i * 7919) % 1000 / 1000;
  return {
    left: `${8 + a * 84}%`,
    top: `${10 + b * 72}%`,
    dur: 9 + (i % 7),
    delay: (i % 5) * 0.35,
    size: i % 3 === 0 ? 2 : i % 3 === 1 ? 3 : 4,
  };
});

function HeroWave() {
  return (
    <svg
      viewBox="0 0 1400 320"
      className="w-[120%] max-w-none opacity-[0.55]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroWave" x1="0" y1="0" x2="1400" y2="0">
          <stop stopColor="rgba(124,58,237,0.0)" offset="0" />
          <stop stopColor="rgba(124,58,237,0.55)" offset="0.25" />
          <stop stopColor="rgba(59,130,246,0.65)" offset="0.55" />
          <stop stopColor="rgba(34,211,238,0.45)" offset="0.82" />
          <stop stopColor="rgba(34,211,238,0.0)" offset="1" />
        </linearGradient>
        <filter id="heroGlow">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M0 190 C 160 90, 320 250, 480 150 C 640 55, 800 260, 960 140 C 1120 35, 1280 240, 1400 120"
        stroke="url(#heroWave)"
        strokeWidth="3.5"
        filter="url(#heroGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.45, ease: easeOutExpo, delay: 0.12 }}
      />
      <motion.path
        d="M0 215 C 170 150, 330 240, 500 175 C 670 110, 820 255, 990 165 C 1160 80, 1280 235, 1400 170"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.65, ease: easeOutExpo, delay: 0.22 }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="aurora" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(124,58,237,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.72] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_at_center,black_52%,transparent_74%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, idx) => (
          <motion.span
            key={idx}
            className="absolute rounded-full bg-white/35 blur-[0.5px] shadow-[0_0_22px_rgba(124,58,237,0.35)]"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -14, 0], opacity: [0.15, 0.55, 0.15] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 w-[1400px] -translate-x-1/2">
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        >
          <HeroWave />
        </motion.div>
      </div>

      <Container className="relative pt-7 sm:pt-9">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-white/6 border border-white/12 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] grid place-items-center">
              <span className="h-3.5 w-3.5 rounded-md bg-gradient-to-br from-violet-400 via-blue-500 to-cyan-300 shadow-[0_0_24px_rgba(124,58,237,0.55)]" />
            </span>
            <span className="font-semibold tracking-tight text-white/90 font-[var(--font-display)]">
              Voxa
              <span className="text-white/55 font-medium"> Studio</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
            <a className="hover:text-white/90 transition" href="#features">
              Features
            </a>
            <a className="hover:text-white/90 transition" href="#voice-demo">
              Demo
            </a>
            <a className="hover:text-white/90 transition" href="#how">
              Workflow
            </a>
            <a className="hover:text-white/90 transition" href="#pricing">
              Pricing
            </a>
            <Button href="#voice-demo" variant="secondary" className="h-10 px-4">
              Try audio
            </Button>
          </nav>
        </header>

        <motion.div
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-5xl flex-col items-center pt-16 text-center sm:pt-20 lg:pt-24"
        >
          <motion.div
            variants={reveal}
            className="inline-flex items-center gap-2 rounded-full bg-white/6 border border-white/12 px-3 py-1 text-xs text-white/70 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.8)]" />
            Voice cloning • Neural TTS • Real-time streaming
          </motion.div>

          <motion.h1
            variants={reveal}
            className={cn(
              "mt-6 text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white",
              "font-[var(--font-display)]"
            )}
          >
            AI Voice Cloning
            <span className="block sm:inline sm:pl-3">
              <span className="bg-gradient-to-r from-violet-300 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
                & Text-to-Speech
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={reveal}
            className="mt-6 max-w-2xl text-pretty text-lg text-white/65 leading-relaxed"
          >
            Create lifelike voices, ship multilingual audio in minutes, and keep every output on-brand—
            with glass-smooth UX and motion that feels expensive.
          </motion.p>

          <motion.div variants={reveal} className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button href="#voice-demo" variant="primary" className="h-12 px-7 text-[15px]">
              Try Now
            </Button>
            <Button href="#voice-demo" variant="secondary" className="h-12 px-7 text-[15px]">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {[
              ["Latency", "~300ms feel", "Streaming-first inference"],
              ["Quality", "Studio polish", "Noise-aware rendering"],
              ["Control", "Style + safety", "Guardrails built-in"],
            ].map(([a, b, c]) => (
              <motion.div
                key={a}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
              >
                <div className="text-xs text-white/50">{a}</div>
                <div className="mt-1 text-base font-semibold text-white/85">{b}</div>
                <div className="mt-1 text-xs text-white/55">{c}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
