import Image from "next/image";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    src: "/images/process-laser-cutting.jpg",
    alt: "A technician guiding a laser cutter through a sheet of acrylic",
    label: "Cut",
  },
  {
    src: "/images/process-hand-finishing.jpg",
    alt: "A technician hand-polishing a finished acrylic piece",
    label: "Finish",
  },
  {
    src: "/images/process-press.jpg",
    alt: "A technician loading stock into a printing press",
    label: "Print",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-3xl uppercase leading-tight text-navy-deep md:text-4xl">
            Real hands. Real machines.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Every job passes through people who know exactly what they&rsquo;re
            doing, not just equipment running on its own.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-2 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.src}
              delay={i * 0.06}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={step.src}
                alt={step.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-paper">
                {step.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
