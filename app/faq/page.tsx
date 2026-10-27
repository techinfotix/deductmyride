import type { Metadata } from "next";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import Disclaimer from "@/components/Disclaimer";
import JsonLd from "@/components/JsonLd";
import { brand, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Are Car Loans Tax Deductible? FAQ — Deduct Car Loan Interest (2026)",
  description:
    "Are car loans tax deductible? Yes — up to $10,000/year of car loan interest for 2025–2028 if your car is new, US-assembled, and for personal use. Can you deduct auto loan interest, claim car payments, or write off interest paid? Answered here.",
  alternates: { canonical: `${siteUrl}/faq` },
  openGraph: {
    title: "Are car loans tax deductible? FAQ | DeductMyRide",
    description: "Can you deduct auto loan interest on your taxes? Can you claim car payments? Every version of the question, answered in plain English.",
    url: `${siteUrl}/faq`,
    images: [{ url: `${siteUrl}/og-image.png`, width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "Are car loans tax deductible?",
    a: "Yes — since 2025. Car loans are tax deductible up to $10,000 per year of interest paid, but only for a qualifying loan: the car must be new, finally assembled in the USA, for personal use, and the loan must have started after December 31, 2024. The deduction covers tax years 2025–2028 and is claimed on Schedule 1-A.",
  },
  {
    q: "Can you write off interest on a car loan?",
    a: "Yes — you can write off up to $10,000 per year of interest on a car loan for tax years 2025–2028, if the vehicle is new, US-assembled, and for personal use and the loan originated after December 31, 2024. Before 2025, personal car loan interest was generally not deductible at all. You write it off on Schedule 1-A, Part IV, with your VIN.",
  },
  {
    q: "Can I deduct car interest on my taxes?",
    a: "Yes, if you meet the 4 rules: new vehicle, final assembly in the USA, personal use, and a loan originated after December 31, 2024. On your tax return, enter the interest you actually paid during the year on Schedule 1-A, Part IV, and include the vehicle's VIN. Your tax saving is the deduction times your marginal rate — a $10,000 deduction at 22% saves $2,200.",
  },
  {
    q: "Can you deduct auto loan interest on your taxes?",
    a: "Yes — auto loan interest is deductible up to $10,000 per year for tax years 2025–2028 under the same law as car loan interest. It must be interest on a first-lien loan for a new, US-assembled, personal-use vehicle originated after December 31, 2024. Lease payments and used-car loan interest do not count.",
  },
  {
    q: "Can I deduct car loan interest?",
    a: "Yes, up to $10,000 per year of interest paid, if all 4 rules pass: the vehicle is new, finally assembled in the USA, for personal use, and the loan started after December 31, 2024. If any rule fails, none of the interest is deductible under this law — and income phase-outs above $100,000 MAGI ($200,000 joint) can reduce it. Check your VIN before you file.",
  },
  {
    q: "Can I claim car interest on my taxes?",
    a: "Yes — claiming car interest means entering the interest you paid on Schedule 1-A, Part IV of your return, with the vehicle's VIN. You need a qualifying new, US-assembled, personal-use vehicle and a loan originated after December 31, 2024. No itemizing is required. For the 2026 tax year, lenders send Form 1098-VLI when qualified interest paid is $600 or more.",
  },
  {
    q: "Can I claim car payments on my taxes?",
    a: "No — you cannot claim car payments themselves. Only the interest portion of each payment is deductible, never the principal portion that pays down the loan balance. For example, in a $500 monthly payment with $180 of interest, only the $180 counts — and only if all 4 qualifying rules pass. Your lender statement separates interest from principal.",
  },
  {
    q: "Can I claim my car loan interest on my taxes?",
    a: "Yes — claim it on your own return if the loan is in your name and the vehicle qualifies: new, finally assembled in the USA, for personal use, with a loan originated after December 31, 2024. Enter the interest paid and the VIN on Schedule 1-A, Part IV. Joint filers share one $10,000 cap; spouses filing separately each get a $10,000 cap. Keep your loan agreement and interest statements.",
  },
  {
    q: "Can you deduct interest paid on a car loan?",
    a: "Yes — the deduction is for interest actually paid during the tax year, up to $10,000, not interest billed but unpaid. Use the interest-paid total on your year-end lender statement. If you paid $7,000 in interest, your deduction is $7,000; if you paid $14,000, it is capped at $10,000 — provided the vehicle and loan meet all 4 rules.",
  },
  {
    q: "Is auto interest deductible in 2025?",
    a: "Yes — 2025 is the first tax year auto interest is deductible, under OBBBA §70203. If you bought a qualifying new, US-assembled car in 2025 with a loan originated after December 31, 2024, claim the interest you paid in 2025 on your 2025 return (filed in 2026) via Schedule 1-A, Part IV, with the VIN. Form 1098-VLI reporting starts with the 2026 tax year, so for 2025 use your lender statements.",
  },
  {
    q: "Is car loan interest tax-deductible in 2026?",
    a: "Yes. Under OBBBA §70203, you can deduct up to $10,000 per year of interest paid on a qualifying new-vehicle auto loan for tax years 2025–2028.",
  },
  {
    q: "What are the 4 rules to qualify?",
    a: "1) The vehicle must be NEW (original use begins with you). 2) Final assembly must be in the USA. 3) It must be for personal use, not business or fleet. 4) The loan must have originated after December 31, 2024.",
  },
  {
    q: "Does a used car qualify?",
    a: "No. Used and pre-owned vehicles are explicitly excluded — only new vehicles qualify.",
  },
  {
    q: "Do leases qualify?",
    a: "No. The deduction covers interest on a loan used to purchase the vehicle. Lease payments are not loan interest.",
  },
  {
    q: "Do I need to itemize deductions?",
    a: "No. This is an above-the-line deduction, so it works whether you take the standard deduction or itemize.",
  },
  {
    q: "What is the maximum deduction?",
    a: "$10,000 of interest paid per year. If you paid $7,000 in interest, your deduction is $7,000; if you paid $14,000, it's capped at $10,000.",
  },
  {
    q: "Does a $10,000 deduction mean I save $10,000?",
    a: "No — this is the most common misunderstanding. A deduction reduces taxable income. Your savings equal the deduction times your marginal tax rate (e.g., $10,000 × 22% = $2,200 saved).",
  },
  {
    q: "What are the income limits?",
    a: "The deduction phases out above $100,000 of MAGI for single filers ($200,000 for married filing jointly). Above the threshold, the deduction may be reduced — confirm the exact amount with a CPA.",
  },
  {
    q: "How do I check if my car was assembled in the USA?",
    a: "Use our free VIN checker — it decodes your 17-character VIN with the official NHTSA database and shows the plant country. You can also check the label on the driver's door jamb.",
  },
  {
    q: "My car is an American brand but was assembled in Mexico. Does it qualify?",
    a: "No. The law cares about where your specific vehicle was finally assembled, not the brand's headquarters. Many US-brand models are assembled in Mexico or Canada — check your VIN.",
  },
  {
    q: "What records should I keep?",
    a: "Keep your loan agreement, year-end interest statements from your lender, and proof of the vehicle's assembly (e.g., your VIN decode result) in case of questions.",
  },
  {
    q: "How do I claim it on my tax return?",
    a: "Tax software (TurboTax, FreeTaxUSA, eFile.com) will walk you through the new deduction section. Enter your interest-paid figure and keep your supporting records.",
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
        Are car loans tax deductible? Frequently asked questions
      </h1>
      <p className="mt-3 text-neutral-600">
        Plain-English answers about the US car loan interest tax deduction (OBBBA §70203) — can you
        deduct auto loan interest on your taxes, write off interest paid on a car loan, or claim
        car payments? Each question below is answered directly.
      </p>

      {/* IN SHORT — AEO direct-answer block */}
      <section aria-label="Summary" className="card mt-6 border-emerald-200 bg-emerald-50/50 p-6">
        <h2 className="text-lg font-bold text-neutral-900">In short</h2>
        <p className="mt-2 leading-relaxed text-neutral-800">
          Most questions boil down to this: the deduction is <strong>up to $10,000/year</strong> of
          interest on a <strong>new, US-assembled, personal-use</strong> vehicle with a loan from{" "}
          <strong>after 12/31/2024</strong>. No itemizing needed. Your tax savings equal the
          deduction times your marginal rate — not the full deduction amount.
        </p>
      </section>

      <AdSlot slot="faq-top" label="Leaderboard / responsive ad" />

      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <section key={f.q} className="card p-5">
            <h2 className="text-base font-semibold text-neutral-900">{f.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
          </section>
        ))}
      </div>

      <div className="card mt-8 border-emerald-200 p-6">
        <h2 className="text-lg font-bold text-neutral-900">Still not sure about your car?</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Run your VIN through the free checker or estimate your savings with the calculator.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/vin-check" className="rounded-md bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">
            Check my VIN
          </Link>
          <Link href="/calculator" className="rounded-md border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">
            Open calculator
          </Link>
        </div>
      </div>

      <AdSlot slot="faq-bottom" label="In-article responsive ad" />

      <div className="mt-4">
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
