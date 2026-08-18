import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Manifesto() {
  return (
    <section id="about" className="relative overflow-hidden bg-navy-deep text-paper">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-lavender-light">
                The Idea
              </p>
              <h2 className="font-display text-3xl uppercase leading-tight md:text-4xl">
                How do we actually make this?
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/70 md:text-base">
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
              <p className="font-display mt-8 text-3xl uppercase text-lavender-light md:text-4xl">
                Make it real.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
            <Image
              src="/images/shop-floor-wide.jpg"
              alt="Wide view of the Highwell Group production floor"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
