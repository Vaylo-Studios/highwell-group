import Image from "next/image";
import Reveal from "@/components/Reveal";

const MATERIALS = [
  { src: "/images/image-20260818-122752-4e7691-capability-print.jpeg", alt: "Close-up of a folded two-tone printed presentation piece" },
  { src: "/images/image-20260818-123027-4ae568-capability-signage.jpeg", alt: "Close-up of a mounted acrylic sign edge" },
  { src: "/images/image-20260818-123255-28ee8e-capability-fabrication.jpeg", alt: "Close-up of layered wood and acrylic fabrication" },
  { src: "/images/image-20260818-123521-e701ca-capability-3d-printing.jpeg", alt: "Close-up of a lattice-structured 3D-printed part" },
  { src: "/images/image-20260818-123747-8d3941-capability-packaging.jpeg", alt: "Close-up of an open rigid gift box corner" },
];

export default function MaterialsStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {MATERIALS.map((m, i) => (
            <Reveal
              key={m.src}
              delay={i * 0.04}
              className="relative aspect-square overflow-hidden rounded-sm border border-border"
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
