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

      <div className="mt-8">
        <DeductionCalculator />
      </div>

      <AdSlot slot="calculator-bottom" label="In-article responsive ad" />
      <AffiliateCTA heading="Ready to claim it on your return?" />

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
