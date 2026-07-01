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
| **1 – Home** | Full home sections: services grid, why-us, real reviews, 4-field quote form, FAQ, trust block, CTA | ✅ Done |
| **2 – Services** | 6 individual service pages with copy + schema + FAQ | ✅ Done |
| **3 – Service Areas** | 8 priority suburb pages with unique local copy | ✅ Done |
| **4 – About / Reviews / Contact** | Story, trust, contact page + form delivery (email/SMS) | ⏳ Next |
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

### Wave 1 — Home ✅
**What works:**
- Full conversion-focused homepage: Hero → Trust bar → Services → Why-us → How-it-works →
  Reviews → Service areas → Quote form → FAQ.
- **9 real, curated customer reviews** (from Arif's hipages profile, attributed) with a spread
  of services + suburbs — genuine social proof, no fabrication.
- **Quote form** works today: falls back to a pre-filled WhatsApp message (zero backend). Ready
  to switch to Web3Forms email delivery in Wave 4 via `SITE.formAccessKey`.
- **FAQ** accordion + `FAQPage` JSON-LD (rich-result eligible).
- Build clean, first-load JS ~101 kB. Verified desktop (1440) + mobile (390).

**Decisions made (autonomous):**
- Section components (`WhyUs`, `Steps`, `Reviews`, `QuoteForm`, `Faq`) are reusable — they'll
  be dropped onto service + suburb pages in Waves 2–3 without rework.
- Reviews shown with hipages attribution; deliberately **no** self-serving per-review schema on
  our own domain (Google-compliant). `aggregateRating` stays honest in LocalBusiness schema.
- Quote CTA + nav "Contact" now anchor to the on-page `#quote` form (a dedicated /contact page
  comes in Wave 4).

**Reminder — Gleis B (Arif's own task, biggest organic lever):** create Google Business Profile
+ ask past customers for Google reviews. Claude delivers the step-by-step guide + WhatsApp
templates in Wave 5.

### Waves 2 & 3 — Service + Suburb pages ✅
- **6 service pages** (`/services/[slug]`) + services index — each with unique intro, "what we
  help with", reassurance, 3 service-specific FAQs (+ FAQPage schema), reviews, areas strip,
  cross-links, Service + Breadcrumb schema, unique meta.
- **8 suburb pages** (`/service-areas/[slug]`) + areas index — unique local angle per suburb,
  suburb-matched reviews (fall back to general), per-suburb FAQs, nearby-area links, unique meta.
- Reusable `Breadcrumbs` + `CtaBand`; `Reviews` now parametrised (subset/heading/filter).
- 20 static pages total, build clean.

**Next:** Wave 4 — About, Reviews and Contact pages + form email delivery.
