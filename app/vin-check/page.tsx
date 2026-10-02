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

      <div className="mt-8">
        <Suspense fallback={<p className="text-sm text-neutral-500">Loading checker…</p>}>
          <CheckerWithParams vin={initialVin} />
        </Suspense>
      </div>

      <AdSlot slot="vin-check-bottom" label="In-article responsive ad" />

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
