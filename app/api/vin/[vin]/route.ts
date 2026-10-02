import { NextResponse } from "next/server";

/**
 * GET /api/vin/[vin]
 * Decodes a VIN via the free NHTSA vPIC API (no key required).
 * Results are cached in memory for 24h to respect NHTSA rate limits.
 */

interface CacheEntry {
  ts: number;
  data: VinDecodeResult;
}

interface VinDecodeResult {
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

const cache = new Map<string, CacheEntry>();
const TTL_MS = 24 * 3600 * 1000;

function pick(results: Array<{ Variable: string; Value: string | null }>, name: string): string | null {
  const row = results.find((r) => r.Variable === name);
  const v = row?.Value?.trim() ?? "";
  return v.length > 0 ? v : null;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ vin: string }> }
) {
  const { vin } = await params;
  const clean = vin.toUpperCase().trim();

  if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(clean)) {
    return NextResponse.json(
      { error: "Invalid VIN. A VIN is 17 characters (letters I, O and Q are never used)." },
      { status: 400 }
    );
  }

  const hit = cache.get(clean);
  if (hit && Date.now() - hit.ts < TTL_MS) {
    return NextResponse.json({ ...hit.data, cached: true });
  }

  try {
    const res = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVin/${clean}?format=json`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) {
      throw new Error(`NHTSA responded with ${res.status}`);
    }
    const json = await res.json();
    const results = Array.isArray(json.Results) ? json.Results : [];

    const data: VinDecodeResult = {
      vin: clean,
      year: pick(results, "Model Year"),
      make: pick(results, "Make"),
      model: pick(results, "Model"),
      plantCountry: pick(results, "Plant Country"),
      vehicleType: pick(results, "Vehicle Type"),
      bodyClass: pick(results, "Body Class"),
      errorText: pick(results, "Error Text"),
    };

    cache.set(clean, { ts: Date.now(), data });
    return NextResponse.json(data);
  } catch (err) {
    console.error("VIN decode failed:", err);
    return NextResponse.json(
      { error: "Could not reach the NHTSA VIN decoder. Please try again in a moment." },
      { status: 502 }
    );
  }
}
