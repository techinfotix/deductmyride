import type { Metadata } from "next";
import Link from "next/link";
import HeroVinForm from "@/components/HeroVinForm";
import Checklist from "@/components/Checklist";
import AdSlot from "@/components/AdSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import EmailCapture from "@/components/EmailCapture";
import Disclaimer from "@/components/Disclaimer";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl, tagline } from "@/lib/site";
import { estimateDeduction, formatUSD } from "@/lib/tax";
import { vehicles, modelPagePath } from "@/lib/vehicles";

// Highest US search-volume models — linked from the homepage so Google
// (and visitors) can reach the model-page cluster from the site's strongest page.
const POPULAR_MODELS: Array<[string, string]> = [
  ["Ford", "F-150"],
  ["Toyota", "RAV4"],
  ["Honda", "CR-V"],
  ["Tesla", "Model Y"],
  ["Toyota", "Camry"],
  ["Honda", "Civic"],
  ["Chevrolet", "Silverado"],
  ["Toyota", "Corolla"],
  ["Honda", "Accord"],
  ["Nissan", "Rogue"],
  ["Ford", "Explorer"],
  ["Jeep", "Wrangler"],
];

export const metadata: Metadata = {
  title: "Car Loan Interest Tax Deduction Checker — Does Your Car Qualify?",
  description:
    "New US tax law lets you deduct up to $10,000/year in car loan interest — if your car is new, US-assembled, and for personal use. Check your VIN in 60 seconds.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Does your car qualify for the $10,000 car loan interest deduction?",
    description: tagline,
    url: siteUrl,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Is car loan interest tax-deductible in 2026?",
    a: "Yes — under the OBBBA (§70203), you can deduct up to $10,000 per year of interest paid on a qualifying new-vehicle auto loan. The vehicle must be new, finally assembled in the USA, for personal use, and the loan must have originated after December 31, 2024.",
  },
  {
    q: "Do I need to itemize to claim it?",
    a: "No. This is an above-the-line deduction, meaning you can claim it whether you take the standard deduction or itemize.",
  },
  {
    q: "Does a used car qualify?",
    a: "No. Only new vehicles — where the original use begins with you — qualify.",
  },
  {
    q: "How do I know if my car was assembled in the USA?",
    a: "Enter your 17-character VIN in our free checker above. We decode it with the official NHTSA database and show you the plant country.",
  },
];

export default function Home() {
  const example = estimateDeduction({
    amount: 45000,
    apr: 7,
    termYears: 6,
    status: "single",
    magi: 80000,
    marginalRatePct: 22,
  });

  return (
    <article>
      {/* HERO */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <p className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
            New US tax law (OBBBA §70203)
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
            Is your car loan interest tax-deductible? Find out in 60 seconds.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            {tagline} Up to <strong className="text-neutral-900">$10,000 a year</strong> in
            car loan interest could be deductible — but only if your vehicle meets 4 strict rules.
          </p>
          <div className="mt-2 max-w-2xl">
            <HeroVinForm />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4">
        <AdSlot slot="homepage-top" label="Leaderboard / responsive ad" />

        {/* IN SHORT — AEO direct-answer block */}
        <section aria-label="Summary" className="card border-emerald-200 bg-emerald-50/50 p-6">
          <h2 className="text-lg font-bold text-neutral-900">In short</h2>
          <p className="mt-2 leading-relaxed text-neutral-800">
            Since 2025, US taxpayers can deduct up to <strong>$10,000 per year</strong> of interest
            paid on a car loan — but only for a <strong>new</strong> vehicle with{" "}
            <strong>final assembly in the United States</strong>, bought for{" "}
            <strong>personal use</strong>, with a loan that originated{" "}
            <strong>after December 31, 2024</strong>. It is an above-the-line deduction, so no
            itemizing is required. Use the free VIN checker above to verify your vehicle.
          </p>
        </section>

        {/* 4 RULES */}
        <section className="mt-12" aria-labelledby="rules-heading">
          <h2 id="rules-heading" className="text-2xl font-bold text-neutral-900">
            The 4 rules your car must pass
          </h2>
          <p className="mt-2 text-neutral-600">
            Miss even one, and the deduction doesn&apos;t apply. Here&apos;s the plain-English version:
          </p>
          <div className="mt-6">
            <Checklist />
          </div>
        </section>

        {/* EXAMPLE */}
        <section className="card mt-12 p-6" aria-labelledby="example-heading">
          <h2 id="example-heading" className="text-2xl font-bold text-neutral-900">
            What could it be worth?
          </h2>
          <p className="mt-2 text-neutral-600">
            Example: a $45,000 loan at 7% APR over 6 years.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Year-1 interest</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">{formatUSD(example.yearOneInterest)}</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Estimated deduction</p>
              <p className="mt-1 text-2xl font-bold text-emerald-700">{formatUSD(example.cappedDeduction)}</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Tax saved (22% bracket)</p>
              <p className="mt-1 text-2xl font-bold text-neutral-900">{formatUSD(example.taxSaved)}</p>
            </div>
          </div>
          <Link
            href="/calculator"
            className="mt-4 inline-block rounded-md bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Calculate your own savings →
          </Link>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-12" aria-labelledby="how-heading">
          <h2 id="how-heading" className="text-2xl font-bold text-neutral-900">How it works</h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ["1. Enter your VIN", "We decode it with the official NHTSA database — free, no signup."],
              ["2. Check the 4 rules", "See exactly which rules your vehicle passes or fails, with the law cited."],
              ["3. Estimate your savings", "Run the calculator to see your deduction and real tax savings."],
            ].map(([t, d]) => (
              <li key={t} className="card p-5">
                <p className="font-semibold text-neutral-900">{t}</p>
                <p className="mt-2 text-sm text-neutral-600">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <AdSlot slot="homepage-mid" label="In-article responsive ad" />

        {/* Popular models — internal links into the model-page cluster */}
        <section className="mt-12" aria-labelledby="models-heading">
          <h2 id="models-heading" className="text-2xl font-bold text-neutral-900">
            Check popular models
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            See whether America&apos;s best-selling cars, trucks, and SUVs meet
            the deduction rules.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {POPULAR_MODELS.map(([make, model]) => {
              const v = vehicles.find((x) => x.make === make && x.model === model);
              if (!v) return null;
              return (
                <li key={`${make}-${model}`}>
                  <Link
                    href={modelPagePath(v, 2026)}
                    className="block rounded-md border border-neutral-200 px-3 py-2 text-neutral-700 hover:border-emerald-300 hover:text-emerald-800"
                  >
                    2026 {make} {model}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link href="/models" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            Browse all 60+ models →
          </Link>
        </section>

        {/* FAQ teaser */}
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
          <Link href="/faq" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
            Read all FAQs →
          </Link>
        </section>

        <AffiliateCTA />
        <EmailCapture />

        <div className="mb-4">
          <Disclaimer />
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: brand,
          url: siteUrl,
          description: tagline,
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
