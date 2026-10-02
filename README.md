# DeductMyRide

Free US tax tools: **VIN eligibility checker** + **deduction calculator** for the new
car loan interest tax deduction (OBBBA §70203 — up to $10,000/year).

Tagline: *Find out in 60 seconds if your car loan interest is tax-deductible.*

## What's inside

| Page | Path |
|---|---|
| Homepage (VIN hero, 4 rules, example savings, FAQ) | `/` |
| VIN checker (NHTSA decode + 4-rule verdict, shareable `?vin=`) | `/vin-check` |
| Deduction calculator (amortized year-1 interest, $10k cap, MAGI phase-out flag, shareable params) | `/calculator` |
| Long-form guide (PAA headings, sources) | `/is-car-loan-interest-tax-deductible` |
| FAQ (12 Q&As) | `/faq` |
| 126 programmatic model pages (63 vehicles × 2025–2026) | `/does-[make]-[model]-[year]-qualify` |

Also: dynamic `sitemap.xml` (131 URLs), `robots.txt`, `llms.txt`, JSON-LD
(FAQPage + WebApplication + Article), canonical URLs, Open Graph tags, and an
"In short" direct-answer block on every guide page (AEO/GEO).

## Run locally

```bash
cd deductmyride
npm install
npm run dev        # http://localhost:3000
```

Optional env (copy `.env.example` to `.env.local`):

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000   # canonical base URL
NEXT_PUBLIC_AFF_TURBOTAX=                     # affiliate links (see below)
NEXT_PUBLIC_AFF_FREETAXUSA=
NEXT_PUBLIC_AFF_EFILE=
```

## Deploy on Vercel (free plan)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the repo.
3. Framework preset: **Next.js** (auto-detected). No build settings to change.
4. Add Environment Variable: `NEXT_PUBLIC_SITE_URL=https://yourdomain.com`
   (add the affiliate vars too when ready).
5. **Deploy**. Vercel gives you a `*.vercel.app` URL instantly.

### Add a custom domain (free plan)

1. Buy the domain (Cloudflare Registrar ≈ $10–12/yr is cheapest for renewals).
2. In Vercel: project → **Settings → Domains** → **Add** → type your domain.
3. Vercel shows you DNS records — add them at your registrar:
   - Apex (`@`): `A` record → `76.76.21.21`
   - `www`: `CNAME` → `cname.vercel-dns.com`
   (If your DNS is on Cloudflare, set the records to **DNS only**, not proxied,
   or just use Vercel's one-click nameserver option.)
4. Wait a few minutes for DNS + automatic HTTPS. Done — custom domains work on
   Vercel's free Hobby plan.

## Monetization

### AdSense
1. Get approved at [google.com/adsense](https://www.google.com/adsense/), add your
   domain, and copy your **AdSense script tag**.
2. Paste the script tag in `app/layout.tsx` inside `<head>`
   (e.g. right after `<body ...>` opens, or via Next.js `<Script>`).
3. Replace the placeholder box in `components/AdSlot.tsx` with your
   `<ins class="adsbygoogle" ...>` unit + the `(adsbygoogle = ...).push({})` snippet.
   There are 6 clearly-marked slots: `homepage-top`, `homepage-mid`,
   `vin-check-bottom`, `calculator-bottom`, `guide-top`/`guide-bottom`,
   `faq-top`/`faq-bottom`, `model-page-mid`.

### Affiliate links
Edit `lib/affiliates.ts` — or simpler, set these env vars in Vercel
(Settings → Environment Variables):

- `NEXT_PUBLIC_AFF_TURBOTAX` — TurboTax (via CJ Affiliate)
- `NEXT_PUBLIC_AFF_FREETAXUSA` — FreeTaxUSA (50% per free filed return)
- `NEXT_PUBLIC_AFF_EFILE` — eFile.com (40% per sale)

They render in the `AffiliateCTA` cards on the homepage, calculator, and guide.

### Email capture
The signup form posts to `app/api/subscribe/route.ts`, which is a **placeholder**
(returning 501 until connected). To go live, pick a provider and wire it up:

- **Easiest:** [Buttondown](https://buttondown.com) or [ConvertKit](https://kit.com) —
  replace the handler body with a `fetch()` to their subscribe API using an API key
  stored in `.env.local` (e.g. `BUTTONDOWN_API_KEY`), never hardcode it.
- Then the form shows "You're in! ✅" on success.

## Project structure

```
app/
  page.tsx                          # homepage
  vin-check/page.tsx                # VIN tool (client) — ?vin= shareable
  calculator/page.tsx               # deduction estimator — shareable params
  is-car-loan-interest-tax-deductible/page.tsx
  faq/page.tsx
  [modelSlug]/page.tsx              # programmatic model pages (SSG, 126 pages)
  api/vin/[vin]/route.ts            # NHTSA vPIC proxy, 24h in-memory cache
  api/subscribe/route.ts            # email placeholder (501)
  sitemap.ts  robots.ts
components/                         # flat white cards, thin borders, no gradients
lib/
  tax.ts        # deduction math (cap, MAGI thresholds, amortization)
  vehicles.ts   # 63-vehicle assembly dataset → model page slugs
  affiliates.ts # affiliate URLs from env
  site.ts       # brand, tagline, disclaimer, site URL
public/llms.txt                     # AI/GEO summary file
```

## Notes & gotchas

- **Next.js 16 breaking change:** interpolated dynamic segments like
  `app/does-[make]-[model]-[year]-qualify/` are silently 404 — the router no
  longer matches them. Model pages therefore use a single root dynamic segment
  (`app/[modelSlug]/`) whose value is the full pretty slug. URLs are unchanged.
- **NHTSA plant country** comes back as `"UNITED STATES (USA)"` — the checker
  normalizes with `.includes("united states")`, not exact match.
- **Tax figures are NOT invented:** only the $10k cap, the 4 rules, and the
  $100k/$200k MAGI thresholds are encoded. Above the threshold we flag phase-out
  and defer to a CPA instead of inventing a formula.
- Every tool/guide page carries the tax disclaimer. Keep it.
