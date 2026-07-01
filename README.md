# Safety Pro Electrical

Lead-generation website for **Safety Pro Electrical** — licensed A-Grade electricians in
South-East Melbourne (Cranbourne East). Built by [SunByte](https://sunbyte.at).

## Tech

- **Next.js 14** (App Router) with **static export** (`output: 'export'`)
- **Tailwind CSS** + **TypeScript**
- Self-hosted fonts (`@fontsource`: Inter + Space Grotesk)

## Develop

```bash
npm install      # once
npm run dev      # http://localhost:3000
npm run build    # static site → ./out
```

Preview the production build:

```bash
npm run build
npx serve out    # or: python -m http.server 4321  (from ./out)
```

## Structure

```
app/                 App Router pages + layout + globals.css
components/           Header, Footer, MobileCallBar, Logo, JsonLd, ServiceIcon
data/                services.ts, suburbs.ts   ← content data
lib/                 site.ts (single source of truth), schema.ts (JSON-LD)
public/              static assets (favicon, og-image, images)
```

## Workflow

- Work on **`develop`**; merge to **`main`** only after sign-off.
- See **STATUS.md** for the wave plan and current progress.
