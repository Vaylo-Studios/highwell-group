import Reveal from "@/components/Reveal";

const CAPABILITIES = [
  {
    title: "Print & Collateral",
    body: "Premium quality print that elevates your brand.",
    icon: (
      <>
        <rect x="6" y="4" width="20" height="24" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 11H22M10 16H22M10 21H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Signage & Displays",
    body: "Dimensional signage, ADA, wayfinding, and custom displays.",
    icon: (
      <>
        <rect x="4" y="6" width="24" height="15" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 21V26M11 26H21" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Fabrication",
    body: "Acrylic, metal, wood, and custom builds made in-house.",
    icon: (
      <>
        <path d="M8 24L16 6L24 24" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M12 17H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "3D Printing",
    body: "Prototypes, functional parts, and presentation models.",
    icon: (
      <>
        <path d="M16 5L27 11V21L16 27L5 21V11L16 5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M16 5V16M16 16L27 11M16 16L5 11M16 16V27" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Packaging",
    body: "Custom packaging that protects and impresses.",
    icon: (
      <>
        <path d="M6 12L16 7L26 12L16 17L6 12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6 12V22L16 27M26 12V22L16 27M16 17V27" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </>
    ),
  },
  {
    title: "Mail & Fulfillment",
    body: "Kitting, assembly, mailing, and nationwide delivery.",
    icon: (
      <>
        <rect x="4" y="10" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M22 14H26L28 17V23H22V14Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <circle cx="10" cy="24.5" r="1.6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="23" cy="24.5" r="1.6" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border bg-navy-deep text-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-paper/15 px-6 py-12 md:grid-cols-3 md:px-10 xl:grid-cols-6">
        {CAPABILITIES.map((cap, i) => (
          <Reveal
            key={cap.title}
            delay={i * 0.02}
            className="group flex flex-col items-center px-4 py-6 text-center"
          >
            <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-lavender-light">
              {cap.icon}
            </svg>
            <p className="font-kicker mt-4 text-[11px] text-paper">{cap.title}</p>
            <p className="mt-2 text-xs leading-relaxed text-paper/60">
              {cap.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
