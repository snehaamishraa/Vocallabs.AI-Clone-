"use client";

import { motion } from "framer-motion";
import { Apple, ArrowUpRight, Blocks, Mail, PhoneCall, ShieldCheck, Sparkles, Tv2, Workflow } from "lucide-react";
import type { ReactNode } from "react";
import { Container } from "@/components/landing/Container";
import { cn } from "@/lib/cn";
import { reveal, staggerContainer } from "@/lib/motion";

function Tile({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -4 }}
      className={cn(
        "relative overflow-hidden rounded-[28px] border border-black/10 shadow-[0_26px_80px_-48px_rgba(0,0,0,0.45)] transition-transform duration-300",
        className
      )}
    >
      {children}
    </motion.article>
  );
}

function MiniLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-black text-white shadow-[0_18px_40px_-26px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current">
        <path d="M12 2.25 3 7.5v9l9 5.25 9-5.25v-9zM6.5 12l5.5 3.2 5.5-3.2-5.5-3.2z" />
      </svg>
    </span>
  );
}

export function Pricing() {
  return (
    <section
      id="enterprise"
      className="relative scroll-mt-24 overflow-hidden border-t border-black/10 bg-[radial-gradient(circle_at_top,_#f8f5ef_0%,_#ece5dc_46%,_#ddd6ca_100%)] text-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.28] [background-image:linear-gradient(rgba(255,255,255,0.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.65)_1px,transparent_1px)] [background-size:84px_84px] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.75),transparent_92%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.32),transparent)]" />

      <Container className="relative py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={reveal}
              className={cn(
                "text-balance text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl",
                "font-[var(--font-display)]"
              )}
            >
              The Future of Enterprise Voice AI
            </motion.h2>
            <motion.p variants={reveal} className="mt-4 text-pretty text-[1.02rem] leading-[1.8] text-slate-700 sm:text-[1.08rem]">
              Empower your business with intelligent, real-time voice agents that understand, converse, and act - just like humans. VocalLabs makes it simple to automate calls, support, and sales using natural voice technology.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer(0.08, 0.08)} className="mt-12 grid gap-4 lg:grid-cols-[1.08fr_1fr_0.78fr]">
            <div className="grid gap-4">
              <Tile className="min-h-[250px] bg-[#0d0d10] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_48%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_32%)]" />
                <div className="relative flex h-full flex-col p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Interface</div>
                      <div className="mt-2 text-lg font-semibold tracking-tight text-white/92">Unified brand touchpoints</div>
                    </div>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-white/85">
                      <Mail className="h-5 w-5" />
                    </span>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="grid aspect-square place-items-center rounded-[22px] border border-white/10 bg-gradient-to-b from-sky-300 to-sky-500 text-white shadow-[0_18px_40px_-24px_rgba(56,189,248,0.8)]">
                      <span className="text-2xl font-semibold tracking-tight">@</span>
                    </div>
                    <div className="grid aspect-square place-items-center rounded-[22px] border border-white/10 bg-[#ff6a2f] text-black shadow-[0_18px_40px_-24px_rgba(255,106,47,0.8)]">
                      <MiniLogo className="h-10 w-10 border-white/0 bg-black" />
                    </div>
                    <div className="grid aspect-square place-items-center rounded-[22px] border border-white/10 bg-black text-white shadow-[0_18px_40px_-24px_rgba(0,0,0,0.85)]">
                      <Tv2 className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-center pt-4">
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                  </div>
                </div>
              </Tile>

              <div className="grid grid-cols-2 gap-4">
                <Tile className="min-h-[180px] bg-[#111114] text-white">
                  <div className="relative h-full p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Wearable</div>
                        <div className="mt-2 text-sm font-semibold text-white/88">Quick status at a glance</div>
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white/85">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                    </div>
                    <div className="mt-6 flex h-[110px] items-center justify-center rounded-[22px] border border-white/10 bg-black/40">
                      <div className="rounded-[20px] border border-white/10 bg-[linear-gradient(180deg,#1d1d22,#08080b)] px-4 py-3 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)]">
                        <div className="text-[10px] uppercase tracking-[0.26em] text-white/40">birth</div>
                        <div className="mt-1 text-2xl font-semibold tracking-tight text-white">VocalLabs</div>
                      </div>
                    </div>
                  </div>
                </Tile>

                <Tile className="min-h-[180px] bg-[#111114] text-white">
                  <div className="relative h-full overflow-hidden p-4 sm:p-5">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_36%),radial-gradient(circle_at_60%_0%,rgba(255,106,47,0.18),transparent_40%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Blueprint</div>
                          <div className="mt-2 text-sm font-semibold text-white/88">A world of new connections</div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-white/55" />
                      </div>
                      <div className="text-4xl font-semibold tracking-[-0.05em] text-transparent opacity-90 [text-shadow:0_0_0_rgba(255,255,255,0.12)]">voice</div>
                    </div>
                  </div>
                </Tile>
              </div>

              <Tile className="min-h-[270px] bg-[#111114] text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(135deg,rgba(255,106,47,0.08),transparent_32%)]" />
                <div className="relative grid h-full gap-5 p-5 sm:p-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Automation</div>
                      <div className="mt-2 max-w-sm text-2xl font-semibold tracking-tight text-white/96 sm:text-[2rem]">
                        Calls, support, and sales in one flow.
                      </div>
                    </div>
                    <p className="max-w-md text-sm leading-relaxed text-white/66">
                      VocalLabs makes it simple to automate calls, support, and sales using natural voice technology.
                    </p>
                  </div>

                  <div className="relative min-h-[170px] overflow-hidden rounded-[24px] border border-white/10 bg-[#ff6a2f]">
                    <img
                      src="https://cdn.vocallabs.ai/landing_page/7c9f694e-0652-4d1f-babc-58a5216ea298.png"
                      alt="Clean APIs and platform UI"
                      className="absolute inset-0 h-full w-full object-cover opacity-85"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,106,47,0.06),rgba(255,106,47,0.34)),linear-gradient(90deg,rgba(0,0,0,0.3),transparent_35%)]" />
                    <div className="relative flex h-full flex-col justify-between p-4">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/82">Any protocol. One API.</div>
                      <div className="text-sm font-medium text-white/90">SIP, WebRTC, and PSTN unified under a single interface.</div>
                    </div>
                  </div>
                </div>
              </Tile>
            </div>

            <div className="grid gap-4">
              <Tile className="min-h-[320px] bg-[#ff6a2f] text-black">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.22),transparent_36%),radial-gradient(circle_at_85%_0%,rgba(0,0,0,0.12),transparent_22%)]" />
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-sm font-semibold uppercase tracking-[0.28em] text-black/72">VocalLabs</div>
                    <Sparkles className="h-5 w-5 text-black/70" />
                  </div>
                  <div className="max-w-md">
                    <div className="text-4xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-5xl lg:text-[3.4rem]">
                      A WORLD OF NEW CONNECTIONS IS CREATED.
                    </div>
                  </div>
                  <div className="max-w-lg text-sm leading-relaxed text-black/72">
                    Empower your business with intelligent, real-time voice agents that understand, converse, and act - just like humans.
                  </div>
                </div>
              </Tile>

              <div className="grid grid-cols-2 gap-4">
                <Tile className="min-h-[160px] bg-[#ff6a2f] text-black">
                  <div className="relative h-full p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/58">Identity</div>
                        <div className="mt-2 text-sm font-semibold text-black/92">Brand system, simplified</div>
                      </div>
                      <Apple className="h-4 w-4 text-black/70" />
                    </div>
                    <div className="mt-8 flex items-center gap-3">
                      <MiniLogo className="h-10 w-10 border-black/0 bg-black text-white" />
                      <div className="text-2xl font-semibold tracking-tight">vocallabs</div>
                    </div>
                  </div>
                </Tile>

                <Tile className="min-h-[160px] bg-[#d9d6cf] text-black">
                  <div className="relative h-full overflow-hidden p-4 sm:p-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,106,47,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.45),transparent_58%)]" />
                    <div className="relative flex h-full flex-col justify-between">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/45">Signal</div>
                      <div className="flex items-end justify-between gap-3">
                        <div className="max-w-[8rem] text-sm font-semibold leading-relaxed text-black/78">Real-time voice agents for calls, support, and sales.</div>
                        <div className="flex items-end gap-1.5">
                          {[18, 28, 46, 34, 54, 26].map((height, index) => (
                            <span
                              key={index}
                              className="w-2 rounded-full bg-[#ff6a2f]"
                              style={{ height: `${height}px` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tile>
              </div>

              <Tile className="min-h-[220px] bg-[#0d0d10] text-white">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_50%_0%,rgba(255,106,47,0.16),transparent_42%)]" />
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">Platform</div>
                      <div className="mt-2 text-2xl font-semibold tracking-tight text-white/95">Enterprise voice infrastructure</div>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-orange-300" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white/88">
                        <Workflow className="h-4 w-4 text-orange-300" />
                        Reliable call flow
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        SIP, WebRTC, and PSTN unified under one developer-friendly interface.
                      </p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white/88">
                        <Blocks className="h-4 w-4 text-orange-300" />
                        Clear product surface
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        Modern interfaces that stay understandable when the product gets complicated.
                      </p>
                    </div>
                  </div>
                </div>
              </Tile>
            </div>

            <div className="grid gap-4">
              <Tile className="min-h-[150px] bg-[#ff6a2f] text-black">
                <div className="relative h-full p-4 sm:p-5">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/56">Launch</div>
                        <div className="mt-2 text-lg font-semibold tracking-tight text-black/92">VocalLabs</div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-black/70" />
                    </div>
                    <div className="text-4xl font-semibold tracking-[-0.05em] text-black/95">birth</div>
                  </div>
                </div>
              </Tile>

              <Tile className="min-h-[390px] bg-[#111114] text-white">
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src="https://cdn.vocallabs.ai/landing_page/4a3868af-c0d6-4b44-92cf-ca43b4ed31ce.png"
                    alt="Model routing and enterprise platform"
                    className="h-full w-full object-cover opacity-75"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,20,0.12),rgba(17,17,20,0.86)),linear-gradient(135deg,rgba(255,106,47,0.15),transparent_38%)]" />
                </div>
                <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/42">Model routing</div>
                      <div className="mt-2 max-w-[12rem] text-3xl font-semibold tracking-[-0.05em] text-white/96">Route to any AI stack.</div>
                    </div>
                    <MiniLogo className="border-white/10 bg-white text-black" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/44">Quality gates</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/66">Test your infrastructure before going live.</p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-black/35 p-4 backdrop-blur-sm">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/44">Traffic splitting</div>
                      <p className="mt-2 text-sm leading-relaxed text-white/66">Split traffic across AI providers with live policy control.</p>
                    </div>
                  </div>
                </div>
              </Tile>

              <Tile className="min-h-[200px] bg-white text-black">
                <div className="relative h-full p-4 sm:p-5">
                  <div className="flex h-full flex-col justify-between rounded-[22px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,244,236,0.96))] p-4">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/42">Security</div>
                    <div className="text-2xl font-semibold tracking-tight text-black/92">Enterprise & Security</div>
                    <p className="max-w-xs text-sm leading-relaxed text-black/66">
                      Compliance-ready controls, trusted infrastructure, and the security posture teams expect when voice systems move into production.
                    </p>
                  </div>
                </div>
              </Tile>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
