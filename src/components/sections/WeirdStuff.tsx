import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function WeirdStuff() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-paper lg:min-h-[440px]">
      <svg
        aria-hidden="true"
        viewBox="0 0 560 560"
        fill="none"
        className="pointer-events-none absolute -right-52 top-1/2 hidden h-[620px] w-[620px] -translate-y-1/2 text-lavender/50 lg:block"
      >
        <circle cx="280" cy="280" r="170" stroke="currentColor" strokeWidth="1.5" strokeDasharray="200 90" />
        <circle cx="280" cy="280" r="222" stroke="currentColor" strokeWidth="1.5" strokeDasharray="260 120" />
        <circle cx="280" cy="280" r="274" stroke="currentColor" strokeWidth="1.5" strokeDasharray="320 150" />
      </svg>

      <Reveal className="relative z-0 order-2 aspect-square overflow-hidden lg:absolute lg:inset-y-0 lg:left-0 lg:order-1 lg:aspect-auto lg:w-[48%] lg:[mask-image:linear-gradient(to_left,transparent,black_22%)]">
        <Image
          src="/images/project-weird-stuff.jpg"
          alt="A backlit 3D-printed clockwork gear sculpture"
          fill
          sizes="(min-width: 1024px) 48vw, 90vw"
          className="object-cover mix-blend-screen"
        />
      </Reveal>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div className="order-2 hidden lg:order-1 lg:block" aria-hidden="true" />

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 className="font-display max-w-[14ch] text-3xl uppercase leading-tight text-lavender-light md:text-5xl">
              Bring Us The Weird Stuff.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/70">
              If you can dream it, we&rsquo;ll figure out how to make it.
              That&rsquo;s where we thrive.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <Link
              href="mailto:hello@highwellgroup.com"
              className="inline-block text-[12px] font-semibold uppercase tracking-[0.14em] text-lavender-light underline underline-offset-4 transition-colors hover:text-paper"
            >
              Let&rsquo;s Make It Happen &rarr;
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
