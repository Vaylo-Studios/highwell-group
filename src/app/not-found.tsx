import Link from "next/link";
import CropMark from "@/components/motifs/CropMark";
import RegistrationMark from "@/components/motifs/RegistrationMark";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-border bg-paper">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <CropMark className="pointer-events-none absolute left-6 top-6 h-6 w-6 text-border-hover md:left-10 md:top-8" />
      <CropMark className="pointer-events-none absolute right-6 top-6 h-6 w-6 text-border-hover md:right-10 md:top-8" />
      <RegistrationMark className="animate-registration-spin pointer-events-none absolute -right-10 top-24 hidden h-24 w-24 text-lavender/25 lg:block" />

      <div className="relative mx-auto max-w-2xl px-6 py-24 md:px-10">
        <p className="font-spec text-xs text-lavender-ink">ERROR / 404</p>
        <h1 className="font-display mt-4 text-5xl uppercase leading-[0.95] text-ink md:text-7xl">
          Not on the plate.
        </h1>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-text-secondary">
          That page didn&rsquo;t make it through production. It may have moved,
          or never existed.
        </p>
        <Link
          href="/"
          className="btn-press mt-10 inline-block rounded-sm bg-navy px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
        >
          Back to Highwell
        </Link>
      </div>
    </section>
  );
}
