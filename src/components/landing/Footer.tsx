"use client";

import { motion } from "framer-motion";
import type { SVGProps } from "react";
import { Container } from "@/components/landing/Container";
import { cn } from "@/lib/cn";

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const social = [
  { href: "#", label: "X", icon: IconX },
  { href: "#", label: "GitHub", icon: IconGitHub },
  { href: "#", label: "LinkedIn", icon: IconLinkedIn },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-9 w-9 rounded-xl bg-white/6 border border-white/12 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)] grid place-items-center">
                <span className="h-3.5 w-3.5 rounded-md bg-gradient-to-br from-violet-400 via-blue-500 to-cyan-300 shadow-[0_0_24px_rgba(124,58,237,0.55)]" />
              </span>
              <span className="font-semibold tracking-tight text-white/90 font-[var(--font-display)]">
                Voxa <span className="text-white/55 font-medium">Studio</span>
              </span>
            </div>
            <p className="mt-3 max-w-md text-sm text-white/55 leading-relaxed">
              Premium AI voice cloning and text-to-speech—built for teams who care about motion, materials, and sound.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {social.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.99 }}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12",
                  "bg-white/[0.04] text-white/70 backdrop-blur-xl",
                  "shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
                  "hover:text-white/90 hover:border-white/18 hover:shadow-[0_0_0_1px_rgba(124,58,237,0.35),0_18px_70px_-45px_rgba(59,130,246,0.75)]"
                )}
              >
                <s.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Voxa Studio. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-white/60 transition" href="#">
              Privacy
            </a>
            <a className="hover:text-white/60 transition" href="#">
              Terms
            </a>
            <a className="hover:text-white/60 transition" href="#">
              Security
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
