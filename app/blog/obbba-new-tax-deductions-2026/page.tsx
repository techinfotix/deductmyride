import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "The 4 New OBBBA Tax Deductions for 2026 (Tips, Overtime, Car Loans, Seniors)",
  description:
    "OBBBA created 4 new tax deductions for 2025–2028: no tax on tips (up to $25K), overtime (up to $12.5K), car loan interest (up to $10K), and a $6K senior bonus. See caps, phaseouts, and how to claim them.",
  alternates: { canonical: `${siteUrl}/blog/obbba-new-tax-deductions-2026` },
  openGraph: {
    title: "The 4 New OBBBA Tax Deductions for 2026",
    description:
      "Tips, overtime, car loan interest, and seniors — the four new deductions, their caps, phaseouts, and how to claim them on Schedule 1-A.",
    url: `${siteUrl}/blog/obbba-new-tax-deductions-2026`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Do I have to itemize to claim the new OBBBA deductions?",
    a: "No. All four — tips, overtime, car loan interest, and the senior bonus — can be claimed whether you itemize or take the standard deduction ($16,100 single / $32,200 joint for 2026). You claim them on the new Schedule 1-A.",
  },
  {
    q: "What tax years do the new deductions apply to?",
    a: "Tax years 2025 through 2028. They are temporary provisions and are scheduled to expire after 2028 unless Congress extends them.",
  },
  {
    q: "Can I claim more than one of the new deductions?",
    a: "Yes, if you qualify for several. A tipped worker over 65 with a qualifying car loan could potentially claim the tips deduction, the car loan interest deduction, and the senior bonus in the same year.",
  },
  {
    q: "Do the new deductions affect my state taxes?",
    a: "It depends on your state. Some states automatically conform to federal changes; others don't. Check your state's department of revenue for 2026 conformity guidance.",
  },
];

export default function ObbbaDeductionsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        The 4 New OBBBA Tax Deductions for 2026: Tips, Overtime, Car Loans &amp;
        Seniors
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        The One Big Beautiful Bill Act (OBBBA), signed in July 2025, created
        four brand-new federal tax deductions for 2025–2028. They&apos;re
        already showing up on 2026 W-4s and the IRS withholding estimator — but
        most taxpayers still haven&apos;t adjusted. Here&apos;s each one, with
        caps, phaseouts, and how to claim them.
      </p>

      <section className="mt-10" aria-label="The four deductions">
        <h2 className="text-2xl font-bold text-neutral-900">
          1. No tax on tips — up to $25,000
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Tipped workers in qualifying occupations can deduct up to{" "}
          <strong>$25,000 per year</strong> of reported tip income. The
          deduction begins phasing out above <strong>$150,000</strong> of MAGI
          (<strong>$300,000</strong> joint). Your employer reports tips in W-2
          Box 12 — and note that Social Security and Medicare taxes still apply
          to tip income; only federal income tax is reduced.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          2. No tax on overtime — up to $12,500 ($25,000 joint)
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          You can deduct the <em>premium half</em> of overtime pay required by
          the Fair Labor Standards Act — the extra 50% above your regular rate,
          not your full overtime wages. Cap: <strong>$12,500</strong> single /{" "}
          <strong>$25,000</strong> joint, phasing out above{" "}
          <strong>$150,000</strong> MAGI (<strong>$300,000</strong> joint).
          Employers must now break out qualified overtime on W-2s.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          3. Car loan interest deduction — up to $10,000
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Deduct up to <strong>$10,000 per year</strong> of interest on a loan
          for a <strong>new, US-assembled</strong> vehicle bought for personal
          use after 2024 (under 14,000 lbs). Phaseout starts at{" "}
          <strong>$100,000</strong> MAGI (<strong>$200,000</strong> joint).
          You&apos;ll report the vehicle&apos;s VIN on your return — run yours
          through our{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            free VIN checker
          </Link>{" "}
          to see if your car passes all four rules, or estimate your savings
          with the{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            deduction calculator
          </Link>
          . Full rules are in our{" "}
          <Link
            href="/is-car-loan-interest-tax-deductible"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            complete guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          4. Senior bonus deduction — $6,000 per person 65+
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Taxpayers age 65 or older get an extra <strong>$6,000</strong>{" "}
          deduction per person — on top of the standard deduction — so a
          qualifying couple can add up to $12,000. It phases out above{" "}
          <strong>$75,000</strong> MAGI (<strong>$150,000</strong> joint).
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          How to claim them: Schedule 1-A
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          All four deductions are claimed on the <strong>new Schedule 1-A</strong>,
          and you&apos;ll need a valid Social Security number. Married couples
          generally must file jointly to claim them.
        </p>
        <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
          <p className="text-[15px] leading-relaxed text-neutral-800">
            <span className="font-bold">October move: </span>
            if any of these deductions apply to you and your W-4 hasn&apos;t
            changed, you&apos;re likely over-withholding right now. Run the IRS
            Tax Withholding Estimator (updated for the new deductions) and give
            your employer a fresh W-4 — the 2026 form has room for them in Step
            4(b) — so the savings reach your remaining paychecks instead of
            sitting with the IRS until your refund.
          </p>
        </div>
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
