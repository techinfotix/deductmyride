import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { vehicles, MODEL_YEARS, modelPagePath } from "@/lib/vehicles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/vin-check",
    "/calculator",
    "/is-car-loan-interest-tax-deductible",
    "/faq",
    "/models",
    "/privacy-policy",
    "/contact",
    "/blog/obbba-new-tax-deductions-2026",
    "/blog/car-loan-interest-deduction-vs-ev-tax-credit",
    "/blog/can-you-write-off-car-loan-interest",
  ];

  const entries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority:
      p === ""
        ? 1
        : p === "/privacy-policy" || p === "/contact"
          ? 0.5
          : p.startsWith("/blog/")
            ? 0.9
            : 0.8,
  }));

  for (const v of vehicles) {
    for (const year of MODEL_YEARS) {
      entries.push({
        url: `${siteUrl}${modelPagePath(v, year)}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
