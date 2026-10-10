import type { Metadata } from "next";
import { brand, siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@deductmyride.com";

export const metadata: Metadata = {
  title: `Contact Us | ${brand}`,
  description:
    "Get in touch with the DeductMyRide team — questions about the car loan interest deduction, the VIN checker, or the site.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: `Contact Us | ${brand}`,
    description: "Questions about the car loan interest deduction? Get in touch.",
    url: `${siteUrl}/contact`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Get in touch
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Contact Us
      </h1>
      <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
        Questions about whether your car qualifies, how the deduction math
        works, or something broken on the site? We read every message and
        usually reply within 1–2 business days.
      </p>

      <div className="card mt-8 p-6">
        <p className="text-sm font-semibold text-neutral-900">Email us at</p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-1 inline-block text-lg font-bold text-emerald-700 hover:text-emerald-800"
        >
          {contactEmail}
        </a>
        <p className="mt-3 text-sm text-neutral-600">
          To help us answer faster, include:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600">
          <li>Your vehicle&apos;s year, make, and model (not your full VIN)</li>
          <li>What you were trying to do on the site</li>
          <li>A screenshot, if something looks broken</li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-4">
        <p className="text-sm text-amber-900">
          <span className="font-semibold">Please note: </span>
          we can explain how the deduction works in general, but we
          can&apos;t give personal tax advice. For decisions about your tax
          return, please consult a qualified CPA or tax professional.
        </p>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact Us | ${brand}`,
          url: `${siteUrl}/contact`,
        }}
      />
    </article>
  );
}
