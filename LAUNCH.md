# 🚀 Launch-Checkliste — safetypro-electrical.au

Stand: 2026-07-10. Hosting: **GitHub Pages** (gratis), Auto-Deploy bei jedem Push auf `main`.

## Was schon erledigt ist ✅

- [x] Domain in `lib/site.ts` verankert → Schema, Sitemap, OG-Tags, Canonicals zeigen auf `https://safetypro-electrical.au`
- [x] `public/CNAME` + `public/.nojekyll` (GitHub-Pages-Anforderungen)
- [x] Deploy-Workflow `.github/workflows/deploy.yml` (baut + deployt bei Push auf `main`)
- [x] GitHub Pages aktiviert, Custom Domain hinterlegt

## Was DU noch machst (Reihenfolge!)

### 1. DNS beim Domain-Anbieter setzen (~5 Min, wirkt nach Minuten bis 24h)

Beim Registrar von `safetypro-electrical.au` diese Einträge anlegen:

| Typ | Name/Host | Wert |
|-----|-----------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | batorsunbyte.github.io |

(Die 4 A-Records sind GitHubs Pages-Server; `www` leitet GitHub automatisch auf die Hauptdomain um.)

### 2. HTTPS erzwingen (nach DNS-Aktivierung, ~1 Std später)

GitHub → Repo `safety_Pro_electrical` → **Settings → Pages** → warten bis „DNS check successful",
dann Haken bei **„Enforce HTTPS"** (Zertifikat stellt GitHub automatisch aus).

### 3. Web3Forms-Key (2 Min — Formular-Anfragen in Arifs Mail)

1. https://web3forms.com → „Get Access Key" → Arifs E-Mail `safetypro.electrical@gmail.com` eintragen
2. Key aus der Mail kopieren → in `lib/site.ts` bei `formAccessKey: ''` eintragen
3. Commit + Push auf `main` → deployt automatisch

Bis dahin läuft das Formular über den WhatsApp-Fallback (funktioniert, aber E-Mail ist zuverlässiger).

### 4. Nach dem Go-Live: Google anstoßen

1. **Google Search Console** (https://search.google.com/search-console) → Property `safetypro-electrical.au`
   anlegen (Domain-Property, Verifizierung per DNS-TXT-Record beim Registrar) →
   Sitemap einreichen: `https://safetypro-electrical.au/sitemap.xml`
2. **Gleis B mit Arif:** Google Business Profile anlegen + Alt-Kunden um Reviews bitten —
   Klick-für-Klick-Anleitung + WhatsApp-Vorlagen: siehe `GOOGLE-BUSINESS-SETUP.md` im Repo.
   Im GBP als Website `https://safetypro-electrical.au` eintragen (stärkster Ranking-Link!).

### 5. Später (sobald vorhanden)

- [ ] Echte Job-Fotos von Arif → Dateien in `public/images/` mit **gleichem Namen** ersetzen → Push
- [ ] Genaue Öffnungszeiten bestätigen → `lib/site.ts` (`hours`)
- [ ] GBP-Link in `lib/site.ts` (`socials.google`) eintragen

## Wie deployen ab jetzt funktioniert

```
Änderung → develop → testen → merge main → push → in ~2 Min live
```

Kein manueller Schritt mehr — der GitHub-Actions-Workflow baut und veröffentlicht automatisch.
