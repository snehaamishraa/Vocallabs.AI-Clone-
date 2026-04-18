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

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.983 3.5A1.48 1.48 0 103.5 4.983a1.48 1.48 0 001.483-1.483zM3.75 8.25h2.466V20.25H3.75zM9.034 8.25h2.37v1.644h.034c.33-.625 1.137-1.284 2.344-1.284 2.506 0 2.968 1.652 2.968 3.8v7.84H14.28v-6.95c0-1.66-.03-3.8-2.318-3.8-2.319 0-2.675 1.81-2.675 3.68v7.07H6.821V8.25h2.213z" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.5 22.5v-8.25h2.625l.375-3h-3v-1.875c0-.867.234-1.5 1.5-1.5h1.594V5.25c-.758-.082-1.79-.168-3.046-.168-2.546 0-4.296 1.555-4.296 4.414v1.754H6.75v3h2.5v8.25h4.25z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.8a3 3 0 110-6 3 3 0 010 6zm5.1-8.1a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM4.8 4.8A4.8 4.8 0 019.6 0h4.8A4.8 4.8 0 0119.2 4.8v4.8A4.8 4.8 0 0114.4 14.4H9.6A4.8 4.8 0 014.8 9.6V4.8zm1.8 0v4.8a3 3 0 003 3h4.8a3 3 0 003-3V4.8a3 3 0 00-3-3H9.6a3 3 0 00-3 3z" />
    </svg>
  );
}

function IconYouTube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.5 6.2a3.01 3.01 0 00-2.12-2.13C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.38.47A3.01 3.01 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.01 3.01 0 002.12 2.13C4.5 20.4 12 20.4 12 20.4s7.5 0 9.38-.47a3.01 3.01 0 002.12-2.13A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.6 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

const social = [
  { href: "#", label: "LinkedIn", icon: IconLinkedIn },
  { href: "#", label: "Facebook", icon: IconFacebook },
  { href: "#", label: "Instagram", icon: IconInstagram },
  { href: "#", label: "X", icon: IconX },
  { href: "#", label: "YouTube", icon: IconYouTube },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container className="py-14 sm:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-10 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_35px_120px_-80px_rgba(124,58,237,0.7)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-white font-[var(--font-display)]">
                Ready to transform your business?
              </div>
              <p className="mt-3 text-[1.02rem] leading-[1.8] tracking-[0.01em] text-white/72">
                Transforming businesses with intelligent AI voice agents.
              </p>
            </div>

            <motion.a
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_14px_40px_-12px_rgba(168,85,247,0.8)]"
            >
              Schedule Your Free Demo
            </motion.a>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-white/14 bg-white shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_10px_30px_-18px_rgba(255,255,255,0.45)]">
                  <img src="/vocallabs-logo.png" alt="VocalLabs logo" className="h-6 w-6 object-contain brightness-0" />
                </span>
                <span className="font-semibold tracking-tight text-white/90 font-[var(--font-display)]">VocalLabs</span>
              </div>
              <p className="mt-3 text-sm leading-[1.75] text-white/64">
                Empower your business with intelligent, real-time voice agents that understand, converse, and act.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide text-white/92 font-[var(--font-display)]">Company</div>
              <div className="mt-3 space-y-2 text-sm text-white/55">
                <a className="block hover:text-white/80" href="#">About Us</a>
                <a className="block hover:text-white/80" href="#">Contact Us</a>
                <a className="block hover:text-white/80" href="#">Pricing Policy</a>
                <a className="block hover:text-white/80" href="#">Blogs</a>
                <a className="block hover:text-white/80" href="#">Careers</a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide text-white/92 font-[var(--font-display)]">Contact</div>
              <div className="mt-3 space-y-2 text-sm text-white/55">
                <a className="block hover:text-white/80" href="#">Schedule Demo</a>
              </div>
              <div className="mt-5 text-sm font-semibold tracking-wide text-white/92 font-[var(--font-display)]">Open Source</div>
              <div className="mt-3 text-sm text-white/55">
                <a className="block hover:text-white/80" href="#">VocalFlow</a>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold tracking-wide text-white/92 font-[var(--font-display)]">Legal</div>
              <div className="mt-3 space-y-2 text-sm text-white/55">
                <a className="block hover:text-white/80" href="#">Privacy Policy</a>
                <a className="block hover:text-white/80" href="#">Terms & Conditions</a>
                <a className="block hover:text-white/80" href="#">Refund Policy</a>
                <a className="block hover:text-white/80" href="#">Data Protection Addendum</a>
                <a className="block hover:text-white/80" href="#">Uptime Status</a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              {social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -2, scale: 1.03 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12",
                    "bg-white/[0.04] text-white/70 backdrop-blur-xl",
                    "shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
                    "hover:text-white/90 hover:border-white/18"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
            <div className="text-xs text-white/40">© 2025 Vocal Labs.ai. All rights reserved.</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
