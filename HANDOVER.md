# Stamped — Session Handover

## What this is
You are continuing work on **Stamped**, an AI job documentation platform for Singapore managing agents. This document hands over context from a Claude Code terminal session so you can continue in Claude web.

---

## Product in one paragraph
Stamped targets Singapore property management companies (managing agents / MAs). When a contractor finishes a job, they send a voice note via WhatsApp. Stamped turns it into a timestamped, geotagged, photo-verified job card in under 60 seconds. Primary buyers: MA principals who need defensible records for AGMs, contractor disputes, and insurance claims. Singapore-specific: MCST terminology, PDPA-compliant, WhatsApp-native, IMDA SME Go Digital eligible.

---

## Brand
- **Colours**: Navy `#0F1F3D` (primary bg), Green `#00B37E` (CTA/accent), Light `#F7F8FA` (content bg)
- **Logo**: Stamp-frame SVG — rectangular border with thin horizontal rules flanking "STAMPED" in Inter 800, letter-spacing 2.2. This is the canonical mark.
- **Voice**: Methodical, direct, quietly confident. Singapore-specific vocabulary (MCST, AGM, managing agent — not "property manager"). Short sentences.
- **Design concept**: "Official Record" — document reference codes (CASE/001), ghost stamp watermarks, tabular numbers, ledger-line rules.

---

## Website — current state

**Live URL (building, ~90s after push):** https://thestealthyworker.github.io/stamped-website/

**GitHub repo:** https://github.com/thestealthyworker/stamped-website

**Local path:** `/tmp/stamped-website/`

**Stack:** Static HTML/CSS/JS — no framework, no build step. Deployed via GitHub Pages from `main` branch root.

**Files:**
```
index.html       — full landing page (425 lines)
style.css        — all styles (425 lines), CSS custom properties, no Tailwind
main.js          — IntersectionObserver scroll-reveal for .reveal elements
assets/
  logo-dark.svg        — stamp-frame logo, white (for dark backgrounds)
  logo-navy.svg        — stamp-frame logo, navy (for light backgrounds)
  hero-bg.png          — 1440×800 "Official Record" hero background (ledger rules, stamp frames, seal geometry)
  og-image.png         — 1200×630 OG/social share image
  twitter-image.png    — Twitter card image
  favicon.ico / favicon-16x16.png / favicon-32x32.png / favicon-96x96.png
  apple-touch-icon.png / android-chrome-192x192.png / android-chrome-512x512.png
```

**Git log:**
```
1b3e9e8  feat: add all brand assets and wire hero background
25ee537  design: rebuild with brand-aligned palette, stamp-frame logo, official-record aesthetic
40eb7a4  feat: initial Stamped landing page
```

**Sections built (in order):**
1. Nav — sticky, dark navy, stamp-frame logo left, "Apply for pilot →" CTA right (green border)
2. Hero — dark navy + hero-bg.png, large headline "The record that holds up.", badge, stats column
3. Problem — 3 cards: CASE/001 (AGM), CASE/002 (dispute), CASE/003 (insurance)
4. How it works — 3 numbered steps horizontal layout
5. Proof/Singapore — bullet list + pull quote in bordered card
6. Pricing — Starter SGD 99 / Growth SGD 249 (featured) / Enterprise Custom
7. FAQ — 5 Q&As, flat list style
8. Pilot CTA — green-bordered card, 3-column terms, Tally form link
9. Footer — logo, 2-column nav, PDPA note

**SEO/AEO wired in:**
- Full OG + Twitter Card meta tags (absolute URLs pointing to `stamped.sg`)
- JSON-LD schemas: `Organization`, `SoftwareApplication`, `FAQPage` (5 Q&As)
- Canonical: `https://stamped.sg/`

---

## Placeholders to replace before sharing publicly

| File | Find | Replace with |
|------|------|-------------|
| index.html | `tally.so/r/XXXXXXX` | Real Tally form URL |
| index.html / footer | `6500000000` | Real WhatsApp number |
| Footer LinkedIn | `stamped-sg` | Real LinkedIn page slug |

---

## When stamped.sg domain is registered

1. Add file `CNAME` to repo root containing only: `stamped.sg`
2. Set DNS A records to GitHub Pages IPs: `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`
3. In `index.html`, update OG/Twitter image URLs from `https://stamped.sg/assets/...` — they're already set correctly, just need DNS to resolve
4. Wait ~24–48h for HTTPS cert provisioning

---

## Pricing (for reference)
- **Starter**: SGD 99/month — up to 5 developments, unlimited contractors, AI job cards, PDF export
- **Growth**: SGD 249/month — up to 30 developments, AGM pack generator, contractor reports, priority support. IMDA grant eligible: effective ~SGD 75/month
- **Enterprise**: Custom — unlimited developments, multi-portfolio dashboard, API access, dedicated onboarding

---

## Key decisions made (don't revisit without reason)
- Colors are aligned to the live app (green + navy), NOT the original brand plan which used amber
- Logo is stamp-frame SVG inlined in HTML — no emoji, no text substitute
- No JS framework — pure HTML/CSS/JS for GitHub Pages simplicity
- hero-bg.png created by canvas-design skill ("Ledger Permanence" concept) — institutional documentary aesthetic, not decorative
- OG image absolute URLs pre-set to `stamped.sg` even before domain exists

---

## What's next (open items)
- [ ] Replace 3 placeholders (Tally, WhatsApp, LinkedIn)
- [ ] Register `stamped.sg` domain → add CNAME + DNS
- [ ] Fill out Tally form for pilot sign-ups
- [ ] SEO/AEO: submit sitemap to Google Search Console once on custom domain
- [ ] Consider adding a `sitemap.xml` and `robots.txt`
- [ ] Outreach / AEO strategy (not started — was planned as next phase)
