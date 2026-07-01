# Safety Pro Electrical — Project Status

Lead-generation website for **Safety Pro Electrical** (Arif Daryabi), a licensed A-Grade
electrician based in Cranbourne East, servicing South-East Melbourne.

**Goal:** organically generate a steady stream of enquiries (target: 14–18/month within ~90 days).

- **Repo:** `batorsunbyte/safety_Pro_electrical` — work on `develop`, merge to `main` only on approval.
- **Stack:** Next.js 14 (App Router) · static export (`output: 'export'`) · Tailwind CSS · TypeScript.
- **Language:** natural Australian English.
- **Build:** `npm run build` → static site in `out/`.

---

## Strategy (research-backed)

1. **Local SEO on the suburb level** — a page per priority suburb, not just "Melbourne".
2. **Click-to-call everywhere** — sticky header + fixed mobile call bar.
3. **Hard trust signals** — real licence numbers (A68377, REC-33712), ABN, insurance, 4.7★ reviews.
4. **One page per service** — high-intent landing pages.
5. **Structured data (JSON-LD)** — Electrician/LocalBusiness + Service + FAQ + Breadcrumb.
6. **Google Business Profile** — to be created (biggest organic lever; guide in Welle 5).

---

## Wave plan

| Wave | Scope | Status |
|------|-------|--------|
| **0 – Foundation** | Scaffold, brand tokens, `lib/site.ts`, Header/Footer, mobile call bar, SEO + JSON-LD, hero + home preview | ✅ Done |
| **1 – Home** | Full home sections: services grid, why-us, real reviews, 4-field quote form, FAQ, trust block, CTA | ⏳ Next |
| **2 – Services** | 6 individual service pages with copy + schema + FAQ | ⬜ |
| **3 – Service Areas** | 8 priority suburb pages with unique local copy | ⬜ |
| **4 – About / Reviews / Contact** | Story, trust, contact page + form delivery (email/SMS) | ⬜ |
| **5 – Polish** | Perf, WebP, a11y, OG/favicon assets, sitemap.xml/robots.txt, GBP guide | ⬜ |

---

## Data we have (confirmed)

- **Contact:** 0490 101 365 · safetypro.electrical@gmail.com · Cranbourne East VIC 3977
- **Credentials:** ABN 17 682 761 851 · A-Grade A68377 · REC-33712 (Energy Safe Victoria)
- **Reputation:** 4.7★ · 37 ratings · 43 recommendations · 68 hires (hipages)
- **Brand:** dark navy + electric cyan, shield/bulb/bolt logo (rebuilt as SVG)
- **Services & service area:** derived from real jobs (see `data/services.ts`, `data/suburbs.ts`)

## Still needed from Arif (does NOT block the build)

- [ ] Real job photos (10–15) for gallery + hero — via WhatsApp
- [ ] Exact opening hours (emergency line is 24/7)
- [ ] Confirm final domain
- [ ] Create Google Business Profile (Welle 5 provides the guide)
- [ ] Provide transparent-background logo PNG (optional — SVG mark is in place)

---

## Self-review log

### Wave 0 — Foundation ✅
**What works:**
- Static build passes, strict TypeScript clean, first-load JS ~96 kB (fast).
- Central `lib/site.ts` = single source of truth (change once, updates everywhere) — scalable & reusable.
- JSON-LD Electrician schema live (verified `A68377`, `REC-33712` render into `index.html`).
- Mobile-first: sticky header, fixed bottom call bar, tap-friendly targets, reduced-motion support.
- Logo rebuilt as crisp inline SVG (no dependency on a raster asset).
- Verified visually on desktop (1440) and mobile (390) — clean, on-brand, conversion-oriented.

**Decisions made (autonomous):**
- **Light theme + dark navy hero/footer + cyan CTAs** — on-brand *and* readable for an older
  residential audience (higher conversion than full-dark).
- Fonts self-hosted via `@fontsource` (Inter + Space Grotesk) — robust offline builds, no layout shift.
- `aggregateRating` schema uses real hipages numbers; reviews will be displayed on-site (no faked ratings).

**Deferred (by design):**
- Real reviews list, quote form, why-us, FAQ → Wave 1.
- favicon.ico / og-image.png / apple-icon.png → Wave 5 (needs final assets).

**Next:** Wave 1 — build out the full homepage.
