import type { Metadata } from "next";
import { brand, siteUrl, DISCLAIMER } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import Disclaimer from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: `Privacy Policy | ${brand}`,
  description:
    "How DeductMyRide collects, uses, and protects your information — including VIN lookups, cookies, analytics, and advertising.",
  alternates: { canonical: `${siteUrl}/privacy-policy` },
  openGraph: {
    title: `Privacy Policy | ${brand}`,
    description:
      "How DeductMyRide collects, uses, and protects your information.",
    url: `${siteUrl}/privacy-policy`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const updated = "October 4, 2026";

export default function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
        Legal
      </p>
      <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: {updated}</p>

      <div className="prose-neutral mt-8 space-y-6 text-[15px] leading-relaxed text-neutral-700">
        <p>
          {brand} (&quot;we&quot;, &quot;us&quot;) operates{" "}
          {siteUrl.replace("https://", "")}. This policy explains what
          information we collect when you use our free car loan interest
          deduction tools, and how we use it. By using this site, you agree to
          this policy.
        </p>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            1. Information we collect
          </h2>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li>
              <strong>VIN numbers you enter.</strong> When you use the VIN
              checker, your VIN is sent to the official NHTSA vPIC database
              (a US government service) to decode your vehicle&apos;s assembly
              plant. VINs may be cached temporarily on our servers (up to 24
              hours) to keep the tool fast. We do not sell VINs or use them
              for any other purpose.
            </li>
            <li>
              <strong>Calculator inputs.</strong> Loan amounts, interest
              rates, and income figures you enter are processed in your
              browser. We do not store them.
            </li>
            <li>
              <strong>Email address (optional).</strong> If you sign up for
              reminders, we store your email solely to send the updates you
              requested. You can unsubscribe at any time.
            </li>
            <li>
              <strong>Analytics.</strong> We use privacy-friendly analytics
              (Vercel Analytics) that measures aggregate visits and page
              views without tracking you across the web.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            2. Cookies and advertising
          </h2>
          <p className="mt-2">
            We use a minimal set of cookies required for the site to function.
            In the future we may display ads served by Google AdSense or
            similar networks. Third-party vendors, including Google, use
            cookies to serve ads based on your prior visits to this and other
            websites. Google&apos;s use of advertising cookies enables it and
            its partners to serve ads based on your visit to our site.
          </p>
          <p className="mt-2">
            You may opt out of personalized advertising by visiting{" "}
            <a
              className="text-emerald-700 underline"
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener"
            >
              Google&apos;s Ads Settings
            </a>
            . Learn more in Google&apos;s{" "}
            <a
              className="text-emerald-700 underline"
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener"
            >
              advertising privacy policy
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            3. How we share information
          </h2>
          <p className="mt-2">
            We share data only as needed to operate the site: with NHTSA (to
            decode VINs), with our hosting/analytics provider (Vercel, Inc.,
            USA), and with advertising partners if ads are enabled. We never
            sell your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            4. Data security and retention
          </h2>
          <p className="mt-2">
            We use reasonable safeguards to protect information, but no
            internet transmission is 100% secure. Cached VIN lookups expire
            automatically within 24 hours. Emails are kept only while you
            remain subscribed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            5. Children&apos;s privacy
          </h2>
          <p className="mt-2">
            This site is intended for adults managing vehicle loans and
            taxes. We do not knowingly collect information from children
            under 13.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">6. Your rights</h2>
          <p className="mt-2">
            Depending on where you live (including US states with privacy
            laws such as California), you may have the right to request
            access to, correction of, or deletion of your personal
            information. Contact us (see below) and we will respond within a
            reasonable time.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">
            7. Changes to this policy
          </h2>
          <p className="mt-2">
            We may update this policy as the site evolves (for example, when
            advertising or email features go live). The &quot;Last
            updated&quot; date above will always reflect the current version.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-neutral-900">8. Contact</h2>
          <p className="mt-2">
            Questions about this policy? Reach us via our{" "}
            <a className="text-emerald-700 underline" href="/contact">
              contact page
            </a>
            .
          </p>
        </section>

        <div className="pt-2">
          <Disclaimer compact />
          <p className="mt-3 text-xs text-neutral-500">{DISCLAIMER}</p>
        </div>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: `Privacy Policy | ${brand}`,
          url: `${siteUrl}/privacy-policy`,
        }}
      />
    </article>
  );
}
