import Reveal from "@/components/Reveal";

export default function Scale() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-paper">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
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
          <p className="font-display mt-2 text-3xl uppercase leading-tight text-lavender-light md:text-5xl">
            We should definitely talk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
