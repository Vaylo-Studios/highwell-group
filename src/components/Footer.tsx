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
  { label: "Materials", href: "/#capabilities" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#about" },
  { label: "Contact", href: "mailto:hello@highwellgroup.com" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    icon: (
      <path
        d="M6.2 8.6H8.5V15.5H6.2V8.6ZM7.35 5.2C8.08 5.2 8.67 5.79 8.67 6.52C8.67 7.25 8.08 7.84 7.35 7.84C6.62 7.84 6.03 7.25 6.03 6.52C6.03 5.79 6.62 5.2 7.35 5.2ZM9.9 8.6H12.1V9.55H12.13C12.44 8.97 13.19 8.36 14.31 8.36C16.64 8.36 17.07 9.9 17.07 11.9V15.5H14.77V12.31C14.77 11.55 14.76 10.57 13.71 10.57C12.65 10.57 12.49 11.4 12.49 12.25V15.5H10.19V8.6H9.9Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    icon: (
      <>
        <rect x="5.5" y="5.5" width="11" height="11" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <circle cx="11" cy="11" r="2.6" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <circle cx="14.4" cy="7.6" r="0.9" fill="currentColor" />
      </>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@highwellgroup.com",
    icon: (
      <>
        <rect x="4.5" y="6.5" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none" />
        <path d="M5 7L11 12L17 7" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    icon: (
      <path
        d="M12.1 8.1V6.9C12.1 6.4 12.45 6.05 13 6.05H14.1V4H12.4C10.85 4 9.85 5.1 9.85 6.75V8.1H8.3V10.2H9.85V16H12.1V10.2H13.85L14.1 8.1H12.1Z"
        fill="currentColor"
      />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 hidden h-64 w-64 rounded-full bg-lavender-light/25 lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/brand/highwell-logo.png"
              alt="Highwell Group"
              width={1178}
              height={70}
              className="h-auto w-full max-w-[260px] brightness-0 invert"
            />
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-paper/60">
              We make brands real through print, signage, fabrication, 3D,
              packaging, and fulfillment.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-paper/25 text-paper/70 transition-colors hover:border-paper/60 hover:text-paper"
                >
                  <svg viewBox="0 0 22 22" className="h-4 w-4" aria-hidden>
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Capabilities", items: CAPABILITIES },
            { title: "Work", items: WORK },
            { title: "About", items: ABOUT },
            { title: "Resources", items: RESOURCES },
          ].map((col) => (
            <div key={col.title}>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.1em] text-paper/50">
                {col.title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-5 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Highwell Group. Largo / Clearwater, Florida.</p>
          <p>
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
