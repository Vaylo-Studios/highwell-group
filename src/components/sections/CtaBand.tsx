import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="border-b border-border bg-lavender-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between md:px-10">
        <Reveal>
          <h2 className="font-display text-3xl uppercase leading-tight text-paper md:text-5xl">
            Ready to make it real?
          </h2>
          <p className="mt-3 text-[15px] text-paper/80">
            Let&rsquo;s talk about your next project.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="mailto:hello@highwellgroup.com"
            className="btn-press inline-block rounded-full bg-navy-deep px-8 py-4 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-ink"
          >
            Get Started &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
