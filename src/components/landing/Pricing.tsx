"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Container } from "@/components/landing/Container";
import { Button } from "@/components/landing/Button";
import { easeOutExpo, reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Plan = {
  name: string;
  monthly: number | null;
  desc: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Creator",
    monthly: 29,
    desc: "For solo makers shipping clips, shorts, and fast experiments.",
    features: ["2 custom voices", "Standard quality", "Commercial use (starter)", "Email support"],
    cta: "Start creating",
  },
  {
    name: "Studio",
    monthly: 79,
    desc: "For teams who need brand consistency and higher throughput.",
    features: [
      "10 custom voices",
      "Priority rendering",
      "SSML + style controls",
      "Streaming endpoints",
      "Shared workspace",
    ],
    cta: "Upgrade to Studio",
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthly: null,
    desc: "For regulated orgs and bespoke deployment requirements.",
    features: ["Custom contracts", "VPC / private options", "Audit logs + RBAC", "Dedicated success"],
    cta: "Talk to us",
  },
];

function money(n: number) {
  return `$${n}`;
}

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <motion.h2
                variants={reveal}
                className={cn(
                  "text-3xl sm:text-4xl font-semibold tracking-tight text-white",
                  "font-[var(--font-display)]"
                )}
              >
                Simple pricing, serious output
              </motion.h2>
              <motion.p variants={reveal} className="mt-3 text-white/65 leading-relaxed">
                Toggle billing and watch the numbers settle—no gimmicks, just clear tiers for growing teams.
              </motion.p>
            </div>

            <motion.div variants={reveal} className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] p-1 backdrop-blur-xl">
              {(
                [
                  ["monthly", "Monthly"],
                  ["yearly", "Yearly (−2 mo)"],
                ] as const
              ).map(([key, label]) => {
                const on = (key === "yearly") === yearly;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setYearly(key === "yearly")}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-xs font-semibold transition",
                      on ? "text-white/90" : "text-white/55 hover:text-white/75"
                    )}
                  >
                    {on ? (
                      <motion.span
                        layoutId="billing-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/35 via-blue-500/25 to-cyan-400/20 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer(0.1, 0.08)}
            className="mt-10 grid gap-4 lg:grid-cols-3"
          >
            {plans.map((p) => {
              const price =
                p.monthly == null ? null : yearly ? Math.round(p.monthly * 10) : p.monthly;

              return (
                <motion.div
                  key={p.name}
                  variants={reveal}
                  whileHover={{ y: -6, scale: p.highlighted ? 1.02 : 1.015 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className={cn(
                    "relative overflow-hidden rounded-2xl border bg-white/[0.05] backdrop-blur-2xl p-6",
                    p.highlighted
                      ? "border-white/20 shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_40px_120px_-70px_rgba(59,130,246,0.9)]"
                      : "border-white/10"
                  )}
                >
                  {p.highlighted ? (
                    <div className="absolute -top-3 left-6 rounded-full border border-white/18 bg-gradient-to-r from-violet-500/40 via-blue-500/30 to-cyan-400/25 px-3 py-1 text-[11px] text-white/80 backdrop-blur-xl">
                      Most popular
                    </div>
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold text-white/90">{p.name}</div>
                      <div className="mt-1 text-sm text-white/55">{p.desc}</div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-end gap-2">
                    <AnimatePresence mode="popLayout" initial={false}>
                      <motion.div
                        key={`${p.name}-${yearly}-${price ?? "custom"}`}
                        initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                        transition={{ duration: 0.55, ease: easeOutExpo }}
                        className="text-4xl font-semibold tracking-tight text-white/90"
                      >
                        {price == null ? "Custom" : money(price)}
                      </motion.div>
                    </AnimatePresence>
                    {price == null ? (
                      <div className="pb-2 text-xs text-white/45">Let’s scope it</div>
                    ) : (
                      <div className="pb-2 text-xs text-white/45">/ {yearly ? "yr" : "mo"}</div>
                    )}
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-white/65">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-300/90 shadow-[0_0_16px_rgba(124,58,237,0.75)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button
                      href="#voice-demo"
                      variant={p.highlighted ? "primary" : "secondary"}
                      className="w-full justify-center"
                    >
                      {p.cta}
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
