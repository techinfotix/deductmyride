import { affiliates } from "@/lib/affiliates";

/**
 * Affiliate CTA cards. URLs come from lib/affiliates.ts, which reads
 * NEXT_PUBLIC_AFF_* env vars. Until real links are pasted, hrefs are "#".
 */
export default function AffiliateCTA({ heading = "File your taxes and claim it" }: { heading?: string }) {
  return (
    <section className="card my-10 p-6" aria-label="Tax filing options">
      <h2 className="text-xl font-bold text-neutral-900">{heading}</h2>
      <p className="mt-2 text-sm text-neutral-600">
        Found out you qualify? These tax-filing services can help you claim the
        deduction correctly on your return.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {affiliates.map((a) => (
          <div key={a.name} className="rounded-lg border border-neutral-200 p-4">
            <p className="font-semibold text-neutral-900">{a.name}</p>
            <p className="mt-1 text-sm text-neutral-600">{a.blurb}</p>
            <a
              href={a.url}
              className="mt-3 inline-block rounded-md bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
              rel="sponsored nofollow noopener"
              target="_blank"
            >
              {a.cta}
            </a>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-neutral-500">
        Affiliate links — we may earn a commission if you file through these
        links, at no extra cost to you.
      </p>
    </section>
  );
}
