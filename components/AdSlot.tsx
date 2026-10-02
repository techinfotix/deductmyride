/**
 * PLACEHOLDER ad slot.
 * To go live: replace the inner div with your AdSense <ins> code + push script.
 * See README.md ("Monetization") for exactly where the AdSense script tag goes.
 */
export default function AdSlot({
  slot,
  label = "Responsive ad",
}: {
  slot: string;
  label?: string;
}) {
  return (
    <div className="my-8" aria-hidden="true">
      <div className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Advertisement
        </p>
        <p className="mt-2 text-sm text-neutral-500">
          {label} — ad slot <code className="font-mono">"{slot}"</code>.
          Paste your AdSense code in{" "}
          <code className="font-mono">components/AdSlot.tsx</code>.
        </p>
      </div>
    </div>
  );
}
