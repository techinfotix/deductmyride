import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "IRS Finalizes Car Loan Interest Deduction Rules (T.D. 10054) — 2026",
  description:
    "The IRS finalized the car loan interest deduction rules on Sept 21, 2026 (T.D. 10054). The exact phase-out formula, lease exclusion, negative-equity rule, refinancing limits, and the new Form 1098-VLI — explained.",
  alternates: { canonical: `${siteUrl}/blog/irs-final-rules-car-loan-interest-deduction` },
  openGraph: {
    title: "IRS Finalizes Car Loan Interest Deduction Rules (T.D. 10054)",
    description:
      "Final IRS rules are out: exact phase-out math, leases excluded, negative equity doesn't count, and lenders must report on Form 1098-VLI.",
    url: `${siteUrl}/blog/irs-final-rules-car-loan-interest-deduction`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "When did the IRS finalize the car loan interest deduction rules?",
    a: "The final regulations (T.D. 10054) were published in Internal Revenue Bulletin 2026-39 on September 21, 2026, and take effect November 9, 2026. The deduction itself applies to qualifying loans for tax years 2025 through 2028.",
  },
  {
    q: "What is the exact phase-out formula?",
    a: "The $10,000 cap is reduced by $200 for each $1,000 (or part of $1,000) of MAGI above $100,000 for single filers, married filing separately, and heads of household ($200,000 for married filing jointly). The deduction disappears at $150,000 MAGI ($250,000 joint).",
  },
  {
    q: "Do leases qualify for the deduction?",
    a: "No. The final rules confirm that leased vehicles do not qualify — even if the lease paperwork calls part of the payment 'interest.'",
  },
  {
    q: "Can I deduct interest on a refinanced car loan?",
    a: "Partially. A refinanced loan keeps its qualifying status only up to the outstanding balance of the original loan — new amounts added in the refinance do not qualify. Adding a new borrower during refinancing does not let the new borrower claim the deduction.",
  },
];

const sections = [
  {
    h: "1. The exact phase-out math is now law",
    body: [
      "This is the biggest news for anyone near the income limits. The final regulations lock in the formula the IRS floated in December 2025: your $10,000 cap shrinks by $200 for every $1,000 (or fraction of $1,000) your modified adjusted gross income sits above the threshold.",
      "The IRS's own example: a single filer with $124,200 MAGI has $24,200 of excess, which rounds up to 25 steps — a $5,000 reduction, leaving $5,000 deductible. Full phase-out hits at $150,000 MAGI for single filers ($250,000 for joint filers). Our calculator now uses this exact formula.",
    ],
  },
  {
    h: "2. $10,000 per return — married filing separately each get $10,000",
    body: [
      "The final rules confirm the $10,000 limit applies per federal tax return, not per vehicle or per person. Two car loans on a joint return still share one $10,000 cap. But married couples filing separately each get their own $10,000 cap on their respective returns.",
    ],
  },
  {
    h: "3. Leases are out — definitively",
    body: [
      "No ambiguity left: interest-like charges on a leased vehicle do not qualify, even when the lease agreement uses the word 'interest.' You must have purchased the vehicle with a loan.",
    ],
  },
  {
    h: "4. Negative equity rolled into the loan doesn't count",
    body: [
      "About 30% of new-car purchases in 2026 involved negative equity from a trade-in. The final rules say debt tied to that rolled-over balance is not treated as debt incurred to buy the new vehicle — so interest on that portion is not deductible. Only the portion financing the new car itself qualifies.",
    ],
  },
  {
    h: "5. More than just stated interest can qualify",
    body: [
      "The IRS confirmed that 'qualified' interest goes beyond the interest rate on your contract. Points, deferred and capitalized interest, certain origination and financing charges, prepayment penalties, and even late-payment or default charges can qualify — as long as they're treated as interest for federal tax purposes.",
      "The same goes for costs customarily financed with the purchase: extended warranties, service contracts, GAP coverage, credit insurance, title and registration fees, and dealer-installed accessories.",
    ],
  },
  {
    h: "6. Lenders must report on new Form 1098-VLI",
    body: [
      "Starting with 2026 loans, any lender (or other interest recipient) that receives $600 or more of annual interest on a qualifying vehicle loan must report it on new Form 1098-VLI, including the borrower's information, interest received, outstanding principal, loan origination date, vehicle year/make/model, and — critically — the VIN. Returns missing the VIN are at high risk of disallowance.",
    ],
  },
  {
    h: "7. Refinancing keeps status only up to the old balance",
    body: [
      "Refinancing a qualifying loan doesn't kill the deduction — but it doesn't expand it either. Only the outstanding balance of the original loan keeps qualifying status; any new money added at refinance does not. And adding a co-borrower at refinance does not make the new borrower eligible.",
    ],
  },
  {
    h: "8. Personal use is tested when you buy, not every year",
    body: [
      "The vehicle must be for more than 50% personal use — but the test happens at loan origination. If you reasonably expected personal use above 50% when you bought the car, later changes generally don't retroactively disqualify you. The business-use portion of interest keeps its old treatment and is not subject to the $10,000 cap.",
    ],
  },
  {
    h: "9. First-lien rule gets practical relief",
    body: [
      "Qualifying loans must be secured by a first lien, but the IRS clarified you don't lose the deduction over paperwork timing: delayed lien perfection, temporary involuntary liens under state law, repossession (while you remain liable), and total-loss claims where the insurer releases the lien all keep the loan qualifying.",
    ],
  },
];

export default function FinalRulesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        IRS Finalizes Car Loan Interest Deduction Rules (T.D. 10054): 9 Things
        Now Official
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        <strong>Short answer: the guesswork is over.</strong> On September 21,
        2026, the IRS published final regulations (T.D. 10054, IRB 2026-39) for
        the new car loan interest deduction — effective November 9, 2026. Here
        is everything the final rules confirmed, changed, or settled for tax
        years 2025–2028.
      </p>

      {sections.map((s) => (
        <section key={s.h} className="mt-8">
          <h2 className="text-xl font-bold text-neutral-900">{s.h}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="mt-3 text-[15px] leading-relaxed text-neutral-700">
              {p}
            </p>
          ))}
        </section>
      ))}

      <section className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
        <h2 className="text-lg font-bold text-emerald-900">
          See what the final rules mean for your loan
        </h2>
        <p className="mt-2 text-sm text-emerald-800">
          Our deduction calculator now uses the IRS&apos;s exact phase-out
          formula — enter your loan and MAGI to see your real deduction.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/calculator"
            className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Run the calculator
          </Link>
          <Link
            href="/vin-check"
            className="rounded-md border border-emerald-700 px-5 py-2.5 text-sm font-semibold text-emerald-800 hover:bg-emerald-100"
          >
            Check my VIN
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-neutral-900">
          Frequently asked questions
        </h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="card p-4">
              <p className="font-semibold text-neutral-900">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-700">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "IRS Finalizes Car Loan Interest Deduction Rules (T.D. 10054): 9 Things Now Official",
          description: metadata.description,
          url: `${siteUrl}/blog/irs-final-rules-car-loan-interest-deduction`,
          author: { "@type": "Organization", name: brand },
          datePublished: "2026-10-18",
          dateModified: "2026-10-18",
          mainEntityOfPage: `${siteUrl}/blog/irs-final-rules-car-loan-interest-deduction`,
        }}
      />

      <div className="mt-8">
        <Disclaimer />
      </div>
      <p className="mt-4 text-xs text-neutral-500">{DISCLAIMER}</p>
    </article>
  );
}
