"use client";

import { useCallback, useEffect, useState } from "react";
import Checklist, { type RuleState } from "./Checklist";
import Disclaimer from "./Disclaimer";
import { MIN_MODEL_YEAR, LOAN_CUTOFF_DATE } from "@/lib/tax";

interface VinData {
  vin: string;
  year: string | null;
  make: string | null;
  model: string | null;
  plantCountry: string | null;
  vehicleType: string | null;
  bodyClass: string | null;
  errorText: string | null;
  cached?: boolean;
}

function isValidVin(v: string): boolean {
  return /^[A-HJ-NPR-Z0-9]{17}$/.test(v.toUpperCase().trim());
}

export default function VinChecker({ initialVin = "" }: { initialVin?: string }) {
  const [vin, setVin] = useState(initialVin);
  const [data, setData] = useState<VinData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [loanAfter, setLoanAfter] = useState(false);
  const [copied, setCopied] = useState(false);

  const check = useCallback(async (v: string) => {
    const clean = v.toUpperCase().trim();
    if (!isValidVin(clean)) {
      setError("Please enter a valid 17-character VIN (letters I, O, Q are never used in VINs).");
      setData(null);
      return;
    }
    setLoading(true);
    setError("");
    setData(null);
    try {
      const res = await fetch(`/api/vin/${encodeURIComponent(clean)}`);
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Could not decode this VIN. Try again.");
        return;
      }
      setData(json);
      const url = new URL(window.location.href);
      url.searchParams.set("vin", clean);
      window.history.replaceState(null, "", url.toString());
    } catch {
      setError("Network error reaching the VIN decoder. Try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialVin && isValidVin(initialVin)) check(initialVin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const yearNum = data?.year ? parseInt(data.year, 10) : NaN;
  const yearOk = !isNaN(yearNum) && yearNum >= MIN_MODEL_YEAR;
  const plant = (data?.plantCountry ?? "").trim();
  const plantKnown = plant.length > 0;
  // NHTSA returns e.g. "UNITED STATES (USA)" — normalize before comparing
  const plantIsUS = plant.toLowerCase().includes("united states");

  const rules: RuleState[] = [
    {
      label: "The vehicle is NEW",
      detail: isNew
        ? `You confirmed this vehicle is new (model year ${data?.year ?? "—"}).`
        : "Tick the box below if the original use of this vehicle began with you.",
      state: isNew ? (yearOk ? "pass" : "unknown") : "todo",
    },
    {
      label: "Final assembly in the USA",
      detail: plantKnown
        ? `NHTSA reports the final assembly country as "${plant}".`
        : "NHTSA did not return a plant country for this VIN — check the sticker on the driver's door jamb.",
      state: !data ? "todo" : plantKnown ? (plantIsUS ? "pass" : "fail") : "unknown",
    },
    {
      label: "Personal use",
      detail: isPersonal
        ? "You confirmed the vehicle is for personal use."
        : "Tick the box below if the vehicle is for personal (not business/fleet) use.",
      state: isPersonal ? "pass" : "todo",
    },
    {
      label: `Loan originated after ${LOAN_CUTOFF_DATE}`,
      detail: loanAfter
        ? "You confirmed the loan started after December 31, 2024."
        : "Tick the box below if your auto loan originated after December 31, 2024.",
      state: loanAfter ? "pass" : "todo",
    },
  ];

  const fails = rules.filter((r) => r.state === "fail").length;
  const passes = rules.filter((r) => r.state === "pass").length;
  const verdict =
    fails > 0
      ? { tone: "fail", title: "Does not qualify", text: "At least one hard rule fails, so this vehicle does not qualify for the deduction." }
      : passes === 4
        ? { tone: "pass", title: "Likely qualifies ✓", text: "All four rules check out. Confirm the details with a CPA before filing." }
        : { tone: "unknown", title: "Almost there", text: "Confirm the remaining items (tick the boxes that apply to you) to get a verdict." };

  const verdictStyles: Record<string, string> = {
    pass: "border-emerald-300 bg-emerald-50 text-emerald-900",
    fail: "border-red-300 bg-red-50 text-red-900",
    unknown: "border-amber-300 bg-amber-50 text-amber-900",
  };

  function copyLink() {
    const url = new URL(window.location.href);
    if (vin.trim()) url.searchParams.set("vin", vin.toUpperCase().trim());
    navigator.clipboard.writeText(url.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div>
      <form
        onSubmit={(e) => { e.preventDefault(); check(vin); }}
        className="card p-5 sm:p-6"
      >
        <label htmlFor="vin-input" className="text-sm font-semibold text-neutral-900">
          Enter your 17-character VIN
        </label>
        <p className="mt-1 text-xs text-neutral-500">
          Find it on your dashboard (driver&apos;s side), driver&apos;s door jamb sticker, or insurance card.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="vin-input"
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value.toUpperCase())}
            placeholder="e.g. 1FTFW1E85NFA12345"
            maxLength={17}
            autoComplete="off"
            spellCheck={false}
            className="flex-1 rounded-md border border-neutral-300 px-4 py-3 font-mono text-sm uppercase tracking-wider focus:border-emerald-600 focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-emerald-700 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-800 disabled:opacity-50"
          >
            {loading ? "Decoding…" : "Check my VIN"}
          </button>
        </div>
        {error && <p className="mt-3 text-sm text-red-700">{error}</p>}
      </form>

      {data && (
        <div className="mt-6">
          <div className="card p-5">
            <h2 className="text-lg font-bold text-neutral-900">Decoded vehicle</h2>
            <dl className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
              {[
                ["Year", data.year ?? "—"],
                ["Make", data.make ?? "—"],
                ["Model", data.model ?? "—"],
                ["Plant country", data.plantCountry ?? "Not reported"],
                ["Vehicle type", data.vehicleType ?? "—"],
                ["Body", data.bodyClass ?? "—"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-md bg-neutral-50 p-3">
                  <dt className="text-xs uppercase tracking-wide text-neutral-500">{k}</dt>
                  <dd className="mt-1 font-semibold text-neutral-900">{v}</dd>
                </div>
              ))}
            </dl>
            {!isNaN(yearNum) && !yearOk && (
              <p className="mt-3 text-sm text-amber-800">
                Note: model year {data.year} is before {MIN_MODEL_YEAR}. The deduction
                targets new vehicles from the 2025 model year onward.
              </p>
            )}
          </div>

          <div className="card mt-6 p-5">
            <h2 className="text-lg font-bold text-neutral-900">Confirm your situation</h2>
            <div className="mt-3 space-y-2 text-sm">
              {[
                [isNew, setIsNew, "This vehicle is NEW — its original use began with me"],
                [isPersonal, setIsPersonal, "This vehicle is for personal use (not business / fleet / for-hire)"],
                [loanAfter, setLoanAfter, `My auto loan originated after December 31, ${2024}`],
              ].map(([val, set, label], i) => (
                <label key={i} className="flex cursor-pointer items-start gap-3 rounded-md border border-neutral-200 p-3 hover:bg-neutral-50">
                  <input
                    type="checkbox"
                    checked={val as boolean}
                    onChange={(e) => (set as (b: boolean) => void)(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-emerald-700"
                  />
                  <span className="text-neutral-800">{label as string}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="mb-3 text-lg font-bold text-neutral-900">The 4-rule verdict</h2>
            <Checklist rules={rules} />
          </div>

          <div className={`mt-6 rounded-lg border p-5 ${verdictStyles[verdict.tone]}`}>
            <p className="text-lg font-bold">{verdict.title}</p>
            <p className="mt-1 text-sm">{verdict.text}</p>
          </div>

          <button
            onClick={copyLink}
            className="mt-4 rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            {copied ? "Link copied ✓" : "Copy shareable result link"}
          </button>
        </div>
      )}

      <div className="mt-8">
        <Disclaimer />
      </div>
    </div>
  );
}
