"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/** Homepage hero VIN form — redirects to the full checker with ?vin=. */
export default function HeroVinForm() {
  const [vin, setVin] = useState("");
  const router = useRouter();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clean = vin.toUpperCase().trim();
    router.push(clean ? `/vin-check?vin=${encodeURIComponent(clean)}` : "/vin-check");
  }

  return (
    <form onSubmit={onSubmit} className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="hero-vin" className="sr-only">VIN number</label>
        <input
          id="hero-vin"
          type="text"
          value={vin}
          onChange={(e) => setVin(e.target.value.toUpperCase())}
          placeholder="Enter your 17-character VIN"
          maxLength={17}
          autoComplete="off"
          spellCheck={false}
          className="flex-1 rounded-md border border-neutral-300 bg-white px-4 py-3 font-mono text-sm uppercase tracking-wider focus:border-emerald-600 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-700 px-8 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
        >
          Check in 60 seconds
        </button>
      </div>
      <p className="mt-2 text-xs text-neutral-500">
        Free. No signup. We decode your VIN with the official NHTSA database.
      </p>
    </form>
  );
}
