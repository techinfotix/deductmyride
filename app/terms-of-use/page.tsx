import type { Metadata } from "next";
import Link from "next/link";
import { brand, siteUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: `Terms of Use`,
  description:
    "Terms for using DeductMyRide's free car loan interest deduction tools: estimates only, not tax advice, and fair-use rules.",
  alternates: { canonical: `${siteUrl}/terms-of-use` },
  openGraph: {
    title: `Terms of Use`,
    description:
      "Terms for using DeductMyRide's free tools: estimates only, not tax advice.",
    url: `${siteUrl}/terms-of-use`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const updated = "November 2, 2026";

export default function TermsOfUsePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Legal
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: {updated}</p>

      <div className="prose-neutral mt-8 space-y-6 text-[15px] leading-relaxed text-neutral-700">
        <p>
          {brand} (&quot;we&quot;, &quot;us&quot;) operates{" "}
          {siteUrl.replace("https://", "")}. By using this site, you agree to
          these terms. If you do not agree, please do not use the site.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          1. What this site does
        </h2>
        <p>
          {brand} provides free tools and general information about the US car
          loan interest tax deduction, including a VIN eligibility checker, a
          deduction and tax-savings calculator, model verdict pages, a guide,
          and articles. The tools are free to use and do not require an
          account.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          2. Estimates only — not tax advice
        </h2>
        <p>
          All results are estimates based on the information you enter and on
          tax law as we understand it at the time of writing. Tax rules are
          complex and change, and your situation may differ. Nothing on this
          site is tax, legal, or financial advice. Confirm your situation with
          a qualified CPA or tax professional before filing.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          3. Your use of the tools
        </h2>
        <p>
          You agree to enter accurate information, to use the tools for lawful
          purposes, and not to misuse, scrape at abusive volume, or attempt to
          disrupt the site. VIN lookups use the public NHTSA database; we do
          not store your VIN or loan details — see our{" "}
          <Link className="text-emerald-700 underline" href="/privacy-policy">
            Privacy Policy
          </Link>
          .
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          4. Third-party sources
        </h2>
        <p>
          Where we cite the IRS, the tax code, or the NHTSA database, those
          sources remain the authority. If our summary differs from the
          official source, the official source wins. We may link to
          third-party sites; we are not responsible for their content.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          5. No warranties; limited liability
        </h2>
        <p>
          The site and tools are provided &quot;as is&quot;, without warranties
          of any kind. To the fullest extent allowed by law, we are not liable
          for any loss arising from your use of, or reliance on, this site or
          its estimates.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          6. Changes to these terms
        </h2>
        <p>
          We may update these terms from time to time. The &quot;Last
          updated&quot; date above shows the latest version. Continued use of
          the site after an update means you accept the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-neutral-900">
          7. Contact
        </h2>
        <p>
          Questions about these terms?{" "}
          <Link className="text-emerald-700 underline" href="/contact">
            Contact us
          </Link>
          .
        </p>
      </div>

      <Disclaimer />
      <BreadcrumbJsonLd items={[{ name: "Home", item: siteUrl }, { name: 'Terms of Use', item: `${siteUrl}/terms-of-use` }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Terms of Use`,
          url: `${siteUrl}/terms-of-use`,
        }}
      />
    </article>
  );
}
