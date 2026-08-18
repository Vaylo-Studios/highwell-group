import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Pathways() {
  return (
    <section id="resources" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <Reveal>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-lavender-ink">
            Two Ways In
          </p>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-navy-deep md:text-4xl">
            Know exactly what you need? Or still figuring it out?
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          <Reveal id="shop" as="div" className="relative bg-paper p-8 md:p-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lavender-ink">
              Shop
            </p>
            <p className="font-display mt-4 text-2xl uppercase text-navy-deep md:text-3xl">
              Order standard products online.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Business cards, brochures, flyers, posters, banners,
              postcards, signs, labels, and presentation folders. Upload,
              configure, order, track, reorder.
            </p>
            <Link
              href="/#"
              className="btn-press mt-8 inline-block rounded-lg bg-lavender px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-lavender-ink"
            >
              Browse the Shop
            </Link>
          </Reveal>

          <Reveal
            id="project"
            as="div"
            delay={0.08}
            className="relative bg-navy-deep p-8 text-paper md:p-12"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lavender-light">
              Start a Project
            </p>
            <p className="font-display mt-4 text-2xl uppercase md:text-3xl">
              What are you trying to make?
            </p>
            <p className="mt-4 text-sm leading-relaxed text-paper/70">
              3D printing, laser work, custom signage, fabrication, complex
              packaging, multi-part campaigns, fulfillment programs, and
              production nobody&rsquo;s figured out yet.
            </p>
            <Link
              href="mailto:hello@highwellgroup.com"
              className="btn-press mt-8 inline-block rounded-lg bg-paper px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:brightness-95"
            >
              Start a Project
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
