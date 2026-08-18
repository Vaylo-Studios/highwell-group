"use client";

import { useEffect, useRef, useState } from "react";

export default function RegistrationMark({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 40 40"
      fill="none"
      className={`motion-gate ${className ?? ""}`}
      data-inview={inView}
      style={style}
      aria-hidden
    >
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="20" r="3.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 2V14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 26V38" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 20H14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26 20H38" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
