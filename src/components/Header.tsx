import Link from "next/link";
import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import NavLinks from "@/components/NavLinks";

export const NAV = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resources", href: "/#resources" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/highwell-logo.png"
            alt="Highwell Group"
            width={1178}
            height={70}
            className="h-6 w-auto md:h-7"
            priority
          />
        </Link>

        <NavLinks />

        <Link
          href="/#project"
          className="btn-press hidden rounded-lg bg-lavender-ink px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-navy md:inline-block"
        >
          Talk To Us
        </Link>

        <MobileNav />
      </div>
    </header>
  );
}
