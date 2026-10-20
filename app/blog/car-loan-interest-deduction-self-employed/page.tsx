import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

const PAGE_URL = `${siteUrl}/blog/car-loan-interest-deduction-self-employed`;

export const metadata: Metadata = {
  title: "Car Loan Interest Deduction for the Self-Employed (Schedule C + the New $10K Rule)",
  description:
    "Self-employed? You can deduct car loan interest two ways: the business-use share on Schedule C (even with the standard mileage rate), plus the new $10K OBBBA deduction for the personal share. Here's how they fit together.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Car Loan Interest Deduction for the Self-Employed",
    description:
      "Schedule C business share + the new $10,000 personal deduction. How self-employed drivers combine both — without double-dipping.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Can a self-employed person deduct car loan interest?",
    a: "Yes — two ways. The business-use percentage of your car loan interest is deductible on Schedule C as a business expense. Separately, the new OBBBA deduction (up to $10,000/year, 2025–2028) can cover the personal-use share if the vehicle and loan qualify. You cannot deduct the same dollar of interest twice.",
  },
  {
    q: "Can I deduct car loan interest if I use the standard mileage rate?",
    a: "Yes. This surprises many people: even when you claim the standard mileage rate for business driving, you may still deduct the business-use portion of your car loan interest on top of it. The standard mileage rate doesn't include interest as a separate line — it's one of the few add-ons allowed.",
  },
  {
    q: "How do I split interest between business and personal use?",
    a: "Keep a mileage log for the year. Business-use percentage = business miles ÷ total miles. Apply that percentage to your total interest paid for the Schedule C portion; the remainder is your personal share for the Schedule 1-A deduction (if the vehicle qualifies).",
  },
  {
    q: "Does the new $10,000 deduction require the car to be US-assembled if I'm self-employed?",
    a: "For the Schedule 1-A (personal) portion, yes — the vehicle must be new and finally assembled in the USA. The Schedule C business-expense rules are older and separate: they don't have a US-assembly requirement, but they only cover the business-use share.",
  },
  {
    q: "What records do I need?",
    a: "A contemporaneous mileage log (business vs personal miles), your loan statements showing total interest paid (Form 1098-VLI for 2026+), and the VIN. The IRS expects the mileage log to exist before you file, not reconstructed after an audit letter.",
  },
];

export default function SelfEmployedPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Car Loan Interest Deduction for the Self-Employed: Schedule C + the New
        $10K Rule
      </h1>

      {/* Answer-first block */}
      <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> If you&apos;re self-employed, car loan
          interest is deductible in <strong>two separate pieces</strong>. The{" "}
          <strong>business-use share</strong> goes on <strong>Schedule C</strong>{" "}
          (and yes, you can claim it even on top of the standard mileage rate).
          The <strong>personal-use share</strong> can qualify for the{" "}
          <strong>new $10,000 OBBBA deduction</strong> on Schedule 1-A — if the
          car is new and finally assembled in the USA. One rule: never deduct the
          same interest dollar twice.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Piece 1: the business share on Schedule C
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          This rule predates OBBBA. If you drive your own car for your business
          — freelancing, rideshare, contracting, real estate — the share of your
          loan interest matching your business-use percentage is a business
          expense on Schedule C. Drive 20,000 miles total, 14,000 for business
          (70%), and 70% of your interest is deductible as a business cost.
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          The part most people miss: <strong>you can add this on top of the
          standard mileage rate.</strong> The mileage rate is a simplified
          bundle of fuel, wear, and depreciation — interest stays claimable as
          its own line. Under the actual-expense method, interest is simply one
          of the bundled costs instead.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Piece 2: the personal share on Schedule 1-A
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          The new deduction (IRC §163(h)(4), tax years 2025–2028) covers
          personal-use vehicles: up to <strong>$10,000/year</strong> of interest,
          claimed on <strong>Schedule 1-A, Part IV</strong>, no itemizing
          needed. For a mixed-use car, only the personal-use share of interest
          counts — and the car must clear all four rules (new, US final
          assembly, personal use expected &gt;50% at purchase, loan after
          12/31/2024). Run your{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            VIN
          </Link>{" "}
          to check the assembly rule — it&apos;s the one that fails most cars.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Worked example: one car, both deductions
        </h2>
        <div className="card mt-4 p-5">
          <ul className="space-y-2 text-[15px] leading-relaxed text-neutral-700">
            <li>Total interest paid in 2026: <strong>$5,000</strong></li>
            <li>Mileage log: 60% business / 40% personal</li>
            <li>
              Schedule C (business): 60% × $5,000 = <strong>$3,000</strong>{" "}
              business expense
            </li>
            <li>
              Schedule 1-A (personal): 40% × $5,000 ={" "}
              <strong>$2,000</strong> toward the $10,000 cap (vehicle must
              qualify)
            </li>
            <li>
              Total deducted: <strong>$5,000</strong> — every dollar once, in
              the right place
            </li>
          </ul>
        </div>
        <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
          Estimate your personal-share deduction with our{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            free calculator
          </Link>{" "}
          — enter your personal share of interest as the loan interest figure.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          The double-dip trap
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Claiming 100% of your interest on Schedule C <em>and</em> the full
          amount again on Schedule 1-A is the fastest route to an IRS notice.
          The two deductions split one pool of interest — business share and
          personal share must add up to what you actually paid, no more.
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
            "Car Loan Interest Deduction for the Self-Employed (Schedule C + the New $10K Rule)",
          description:
            "How self-employed drivers split car loan interest between Schedule C and the new Schedule 1-A deduction.",
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
