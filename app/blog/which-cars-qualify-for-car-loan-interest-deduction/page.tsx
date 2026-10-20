import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";
import { vehicles, modelPagePath, type Vehicle } from "@/lib/vehicles";

const PAGE_URL = `${siteUrl}/blog/which-cars-qualify-for-car-loan-interest-deduction`;

export const metadata: Metadata = {
  title: "Which Cars Qualify for the Car Loan Interest Deduction in 2026? (List)",
  description:
    "Full list: cars, trucks & SUVs that are finally assembled in the USA and qualify for the $10,000 car loan interest deduction — plus the popular models that DON'T qualify, and the ones where it depends on your VIN.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Which Cars Qualify for the Car Loan Interest Deduction? (2026 List)",
    description:
      "US-assembled models that qualify, VIN-dependent models, and popular models that don't — the complete 2026 list.",
    url: PAGE_URL,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Which cars qualify for the car loan interest deduction?",
    a: "New cars, trucks, SUVs, and motorcycles under 14,000 lbs that are finally assembled in the United States and bought for personal use with a loan after 12/31/2024. Examples: Ford F-150, Tesla Model Y, Toyota Camry, Honda Accord, Jeep Wrangler, Kia Telluride, Chevrolet Tahoe. The vehicle's VIN — not the brand — is the final proof.",
  },
  {
    q: "Do Toyotas qualify for the car loan deduction?",
    a: "Some do. The Camry, Highlander, Sienna, Tundra, and Sequoia are US-assembled and qualify on the assembly rule. The RAV4, Tacoma, and Corolla are built in multiple countries — those depend on your specific VIN. The 4Runner (Japan) does not qualify.",
  },
  {
    q: "Does a Tesla qualify for the car loan interest deduction?",
    a: "Yes — the Model Y and Model 3 are finally assembled in the United States (Austin, TX and Fremont, CA), so they clear the assembly rule. You still need the other three: new, personal use, and a loan originated after 12/31/2024.",
  },
  {
    q: "Which popular cars do NOT qualify?",
    a: "Models with final assembly outside the US: Toyota 4Runner and Mazda CX-5 (Japan), Ford Maverick (Mexico), Subaru Forester (Japan), and most Lexus RX units (Canada/Japan). Used cars and leases never qualify, regardless of model.",
  },
  {
    q: "My car is built in two countries. How do I know if mine qualifies?",
    a: "Check your VIN. The same model (e.g., Honda CR-V, Toyota RAV4, Chevy Silverado) can roll off lines in the US, Canada, Mexico, or Japan. Decode your VIN free — the plant country in the decode is the answer for your specific vehicle.",
  },
];

function ModelList({ items, year }: { items: Vehicle[]; year: number }) {
  return (
    <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
      {items.map((v) => (
        <li key={`${v.make}-${v.model}`}>
          <Link
            href={modelPagePath(v, year)}
            className="block rounded-md border border-neutral-200 px-3 py-2 text-neutral-700 hover:border-emerald-300 hover:text-emerald-800"
          >
            {year} {v.make} {v.model} →
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function WhichCarsQualifyPage() {
  const usa = vehicles.filter((v) => v.assembly === "USA");
  const mixed = vehicles.filter((v) => v.assembly === "Mixed");
  const nonUsa = vehicles.filter((v) => v.assembly === "Non-USA");

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Tax guides
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Which Cars Qualify for the Car Loan Interest Deduction in 2026?
      </h1>

      {/* Answer-first block */}
      <div className="card mt-6 border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> A car qualifies for the{" "}
          <strong>$10,000 car loan interest deduction</strong> if it is{" "}
          <strong>new, finally assembled in the United States</strong>, under
          14,000 lbs, bought for personal use with a loan after 12/31/2024.
          US-assembled examples include the{" "}
          <strong>
            Ford F-150, Tesla Model Y, Toyota Camry, Honda Accord, Jeep
            Wrangler, Kia Telluride, and Chevrolet Tahoe
          </strong>
          . Popular models that do <strong>not</strong> qualify: Toyota 4Runner,
          Mazda CX-5, and Ford Maverick. Models like the Toyota RAV4 and Honda
          CR-V depend on your specific VIN.
        </p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          ✅ US-assembled — clear the assembly rule ({usa.length} models)
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          These best-sellers are finally assembled in the USA, so they pass the
          hardest of the four rules. Tap any model for its full verdict page.
        </p>
        <ModelList items={usa} year={2026} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          ⚠️ Depends on your VIN ({mixed.length} models)
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          These models roll off assembly lines in more than one country. Two
          identical-looking RAV4s can have different answers. Only your VIN
          knows —{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            decode it free in 60 seconds
          </Link>
          .
        </p>
        <ModelList items={mixed} year={2026} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          ❌ Not US-assembled — do not qualify ({nonUsa.length} models)
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Final assembly outside the United States fails a hard rule — these
          models cannot qualify, no matter the loan or income.
        </p>
        <ModelList items={nonUsa} year={2026} />
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">
          Don&apos;t see your model?
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
          Browse the full{" "}
          <Link
            href="/models"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            model directory
          </Link>{" "}
          (60+ models, 2025 &amp; 2026), or skip the lists entirely: the{" "}
          <Link
            href="/vin-check"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            VIN checker
          </Link>{" "}
          decodes any vehicle against the NHTSA database and gives a pass/fail on
          all four rules. Then see your savings in the{" "}
          <Link
            href="/calculator"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            deduction calculator
          </Link>
          .
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
            "Which Cars Qualify for the Car Loan Interest Deduction in 2026? (List)",
          description:
            "US-assembled models that qualify for the $10,000 car loan interest deduction, VIN-dependent models, and models that don't qualify.",
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
