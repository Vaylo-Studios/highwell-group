import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroHeadline from "@/components/HeroHeadline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper lg:min-h-[620px]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:py-28">
        <div className="lg:w-[46%]">
          <HeroHeadline />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary">
              Highwell Group brings ideas to life through print, fabrication,
              3D, packaging, and fulfillment, all under one roof.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <Link
              href="/#project"
              className="btn-press inline-block rounded-lg bg-lavender-ink px-7 py-3.5 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-navy"
            >
              See What We Can Do &rarr;
            </Link>
          </Reveal>
        </div>
      </div>

      <Reveal
        delay={0.15}
        className="relative z-0 mt-4 aspect-[4/3] overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:aspect-auto lg:w-[54%]"
      >
        <Image
          src="/images/hero-make-it-real.jpg"
          alt="Highwell-produced branded packaging, signage, and dimensional pieces"
          fill
          priority
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover"
        />
      </Reveal>
    </section>
  );
}
