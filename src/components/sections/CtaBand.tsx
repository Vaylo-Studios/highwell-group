import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CtaBand() {
  return (
    <section className="bg-lavender-light text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 py-8 md:flex-row md:items-center md:gap-12 md:px-10">
        <Reveal>
          <h2 className="font-display text-xl uppercase leading-tight md:text-2xl">
            Ready to make it real?
          </h2>
          <p className="mt-1 text-[13px] text-white/85">
            Let&rsquo;s talk about your next project.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            href="mailto:hello@highwellgroup.com"
            className="btn-press inline-block rounded-lg bg-navy-deep px-7 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-navy"
          >
            Get Started &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
