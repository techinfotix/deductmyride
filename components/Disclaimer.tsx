import { DISCLAIMER } from "@/lib/site";

/** Tax disclaimer — rendered on every tool/guide page. */
export default function Disclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-amber-300 bg-amber-50 ${
        compact ? "p-3" : "p-4"
      }`}
      role="note"
      aria-label="Tax disclaimer"
    >
      <p className={`${compact ? "text-xs" : "text-sm"} text-amber-900`}>
        <span className="font-semibold">Disclaimer: </span>
        {DISCLAIMER}
      </p>
    </div>
  );
}
