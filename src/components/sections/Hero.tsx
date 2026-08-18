import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CropMark from "@/components/motifs/CropMark";
import RegistrationMark from "@/components/motifs/RegistrationMark";
import DimensionLine from "@/components/motifs/DimensionLine";
import HeroHeadline from "@/components/HeroHeadline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <CropMark className="pointer-events-none absolute left-6 top-6 h-6 w-6 text-border-hover md:left-10 md:top-8" />
      <CropMark className="pointer-events-none absolute right-6 top-6 h-6 w-6 text-border-hover md:right-10 md:top-8" />

      <RegistrationMark className="animate-registration-spin pointer-events-none absolute -right-10 top-24 hidden h-24 w-24 text-lavender/25 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:flex lg:items-start lg:gap-12">
        <div className="lg:w-[46%]">
          <Reveal className="font-kicker mb-6 text-[11px] text-navy">
            Est. 1997 &middot; Largo / Clearwater, FL
          </Reveal>

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
              className="btn-press inline-block rounded-full bg-lavender-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy"
            >
              See What We Can Do &rarr;
            </Link>
          </Reveal>

          <Reveal delay={0.25} className="mt-16 max-w-md">
            <DimensionLine label="MADE IN FLORIDA / BUILT FOR BUSINESS" />
          </Reveal>
        </div>

        <Reveal
          delay={0.15}
          className="relative mt-14 aspect-[4/3] overflow-hidden rounded-sm lg:mt-0 lg:w-[54%]"
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
      </div>
    </section>
  );
}
