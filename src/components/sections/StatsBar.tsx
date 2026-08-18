import Reveal from "@/components/Reveal";

const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "10K+", label: "Projects Delivered" },
  { value: "100+", label: "Materials & Processes" },
  { value: "1", label: "Team That Does It All" },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border-[42px] border-lavender-light/60 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.45fr_1px_1fr] lg:gap-12">
          <Reveal className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl text-lavender-ink md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-deep">
                  {stat.label}
                </p>
              </div>
            ))}
          </Reveal>

          <div className="hidden h-full w-px bg-border lg:block" aria-hidden="true" />

          <Reveal delay={0.08}>
            <p className="font-display max-w-[18ch] text-lg uppercase leading-snug text-navy-deep md:text-xl">
              One Partner. Endless Possibilities.
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-text-secondary">
              From a single print run to a national rollout, we make the
              process easy and the results unforgettable.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
