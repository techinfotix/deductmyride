import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

const PAGE_URL = `${siteUrl}/blog/how-to-claim-car-loan-interest-deduction`;

export const metadata: Metadata = {
  title: "How to Claim the Car Loan Interest Deduction (Schedule 1-A, Step by Step)",
  description:
    "Claim up to $10,000 of car loan interest on Schedule 1-A Part IV: get Form 1098-VLI from your lender, enter your VIN, apply the phase-out, and attach it to Form 1040. Full 2026 steps.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Claim the Car Loan Interest Deduction (Schedule 1-A)",
    description:
      "Step-by-step: Form 1098-VLI, your VIN on Schedule 1-A Part IV, the phase-out math, and Form 1040 line 13b.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const steps = [
  {
    name: "Confirm your vehicle qualifies",
    text: "Your car must be new, finally assembled in the USA, for personal use, under 14,000 lbs, with a first-lien loan originated after 12/31/2024. Decode your VIN with the NHTSA database (our free VIN checker does this in 60 seconds) — do not guess from the brand name.",
  },
  {
    name: "Get your interest total (Form 1098-VLI)",
    text: "Starting with the 2026 tax year, your lender must send you Form 1098-VLI (Vehicle Loan Interest) by January 31 if you paid $600 or more in qualified interest. For 2025, use your lender's annual statement. Keep every statement regardless.",
  },
  {
    name: "Apply the income phase-out",
    text: "Compare your MAGI to the thresholds: $100,000 single / $200,000 joint. For every $1,000 (or fraction) above the threshold, reduce your deduction by $200. It disappears completely at $150,000 / $250,000.",
  },
  {
    name: "Complete Schedule 1-A, Part IV",
    text: "Part IV is labeled 'No Tax on Car Loan Interest.' Enter each vehicle's VIN (mandatory — no VIN, no deduction) and your allowable interest after the phase-out. Schedule 1-A has room for two VINs; the combined cap is $10,000 per return.",
  },
  {
    name: "Attach Schedule 1-A to Form 1040",
    text: "The total from Schedule 1-A flows to Form 1040 (line 13b on the 2025 form). You claim it whether you itemize or take the standard deduction.",
  },
  {
    name: "Fix your W-4 for next year",
    text: "Submit an updated W-4 to your employer (2026 form, Step 4(b)) and run the IRS Tax Withholding Estimator — now updated for the OBBBA deductions — so next year's savings arrive in your paychecks, not a refund.",
  },
];

const faqs = [
  {
    q: "Where do I claim the car loan interest deduction on my tax return?",
    a: "On Schedule 1-A, Part IV ('No Tax on Car Loan Interest'), attached to Form 1040. Enter your vehicle's VIN and the qualified interest amount. The Schedule 1-A total flows to Form 1040 line 13b (2025 form).",
  },
  {
    q: "What is Form 1098-VLI?",
    a: "Form 1098-VLI (Vehicle Loan Interest) is the new lender form created for this deduction. Starting with the 2026 tax year, lenders must send it by January 31 of the following year if you paid $600 or more in qualified vehicle loan interest.",
  },
  {
    q: "Do I need my VIN to claim the deduction?",
    a: "Yes. The VIN is mandatory on Schedule 1-A, Part IV. Under the law and final regulations, the interest is not deductible unless you report the VIN of the vehicle securing the loan.",
  },
  {
    q: "Can I claim the deduction for two cars?",
    a: "Yes, if both qualify — but the $10,000 cap is per return, not per car. Spouses filing jointly share one $10,000 cap; filing separately, each return gets its own $10,000 cap. Schedule 1-A has space for two VINs.",
  },
  {
    q: "Is interest on a refinanced car loan still deductible?",
    a: "Generally yes. If you refinance a qualifying loan, interest on the refinanced amount remains eligible — as long as the vehicle still qualifies and the loan stays secured by it. Note: under the September 2026 final regulations, interest attributable to negative equity rolled in from a trade-in is NOT deductible.",
  },
];

export default function HowToClaimPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        How to Claim the Car Loan Interest Deduction (Schedule 1-A, Step by
        Step)
      </h1>

      {/* Answer-first block — written for AI answers & featured snippets */}
      <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> To claim the car loan interest
          deduction, complete <strong>Schedule 1-A, Part IV</strong> and attach
          it to your Form 1040. You&apos;ll need your vehicle&apos;s{" "}
          <strong>VIN</strong> and your total qualified interest from{" "}
          <strong>Form 1098-VLI</strong> (sent by your lender). The deduction is
          capped at <strong>$10,000/year</strong>, phases out above $100,000
          MAGI ($200,000 joint), and works whether or not you itemize.
        </p>
      </div>

      <section className="mt-10" aria-label="Steps">
        <h2 className="text-2xl font-bold text-neutral-900">
          The 6 steps to claim it
        </h2>
        <ol className="mt-6 space-y-5">
          {steps.map((s, i) => (
            <li key={s.name} className="card p-5">
              <p className="font-semibold text-neutral-900">
                <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700 text-xs font-bold text-white">
                  {i + 1}
                </span>
                {s.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
          Not sure your car passes the assembly test? Run the{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            free VIN checker
          </Link>{" "}
          first, then estimate your exact deduction with the{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            calculator
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          The phase-out math, in one example
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Single filer, MAGI $120,000, paid $6,000 of qualified interest. The
          excess over the $100,000 threshold is $20,000 = 20 units of $1,000.
          Reduction: 20 × $200 = <strong>$4,000</strong>. Deduction claimed:{" "}
          <strong>$6,000 − $4,000 = $2,000</strong>. At a 22% marginal rate,
          that&apos;s <strong>$440 back</strong> on the return.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Mistakes that cost people the deduction
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
          <li>
            <strong>Skipping the VIN</strong> — without it on Schedule 1-A, the
            deduction is denied, full stop.
          </li>
          <li>
            <strong>Assuming the brand decides assembly</strong> — final
            assembly is per-vehicle. Check the{" "}
            <Link
              href="/models"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              model list
            </Link>{" "}
            or decode the VIN.
          </li>
          <li>
            <strong>Claiming rolled-in negative equity</strong> — the September
            2026 final regulations say interest on trade-in negative equity
            bundled into a new loan is not deductible.
          </li>
          <li>
            <strong>Leases and used cars</strong> — neither qualifies, no
            exceptions.
          </li>
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className="text-2xl font-bold text-neutral-900">
          Common questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="card p-5">
              <h3 className="font-semibold text-neutral-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Disclaimer />
        <p className="mt-3 text-xs text-neutral-500">{DISCLAIMER}</p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "How to Claim the Car Loan Interest Deduction (Schedule 1-A, Step by Step)",
          description:
            "Claim up to $10,000 of car loan interest on Schedule 1-A Part IV with Form 1098-VLI and your VIN.",
          url: PAGE_URL,
          author: { "@type": "Organization", name: brand, url: siteUrl },
          publisher: { "@type": "Organization", name: brand, url: siteUrl },
          datePublished: "2026-10-20",
          dateModified: "2026-10-20",
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to claim the car loan interest deduction",
          step: steps.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </article>
  );
}
