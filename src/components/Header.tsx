import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Industries", href: "/#industries" },
  { label: "Shop", href: "/#shop" },
  { label: "Start a Project", href: "/#project" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/highwell-logo.png"
            alt="Highwell Group"
            width={200}
            height={12}
            className="h-6 w-auto md:h-7"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-kicker text-[11px] text-text-secondary transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#project"
          className="rounded-sm bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
