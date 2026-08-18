import Reveal from "@/components/Reveal";
import RegistrationMark from "@/components/motifs/RegistrationMark";

const EXAMPLES = [
  {
    id: "006",
    brief: "75 miniature dimensional building models for an investor presentation.",
    steps: ["Printed", "Finished", "Packed", "Delivered"],
  },
  {
    id: "014",
    brief: "600 individually numbered acrylic awards.",
    steps: ["Laser cut", "Engraved", "Printed", "Assembled", "Boxed"],
  },
];

export default function WeirdStuff() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <RegistrationMark className="animate-mark-drift pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 text-navy/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <p className="font-kicker mb-4 text-[11px] text-magenta">
            Bring Us The Weird Stuff
          </p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-ink md:text-5xl">
            The answer to &ldquo;can you make this&rdquo; should usually be
            yes.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {EXAMPLES.map((ex, i) => (
            <Reveal
              key={ex.id}
              delay={i * 0.06}
              className="bg-paper p-8 md:p-10"
            >
              <p className="font-spec text-xs text-lavender-ink">
                BRING US THE WEIRD STUFF / {ex.id}
              </p>
              <p className="font-display mt-4 text-xl text-ink md:text-2xl">
                {ex.brief}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {ex.steps.map((step) => (
                  <span
                    key={step}
                    className="rounded-sm border border-border-hover px-3 py-1.5 text-xs text-text-secondary"
                  >
                    {step}
                  </span>
                ))}
              </div>
              <p className="mt-6 font-spec text-xs text-text-muted">
                One building. One vendor.
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
