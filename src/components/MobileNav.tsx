"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/components/Header";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="btn-press flex h-10 w-10 items-center justify-center rounded-sm border border-border text-ink"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden>
          <path d="M4 7H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4 17H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[82vw] max-w-sm flex-col gap-1 bg-surface px-6 py-6 shadow-xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="font-kicker text-[11px] text-text-muted">Menu</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="btn-press flex h-9 w-9 items-center justify-center rounded-sm border border-border text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden>
              <path d="M5 5L19 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {NAV.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className="border-b border-border py-4 font-display text-xl text-ink transition-colors hover:text-navy"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
