import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

const GALLERY = [
  { src: "/images/signage-displays.jpg", alt: "Backlit dimensional wall signage in an office lobby", position: "left" },
  { src: "/images/print.jpg", alt: "Branded folder and business card flat lay", position: "center" },
  { src: "/images/mail-fulfillment.jpg", alt: "Branded shipping boxes and mailers staged for fulfillment", position: "center" },
  { src: "/images/signage-displays.jpg", alt: "Hexagon-panel display in an office lobby", position: "right" },
];

export default function Proof() {
  return (
    <section id="work" className="overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <Reveal className="shrink-0 lg:w-[220px]">
            <h2 className="font-display max-w-[12ch] text-3xl uppercase leading-[1.05] text-navy-deep md:text-4xl">
              Built for brands that build big.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary">
              We partner with companies, agencies, and organizations to
              deliver physical experiences that make an impact.
            </p>
            <Link
              href="/#project"
              className="mt-5 inline-block text-[12px] font-semibold uppercase tracking-[0.12em] text-navy-deep underline underline-offset-4 transition-colors hover:text-lavender-ink"
            >
              View Our Work &rarr;
            </Link>
          </Reveal>

          <div className="grid flex-1 grid-cols-2 gap-2 md:grid-cols-4 lg:-mr-[max(1.5rem,calc((100vw-80rem)/2+2.5rem))]">
            {GALLERY.map((img, i) => (
              <Reveal
                key={`${img.src}-${i}`}
                delay={i * 0.04}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  style={{ objectPosition: img.position }}
                  className="object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
