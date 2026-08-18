"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV } from "@/components/Header";

export default function NavLinks() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = NAV.map((item) => item.href.replace("/#", "")).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV.map((item) => {
        const id = item.href.replace("/#", "");
        const isActive = id === active;
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={`text-[13px] font-medium uppercase tracking-wide transition-colors ${
              isActive ? "text-navy" : "text-ink/80 hover:text-navy"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
