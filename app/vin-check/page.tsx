import type { Metadata } from "next";
import { Suspense } from "react";
import VinChecker from "@/components/VinChecker";
import AdSlot from "@/components/AdSlot";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free VIN Check — Is My Car's Loan Interest Tax-Deductible?",
  description:
    "Enter your 17-character VIN to check if your vehicle was finally assembled in the USA and meets the 4 rules for the $10,000 car loan interest tax deduction.",
  alternates: { canonical: `${siteUrl}/vin-check` },
  openGraph: {
    title: `Free VIN eligibility check | ${brand}`,
    description: "Decode your VIN with the official NHTSA database and get a 4-rule verdict in 60 seconds.",
    url: `${siteUrl}/vin-check`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

function CheckerWithParams({ vin }: { vin: string }) {
  return <VinChecker initialVin={vin} />;
}

export default async function VinCheckPage({
  searchParams,
}: {
  searchParams: Promise<{ vin?: string }>;
}) {
  const { vin } = await searchParams;
  const initialVin = typeof vin === "string" ? vin.toUpperCase().slice(0, 17) : "";

  return (
    <article className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        VIN eligibility checker
      </h1>
      <p className="mt-3 max-w-3xl text-neutral-600">
        Enter your 17-character VIN. We decode it with the official NHTSA database to find
        your vehicle&apos;s final assembly country, then check it against the 4 rules of the
        car loan interest deduction (OBBBA §70203).
      </p>

      {/* Answer-first block — written for AI answers & featured snippets */}
      <div className="card mt-6 max-w-3xl border-emerald-200 bg-emerald-50/50 p-5">
        <p className="text-[15px] leading-relaxed text-neutral-800">
          <strong>Quick answer:</strong> Paste your 17-character VIN and get a
          pass/fail verdict on all 4 deduction rules in about 60 seconds —
          free, no signup. The checker decodes your car&apos;s final assembly
          plant via the official NHTSA database, because assembly location is
          the rule most cars fail.
        </p>
      </div>

      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-neutral-500">Loading checker…</p>}>
          <CheckerWithParams vin={initialVin} />
        </Suspense>
      </div>

      <AdSlot slot="vin-check-bottom" label="In-article responsive ad" />

      <section className="mt-10 max-w-3xl" aria-labelledby="vin-faq-heading">
        <h2 id="vin-faq-heading" className="text-2xl font-bold text-neutral-900">
          VIN checker questions
        </h2>
        <div className="mt-6 space-y-4">
          {[
            {
              q: "Where do I find my VIN?",
              a: "On the driver's-side dashboard (visible through the windshield), the driver's door jamb sticker, your registration, or your insurance card. It's always 17 characters — letters and numbers, no spaces.",
            },
            {
              q: "Is the VIN check free?",
              a: "Yes — free, no signup, no email required. You can also share your result with a link.",
            },
            {
              q: "Is my VIN stored?",
              a: "VIN lookups are cached for at most 24 hours to keep the tool fast, then expire automatically. We never sell VINs or use them for any other purpose.",
            },
            {
              q: "What if my result says 'Mixed' or 'Check your VIN'?",
              a: "Your model is built in more than one country. The VIN decode settles it: the plant country in your decode is the answer for your specific vehicle.",
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
              name: "Where do I find my VIN?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "On the driver's-side dashboard (visible through the windshield), the driver's door jamb sticker, your registration, or your insurance card. It's always 17 characters.",
              },
            },
            {
              "@type": "Question",
              name: "Is the VIN check free?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — free, no signup, no email required. You can also share your result with a link.",
              },
            },
            {
              "@type": "Question",
              name: "Is my VIN stored?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "VIN lookups are cached for at most 24 hours to keep the tool fast, then expire automatically. We never sell VINs or use them for any other purpose.",
              },
            },
            {
              "@type": "Question",
              name: "What if my result says 'Mixed' or 'Check your VIN'?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Your model is built in more than one country. The VIN decode settles it: the plant country in your decode is the answer for your specific vehicle.",
              },
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: `${brand} VIN Eligibility Checker`,
          url: `${siteUrl}/vin-check`,
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          description:
            "Free tool that decodes a VIN via the NHTSA database and checks the vehicle against the 4 rules of the US car loan interest tax deduction.",
        }}
      />
    </article>
  );
}
