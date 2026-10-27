import type { Metadata } from "next";
import DeductionCalculator from "@/components/DeductionCalculator";
import AdSlot from "@/components/AdSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Loan Interest Deduction Calculator — How Much Will You Save?",
  description:
    "Estimate your yearly car loan interest deduction (up to $10,000) and your actual tax savings at your marginal rate. Free calculator with MAGI phase-out check.",
  alternates: { canonical: `${siteUrl}/calculator` },
  openGraph: {
    title: `Deduction calculator | ${brand}`,
    description: "Estimate your deduction and real tax savings — and learn why a deduction is not a refund.",
    url: `${siteUrl}/calculator`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function CalculatorPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Car loan interest deduction calculator
      </h1>
      <p className="mt-3 max-w-3xl text-neutral-600">
        Enter your loan details to estimate your yearly deduction (capped at $10,000 by law)
        and — more importantly — your <strong>actual tax savings</strong>. A $10,000 deduction
        does <em>not</em> mean $10,000 back; your marginal tax bracket decides the savings.
      </p>

      {/* Answer-first block — written for AI answers & featured snippets */}
      <div className="card mt-6 max-w-3xl border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> Your tax saving ={" "}
          <strong>deduction × your marginal tax rate</strong>. The deduction is
          your yearly interest capped at <strong>$10,000</strong> (then reduced
          by the MAGI phase-out: −$200 per $1,000 over $100,000 single /
          $200,000 joint). Example: $8,000 of interest at a 22% rate ={" "}
          <strong>$1,760 back</strong>.
        </p>
      </div>

      <div className="mt-8">
        <DeductionCalculator />
      </div>

      <AdSlot slot="calculator-bottom" label="In-article responsive ad" />
      <AffiliateCTA heading="Ready to claim it on your return?" />

      <section className="mt-10 max-w-3xl" aria-labelledby="calc-faq-heading">
        <h2 id="calc-faq-heading" className="text-2xl font-bold text-neutral-900">
          Calculator questions
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Does a $10,000 deduction mean $10,000 back?",
              a: "No. A deduction reduces taxable income, not your tax bill dollar-for-dollar. Your saving equals the deduction times your marginal tax rate — $10,000 × 22% = $2,200.",
            },
            {
              q: "What is my marginal tax rate?",
              a: "The rate on your last dollar of income (10%, 12%, 22%, 24%, 32%, 35%, or 37% federally). Most middle-income filers are in the 12% or 22% bracket. The calculator lets you pick it directly.",
            },
            {
              q: "What if my income is over $100,000?",
              a: "The deduction phases out: $200 less for every $1,000 (or fraction) of MAGI above $100,000 single / $200,000 joint, disappearing at $150,000 / $250,000. The calculator applies this automatically.",
            },
            {
              q: "Does the calculator work for refinanced loans?",
              a: "Yes — enter the refinanced loan's balance, rate, and term. Note that interest on trade-in negative equity rolled into the loan is not deductible under the final regulations.",
            },
          ].map((f) => (
            <div key={f.q} className="card p-5">
              <h3 className="font-semibold text-neutral-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Does a $10,000 deduction mean $10,000 back?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. A deduction reduces taxable income, not your tax bill dollar-for-dollar. Your saving equals the deduction times your marginal tax rate — $10,000 at 22% = $2,200.",
              },
            },
            {
              "@type": "Question",
              name: "What is my marginal tax rate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The rate on your last dollar of income (10%, 12%, 22%, 24%, 32%, 35%, or 37% federally). Most middle-income filers are in the 12% or 22% bracket.",
              },
            },
            {
              "@type": "Question",
              name: "What if my income is over $100,000?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The deduction phases out: $200 less for every $1,000 (or fraction) of MAGI above $100,000 single / $200,000 joint, disappearing at $150,000 / $250,000.",
              },
            },
            {
              "@type": "Question",
              name: "Does the calculator work for refinanced loans?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — enter the refinanced loan's balance, rate, and term. Note that interest on trade-in negative equity rolled into the loan is not deductible under the final regulations.",
              },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${brand} Deduction Calculator`,
          url: `${siteUrl}/calculator`,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Free calculator estimating the yearly car loan interest tax deduction (up to $10,000) and actual tax savings, with MAGI phase-out check.",
        }}
      />
    </article>
  );
}
