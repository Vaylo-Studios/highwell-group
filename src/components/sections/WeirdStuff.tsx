import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import RegistrationMark from "@/components/motifs/RegistrationMark";

export default function WeirdStuff() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy-deep text-paper lg:min-h-[560px]">
      <RegistrationMark className="animate-mark-drift pointer-events-none absolute -bottom-20 -right-16 z-20 h-64 w-64 text-paper/10" />

      <Reveal className="relative order-2 z-0 aspect-square overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:order-1 lg:aspect-auto lg:w-[45%]">
        <Image
          src="/images/project-weird-stuff.jpg"
          alt="A backlit 3D-printed clockwork gear sculpture"
          fill
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="object-cover"
        />
      </Reveal>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="order-2 hidden lg:order-1 lg:block" aria-hidden="true" />

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-kicker mb-4 text-[11px] text-magenta">
              Bring Us The Weird Stuff
            </p>
            <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-paper md:text-5xl">
              Bring Us The Weird Stuff.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/70">
              If you can dream it, we&rsquo;ll figure out how to make it.
              That&rsquo;s where we thrive.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <Link
              href="mailto:hello@highwellgroup.com"
              className="btn-press inline-block rounded-full bg-lavender-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Let&rsquo;s Make It Happen &rarr;
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
