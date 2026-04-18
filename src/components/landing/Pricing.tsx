"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/Container";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const items = [
  { title: "vocalassist.ai", href: "#" },
  { title: "app.vocalassist.ai", href: "#" },
  { title: "App.vocalassist", href: "#" },
  { title: "Vocalassist", href: "#" },
  { title: "App.vocallabs", href: "#" },
  { title: "App.hiringg", href: "#" },
  { title: "Hiringg", href: "#" },
  { title: "Vocallabs Identity", href: "#" },
  { title: "VocalStack Voice", href: "#" },
  { title: "Vocalassist AI", href: "#" },
  { title: "VocalLabs Dashboard", href: "#" },
  { title: "Hiringg Platform", href: "#" },
  { title: "VocalStack Platform", href: "#" },
  { title: "VocalLabs App", href: "#" },
  { title: "Hiringg Solution", href: "#" },
];

export function Pricing() {
  return (
    <section id="enterprise" className="relative scroll-mt-24 border-t border-white/[0.06]">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={reveal} className={cn("text-3xl sm:text-4xl font-semibold tracking-tight text-white", "font-[var(--font-display)]")}>The Future of Enterprise Voice AI</motion.h2>
          <motion.p variants={reveal} className="mt-3 max-w-2xl text-white/65 leading-relaxed">
            Links, platforms, and products from the live site, arranged as a tight card grid.
          </motion.p>

          <motion.div variants={staggerContainer(0.08, 0.08)} className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                variants={reveal}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-2xl transition hover:border-white/20"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.18),transparent_55%)]" />
                <div className="relative text-lg font-semibold tracking-tight text-white/90">{item.title}</div>
                <div className="relative mt-2 break-all text-sm text-white/50">{item.href.replace("https://", "")}</div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
