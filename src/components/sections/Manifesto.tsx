import Reveal from "@/components/Reveal";
import CropMark from "@/components/motifs/CropMark";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <CropMark className="pointer-events-none absolute left-6 top-6 h-6 w-6 text-paper/15 md:left-10 md:top-8" />
      <CropMark className="pointer-events-none absolute bottom-6 right-6 h-6 w-6 text-paper/15 md:bottom-8 md:right-10" />

      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center md:px-10">
        <Reveal>
          <p className="font-kicker mb-6 text-[11px] text-lavender-light">
            The Idea
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-lg leading-relaxed text-paper/80 md:text-xl">
            Business starts with ideas. Most of them live on screens for a
            while. A logo. A CAD file. A campaign. A package. A sign. A
            sketch somebody made during a meeting. Then somebody eventually
            asks the important question:
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display mt-8 text-2xl uppercase leading-tight text-paper md:text-4xl">
            How do we actually make this?
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg leading-relaxed text-paper/80 md:text-xl">
            That&rsquo;s where we come in. We&rsquo;ve been printing for
            nearly thirty years, but printing was never really the whole
            job. The job was taking something a customer needed and
            figuring out how to produce it correctly. Bring it over.
            We&rsquo;ll figure out what it needs to become.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-display mt-12 text-4xl uppercase text-paper md:text-6xl">
            Make it real.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
