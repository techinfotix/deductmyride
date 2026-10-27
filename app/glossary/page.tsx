import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

const PAGE_URL = `${siteUrl}/glossary`;

export const metadata: Metadata = {
  title: `Car Loan Tax Deduction Glossary: OBBBA, Schedule 1-A, MAGI & More | ${brand}`,
  description:
    "Plain-English definitions of every term behind the car loan interest deduction: OBBBA, QPVLI, Schedule 1-A, Form 1098-VLI, MAGI, final assembly, T.D. 10054, and more.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `Car Loan Tax Deduction Glossary | ${brand}`,
    description:
      "Every term behind the $10,000 car loan interest deduction, defined in plain English.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const terms: Array<{
  term: string;
  def: string;
  href: string;
  linkText: string;
}> = [
  {
    term: "Car loan interest deduction",
    def: "A temporary federal tax deduction (tax years 2025–2028) of up to $10,000 per year of interest paid on a qualifying auto loan. The vehicle must be new, finally assembled in the USA, for personal use, under 14,000 lbs, with a loan originated after 12/31/2024.",
    href: "/is-car-loan-interest-tax-deductible",
    linkText: "Read the complete guide →",
  },
  {
    term: "OBBBA (One Big Beautiful Bill Act)",
    def: "The July 2025 law (P.L. 119-21) that created the car loan interest deduction plus three other new deductions — no tax on tips, no tax on overtime, and a senior bonus — all for 2025–2028.",
    href: "/blog/obbba-new-tax-deductions-2026",
    linkText: "See all 4 new deductions →",
  },
  {
    term: "QPVLI (Qualified Passenger Vehicle Loan Interest)",
    def: "The tax-code name for the interest that qualifies: interest on a loan used to buy a qualified passenger vehicle for personal use, secured by a first lien, originated after December 31, 2024.",
    href: "/is-car-loan-interest-tax-deductible",
    linkText: "What qualifies? →",
  },
  {
    term: "Schedule 1-A",
    def: "The new IRS form where the four OBBBA deductions are claimed. Car loan interest goes in Part IV ('No Tax on Car Loan Interest'), with the vehicle's VIN — mandatory. The total flows to Form 1040.",
    href: "/blog/how-to-claim-car-loan-interest-deduction",
    linkText: "How to claim, step by step →",
  },
  {
    term: "Form 1098-VLI",
    def: "Vehicle Loan Interest — the new lender form. Starting with the 2026 tax year, lenders must send it by January 31 if you paid $600 or more in qualified vehicle loan interest.",
    href: "/blog/how-to-claim-car-loan-interest-deduction",
    linkText: "Claiming steps →",
  },
  {
    term: "MAGI (Modified Adjusted Gross Income)",
    def: "Your adjusted gross income with certain deductions added back. MAGI decides the phase-out: full deduction up to $100,000 (single) / $200,000 (joint), shrinking $200 per $1,000 above, gone at $150,000 / $250,000.",
    href: "/blog/car-loan-interest-deduction-income-limits",
    linkText: "Income limits explained →",
  },
  {
    term: "Final assembly",
    def: "Where the vehicle was last assembled into a finished car. This is the rule most cars fail: the plant country — decoded from the VIN — decides, not the brand. A Honda built in Ohio qualifies; a Ford built in Mexico does not.",
    href: "/vin-check",
    linkText: "Check your VIN →",
  },
  {
    term: "NHTSA vPIC",
    def: "The National Highway Traffic Safety Administration's free Vehicle Identification database. Our VIN checker decodes your 17-character VIN against it to find your car's assembly plant.",
    href: "/vin-check",
    linkText: "Decode your VIN →",
  },
  {
    term: "GVWR (Gross Vehicle Weight Rating)",
    def: "The maximum loaded weight a vehicle is rated for. Qualifying vehicles must have a GVWR under 14,000 pounds — which covers cars, SUVs, minivans, pickup trucks, and motorcycles.",
    href: "/is-car-loan-interest-tax-deductible",
    linkText: "Full rules →",
  },
  {
    term: "T.D. 10054",
    def: "The Treasury Decision publishing the final regulations for the car loan interest deduction (September 2026). Key rulings: the VIN is mandatory, and interest on trade-in negative equity rolled into a new loan is not deductible.",
    href: "/blog/irs-final-rules-car-loan-interest-deduction",
    linkText: "What the final rules say →",
  },
  {
    term: "Schedule C (business use)",
    def: "The form where self-employed people deduct the business-use share of car loan interest as a business expense — claimable even on top of the standard mileage rate. The personal share can separately use the new $10,000 deduction.",
    href: "/blog/car-loan-interest-deduction-self-employed",
    linkText: "Self-employed rules →",
  },
  {
    term: "Interest paid",
    def: "Interest actually paid during the tax year — the only figure the deduction uses. Interest billed or accrued but not yet paid does not count until it is paid. Your lender's year-end statement (Form 1098-VLI from the 2026 tax year, $600+) shows the interest-paid total, capped at $10,000 for the deduction.",
    href: "/blog/can-you-write-off-car-loan-interest",
    linkText: "Write-off rules →",
  },
  {
    term: "Car payment (principal vs interest)",
    def: "Every monthly car payment splits into interest (the cost of borrowing, potentially deductible) and principal (paying down the loan balance, never deductible). Only the interest portion can be claimed — never the full payment amount.",
    href: "/is-car-loan-interest-tax-deductible",
    linkText: "What counts? →",
  },
  {
    term: "EV tax credit (expired)",
    def: "The former federal clean-vehicle credit (up to $7,500) for electric vehicles. It has expired and is no longer available — the car loan interest deduction is the federal break new-car buyers use now.",
    href: "/blog/car-loan-interest-deduction-vs-ev-tax-credit",
    linkText: "Deduction vs EV credit →",
  },
];

export default function GlossaryPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Reference
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Car Loan Interest Deduction Glossary
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        Every term behind the $10,000 car loan interest deduction, defined in
        plain English — with a link to the tool or guide that explains it in
        full.
      </p>

      <dl className="mt-10 space-y-6">
        {terms.map((t) => (
          <div key={t.term} className="card p-5">
            <dt className="text-lg font-bold text-neutral-900">{t.term}</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-neutral-700">
              {t.def}
            </dd>
            <dd className="mt-3">
              <Link
                href={t.href}
                className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
              >
                {t.linkText}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-12">
        <Disclaimer />
        <p className="mt-3 text-xs text-neutral-500">{DISCLAIMER}</p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: `Car Loan Interest Deduction Glossary | ${brand}`,
          url: PAGE_URL,
          hasDefinedTerm: terms.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: t.def,
            url: `${siteUrl}${t.href}`,
          })),
        }}
      />
    </article>
  );
}
