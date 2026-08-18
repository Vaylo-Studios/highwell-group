import Link from "next/link";
import Image from "next/image";

const CAPABILITIES = [
  { label: "Print & Collateral", href: "/#capabilities" },
  { label: "Signage & Displays", href: "/#capabilities" },
  { label: "Fabrication", href: "/#capabilities" },
  { label: "3D Printing", href: "/#capabilities" },
  { label: "Packaging", href: "/#capabilities" },
  { label: "Mail & Fulfillment", href: "/#capabilities" },
];

const WORK = [
  { label: "All Projects", href: "/#work" },
  { label: "Case Studies", href: "/#work" },
  { label: "Industries", href: "/#industries" },
];

const ABOUT = [
  { label: "Our Story", href: "/#about" },
  { label: "Our Team", href: "/#about" },
  { label: "Careers", href: "/#about" },
  { label: "News", href: "/#about" },
];

const RESOURCES = [
  { label: "Materials", href: "/#resources" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#resources" },
  { label: "Contact", href: "mailto:hello@highwellgroup.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-navy-deep text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/highwell-logo.png"
              alt="Highwell Group"
              width={1178}
              height={70}
              className="h-6 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              Print, production, and fabrication for businesses across
              Florida and the Southeast. Made in Florida. Delivered wherever
              business happens.
            </p>
          </div>

          <div>
            <p className="font-kicker mb-4 text-[10px] text-paper/40">
              Capabilities
            </p>
            <ul className="flex flex-col gap-2.5">
              {CAPABILITIES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-kicker mb-4 text-[10px] text-paper/40">
              Work
            </p>
            <ul className="flex flex-col gap-2.5">
              {WORK.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-kicker mb-4 text-[10px] text-paper/40">
              About
            </p>
            <ul className="flex flex-col gap-2.5">
              {ABOUT.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-kicker mb-4 text-[10px] text-paper/40">
              Resources
            </p>
            <ul className="flex flex-col gap-2.5">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Highwell Group. Largo / Clearwater, Florida.</p>
          <p className="font-spec">
            Founded 1997 &middot; Built by{" "}
            <a
              href="https://vaylostudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper/70 underline underline-offset-4 hover:text-paper"
            >
              Vaylo Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
