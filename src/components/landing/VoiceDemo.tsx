"use client";

import { motion } from "framer-motion";
import { Pause, Play, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/landing/Container";
import { ReactiveWaveform } from "@/components/landing/ReactiveWaveform";
import { Reveal } from "@/components/landing/Reveal";
import { TypingText } from "@/components/landing/TypingText";
import { useAudioAnalyser } from "@/hooks/useAudioAnalyser";
import { easeOutExpo, reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const VOICES = [
  {
    id: "aurora",
    name: "Aurora",
    tag: "Warm narrative",
    sample: "/samples/demo-a.mp3",
    demoLine: "This is Aurora—smooth, confident, and built for brand spots that need emotion without the studio tax.",
  },
  {
    id: "cipher",
    name: "Cipher",
    tag: "Crisp promo",
    sample: "/samples/demo-b.mp3",
    demoLine: "Cipher keeps consonants tight—perfect for fast cuts, product launches, and high-energy explainers.",
  },
  {
    id: "ember",
    name: "Ember",
    tag: "Soft support",
    sample: "/samples/demo-a.mp3",
    demoLine: "Ember stays gentle under pressure—ideal for onboarding flows, help desks, and calm escalations.",
  },
] as const;

export function VoiceDemo() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { levels, start, stop } = useAudioAnalyser(audioRef);
  const [active, setActive] = useState<(typeof VOICES)[number]>(VOICES[0]);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    el.src = active.sample;
    void el.load();
    setPlaying(false);
    stop();
  }, [active, stop]);

  async function togglePlay() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      stop();
      return;
    }
    try {
      await el.play();
      setPlaying(true);
      start();
    } catch {
      setPlaying(false);
      stop();
    }
  }

  function nextVoice() {
    const i = VOICES.findIndex((v) => v.id === active.id);
    setActive(VOICES[(i + 1) % VOICES.length]!);
  }

  return (
    <section id="voice-demo" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.h2
            variants={reveal}
            className={cn(
              "text-center text-3xl sm:text-4xl font-semibold tracking-tight text-white",
              "font-[var(--font-display)]"
            )}
          >
            Hear the difference—reactive, studio-grade voice
          </motion.h2>
          <motion.p variants={reveal} className="mx-auto mt-3 max-w-2xl text-center text-white/65 leading-relaxed">
            Toggle voices, press play, and watch the waveform track the signal in real time (Web Audio analyser).
          </motion.p>

          <Reveal className="mt-10">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_-70px_rgba(124,58,237,0.75)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,0.22),transparent_55%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.18),transparent_55%)]" />
              <div className="relative p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="text-xs text-white/50">Now previewing</div>
                    <div className="mt-2 flex items-baseline gap-3">
                      <div className="text-2xl font-semibold tracking-tight text-white/90">{active.name}</div>
                      <div className="text-sm text-white/55">{active.tag}</div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {VOICES.map((v) => {
                        const on = v.id === active.id;
                        return (
                          <motion.button
                            key={v.id}
                            type="button"
                            onClick={() => setActive(v)}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.99 }}
                            className={cn(
                              "rounded-full border px-3 py-1.5 text-xs transition",
                              on
                                ? "border-white/20 bg-white/10 text-white/90 shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_18px_60px_-40px_rgba(59,130,246,0.85)]"
                                : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/16 hover:bg-white/[0.05]"
                            )}
                          >
                            {v.name}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 lg:justify-end">
                    <motion.button
                      type="button"
                      onClick={togglePlay}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/14 bg-gradient-to-br from-violet-500/35 via-blue-500/25 to-cyan-400/20 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_22px_80px_-45px_rgba(124,58,237,0.95)]"
                      aria-label={playing ? "Pause demo" : "Play demo"}
                    >
                      <span className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
                      {playing ? <Pause className="relative h-6 w-6" /> : <Play className="relative h-6 w-6 translate-x-0.5" />}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={nextVoice}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.99 }}
                      className="inline-flex h-14 items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm text-white/75 backdrop-blur-xl"
                    >
                      <SkipForward className="h-4 w-4" />
                      Next voice
                    </motion.button>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <ReactiveWaveform levels={levels} isPlaying={playing} />
                  <div className="mt-4 text-sm leading-relaxed text-white/70 min-h-[3.25rem]">
                    <TypingText key={active.id} text={active.demoLine} speedMs={22} />
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] text-white/45">
                    <span>Tip: swap voices while paused for a clean restart.</span>
                    <span className="text-white/35">Analyser-driven visualization</span>
                  </div>
                </div>

                <audio ref={audioRef} preload="metadata" className="hidden" />
              </div>
            </div>
          </Reveal>
        </motion.div>
      </Container>
    </section>
  );
}
