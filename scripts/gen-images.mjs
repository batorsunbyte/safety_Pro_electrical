/**
 * Generates static brand images from SVG using sharp:
 *   app/opengraph-image.png  (1200x630)  → og:image + twitter:image
 *   app/apple-icon.png       (180x180)   → apple-touch-icon
 *
 * Run once (and after brand changes):  node scripts/gen-images.mjs
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const appDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'app')

const bolt = 'M33 18 l-7 11 h5.4 l-2.2 9 8.8 -12.5 h-5.5 Z'

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1220"/>
      <stop offset="0.6" stop-color="#101b2d"/>
      <stop offset="1" stop-color="#16233b"/>
    </linearGradient>
    <linearGradient id="cy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#35c0f5"/>
      <stop offset="1" stop-color="#0d84bd"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="70" y="66" width="88" height="88" rx="20" fill="#0d84bd"/>
  <g transform="translate(81,74) scale(1.35)"><path d="${bolt}" fill="#ffffff"/></g>
  <text x="176" y="104" fill="#ffffff" font-family="Arial, sans-serif" font-size="40" font-weight="700">Safety Pro</text>
  <text x="178" y="140" fill="#35c0f5" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="6">ELECTRICAL</text>
  <text x="70" y="330" fill="#ffffff" font-family="Arial, sans-serif" font-size="62" font-weight="800">Licensed A-Grade Electricians</text>
  <text x="70" y="400" fill="#9fb4cc" font-family="Arial, sans-serif" font-size="38">South-East Melbourne &#183; 24/7 Emergency</text>
  <rect x="70" y="520" width="1060" height="1" fill="#2a3a52"/>
  <text x="70" y="576" fill="#35c0f5" font-family="Arial, sans-serif" font-size="32" font-weight="700">&#9733; 4.7 rated</text>
  <text x="330" y="576" fill="#ffffff" font-family="Arial, sans-serif" font-size="32" font-weight="700">0490 101 365</text>
  <text x="700" y="576" fill="#9fb4cc" font-family="Arial, sans-serif" font-size="32">Fully licensed &amp; insured</text>
</svg>`

const apple = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <defs>
    <linearGradient id="cy" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#35c0f5"/>
      <stop offset="1" stop-color="#0d84bd"/>
    </linearGradient>
  </defs>
  <rect width="180" height="180" rx="40" fill="#0a1220"/>
  <g transform="translate(58,44) scale(2.1)"><path d="${bolt}" fill="url(#cy)"/></g>
</svg>`

await sharp(Buffer.from(og)).png().toFile(join(appDir, 'opengraph-image.png'))
await sharp(Buffer.from(apple)).png().toFile(join(appDir, 'apple-icon.png'))
console.log('✓ Generated app/opengraph-image.png and app/apple-icon.png')
