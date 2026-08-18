import Reveal from "@/components/Reveal";

const FLOOR = [
  { tag: "PRESS", title: "Digital Presses", body: "Short-run and variable-data production." },
  { tag: "WIDE", title: "Large-Format Equipment", body: "Banners, murals, and vehicle wraps." },
  { tag: "CUT", title: "Laser Cutters", body: "Acrylic, wood, and sign components." },
  { tag: "ADD", title: "3D Printers", body: "Prototypes and dimensional pieces." },
  { tag: "FIN", title: "Finishing & Assembly", body: "Die cutting, foil, mounting, kitting." },
  { tag: "SHIP", title: "Fulfillment Floor", body: "Storage, pick, pack, and distribution." },
];

export default function Proof() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-xl text-3xl uppercase leading-tight text-ink md:text-5xl">
            Made here.
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Not mockups. Not stock photography. Real machines, real
            projects, real quantities, moving through one building.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {FLOOR.map((f, i) => (
            <Reveal
              key={f.tag}
              delay={i * 0.03}
              className="group flex flex-col gap-2 py-6 transition-colors duration-300 hover:bg-surface md:flex-row md:items-baseline md:gap-8 md:px-4"
            >
              <span className="font-spec w-20 shrink-0 text-[11px] text-text-muted">
                {f.tag}
              </span>
              <p className="font-display shrink-0 text-lg text-ink md:w-64">
                {f.title}
              </p>
              <p className="text-sm leading-relaxed text-text-secondary">
                {f.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
