import Link from "next/link";
import Reveal from "@/components/Reveal";
import CropMark from "@/components/motifs/CropMark";

export default function Pathways() {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <p className="font-kicker mb-4 text-[11px] text-navy">
            Two Ways In
          </p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-ink md:text-5xl">
            Know exactly what you need? Or still figuring it out?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          <Reveal
            id="shop"
            as="div"
            className="relative bg-paper p-8 md:p-12"
          >
            <CropMark className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 text-border-hover" />
            <p className="font-spec text-xs text-lavender-ink">SHOP</p>
            <p className="font-display mt-4 text-2xl text-ink md:text-3xl">
              Order standard products online.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Business cards, brochures, flyers, posters, banners,
              postcards, signs, labels, and presentation folders. Upload,
              configure, order, track, reorder.
            </p>
            <Link
              href="/#"
              className="mt-8 inline-block rounded-sm border border-border-hover px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-navy"
            >
              Browse the Shop
            </Link>
          </Reveal>

          <Reveal
            id="project"
            as="div"
            delay={0.08}
            className="relative bg-navy p-8 text-paper md:p-12"
          >
            <CropMark className="pointer-events-none absolute -right-3 -top-3 h-6 w-6 text-paper/20" />
            <p className="font-spec text-xs text-paper/50">START A PROJECT</p>
            <p className="font-display mt-4 text-2xl md:text-3xl">
              What are you trying to make?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              3D printing, laser work, custom signage, fabrication, complex
              packaging, multi-part campaigns, fulfillment programs, and
              production nobody&rsquo;s figured out yet.
            </p>
            <Link
              href="mailto:hello@highwellgroup.com"
              className="mt-8 inline-block rounded-sm bg-paper px-6 py-3 text-sm font-medium text-navy transition-colors hover:brightness-95"
            >
              Start a Project
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
