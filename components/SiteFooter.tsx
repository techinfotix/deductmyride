import Link from "next/link";
import { brand, DISCLAIMER } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-4">
          <div>
            <p className="font-bold text-neutral-900">{brand}</p>
            <p className="mt-2 text-sm text-neutral-600">
              Free tools to check whether your car loan interest qualifies for
              the US tax deduction.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-neutral-900">Tools</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/vin-check">VIN eligibility checker</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/calculator">Deduction calculator</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/models">Browse all models</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/is-car-loan-interest-tax-deductible">Full guide</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/faq">FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Guides">
            <p className="text-sm font-semibold text-neutral-900">Guides</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/blog/obbba-new-tax-deductions-2026">4 new 2026 tax deductions</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/blog/car-loan-interest-deduction-vs-ev-tax-credit">Deduction vs EV credit</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/blog/can-you-write-off-car-loan-interest">Can you write off car interest?</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold text-neutral-900">Legal</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="text-neutral-600 hover:text-neutral-900" href="/contact">Contact Us</Link></li>
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-neutral-500">{DISCLAIMER}</p>
          </div>
        </div>
        <p className="mt-8 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} {brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
