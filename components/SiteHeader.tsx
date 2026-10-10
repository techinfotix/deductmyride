import Link from "next/link";
import { brand } from "@/lib/site";

const links = [
  { href: "/vin-check", label: "VIN Check" },
  { href: "/calculator", label: "Calculator" },
  { href: "/models", label: "Models" },
  { href: "/is-car-loan-interest-tax-deductible", label: "Guide" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-700 text-lg font-bold text-white">
            $
          </span>
          <span className="text-lg font-bold text-neutral-900">{brand}</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 sm:px-3"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
