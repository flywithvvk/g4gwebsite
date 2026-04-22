/**
 * OG Image Generator — Go4Garage
 * Run: node scripts/generate-og.mjs
 * Requires: sharp (already installed as Next.js dependency)
 */
import sharp from 'sharp';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#120C08"/>
      <stop offset="55%" style="stop-color:#1E1208"/>
      <stop offset="100%" style="stop-color:#2A1A0A"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#FF8C42"/>
      <stop offset="100%" style="stop-color:#E85D04"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Ambient orbs -->
  <circle cx="1060" cy="110" r="290" fill="#FF8C42" opacity="0.055"/>
  <circle cx="140" cy="530" r="210" fill="#E85D04" opacity="0.045"/>
  <circle cx="600" cy="630" r="180" fill="#FF8C42" opacity="0.03"/>
  <!-- Top accent line -->
  <rect x="60" y="52" width="130" height="5" rx="3" fill="url(#accent)"/>
  <!-- India flag mini -->
  <rect x="60" y="74" width="30" height="8" rx="1" fill="#FF9933"/>
  <rect x="60" y="82" width="30" height="8" rx="1" fill="#FFFFFF"/>
  <rect x="60" y="90" width="30" height="8" rx="1" fill="#138808"/>
  <circle cx="75" cy="86" r="3.5" fill="none" stroke="#000080" stroke-width="1.2"/>
  <text x="100" y="91" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#FF8C42" letter-spacing="2.5">INDIA • BHARAT</text>
  <!-- Main brand -->
  <text x="60" y="208" font-family="Arial Black,sans-serif" font-size="84" font-weight="900" fill="#FFFFFF" letter-spacing="-2">Go4Garage</text>
  <!-- Orange underline -->
  <rect x="60" y="220" width="500" height="5" rx="3" fill="url(#accent)" opacity="0.95"/>
  <!-- Tagline -->
  <text x="60" y="294" font-family="Arial,sans-serif" font-size="29" font-weight="400" fill="#D4A574">India's First AI-Powered Automobile Intelligence Platform</text>
  <!-- Sub-tagline -->
  <text x="60" y="342" font-family="Arial,sans-serif" font-size="21" font-weight="300" fill="#8E6A4A" letter-spacing="0.3">6 Products  ·  85 Problems Solved  ·  33 States  ·  Zero Friction</text>
  <!-- Stat pill 1 -->
  <rect x="60" y="398" width="218" height="88" rx="12" fill="#FFFFFF" opacity="0.055"/>
  <rect x="60" y="398" width="218" height="4" rx="2" fill="#FF8C42" opacity="0.85"/>
  <text x="169" y="444" font-family="Arial Black,sans-serif" font-size="38" font-weight="900" fill="#FF8C42" text-anchor="middle">14</text>
  <text x="169" y="470" font-family="Arial,sans-serif" font-size="15" fill="#D4A574" text-anchor="middle">AI Agents</text>
  <!-- Stat pill 2 -->
  <rect x="296" y="398" width="218" height="88" rx="12" fill="#FFFFFF" opacity="0.055"/>
  <rect x="296" y="398" width="218" height="4" rx="2" fill="#FF8C42" opacity="0.85"/>
  <text x="405" y="444" font-family="Arial Black,sans-serif" font-size="38" font-weight="900" fill="#FF8C42" text-anchor="middle">89.5%</text>
  <text x="405" y="470" font-family="Arial,sans-serif" font-size="15" fill="#D4A574" text-anchor="middle">Compliance Auto</text>
  <!-- Stat pill 3 -->
  <rect x="532" y="398" width="218" height="88" rx="12" fill="#FFFFFF" opacity="0.055"/>
  <rect x="532" y="398" width="218" height="4" rx="2" fill="#FF8C42" opacity="0.85"/>
  <text x="641" y="444" font-family="Arial Black,sans-serif" font-size="38" font-weight="900" fill="#FF8C42" text-anchor="middle">76</text>
  <text x="641" y="470" font-family="Arial,sans-serif" font-size="15" fill="#D4A574" text-anchor="middle">Features</text>
  <!-- Stat pill 4 -->
  <rect x="768" y="398" width="218" height="88" rx="12" fill="#FFFFFF" opacity="0.055"/>
  <rect x="768" y="398" width="218" height="4" rx="2" fill="#FF8C42" opacity="0.85"/>
  <text x="877" y="444" font-family="Arial Black,sans-serif" font-size="38" font-weight="900" fill="#FF8C42" text-anchor="middle">33</text>
  <text x="877" y="470" font-family="Arial,sans-serif" font-size="15" fill="#D4A574" text-anchor="middle">Indian States</text>
  <!-- URL -->
  <text x="1140" y="578" font-family="Arial,sans-serif" font-size="18" font-weight="600" fill="#FF8C42" text-anchor="end" letter-spacing="0.8">www.go4garage.in</text>
  <!-- Bottom accent bar -->
  <rect x="0" y="618" width="1200" height="12" fill="url(#accent)" opacity="0.65"/>
</svg>`;

async function generate() {
  const buf = Buffer.from(svg);
  const info = await sharp(buf, { density: 150 })
    .resize(1200, 630, { fit: 'fill' })
    .png({ quality: 95, compressionLevel: 7 })
    .toFile(outputPath);
  console.log(`✅ OG image generated: ${outputPath}`);
  console.log(`   Size: ${(info.size / 1024).toFixed(1)} KB | ${info.width}×${info.height}`);
}

generate().catch((err) => {
  console.error('❌ OG image generation failed:', err.message);
  process.exit(1);
});
