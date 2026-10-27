import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

const PAGE_URL = `${siteUrl}/blog/car-loan-interest-deduction-income-limits`;

export const metadata: Metadata = {
  title: "Car Loan Interest Deduction Income Limits: MAGI Phase-Out Explained (2026)",
  description:
    "Full deduction up to $100,000 MAGI ($200,000 joint), shrinking $200 per $1,000 above, gone at $150,000/$250,000. Phase-out table, examples, and how to check your MAGI.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Car Loan Interest Deduction Income Limits (MAGI Phase-Out)",
    description:
      "$100K/$200K full, $150K/$250K gone — the complete phase-out table with examples.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What is the income limit for the car loan interest deduction?",
    a: "The full $10,000 deduction is available up to $100,000 of MAGI for single filers ($200,000 joint). Above that it shrinks $200 per $1,000 of extra MAGI, and disappears entirely at $150,000 ($250,000 joint).",
  },
  {
    q: "What counts as MAGI for this deduction?",
    a: "Modified Adjusted Gross Income: your AGI plus certain add-backs (like foreign earned income exclusions and tax-exempt interest). For most people it's close to their AGI on Form 1040 line 11.",
  },
  {
    q: "Can I still get a partial deduction if I'm over $100,000?",
    a: "Yes — that's exactly what the phase-out is for. Example: a single filer at $120,000 MAGI with $6,000 of interest loses $4,000 to the phase-out and still deducts $2,000.",
  },
  {
    q: "How can I lower my MAGI to qualify?",
    a: "Common legal levers: pre-tax 401(k)/IRA contributions, HSA contributions, and timing bonuses or capital gains. These reduce AGI (and therefore MAGI) — but run the numbers with a CPA before making moves purely for this deduction.",
  },
];

export default function IncomeLimitsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Car Loan Interest Deduction Income Limits: MAGI Phase-Out Explained
      </h1>

      {/* Answer-first block */}
      <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> You get the{" "}
          <strong>full $10,000 deduction</strong> up to{" "}
          <strong>$100,000 MAGI</strong> single /{" "}
          <strong>$200,000 joint</strong>. Above that, it shrinks{" "}
          <strong>$200 for every $1,000</strong> (or fraction) over the line,
          and disappears completely at{" "}
          <strong>$150,000 / $250,000</strong>. The phase-out applies after the
          $10,000 cap — so even the maximum deduction can vanish at the top of
          the range.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          The phase-out table
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-neutral-200 text-left">
                <th className="py-2 pr-4 font-semibold text-neutral-900">
                  Filing status
                </th>
                <th className="py-2 pr-4 font-semibold text-neutral-900">
                  Full deduction
                </th>
                <th className="py-2 pr-4 font-semibold text-neutral-900">
                  Partial
                </th>
                <th className="py-2 font-semibold text-neutral-900">Gone</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">Single / HOH / MFS</td>
                <td className="py-2 pr-4">Up to $100,000</td>
                <td className="py-2 pr-4">$100,000 – $150,000</td>
                <td className="py-2">Over $150,000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Married filing jointly</td>
                <td className="py-2 pr-4">Up to $200,000</td>
                <td className="py-2 pr-4">$200,000 – $250,000</td>
                <td className="py-2">Over $250,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Two examples
        </h2>
        <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-neutral-700">
          <li>
            <strong>Single, MAGI $112,500, interest $9,000:</strong> $12,500
            over → 13 units (fractions count) × $200 = $2,600 reduction.
            Deduction: <strong>$6,400</strong>. At 22%:{" "}
            <strong>$1,408 back</strong>.
          </li>
          <li>
            <strong>Joint, MAGI $210,000, interest $10,000:</strong> $10,000
            over → 10 units × $200 = $2,000 reduction. Deduction:{" "}
            <strong>$8,000</strong>. At 24%: <strong>$1,920 back</strong>.
          </li>
        </ul>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
          Skip the hand math: the{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            calculator
          </Link>{" "}
          applies the phase-out automatically from your MAGI. And if you
          haven&apos;t checked whether your car qualifies at all, start with the{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            VIN checker
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          What is MAGI, exactly?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          MAGI starts from your AGI (Form 1040, line 11) and adds back a few
          items most people don&apos;t have — foreign earned income, tax-exempt
          interest, and excluded Social Security. For most filers,{" "}
          <strong>MAGI ≈ AGI</strong>. One warning: because the deduction sits
          below AGI on the return, it does <em>not</em> lower your MAGI — it
          can&apos;t pull you back under a threshold.
        </p>
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
            "Car Loan Interest Deduction Income Limits: MAGI Phase-Out Explained (2026)",
          description:
            "Full deduction up to $100,000 MAGI ($200,000 joint), shrinking $200 per $1,000 above, gone at $150,000/$250,000.",
          url: PAGE_URL,
          author: { "@type": "Organization", name: brand, url: siteUrl },
          publisher: { "@type": "Organization", name: brand, url: siteUrl },
          datePublished: "2026-10-26",
          dateModified: "2026-10-26",
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
