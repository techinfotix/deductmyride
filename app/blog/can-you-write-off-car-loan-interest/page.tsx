import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Can You Write Off Car Loan Interest on Your Taxes? (2026 Rules)",
  description:
    "Generally no — but a new 2025–2028 law lets you deduct up to $10,000/year of car loan interest if your car is new, US-assembled, and for personal use. See the 4 rules.",
  alternates: { canonical: `${siteUrl}/blog/can-you-write-off-car-loan-interest` },
  openGraph: {
    title: "Can You Write Off Car Loan Interest on Your Taxes?",
    description:
      "The 2026 answer: yes, up to $10K/year — if your car passes 4 rules. Check them here.",
    url: `${siteUrl}/blog/can-you-write-off-car-loan-interest`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Is car loan interest tax deductible in 2026?",
    a: "Yes — for the first time in decades. A 2025 law created a temporary deduction of up to $10,000/year of car loan interest for tax years 2025–2028, if your vehicle is new, finally assembled in the USA, for personal use, and financed with a qualifying loan.",
  },
  {
    q: "Can I deduct interest on a used car loan?",
    a: "No. The new deduction only applies to NEW vehicles. Used-car loan interest remains non-deductible for personal use.",
  },
  {
    q: "What if I use my car for business?",
    a: "The new deduction is for personal-use vehicles. If you use the car for business, different rules apply — business-use interest may be deductible as a business expense instead. Talk to a CPA about your situation.",
  },
  {
    q: "Do I need to itemize to deduct car loan interest?",
    a: "No. The new car loan interest deduction works whether you itemize or take the standard deduction. It's claimed on the new Schedule 1-A.",
  },
];

export default function WriteOffPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Can You Write Off Car Loan Interest on Your Taxes?
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        <strong>Short answer: yes — up to $10,000 per year</strong>, thanks to a
        new law covering tax years 2025–2028. Before this law, personal car loan
        interest was <em>not</em> deductible at all. Here&apos;s exactly when
        you qualify.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          The 4 rules your car must pass
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-[15px] leading-relaxed text-neutral-700">
          <li>
            <strong>New vehicle.</strong> You must be the first owner — used
            cars don&apos;t count.
          </li>
          <li>
            <strong>Finally assembled in the USA.</strong> The deciding factor
            for most people. A Honda built in Ohio qualifies; a Ford built in
            Mexico doesn&apos;t.{" "}
            <Link
              href="/vin-check"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              Check your VIN here
            </Link>{" "}
            — it decodes your car&apos;s assembly plant in 60 seconds.
          </li>
          <li>
            <strong>Personal use.</strong> Not for business, fleet, or for-hire
            use.
          </li>
          <li>
            <strong>Qualifying loan.</strong> A first-lien auto loan originated
            after December 31, 2024.
          </li>
        </ol>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
          There&apos;s also an income phaseout: it starts at{" "}
          <strong>$100,000</strong> MAGI (<strong>$200,000</strong> joint) and
          disappears at $150,000 / $250,000.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          How much is it actually worth?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          A deduction isn&apos;t a credit — it&apos;s worth your{" "}
          <strong>marginal tax rate × the interest</strong>. Example: $8,000 of
          yearly interest at a 22% bracket = <strong>$1,760 back</strong>. Run
          your own numbers with our{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            free calculator
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          What about business use or refinancing?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Business-use vehicle interest follows separate business-expense rules
          — see a CPA. Refinanced loans can still qualify as long as the loan
          remains a qualifying first lien tied to the original qualifying
          vehicle and the other rules hold. When in doubt, our{" "}
          <Link
            href="/is-car-loan-interest-tax-deductible"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            full guide
          </Link>{" "}
          walks through the edge cases.
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
