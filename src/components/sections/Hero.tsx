import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroHeadline from "@/components/HeroHeadline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper lg:min-h-[600px]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:py-24">
        <div className="lg:w-[42%]">
          <HeroHeadline />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-text-secondary">
              Highwell Group brings ideas to life through print, fabrication,
              3D, packaging, and fulfillment, all under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-9">
            <Link
              href="/#capabilities"
              className="btn-press inline-block rounded-lg bg-lavender px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-lavender-ink"
            >
              See What We Can Do &rarr;
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal
        delay={0.15}
        className="relative z-0 mt-2 aspect-[4/3] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[58%] lg:[mask-image:linear-gradient(to_right,transparent,black_16%)]"
      >
        <Image
          src="/images/hero-make-it-real.jpg"
          alt="Highwell-produced branded packaging, signage, and dimensional pieces"
          fill
          priority
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
