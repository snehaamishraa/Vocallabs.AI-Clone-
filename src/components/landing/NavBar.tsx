"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/landing/Container";
import { cn } from "@/lib/cn";

const links = [
  { href: "#", label: "Home" },
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About Us" },
  { href: "#docs", label: "Docs" },
  { href: "#blog", label: "Blogs" },
  { href: "#careers", label: "Careers" },
];

export function NavBar() {
  return (
    <Container className="relative z-20 max-w-[1360px] pt-4 sm:pt-6">
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-[1fr_auto_1fr] items-center gap-4"
      >
        <Link href="#" className="flex items-center gap-2.5 justify-self-start">
          <img
            src="/vocallabs-logo.png"
            alt="VocalLabs"
            className="h-9 w-auto object-contain brightness-0 invert"
          />
        </Link>

        <nav
          className={cn(
            "hidden items-center gap-0.5 rounded-full border border-white/10 bg-[#0b0d1c]/90 px-2 py-1.5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_18px_50px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl lg:flex"
          )}
          aria-label="Primary"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-white/74 transition hover:bg-white/6 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="justify-self-end">
          <Link
            href="#voice-demo"
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full border border-violet-300/25 bg-gradient-to-r from-violet-500 via-violet-600 to-fuchsia-600 px-5 py-2.5",
              "text-[13px] font-semibold tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_10px_35px_-12px_rgba(168,85,247,0.85)]"
            )}
          >
            <span>GET STARTED</span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2 py-0.5 text-[11px] font-medium text-white/95 ring-1 ring-white/10">
              <Zap className="h-3 w-3 text-amber-200" aria-hidden />
              2 mins
            </span>
          </Link>
        </motion.div>
      </motion.header>
    </Container>
  );
}
