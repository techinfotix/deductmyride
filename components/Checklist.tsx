import { LOAN_CUTOFF_DATE, MIN_MODEL_YEAR } from "@/lib/tax";

export interface RuleState {
  label: string;
  detail: string;
  state: "pass" | "fail" | "unknown" | "todo";
}

/** The 4 qualification rules of the OBBBA auto loan interest deduction. */
export const FOUR_RULES: { label: string; detail: string }[] = [
  {
    label: "The vehicle is NEW",
    detail: "Original use must begin with you — used or pre-owned vehicles do not qualify.",
  },
  {
    label: "Final assembly in the USA",
    detail: `The vehicle's final assembly point must be in the United States. Your VIN's plant country tells you this.`,
  },
  {
    label: "Personal use",
    detail: "The vehicle must be for personal use — not business, fleet, or for-hire use.",
  },
  {
    label: `Loan originated after ${LOAN_CUTOFF_DATE}`,
    detail: "The auto loan must have been originated after December 31, 2024.",
  },
];

const stateStyles: Record<RuleState["state"], string> = {
  pass: "border-emerald-300 bg-emerald-50",
  fail: "border-red-300 bg-red-50",
  unknown: "border-amber-300 bg-amber-50",
  todo: "border-neutral-200 bg-white",
};

const badgeStyles: Record<RuleState["state"], string> = {
  pass: "bg-emerald-700 text-white",
  fail: "bg-red-600 text-white",
  unknown: "bg-amber-500 text-white",
  todo: "bg-neutral-200 text-neutral-700",
};

const badgeText: Record<RuleState["state"], string> = {
  pass: "✓ Pass",
  fail: "✗ Fail",
  unknown: "? Check",
  todo: "1–4",
};

export default function Checklist({ rules }: { rules?: RuleState[] }) {
  const items: RuleState[] =
    rules ?? FOUR_RULES.map((r) => ({ ...r, state: "todo" as const }));
  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {items.map((rule, i) => (
        <li
          key={rule.label}
          className={`rounded-lg border p-4 ${stateStyles[rule.state]}`}
        >
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-neutral-900">
              <span className="mr-2 text-neutral-400">{i + 1}.</span>
              {rule.label}
            </p>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${badgeStyles[rule.state]}`}
            >
              {badgeText[rule.state]}
            </span>
          </div>
          <p className="mt-2 text-sm text-neutral-600">{rule.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export { MIN_MODEL_YEAR };
