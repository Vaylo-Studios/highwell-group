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
    <section id="work" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-3xl uppercase leading-tight text-ink md:text-5xl">
            Built for brands that build big.
          </h2>
          <div className="max-w-sm">
            <p className="text-sm leading-relaxed text-text-secondary">
              We partner with companies, agencies, and organizations to
              deliver physical experiences that make an impact.
            </p>
            <Link
              href="/#project"
              className="mt-4 inline-block text-sm font-medium text-navy transition-colors hover:text-navy-deep"
            >
              View Our Work &rarr;
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((img, i) => (
            <Reveal
              key={`${img.src}-${i}`}
              delay={i * 0.04}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                style={{ objectPosition: img.position }}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
