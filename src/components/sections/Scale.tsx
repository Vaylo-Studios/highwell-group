import Reveal from "@/components/Reveal";
import RegistrationMark from "@/components/motifs/RegistrationMark";

export default function Scale() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy text-paper">
      <RegistrationMark className="animate-mark-drift pointer-events-none absolute -left-12 -top-12 h-40 w-40 text-paper/10" />
      <RegistrationMark className="animate-mark-drift pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 text-lavender/20" style={{ animationDelay: "2.5s" }} />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="font-display text-3xl uppercase leading-tight text-paper/50 md:text-5xl">
            Need five?
          </p>
          <p className="font-display mt-2 text-3xl uppercase leading-tight text-paper md:text-5xl">
            We can talk.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="font-display text-3xl uppercase leading-tight text-paper/50 md:text-5xl">
            Need 500,000?
          </p>
          <p className="font-display mt-2 text-3xl uppercase leading-tight text-paper md:text-5xl">
            We should definitely talk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
