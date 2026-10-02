/**
 * Deduction math for the OBBBA §70203 auto loan interest deduction.
 *
 * Rules encoded (no invented figures):
 *  - Deduction is capped at $10,000 of interest paid per year.
 *  - MAGI phase-out begins at $100,000 (single / MFS / head of household)
 *    and $200,000 (married filing jointly). Above the threshold we do NOT
 *    invent a phase-out formula — we flag it and tell the user to see a CPA.
 *  - Year-1 interest is computed with a real amortization schedule.
 */

export const DEDUCTION_CAP = 10_000;
export const MAGI_THRESHOLD_SINGLE = 100_000;
export const MAGI_THRESHOLD_JOINT = 200_000;
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
  cappedDeduction: number;
  threshold: number;
  phaseOutApplies: boolean;
  taxSaved: number; // before phase-out; flagged when phaseOutApplies
}

export function estimateDeduction(input: EstimateInput): EstimateResult {
  const yearOne = yearOneInterest(input.amount, input.apr, input.termYears);
  const cappedDeduction = Math.min(yearOne, DEDUCTION_CAP);
  const threshold = magiThreshold(input.status);
  const phaseOutApplies = input.magi > threshold;
  const taxSaved = cappedDeduction * (input.marginalRatePct / 100);
  return { yearOneInterest: yearOne, cappedDeduction, threshold, phaseOutApplies, taxSaved };
}

export function formatUSD(n: number): string {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}
