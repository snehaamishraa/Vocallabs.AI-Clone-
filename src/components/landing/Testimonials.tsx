"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/landing/Container";
import { reveal, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/cn";

const badges = [
  { title: "Security badge 1", src: "/landing_page/da0c8abe-8dde-42d3-a592-954ab51f9829.png" },
  { title: "Security badge 2", src: "/landing_page/04065876-42fd-46a5-9c23-1fb7653b9bb0.png" },
  { title: "Security badge 3", src: "/landing_page/44fd1312-c8f0-423a-a95c-da2063c858cc.png" },
  { title: "Security badge 4", src: "/landing_page/cbed390f-b274-44be-8ff1-89b519c10c71.png" },
  { title: "Security badge 5", src: "/landing_page/e8aba454-1fa4-4401-8d73-03fc46d27a2f.png" },
  { title: "Security badge 6", src: "/landing_page/13a80d47-7833-419f-b88e-0ae83ebe04c2.png" },
  { title: "Security badge 7", src: "/landing_page/0ccd4bdb-d950-401d-acb4-0cd0867116c4.png" },
];

export function Testimonials() {
  return (
    <section id="security" className="relative scroll-mt-24 border-t border-white/[0.06]">
      <Container className="py-16 sm:py-20">
        <motion.div
          variants={staggerContainer(0.12, 0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={reveal}
            className={cn(
              "text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-white",
              "font-[var(--font-display)]"
            )}
          >
            Enterprise & Security
          </motion.h2>
          <motion.p variants={reveal} className="mt-4 max-w-2xl text-[1.02rem] leading-[1.8] tracking-[0.01em] text-white/72">
            Your data security is our top priority. We maintain the highest standards of compliance and security certifications.
          </motion.p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <motion.article
                key={badge.title}
                variants={reveal}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-2xl"
              >
                <div className="grid min-h-32 place-items-center rounded-xl border border-white/8 bg-black/25 p-4">
                  <img src={`https://cdn.vocallabs.ai${badge.src}`} alt={badge.title} loading="lazy" decoding="async" className="max-h-20 w-full object-contain" />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-2xl">
            <div className="text-lg font-semibold tracking-tight text-white/92 font-[var(--font-display)]">Enterprise & Security</div>
            <p className="mt-2 max-w-2xl text-sm leading-[1.75] text-white/66">
              Compliance-ready controls, trusted infrastructure, and the security posture teams expect when voice systems move into production.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Compliance and security certifications visible in the live site.
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
