/**
 * Ad slot. Renders NOTHING until AdSense is configured via
 * NEXT_PUBLIC_ADSENSE_CLIENT — placeholder boxes must never be
 * visible to the public. When the client ID is set, replace the
 * inner markup below with the real AdSense <ins> code.
 */
export default function AdSlot({
  slot,
  label = "Responsive ad",
}: {
  slot: string;
  label?: string;
}) {
  if (!process.env.NEXT_PUBLIC_ADSENSE_CLIENT) return null;

  return (
    <div className="my-8" aria-hidden="true">
      <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
          Advertisement
        </p>
        {/* TODO: paste the AdSense <ins> unit for slot "{slot}" ({label}) here. */}
      </div>
    </div>
  );
}
