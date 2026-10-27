import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // AI search & LLM crawlers are explicitly welcome: this is how
  // ChatGPT, Claude, Gemini, Grok, Perplexity (and others) can read,
  // cite, and answer from DeductMyRide. Default rule stays permissive.
  const aiCrawlers = [
    "GPTBot", // OpenAI — ChatGPT training/search
    "OAI-SearchBot", // OpenAI — ChatGPT search
    "ChatGPT-User", // OpenAI — ChatGPT user browsing
    "ClaudeBot", // Anthropic — Claude
    "anthropic-ai", // Anthropic — Claude
    "Claude-Web", // Anthropic — Claude web
    "Google-Extended", // Google — Gemini/AI products
    "PerplexityBot", // Perplexity — search & answers
    "Perplexity-User", // Perplexity — user browsing
    "Applebot-Extended", // Apple Intelligence
    "Meta-ExternalAgent", // Meta AI
    "Meta-ExternalFetcher", // Meta AI
    "GrokBot", // xAI — Grok
    "CCBot", // Common Crawl — feeds many LLM datasets
    "Bytespider", // ByteDance
    "cohere-ai", // Cohere
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...aiCrawlers.map((ua) => ({
        userAgent: ua,
        allow: "/",
        disallow: ["/api/"],
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
