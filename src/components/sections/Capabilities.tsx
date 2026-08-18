import Reveal from "@/components/Reveal";

const CAPABILITIES = [
  {
    title: "Print",
    body: "From 50 pieces to high-volume commercial production. Business printing, marketing collateral, publications, and specialty finishing.",
  },
  {
    title: "Wide Format",
    body: "Walls, windows, signs, displays, and environments. Banners, vehicle graphics, murals, and dimensional signage.",
  },
  {
    title: "3D",
    body: "Prototypes, architectural models, dimensional components, and custom pieces. A production method, not a novelty.",
  },
  {
    title: "Laser",
    body: "Precision cutting, engraving, identification, and fabrication in acrylic, wood, and select metals.",
  },
  {
    title: "Fabrication",
    body: "Dimensional signage, display construction, retail fixtures, and custom-built environmental elements.",
  },
  {
    title: "Packaging",
    body: "Folding cartons, sleeves, labels, inserts, and branded kits, prototyped and produced under one roof.",
  },
  {
    title: "Mail",
    body: "Database processing, variable-data production, addressing, sorting, and postal preparation.",
  },
  {
    title: "Fulfillment",
    body: "Storage and distribution for multi-location brands. Your outsourced physical brand department.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <Reveal>
          <h2 className="font-display max-w-2xl text-3xl uppercase leading-tight text-ink md:text-5xl">
            One shop. A lot of ways to make.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 0.02}
              className="group relative bg-surface p-7 transition-colors duration-300 hover:bg-paper"
            >
              <p className="font-display text-lg text-ink">{cap.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {cap.body}
              </p>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
