"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/landing/Container";
import { cn } from "@/lib/cn";
import { reveal, staggerContainer } from "@/lib/motion";

const items = [
  { title: "vocalassist.ai", href: "https://vocalassist.ai/" },
  { title: "app.vocalassist.ai", href: "https://app.vocalassist.ai/" },
  { title: "App.vocalassist", href: "https://app.vocalassist.ai/" },
  { title: "Vocalassist", href: "https://vocalassist.ai/" },
  { title: "App.vocallabs", href: "https://app.vocallabs.ai/login" },
  { title: "App.hiringg", href: "https://app.hiringg.ai/" },
  { title: "Hiringg", href: "https://hiringg.ai/" },
  { title: "Vocallabs Identity", href: "https://vocallabs.ai/products/vocallabs-identity" },
  { title: "VocalStack Voice", href: "https://vocallabs.ai/products/vocalstack-voice" },
  { title: "Vocalassist AI", href: "https://vocalassist.ai/" },
  { title: "VocalLabs Dashboard", href: "https://app.vocallabs.ai/login" },
  { title: "Hiringg Platform", href: "https://app.hiringg.ai/" },
  { title: "VocalStack Platform", href: "https://vocalassist.ai/" },
  { title: "VocalLabs App", href: "https://app.vocallabs.ai/login" },
  { title: "Hiringg Solution", href: "https://app.hiringg.ai/" },
];

export function Pricing() {
  return (
    <section id="enterprise" className="relative scroll-mt-24 border-t border-white/[0.06] bg-[#050515]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)]" />

      <Container className="relative py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.11, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              variants={reveal}
              className={cn(
                "text-balance text-[2.15rem] font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[3.4rem]",
                "font-[var(--font-display)]"
              )}
            >
              The Future of Enterprise Voice AI
            </motion.h2>
            <motion.p
              variants={reveal}
              className="mx-auto mt-4 max-w-3xl text-pretty text-[1.02rem] leading-[1.85] text-white/72 sm:text-[1.1rem]"
            >
              Empower your business with intelligent, real-time voice agents that understand, converse, and act — just like humans. VocalLabs makes it simple to automate calls, support, and sales using natural voice technology.
            </motion.p>
          </div>

          <motion.div variants={staggerContainer(0.08, 0.08)} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                variants={reveal}
                whileHover={{ y: -4 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl",
                  "transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                )}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.18),transparent_55%)]" />
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[0.95rem] font-semibold tracking-tight text-white/92">{item.title}</div>
                    <div className="mt-2 break-all text-sm text-white/50">{item.href.replace("https://", "")}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/35 transition group-hover:text-white/75" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}