"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/Container";
import { Reveal } from "@/components/landing/Reveal";

const logos = [
  "Northpeak",
  "Helio",
  "Arcade",
  "CloudNine",
  "Juniper",
  "Veridian",
  "Lumen",
  "Kite",
  "Signal",
  "Orbit",
];

export function SocialProof() {
  const row = [...logos, ...logos];

  return (
    <section className="relative">
      <Container className="py-10">
        <Reveal className="text-center text-xs tracking-wide text-white/45">
          Used by teams who care about sound, speed, and conversion
        </Reveal>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060612] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060612] to-transparent" />

          <div className="overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-10 px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 34, ease: "linear", repeat: Infinity }}
            >
              {row.map((name, idx) => (
                <div
                  key={`${name}-${idx}`}
                  className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"
                >
                  <span className="text-sm font-semibold tracking-tight text-white/55">{name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
