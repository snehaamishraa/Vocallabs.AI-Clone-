"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: Props) {
  const base =
    "group relative inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium tracking-tight transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const primary =
    "text-white bg-gradient-to-r from-violet-500/90 via-blue-500/85 to-cyan-400/80 shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_20px_80px_-30px_rgba(124,58,237,0.9)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16),0_26px_90px_-28px_rgba(59,130,246,0.85)]";

  const secondary =
    "text-white/90 bg-white/5 border border-white/12 backdrop-blur-xl hover:bg-white/8 hover:border-white/18";

  return (
    <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }}>
      <Link
        href={href}
        className={cn(base, variant === "primary" ? primary : secondary, className)}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" ? (
          <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        ) : null}
      </Link>
    </motion.div>
  );
}

