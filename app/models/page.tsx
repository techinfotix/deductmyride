import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";
import {
  vehicles,
  MODEL_YEARS,
  modelPagePath,
  type Vehicle,
} from "@/lib/vehicles";

export const metadata: Metadata = {
  title: `Does My Car Qualify? Browse 60+ Models | ${brand}`,
  description:
    "Browse popular 2025 and 2026 cars, trucks, and SUVs and see whether each one meets the 4 rules for the $10,000 car loan interest tax deduction.",
  alternates: { canonical: `${siteUrl}/models` },
  openGraph: {
    title: `Does My Car Qualify? Browse 60+ Models | ${brand}`,
    description:
      "See whether popular 2025 and 2026 models meet the 4 rules for the car loan interest tax deduction.",
    url: `${siteUrl}/models`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const verdictBadge: Record<Vehicle["assembly"], { label: string; cls: string }> = {
  USA: { label: "US-assembled", cls: "bg-emerald-100 text-emerald-800" },
  Mixed: { label: "Check VIN", cls: "bg-amber-100 text-amber-800" },
  "Non-USA": { label: "Not US-built", cls: "bg-red-100 text-red-800" },
};

export default function ModelsPage() {
  const byMake = new Map<string, Vehicle[]>();
  for (const v of vehicles) {
    const list = byMake.get(v.make) ?? [];
    list.push(v);
    byMake.set(v.make, list);
  }
  const makes = [...byMake.keys()].sort();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Model lookup
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Does your car qualify for the deduction?
      </h1>
      <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-neutral-600">
        Pick your make below to see whether popular {MODEL_YEARS.join(" and ")}{" "}
        models are finally assembled in the USA — the rule that decides most
        cases. For a definitive answer on <em>your</em> specific vehicle, run
        your VIN through the{" "}
        <Link href="/vin-check" className="font-semibold text-emerald-700 hover:text-emerald-800">
          free VIN checker
        </Link>
        .
      </p>

      <div className="mt-10 space-y-10">
        {makes.map((make) => (
          <section key={make} aria-label={`${make} models`}>
            <h2 className="text-xl font-bold text-neutral-900">{make}</h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {byMake.get(make)!.map((v) => {
                const badge = verdictBadge[v.assembly];
                return (
                  <li key={`${v.make}-${v.model}`} className="card p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-semibold text-neutral-900">
                        {v.make} {v.model}
                      </p>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${badge.cls}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                    <div className="mt-3 flex gap-3 text-sm">
                      {MODEL_YEARS.map((year) => (
                        <Link
                          key={year}
                          href={modelPagePath(v, year)}
                          className="font-semibold text-emerald-700 hover:text-emerald-800"
                        >
                          {year} verdict →
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <Disclaimer />
        <p className="mt-3 text-xs text-neutral-500">{DISCLAIMER}</p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Browse models | ${brand}`,
          url: `${siteUrl}/models`,
          description:
            "Whether popular 2025 and 2026 vehicles meet the car loan interest deduction rules.",
        }}
      />
    </article>
  );
}
