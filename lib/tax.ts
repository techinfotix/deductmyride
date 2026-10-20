/**
 * Deduction math for the OBBBA §70203 auto loan interest deduction.
 *
 * Rules encoded (final IRS regulations T.D. 10054, IRB 2026-39, effective Nov 9, 2026):
 *  - Deduction is capped at $10,000 of interest paid per year, per return
 *    (married filing separately: each spouse gets their own $10,000 cap).
 *  - MAGI phase-out: the $10,000 cap is reduced by $200 for each $1,000 (or
 *    portion thereof) of MAGI above the threshold — $100,000 (single / MFS /
 *    head of household) or $200,000 (married filing jointly). Fully phased
 *    out at $150,000 / $250,000.
 *  - Year-1 interest is computed with a real amortization schedule.
 */

export const DEDUCTION_CAP = 10_000;
export const MAGI_THRESHOLD_SINGLE = 100_000;
export const MAGI_THRESHOLD_JOINT = 200_000;
export const PHASEOUT_STEP_USD = 1_000; // $200 reduction per $1,000 of excess MAGI
export const PHASEOUT_REDUCTION_PER_STEP = 200;
export const LOAN_CUTOFF_DATE = "2024-12-31"; // loan must originate AFTER this date
export const MIN_MODEL_YEAR = 2025;

export type FilingStatus = "single" | "joint" | "separate" | "head";

export const FILING_STATUS_LABELS: Record<FilingStatus, string> = {
  single: "Single",
  joint: "Married filing jointly",
  separate: "Married filing separately",
  head: "Head of household",
};

export function magiThreshold(status: FilingStatus): number {
  return status === "joint" ? MAGI_THRESHOLD_JOINT : MAGI_THRESHOLD_SINGLE;
}

/** Interest paid in the first 12 months of an amortizing loan. */
export function yearOneInterest(
  principal: number,
  aprPct: number,
  termYears: number
): number {
  if (principal <= 0 || aprPct < 0 || termYears <= 0) return 0;
  const r = aprPct / 100 / 12;
  const n = Math.round(termYears * 12);
  if (r === 0) return 0;
  const payment = (principal * r) / (1 - Math.pow(1 + r, -n));
  let balance = principal;
  let interest = 0;
  const months = Math.min(n, 12);
  for (let i = 0; i < months; i++) {
    const interestPart = balance * r;
    interest += interestPart;
    balance -= payment - interestPart;
  }
  return Math.max(0, interest);
}

/** Phase-out reduction in dollars, per final IRS regs T.D. 10054: $200 for each
 *  $1,000 (or portion thereof) of MAGI above the threshold. 0 at/below threshold.
 *  Reg example: MAGI $124,200 → $24,200 excess → rounds up to 25 steps → $5,000. */
export function phaseOutReduction(magi: number, status: FilingStatus): number {
  const threshold = magiThreshold(status);
  const excess = magi - threshold;
  if (excess <= 0) return 0;
  const steps = Math.ceil(excess / PHASEOUT_STEP_USD);
  return Math.min(steps * PHASEOUT_REDUCTION_PER_STEP, DEDUCTION_CAP);
}

export interface EstimateInput {
  amount: number;
  apr: number;
  termYears: number;
  status: FilingStatus;
  magi: number;
  marginalRatePct: number; // e.g. 22 for 22%
}

export interface EstimateResult {
  yearOneInterest: number;
  cappedDeduction: number; // min(year-1 interest, $10,000) — before phase-out
  threshold: number;
  phaseOutApplies: boolean;
  phaseOutReduction: number; // T.D. 10054 formula
  effectiveDeduction: number; // after phase-out, floored at 0
  taxSaved: number; // effectiveDeduction × marginal rate
}

export function estimateDeduction(input: EstimateInput): EstimateResult {
  const yearOne = yearOneInterest(input.amount, input.apr, input.termYears);
  const cappedDeduction = Math.min(yearOne, DEDUCTION_CAP);
  const threshold = magiThreshold(input.status);
  const phaseOutApplies = input.magi > threshold;
  const reduction = phaseOutReduction(input.magi, input.status);
  const effectiveDeduction = Math.max(0, cappedDeduction - reduction);
  const taxSaved = effectiveDeduction * (input.marginalRatePct / 100);
  return {
    yearOneInterest: yearOne,
    cappedDeduction,
    threshold,
    phaseOutApplies,
    phaseOutReduction: reduction,
    effectiveDeduction,
    taxSaved,
  };
}

export function formatUSD(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
