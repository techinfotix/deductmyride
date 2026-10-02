export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://deductmyride.com"
).replace(/\/$/, "");

export const brand = "DeductMyRide";
export const tagline =
  "Find out in 60 seconds if your car loan interest is tax-deductible.";

export const DISCLAIMER =
  "Estimates only — not tax advice. Tax rules are complex and change. Confirm your situation with a qualified CPA or tax professional before filing.";
