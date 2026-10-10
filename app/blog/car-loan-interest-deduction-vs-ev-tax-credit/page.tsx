import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Car Loan Interest Deduction vs EV Tax Credit in 2026: Which Saves More?",
  description:
    "The federal EV tax credit is gone. The new car loan interest deduction (up to $10K/yr, 2025–2028) is here. Compare the two and see which saves you more in 2026.",
  alternates: { canonical: `${siteUrl}/blog/car-loan-interest-deduction-vs-ev-tax-credit` },
  openGraph: {
    title: "Car Loan Interest Deduction vs EV Tax Credit in 2026",
    description:
      "The EV credit expired. The $10K car loan interest deduction replaced it for many buyers — here's the comparison.",
    url: `${siteUrl}/blog/car-loan-interest-deduction-vs-ev-tax-credit`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Is the federal EV tax credit still available in 2026?",
    a: "No. The federal clean vehicle (EV) tax credit has expired and is not available for vehicles purchased now. The car loan interest deduction is the main federal tax break currently available to new-car buyers.",
  },
  {
    q: "Can I claim the car loan interest deduction on a used EV?",
    a: "No. The deduction requires a NEW vehicle for personal use. Used vehicles don't qualify regardless of powertrain.",
  },
  {
    q: "Does the car loan interest deduction apply to Teslas and other EVs?",
    a: "Yes, if the specific vehicle meets all four rules — new, US final assembly, personal use, qualifying loan. Many Teslas are US-assembled (Austin, TX and Fremont, CA). Check your exact model and year on our model pages or run your VIN.",
  },
  {
    q: "Which saved more: the old EV credit or the new deduction?",
    a: "The old EV credit was up to $7,500 off your tax bill directly. The car loan interest deduction is worth up to $10,000 × your marginal tax rate — e.g., $2,200 at a 22% rate. For most buyers the old credit was bigger, but the deduction is available now and the credit is not.",
  },
];

export default function EvVsDeductionPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Car Loan Interest Deduction vs EV Tax Credit in 2026: Which Saves You
        More?
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        If you bought an EV for the federal tax credit, here&apos;s the 2026
        reality check: <strong>the federal EV tax credit is gone</strong>. But a
        new federal break took its place for many buyers — the{" "}
        <strong>car loan interest deduction</strong> of up to $10,000 per year
        (2025–2028). Here&apos;s how they compare.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">Side-by-side</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-neutral-200 text-left">
                <th className="py-2 pr-4 font-semibold text-neutral-900"></th>
                <th className="py-2 pr-4 font-semibold text-neutral-900">
                  Old EV tax credit
                </th>
                <th className="py-2 font-semibold text-neutral-900">
                  Car loan interest deduction
                </th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">Status in 2026</td>
                <td className="py-2 pr-4 text-red-700 font-semibold">Expired</td>
                <td className="py-2 text-emerald-700 font-semibold">Active (2025–2028)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">Max benefit</td>
                <td className="py-2 pr-4">Up to $7,500 credit</td>
                <td className="py-2">Up to $10,000 deduction</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">How it saves you</td>
                <td className="py-2 pr-4">Dollar-for-dollar off tax owed</td>
                <td className="py-2">$10,000 × your tax rate (e.g. $2,200 at 22%)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="py-2 pr-4 font-medium">Vehicle rule</td>
                <td className="py-2 pr-4">EV/PHEV with battery &amp; price rules</td>
                <td className="py-2">Any new, US-assembled personal vehicle</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Income limit</td>
                <td className="py-2 pr-4">Had MSRP &amp; income caps</td>
                <td className="py-2">Phaseout from $100K MAGI ($200K joint)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          What this means if you&apos;re buying now
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-neutral-700">
          <li>
            Don&apos;t let a salesperson quote you the federal EV credit —{" "}
            <strong>it no longer exists</strong> for new purchases.
          </li>
          <li>
            If you&apos;re financing a <strong>new, US-assembled</strong> car —
            EV or gas — the interest deduction is the federal break to plan
            around. Check whether your exact model qualifies on our{" "}
            <Link
              href="/models"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              model pages
            </Link>{" "}
            or run your{" "}
            <Link
              href="/vin-check"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              VIN
            </Link>
            .
          </li>
          <li>
            Run the numbers first: our{" "}
            <Link
              href="/calculator"
              className="font-semibold text-emerald-700 hover:text-emerald-800"
            >
              calculator
            </Link>{" "}
            shows your deduction and real tax savings from your loan terms and
            tax bracket.
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
