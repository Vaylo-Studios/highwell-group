import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep text-paper">
      <svg
        aria-hidden="true"
        viewBox="0 0 560 560"
        fill="none"
        className="pointer-events-none absolute -left-64 top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 text-lavender/30 lg:block"
      >
        <circle cx="280" cy="280" r="190" stroke="currentColor" strokeWidth="1.5" strokeDasharray="230 110" />
        <circle cx="280" cy="280" r="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="300 140" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-paper/15 pb-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lavender-light">
              The Idea
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-paper/40">
              Largo, Florida &middot; Since 1997
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <h2 className="font-display text-4xl uppercase leading-[1.05] md:text-5xl">
                How do we
                <br />
                actually
                <br />
                <span className="text-lavender-light">make this?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
                Business starts with ideas. Most of them live on screens for
                a while. A logo. A CAD file. A campaign. A package. A sign.
                A sketch somebody made during a meeting. Then somebody
                eventually asks that question.
              </p>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
                That&rsquo;s where we come in. We&rsquo;ve been printing for
                nearly thirty years, but printing was never really the whole
                job. The job was taking something a customer needed and
                figuring out how to produce it correctly. Bring it over.
                We&rsquo;ll figure out what it needs to become.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-9 flex items-center gap-5">
                <span className="h-px w-12 bg-lavender-light/60" aria-hidden="true" />
                <p className="font-display text-2xl uppercase tracking-wide text-paper md:text-3xl">
                  Make it real.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative lg:mr-5">
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 h-full w-full border border-lavender/50"
            />
            <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
              <Image
                src="/images/shop-floor-wide.jpg"
                alt="Wide view of the Highwell Group production floor"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-navy-deep px-5 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-paper/60">
                The Highwell production floor
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
