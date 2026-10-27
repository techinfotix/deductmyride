import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

const PAGE_URL = `${siteUrl}/blog/does-leasing-a-car-qualify-for-tax-deduction`;

export const metadata: Metadata = {
  title: "Does Leasing a Car Qualify for the Car Loan Interest Deduction? (No — Here's Why)",
  description:
    "Leased cars do NOT qualify for the $10,000 car loan interest deduction: a lease is not a purchase, there's no loan, and lease payments aren't interest. See the rules and what to do instead.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Does Leasing a Car Qualify for the Tax Deduction?",
    description:
      "No — leases fail two hard rules. Here's why, and what leased-car drivers can do instead.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can I deduct lease payments on my taxes?",
    a: "Not under the new car loan interest deduction. Lease payments are rent for using someone else's car, not interest on a loan you took out — so they fail the deduction's core requirements.",
  },
  {
    q: "What if I buy the car at the end of my lease?",
    a: "A lease buyout is a used-car purchase, not a new one — so it still doesn't qualify for the deduction, which requires the vehicle's original use to begin with you.",
  },
  {
    q: "Can a business deduct a leased car?",
    a: "Yes, separately. Businesses can deduct the business-use share of lease payments as a business expense (subject to lease-inclusion limits for expensive vehicles). That's a business rule, not the personal $10,000 deduction.",
  },
  {
    q: "I'm leasing now. What should I do?",
    a: "If a tax break matters to you, compare your lease against financing a new, US-assembled car: the deduction is worth up to $10,000 × your tax rate per year (e.g., $2,200 at 22%). Run the numbers in our calculator before your next car decision.",
  },
];

export default function LeasingPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Does Leasing a Car Qualify for the Car Loan Interest Deduction?
      </h1>

      {/* Answer-first block */}
      <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer: No.</strong> Leased cars do{" "}
          <strong>not</strong> qualify for the $10,000 car loan interest
          deduction. A lease fails two hard rules at once: it is{" "}
          <strong>not a purchase</strong> (you never own the car), and lease
          payments are <strong>not loan interest</strong> — there is no loan,
          no first lien, and no interest to deduct. This holds even if the
          leased car is new and US-assembled.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Why leases fail the rules
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
          <li>
            <strong>No purchase.</strong> The deduction covers interest on a
            loan used to <em>buy</em> a vehicle. A lease is a rental agreement
            — the leasing company owns the car.
          </li>
          <li>
            <strong>No loan, no lien.</strong> The law requires a first-lien
            loan secured by the vehicle. A lease creates no lien in your name.
          </li>
          <li>
            <strong>Payments aren&apos;t interest.</strong> The &quot;money
            factor&quot; in a lease looks like an interest rate, but legally
            it&apos;s a rental charge — and rental charges are personal
            expenses, not deductible interest.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Lease vs finance: the tax math
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Take a $45,000 new car at 7% APR. Financed over 6 years, year-1
          interest is roughly <strong>$2,900</strong> — deductible if the car
          qualifies, worth about <strong>$640</strong> at a 22% rate. The same
          car on a lease? <strong>$0 deduction</strong>, every year of the
          lease. Over a 3-year lease, that&apos;s ~$1,900 of tax savings left
          on the table (before the phase-out). Check whether a car you&apos;re
          considering qualifies with the{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            VIN checker
          </Link>{" "}
          and run your numbers in the{" "}
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
          The one exception: business leases
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          If you lease a car for business, the business-use share of lease
          payments is deductible as a business expense (with lease-inclusion
          adjustments for high-value vehicles). That&apos;s the older business
          rule — separate from, and unaffected by, the new personal deduction.
          See our{" "}
          <Link
            href="/blog/car-loan-interest-deduction-self-employed"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            self-employed guide
          </Link>{" "}
          for how business and personal car deductions split.
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
            "Does Leasing a Car Qualify for the Car Loan Interest Deduction?",
          description:
            "Leased cars do NOT qualify: a lease is not a purchase and lease payments aren't loan interest.",
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
