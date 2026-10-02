import type { Metadata } from "next";
import Link from "next/link";
import Checklist from "@/components/Checklist";
import AdSlot from "@/components/AdSlot";
import AffiliateCTA from "@/components/AffiliateCTA";
import EmailCapture from "@/components/EmailCapture";
import Disclaimer from "@/components/Disclaimer";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Is Car Loan Interest Tax-Deductible? The Complete 2026 Guide",
  description:
    "The complete plain-English guide to the new US car loan interest tax deduction: the 4 rules, the $10,000 cap, MAGI phase-outs, and how to check your VIN.",
  alternates: { canonical: `${siteUrl}/is-car-loan-interest-tax-deductible` },
  openGraph: {
    title: `Is car loan interest tax-deductible? Complete guide | ${brand}`,
    description: "The 4 rules, the $10,000 cap, phase-outs, and how to verify your vehicle — in plain English.",
    url: `${siteUrl}/is-car-loan-interest-tax-deductible`,
    type: "article",
  },
};

const faqs = [
  {
    q: "Is car loan interest tax-deductible?",
    a: "Yes, since 2025. Under OBBBA §70203 you can deduct up to $10,000 per year of interest paid on a qualifying auto loan: the vehicle must be new, finally assembled in the USA, for personal use, and the loan must have originated after December 31, 2024.",
  },
  {
    q: "Do I have to itemize deductions to claim it?",
    a: "No. It is an above-the-line deduction, so you can claim it whether you take the standard deduction or itemize.",
  },
  {
    q: "Does the deduction apply to used cars?",
    a: "No. Only new vehicles — where the original use begins with the taxpayer — qualify. Used and pre-owned vehicles are excluded.",
  },
  {
    q: "What is the MAGI phase-out?",
    a: "The deduction phases out for higher incomes: it begins to phase out at $100,000 of modified adjusted gross income for single filers ($200,000 for married filing jointly). If your MAGI is above the threshold, confirm the exact reduction with a CPA.",
  },
  {
    q: "Does a $10,000 deduction mean I get $10,000 back?",
    a: "No. A deduction reduces your taxable income; your savings equal the deduction multiplied by your marginal tax rate. A $10,000 deduction at a 22% rate saves $2,200 in tax.",
  },
  {
    q: "How do I prove my car was assembled in the USA?",
    a: "Your VIN encodes the plant country. Use our free VIN checker, which decodes it via the official NHTSA database, or check the label on the driver's door jamb.",
  },
];

const sections = [
  {
    id: "what-is-it",
    h: "What is the car loan interest deduction?",
    body: [
      "The One Big Beautiful Bill Act (OBBBA), signed in 2025, created a new federal tax deduction for auto loan interest — section 70203 of the Act. For tax years 2025 through 2028, individuals can deduct up to $10,000 per year of interest paid on a loan used to buy a qualifying new vehicle.",
      "Before this law, car loan interest was generally not deductible for personal vehicles (unlike mortgage interest). This is the first broad federal deduction for personal auto loan interest in modern US tax history — which is why so many car buyers are asking about it now.",
    ],
  },
  {
    id: "four-rules",
    h: "The 4 rules, explained",
    body: [
      "The law is strict. All four conditions must be true at the same time:",
    ],
    checklist: true,
  },
  {
    id: "how-much",
    h: "How much can you actually save?",
    body: [
      "Two numbers matter: your deduction and your savings. The deduction is capped at $10,000 of interest paid per year. Your savings equal the deduction times your marginal tax rate.",
      "Example: you paid $3,100 in interest in year one and you're in the 22% bracket. Your deduction is $3,100 and your tax savings are about $682. A $10,000 deduction in the 22% bracket saves $2,200 — not $10,000.",
      "Run your own numbers with our free calculator, which uses a real amortization schedule to estimate your first-year interest.",
    ],
  },
  {
    id: "above-the-line",
    h: "Above-the-line: no itemizing needed",
    body: [
      "Most people take the standard deduction, which made older itemized-only deductions useless to them. This deduction is different: it's 'above the line,' meaning it reduces your adjusted gross income directly. You can claim it on top of the standard deduction.",
    ],
  },
  {
    id: "phase-out",
    h: "Income phase-outs",
    body: [
      "The deduction phases out for higher earners. The phase-out begins at $100,000 of modified adjusted gross income (MAGI) for single filers, married filing separately, and heads of household, and at $200,000 for married couples filing jointly.",
      "If your MAGI is near or above the threshold, don't guess — the exact phase-out math should be confirmed with a CPA or tax software.",
    ],
  },
  {
    id: "how-to-claim",
    h: "How to claim it on your return",
    body: [
      "1. Verify your vehicle qualifies — run your VIN through our free checker and keep the result.",
      "2. Get your interest-paid figure — your lender reports it; check your year-end loan statement.",
      "3. Enter it on your tax return in the section for this deduction (tax software like TurboTax, FreeTaxUSA, or eFile.com will walk you through it).",
      "4. Keep records — your loan agreement, VIN decode, and interest statements — in case of questions later.",
    ],
  },
  {
    id: "misconceptions",
    h: "Common misconceptions",
    body: [
      "“My car was made by an American brand, so it qualifies.” — Not necessarily. The rule is about where your specific vehicle was finally assembled, not the brand's headquarters. Many 'American' models are assembled in Mexico or Canada. Check your VIN.",
      "“Leases qualify too.” — No. The deduction is for interest on a loan used to purchase the vehicle. Lease payments are not loan interest.",
      "“I can deduct the whole monthly payment.” — No. Only the interest portion is deductible, not principal.",
    ],
  },
];

