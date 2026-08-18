import Reveal from "@/components/Reveal";

const STATS = [
  { value: "30+", label: "Years of Experience" },
  { value: "10K+", label: "Projects Delivered" },
  { value: "100+", label: "Materials & Processes" },
  { value: "1", label: "Team That Does It All" },
];

export default function StatsBar() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Reveal className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-4xl text-navy md:text-5xl">
                {stat.value}
              </p>
              <p className="font-kicker mt-2 text-[10px] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-kicker mt-10 text-center text-[11px] text-lavender-ink md:text-left">
            One Partner. Endless Possibilities.
          </p>
          <p className="mt-3 max-w-xl text-center text-sm leading-relaxed text-text-secondary md:text-left">
            From a single print run to a national rollout, we make the
            process easy and the results unforgettable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
