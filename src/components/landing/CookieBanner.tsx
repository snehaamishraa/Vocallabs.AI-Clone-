"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CookieBanner() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
      className="fixed bottom-5 right-5 z-[80] w-[min(92vw,360px)] rounded-2xl border border-white/12 bg-black/55 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_24px_80px_-40px_rgba(88,28,135,0.65)] backdrop-blur-2xl"
      role="dialog"
      aria-label="Cookies"
    >
      <p className="text-[13px] leading-relaxed text-white/70">
        We use cookies to improve your experience. Learn more about how we use them in our privacy policy.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 rounded-xl border border-white/14 bg-white/[0.04] py-2 text-sm font-medium text-white/75 transition hover:bg-white/[0.07]"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="flex-1 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 py-2 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
        >
          Accept
        </button>
      </div>
    </motion.div>
  );
}
