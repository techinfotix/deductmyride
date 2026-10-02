/**
 * Affiliate link configuration.
 *
 * Paste your real affiliate URLs in .env.local (see .env.example):
 *   NEXT_PUBLIC_AFF_TURBOTAX=https://...
 *   NEXT_PUBLIC_AFF_FREETAXUSA=https://...
 *   NEXT_PUBLIC_AFF_EFILE=https://...
 *
 * Until then the CTAs render with "#" links and are clearly marked
 * as placeholders in the code.
 */

export interface Affiliate {
  name: string;
  blurb: string;
  url: string;
  cta: string;
}

export const affiliates: Affiliate[] = [
  {
    name: "TurboTax",
    blurb: "Guided filing that walks you through new deductions step by step.",
    url: process.env.NEXT_PUBLIC_AFF_TURBOTAX ?? "#",
    cta: "File with TurboTax",
  },
  {
    name: "FreeTaxUSA",
    blurb: "Free federal filing — a budget-friendly way to claim your deduction.",
    url: process.env.NEXT_PUBLIC_AFF_FREETAXUSA ?? "#",
    cta: "File with FreeTaxUSA",
  },
  {
    name: "eFile.com",
    blurb: "Online tax filing with support for new 2025+ tax law changes.",
    url: process.env.NEXT_PUBLIC_AFF_EFILE ?? "#",
    cta: "File with eFile.com",
  },
];
