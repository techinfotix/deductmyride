import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist, { type RuleState } from "@/components/Checklist";
import AdSlot from "@/components/AdSlot";
import Disclaimer from "@/components/Disclaimer";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";
import {
  vehicles,
  MODEL_YEARS,
  modelPageSlug,
  modelPagePath,
  findVehicleBySlug,
  type Vehicle,
} from "@/lib/vehicles";
import { estimateDeduction, formatUSD } from "@/lib/tax";

/**
 * NOTE (Next.js 16): interpolated dynamic segments like
 * `does-[make]-[model]-[year]-qualify` are NOT matched by the router.
 * So model pages use a single root dynamic segment whose value is the
 * full pretty slug, e.g. /does-ford-f-150-2026-qualify
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return vehicles.flatMap((v) =>
    MODEL_YEARS.map((year) => ({ modelSlug: modelPageSlug(v, year) }))
  );
}

function verdictFor(v: Vehicle) {
  if (v.assembly === "USA") {
    return {
      tone: "pass",
      title: "Yes — likely qualifies",
      text: `The ${v.make} ${v.model} is finally assembled in the United States, so it clears the toughest rule. You still need the other three: it must be new, for personal use, with a loan from after 12/31/2024.`,
    };
  }
  if (v.assembly === "Mixed") {
    return {
      tone: "unknown",
      title: "It depends — check your VIN",
      text: `Some ${v.make} ${v.model} units are US-assembled and some are not. Your specific vehicle's plant country decides — run your VIN through the free checker below.`,
    };
  }
  return {
    tone: "fail",
    title: "No — does not qualify",
    text: `The ${v.make} ${v.model} is not finally assembled in the United States, so it fails one of the four hard rules and does not qualify for the deduction.`,
  };
}

const toneStyles: Record<string, string> = {
  pass: "border-emerald-300 bg-emerald-50 text-emerald-900",
  fail: "border-red-300 bg-red-50 text-red-900",
  unknown: "border-amber-300 bg-amber-50 text-amber-900",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ modelSlug: string }>;
}): Promise<Metadata> {
  const { modelSlug } = await params;
  const found = findVehicleBySlug(modelSlug);
  if (!found) return {};
  const { vehicle: v, year } = found;
  const title = `Does a ${year} ${v.make} ${v.model} Qualify for the Car Loan Interest Deduction?`;
  const description = `Find out if a ${year} ${v.make} ${v.model} meets the 4 rules for the $10,000 car loan interest tax deduction. ${v.plantNote}`;
  const url = `${siteUrl}/${modelSlug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }] },
  };
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ modelSlug: string }>;
}) {
  const { modelSlug } = await params;
  const found = findVehicleBySlug(modelSlug);
  if (!found) notFound();
  const { vehicle: v, year: yearNum } = found;

  const verdict = verdictFor(v);
  const example = estimateDeduction({
    amount: 45000,
    apr: 7,
    termYears: 6,
    status: "single",
    magi: 80000,
    marginalRatePct: 22,
  });

  const ruleStates: RuleState[] = [
    {
      label: "The vehicle is NEW",
      detail: "Original use must begin with you — confirm yours is new, not pre-owned.",
      state: "todo",
    },
    {
      label: "Final assembly in the USA",
      detail: v.plantNote,
      state: v.assembly === "USA" ? "pass" : v.assembly === "Mixed" ? "unknown" : "fail",
    },
    {
      label: "Personal use",
      detail: "Must be for personal use — not business, fleet, or for-hire.",
      state: "todo",
    },
    {
      label: "Loan originated after 12/31/2024",
      detail: "Your auto loan must have started after December 31, 2024.",
      state: "todo",
    },
  ];

  const faqs = [
    {
      q: `Is a ${yearNum} ${v.make} ${v.model} eligible for the car loan interest deduction?`,
      a:
        v.assembly === "USA"
          ? `It clears the US-assembly rule: ${v.plantNote} It still must be new, for personal use, with a loan from after 12/31/2024.`
          : v.assembly === "Mixed"
            ? `It depends on your specific vehicle. ${v.plantNote} Run your VIN through our free checker to see your plant country.`
            : `No. ${v.plantNote} The deduction requires final assembly in the United States.`,
    },
    {
      q: `How much could I deduct with a ${yearNum} ${v.make} ${v.model}?`,
      a: `Up to $10,000 per year of interest paid. As an example, a $45,000 loan at 7% APR over 6 years generates about ${formatUSD(example.yearOneInterest)} of interest in year one — deductible in full, saving about ${formatUSD(example.taxSaved)} at a 22% marginal rate.`,
    },
    {
      q: `Does a used ${yearNum} ${v.make} ${v.model} qualify?`,
      a: "No. Only new vehicles — where the original use begins with you — qualify, regardless of assembly location.",
    },
    {
      q: "How do I verify my specific vehicle?",
      a: "Enter your 17-character VIN in our free VIN checker. It decodes the plant country from the official NHTSA database and checks all four rules.",
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <Link href="/" className="hover:text-neutral-900">Home</Link>
        <span className="mx-2">/</span>
        <span>Model lookup</span>
      </nav>

      <h1 className="mt-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
        Does a {yearNum} {v.make} {v.model} qualify for the car loan interest deduction?
      </h1>

      {/* IN SHORT — AEO direct-answer block */}
      <section aria-label="Summary" className="card mt-6 border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">In short</h2>
        <p className="mt-2 leading-relaxed text-neutral-800">
          {v.assembly === "USA" && (
            <>Yes — the {yearNum} {v.make} {v.model} is <strong>finally assembled in the USA</strong> ({v.plantNote}), so it clears the toughest of the 4 rules. It must still be <strong>new</strong>, for <strong>personal use</strong>, with a loan from <strong>after 12/31/2024</strong>.</>
          )}
          {v.assembly === "Mixed" && (
            <>It <strong>depends on your specific vehicle</strong>: {v.plantNote} Decode your VIN below to see your plant country and get a verdict.</>
          )}
          {v.assembly === "Non-USA" && (
            <><strong>No</strong> — the {yearNum} {v.make} {v.model} is <strong>not finally assembled in the USA</strong> ({v.plantNote}), so it fails one of the four hard rules.</>
          )}
        </p>
      </section>

      <div className={`mt-6 rounded-lg border p-5 ${toneStyles[verdict.tone]}`}>
        <p className="text-lg font-bold">{verdict.title}</p>
        <p className="mt-1 text-sm">{verdict.text}</p>
      </div>

      <section className="mt-8" aria-labelledby="rules-h">
        <h2 id="rules-h" className="text-xl font-bold text-neutral-900">
          The 4 rules for your {v.make} {v.model}
        </h2>
        <div className="mt-4">
          <Checklist rules={ruleStates} />
        </div>
      </section>

      <section className="card mt-8 p-6" aria-labelledby="worth-h">
        <h2 id="worth-h" className="text-xl font-bold text-neutral-900">What could it be worth?</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Example: $45,000 loan at 7% APR over 6 years.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Year-1 interest</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">{formatUSD(example.yearOneInterest)}</p>
          </div>
          <div className="rounded-lg bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Deduction</p>
            <p className="mt-1 text-2xl font-bold text-emerald-700">{formatUSD(example.cappedDeduction)}</p>
          </div>
          <div className="rounded-lg bg-neutral-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Tax saved (22%)</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">{formatUSD(example.taxSaved)}</p>
          </div>
        </div>
        <Link href="/calculator" className="mt-4 inline-block text-sm font-semibold text-emerald-700 hover:text-emerald-800">
          Calculate with your own numbers →
        </Link>
      </section>

      <AdSlot slot="model-page-mid" label="In-article responsive ad" />

      <section className="mt-8" aria-labelledby="verify-h">
        <h2 id="verify-h" className="text-xl font-bold text-neutral-900">
          Verify your exact vehicle
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Assembly can vary by trim and plant. The VIN never lies — decode yours free:
        </p>
        <Link
          href="/vin-check"
          className="mt-4 inline-block rounded-md bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Check my VIN →
        </Link>
      </section>

      <section className="mt-10" aria-labelledby="model-faq-h">
        <h2 id="model-faq-h" className="text-xl font-bold text-neutral-900">
          {v.make} {v.model} deduction FAQs
        </h2>
        <div className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="card p-5">
              <h3 className="font-semibold text-neutral-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-label="Other popular models">
        <h2 className="text-xl font-bold text-neutral-900">Check other popular models</h2>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
          {vehicles
            .filter((o) => o.make !== v.make || o.model !== v.model)
            .slice(0, 12)
            .map((o) => (
              <li key={`${o.make}-${o.model}`}>
                <Link
                  href={modelPagePath(o, yearNum)}
                  className="block rounded-md border border-neutral-200 px-3 py-2 text-neutral-700 hover:border-emerald-300 hover:text-emerald-800"
                >
                  {yearNum} {o.make} {o.model}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <div className="mt-8">
        <Disclaimer />
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
