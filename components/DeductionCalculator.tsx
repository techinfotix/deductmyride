"use client";

import { useEffect, useMemo, useState } from "react";
import Disclaimer from "./Disclaimer";
import {
  estimateDeduction,
  formatUSD,
  FILING_STATUS_LABELS,
  type FilingStatus,
} from "@/lib/tax";

const MARGINAL_RATES = [10, 12, 22, 24, 32, 35, 37];

function num(v: string, fallback: number): number {
  const n = parseFloat(v);
  return isNaN(n) ? fallback : n;
}

export default function DeductionCalculator() {
  const [amount, setAmount] = useState("45000");
  const [apr, setApr] = useState("7");
  const [term, setTerm] = useState("6");
  const [status, setStatus] = useState<FilingStatus>("single");
  const [magi, setMagi] = useState("80000");
  const [rate, setRate] = useState("22");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Read shareable params on first load
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (p.get("amount")) setAmount(p.get("amount")!);
    if (p.get("apr")) setApr(p.get("apr")!);
    if (p.get("term")) setTerm(p.get("term")!);
    if (p.get("status") && p.get("status")! in FILING_STATUS_LABELS)
      setStatus(p.get("status")! as FilingStatus);
    if (p.get("magi")) setMagi(p.get("magi")!);
    if (p.get("rate")) setRate(p.get("rate")!);
    setHydrated(true);
  }, []);

  const result = useMemo(() => {
    if (!hydrated) return null;
    return estimateDeduction({
      amount: num(amount, 0),
      apr: num(apr, 0),
      termYears: num(term, 0),
      status,
      magi: num(magi, 0),
      marginalRatePct: num(rate, 22),
    });
  }, [amount, apr, term, status, magi, rate, hydrated]);

  function shareUrl(): string {
    const url = new URL(window.location.href);
    url.search = "";
    url.searchParams.set("amount", amount);
    url.searchParams.set("apr", apr);
    url.searchParams.set("term", term);
    url.searchParams.set("status", status);
    url.searchParams.set("magi", magi);
    url.searchParams.set("rate", rate);
    return url.toString();
  }

  function copyLink() {
    navigator.clipboard.writeText(shareUrl()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const inputCls =
    "w-full rounded-md border border-neutral-300 px-4 py-2.5 text-sm focus:border-emerald-600 focus:outline-none";

  return (
    <div>
      <div className="card p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="calc-amount" className="text-sm font-semibold text-neutral-900">Loan amount ($)</label>
            <input id="calc-amount" inputMode="decimal" className={inputCls} value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div>
            <label htmlFor="calc-apr" className="text-sm font-semibold text-neutral-900">Interest rate (APR %)</label>
            <input id="calc-apr" inputMode="decimal" className={inputCls} value={apr} onChange={(e) => setApr(e.target.value)} />
          </div>
          <div>
            <label htmlFor="calc-term" className="text-sm font-semibold text-neutral-900">Loan term (years)</label>
            <input id="calc-term" inputMode="decimal" className={inputCls} value={term} onChange={(e) => setTerm(e.target.value)} />
          </div>
          <div>
            <label htmlFor="calc-status" className="text-sm font-semibold text-neutral-900">Filing status</label>
            <select id="calc-status" className={inputCls} value={status} onChange={(e) => setStatus(e.target.value as FilingStatus)}>
              {(Object.keys(FILING_STATUS_LABELS) as FilingStatus[]).map((s) => (
                <option key={s} value={s}>{FILING_STATUS_LABELS[s]}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="calc-magi" className="text-sm font-semibold text-neutral-900">Modified adjusted gross income ($)</label>
            <input id="calc-magi" inputMode="decimal" className={inputCls} value={magi} onChange={(e) => setMagi(e.target.value)} />
            <p className="mt-1 text-xs text-neutral-500">Phase-out starts at {formatUSD(result?.threshold ?? 100000)} for your filing status.</p>
          </div>
          <div>
            <label htmlFor="calc-rate" className="text-sm font-semibold text-neutral-900">Your marginal tax rate</label>
            <select id="calc-rate" className={inputCls} value={rate} onChange={(e) => setRate(e.target.value)}>
              {MARGINAL_RATES.map((r) => (
                <option key={r} value={r}>{r}%</option>
              ))}
            </select>
            <p className="mt-1 text-xs text-neutral-500">The bracket your last dollar of income falls in. Not sure? 22% is a common middle-class figure — ask your CPA.</p>
          </div>
        </div>
      </div>

      {result && (
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Interest you&apos;ll pay (year 1)</p>
            <p className="mt-2 text-3xl font-bold text-neutral-900">{formatUSD(result.yearOneInterest)}</p>
          </div>
          <div className="card border-emerald-200 p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Estimated deduction</p>
            <p className="mt-2 text-3xl font-bold text-emerald-700">{formatUSD(result.cappedDeduction)}</p>
            <p className="mt-1 text-xs text-neutral-500">Capped at $10,000/year by law.</p>
          </div>
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Actual tax you&apos;d save</p>
            <p className="mt-2 text-3xl font-bold text-neutral-900">{formatUSD(result.taxSaved)}</p>
            <p className="mt-1 text-xs text-neutral-500">Deduction × your {rate}% marginal rate.</p>
          </div>
        </div>
      )}

      {result?.phaseOutApplies && (
        <div className="mt-4 rounded-lg border border-amber-300 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">⚠️ MAGI phase-out may apply</p>
          <p className="mt-1 text-sm text-amber-800">
            Your MAGI ({formatUSD(num(magi, 0))}) is above the {formatUSD(result.threshold)} phase-out
            threshold for {FILING_STATUS_LABELS[status].toLowerCase()}. Your actual deduction may be
            reduced — the figures above are before phase-out. Confirm with a CPA.
          </p>
        </div>
      )}

      <div className="card mt-6 border-emerald-200 bg-emerald-50 p-5">
        <p className="font-semibold text-emerald-900">Key insight: a deduction is not a refund</p>
        <p className="mt-1 text-sm text-emerald-800">
          A {formatUSD(result?.cappedDeduction ?? 0)} deduction at a {rate}% marginal rate saves you{" "}
          {formatUSD(result?.taxSaved ?? 0)} in tax — not {formatUSD(result?.cappedDeduction ?? 0)}.
          The deduction lowers your taxable income; your bracket decides the savings.
        </p>
      </div>

      <button
        onClick={copyLink}
        className="mt-4 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
      >
        {copied ? "Link copied ✓" : "Copy shareable calculation link"}
      </button>

      <div className="mt-8">
        <Disclaimer />
      </div>
    </div>
  );
}