export default function GuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
        Is car loan interest tax-deductible? The complete guide
      </h1>
      <p className="mt-3 text-sm text-neutral-500">
        Updated for the 2026 tax year · Plain-English explainer
      </p>

      {/* IN SHORT — AEO direct-answer block */}
      <section aria-label="Summary" className="card mt-6 border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">In short</h2>
        <p className="mt-2 leading-relaxed text-neutral-800">
          Yes — since 2025, US taxpayers can deduct up to <strong>$10,000 per year</strong> of car
          loan interest under OBBBA §70203. The vehicle must be <strong>new</strong>,{" "}
          <strong>finally assembled in the USA</strong>, for <strong>personal use</strong>, with a
          loan originated <strong>after December 31, 2024</strong>. It is an above-the-line
          deduction (no itemizing needed) and phases out above{" "}
          <strong>$100k MAGI single / $200k joint</strong>.
        </p>
      </section>

      <AdSlot slot="guide-top" label="Leaderboard / responsive ad" />

      <nav aria-label="On this page" className="card mt-8 p-5">
        <p className="text-sm font-semibold text-neutral-900">On this page</p>
        <ul className="mt-2 space-y-1 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-emerald-700 hover:text-emerald-800">{s.h}</a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mt-10 scroll-mt-20">
          <h2 className="text-2xl font-bold text-neutral-900">{s.h}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="mt-3 leading-relaxed text-neutral-700">{p}</p>
          ))}
          {s.checklist && (
            <div className="mt-5"><Checklist /></div>
          )}
          {s.id === "how-much" && (
            <p className="mt-3">
              <Link href="/calculator" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Try the free deduction calculator →
              </Link>
            </p>
          )}
          {s.id === "four-rules" && (
            <p className="mt-3">
              <Link href="/vin-check" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800">
                Check your VIN against the 4 rules →
              </Link>
            </p>
          )}
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">Frequently asked questions</h2>
        <div className="mt-5 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="card p-5">
              <h3 className="font-semibold text-neutral-900">{f.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-neutral-900">Sources</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-700">
          <li>
            One Big Beautiful Bill Act, §70203 (new-vehicle auto loan interest deduction) —{" "}
            <a
              href="https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800"
            >
              IRS: One Big Beautiful Bill provisions
            </a>
          </li>
          <li>
            VIN decoding data —{" "}
            <a
              href="https://vpic.nhtsa.dot.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800"
            >
              NHTSA vPIC vehicle database
            </a>
          </li>
        </ul>
        <p className="mt-3 text-sm text-neutral-500">
          Tax law summaries are simplified. Always verify against IRS guidance or a CPA.
        </p>
      </section>

      <AdSlot slot="guide-bottom" label="In-article responsive ad" />
      <AffiliateCTA />
      <EmailCapture />
      <Disclaimer />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Is car loan interest tax-deductible? The complete 2026 guide",
          description: metadata.description,
          url: `${siteUrl}/is-car-loan-interest-tax-deductible`,
          author: { "@type": "Organization", name: brand },
          publisher: { "@type": "Organization", name: brand },
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
