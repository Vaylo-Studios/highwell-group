import Link from "next/link";
import Reveal from "@/components/Reveal";
import CropMark from "@/components/motifs/CropMark";
import RegistrationMark from "@/components/motifs/RegistrationMark";
import DimensionLine from "@/components/motifs/DimensionLine";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <CropMark className="pointer-events-none absolute left-6 top-6 h-6 w-6 text-border-hover md:left-10 md:top-8" />
      <CropMark className="pointer-events-none absolute right-6 top-6 h-6 w-6 text-border-hover md:right-10 md:top-8" />

      <RegistrationMark className="animate-registration-spin pointer-events-none absolute -right-10 top-24 hidden h-24 w-24 text-lavender/25 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
        <Reveal className="font-kicker mb-6 text-[11px] text-navy">
          Est. 1997 &middot; Largo / Clearwater, FL
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-display max-w-4xl text-5xl uppercase leading-[0.95] text-ink md:text-8xl">
            Make it real.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-display mt-6 max-w-2xl text-xl text-navy md:text-3xl">
            Print. Produce. Fabricate. Deliver.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Highwell helps businesses turn files, campaigns, brands, and
            ideas into physical things. From everyday commercial printing to
            signage, 3D production, laser work, packaging, mailing, and
            fulfillment.
          </p>
        </Reveal>

        <Reveal
          delay={0.2}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/#project"
            className="rounded-sm bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
          >
            Start a Project
          </Link>
          <Link
            href="/#shop"
            className="rounded-sm border border-border-hover px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-navy"
          >
            Shop Online
          </Link>
        </Reveal>

        <Reveal delay={0.25} className="mt-16 max-w-md">
          <DimensionLine label="MADE IN FLORIDA / BUILT FOR BUSINESS" />
        </Reveal>
      </div>
    </section>
  );
}
