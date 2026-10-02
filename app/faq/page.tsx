import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Disclaimer from "@/components/Disclaimer";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ — Car Loan Interest Tax Deduction",
  description:
    "Answers to the most common questions about the US car loan interest tax deduction: eligibility, the $10,000 cap, phase-outs, VIN checks, and how to claim it.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: `FAQ | ${brand}`,
    description: "Every common question about the car loan interest deduction, answered in plain English.",
    url: `${siteUrl}/faq`,
  },
};

const faqs = [
  {
    q: "Is car loan interest tax-deductible in 2026?",
    a: "Yes. Under OBBBA §70203, you can deduct up to $10,000 per year of interest paid on a qualifying new-vehicle auto loan for tax years 2025–2028.",
  },
  {
    q: "What are the 4 rules to qualify?",
    a: "1) The vehicle must be NEW (original use begins with you). 2) Final assembly must be in the USA. 3) It must be for personal use, not business or fleet. 4) The loan must have originated after December 31, 2024.",
  },
  {
    q: "Does a used car qualify?",
    a: "No. Used and pre-owned vehicles are explicitly excluded — only new vehicles qualify.",
  },
  {
    q: "Do leases qualify?",
    a: "No. The deduction covers interest on a loan used to purchase the vehicle. Lease payments are not loan interest.",
  },
  {
    q: "Do I need to itemize deductions?",
    a: "No. This is an above-the-line deduction, so it works whether you take the standard deduction or itemize.",
  },
  {
    q: "What is the maximum deduction?",
    a: "$10,000 of interest paid per year. If you paid $7,000 in interest, your deduction is $7,000; if you paid $14,000, it's capped at $10,000.",
  },
  {
    q: "Does a $10,000 deduction mean I save $10,000?",
    a: "No — this is the most common misunderstanding. A deduction reduces taxable income. Your savings equal the deduction times your marginal tax rate (e.g., $10,000 × 22% = $2,200 saved).",
  },
  {
    q: "What are the income limits?",
    a: "The deduction phases out above $100,000 of MAGI for single filers ($200,000 for married filing jointly). Above the threshold, the deduction may be reduced — confirm the exact amount with a CPA.",
  },
  {
    q: "How do I check if my car was assembled in the USA?",
    a: "Use our free VIN checker — it decodes your 17-character VIN with the official NHTSA database and shows the plant country. You can also check the label on the driver's door jamb.",
  },
  {
    q: "My car is an American brand but was assembled in Mexico. Does it qualify?",
    a: "No. The law cares about where your specific vehicle was finally assembled, not the brand's headquarters. Many US-brand models are assembled in Mexico or Canada — check your VIN.",
  },
  {
    q: "What records should I keep?",
    a: "Keep your loan agreement, year-end interest statements from your lender, and proof of the vehicle's assembly (e.g., your VIN decode result) in case of questions.",
  },
  {
    q: "How do I claim it on my tax return?",
    a: "Tax software (TurboTax, FreeTaxUSA, eFile.com) will walk you through the new deduction section. Enter your interest-paid figure and keep your supporting records.",
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Frequently asked questions
      </h1>
      <p className="mt-3 text-neutral-600">
        Plain-English answers about the US car loan interest tax deduction (OBBBA §70203).
      </p>

      {/* IN SHORT — AEO direct-answer block */}
      <section aria-label="Summary" className="card mt-6 border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">In short</h2>
        <p className="mt-2 leading-relaxed text-neutral-800">
          Most questions boil down to this: the deduction is <strong>up to $10,000/year</strong> of
          interest on a <strong>new, US-assembled, personal-use</strong> vehicle with a loan from{" "}
          <strong>after 12/31/2024</strong>. No itemizing needed. Your tax savings equal the
          deduction times your marginal rate — not the full deduction amount.
        </p>
      </section>

      <AdSlot slot="faq-top" label="Leaderboard / responsive ad" />

      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <section key={f.q} className="card p-5">
            <h2 className="text-base font-semibold text-neutral-900">{f.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
          </section>
        ))}
      </div>

      <div className="card mt-8 border-emerald-200 p-6">
        <h2 className="text-lg font-bold text-neutral-900">Still not sure about your car?</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Run your VIN through the free checker or estimate your savings with the calculator.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/vin-check" className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">
            Check my VIN
          </Link>
          <Link href="/calculator" className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
            Open calculator
          </Link>
        </div>
      </div>

      <AdSlot slot="faq-bottom" label="In-article responsive ad" />

      <div className="mt-4">
        <Disclaimer />
      </div>

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
