# Stamped Website — Project Context

## What this repo is
Marketing website for **Stamped** — AI job documentation for Singapore managing agents. Static HTML/CSS/JS, deployed via GitHub Pages.

**Live:** https://thestealthyworker.github.io/stamped-website/
**Custom domain (when ready):** https://stamped.sg/

## Stack
- Pure HTML/CSS/JS — no framework, no build step
- Deployed from `main` branch root via GitHub Pages
- Fonts: Inter (Google Fonts, weights 400–800)

## Brand colours (locked — match the live app)
```
--navy:       #0F1F3D   (primary bg, nav, hero, how-it-works, faq)
--navy-deep:  #0A1628   (pilot CTA bg, footer)
--navy-mid:   #1A3456   (surface)
--green:      #00B37E   (CTAs, accents, highlights)
--green-dk:   #007A54   (hover state)
--light:      #F7F8FA   (problem, proof, pricing section bg)
--white:      #FFFFFF   (card surfaces)
```
Do not introduce amber or purple. Green is the primary accent — use deliberately, not everywhere.

## Logo
The stamp-frame SVG is the canonical logo — inline it in HTML wherever the logo appears. Never use emoji or text as a substitute. The SVG is a rectangular border (`rx="4.5"`) with two thin horizontal rules flanking the wordmark "STAMPED" in Inter 800, letter-spacing 2.2. Two versions: `assets/logo-dark.svg` (white, for dark bg) and `assets/logo-navy.svg` (navy, for light bg).

## Design concept
"Official Record" — institutional documentary aesthetic. Document reference codes (CASE/001), ghost stamp watermarks at low opacity, tabular numbers, ledger-line horizontal rules. The green appears only where certification or verification lives.

## Section order
nav → hero → problem → how-it-works → proof → pricing → faq → pilot-cta → footer

Sections alternate dark navy / light (#F7F8FA). Do not make all sections dark.

## Scroll reveal
All `.reveal` elements are animated in by `main.js` using IntersectionObserver. Staggered delay applied to grid children. `prefers-reduced-motion` disables all transitions.

## Placeholders (replace before sharing URL publicly)
- Tally form: `tally.so/r/XXXXXXX`
- WhatsApp number: `6500000000`
- LinkedIn slug: `stamped-sg`

## Custom domain checklist (when stamped.sg is registered)
1. Add `CNAME` file to repo root containing: `stamped.sg`
2. DNS A records → `185.199.108.153 / .109.153 / .110.153 / .111.153`
3. OG/Twitter image URLs in `index.html` already point to `https://stamped.sg/assets/` — will resolve once DNS propagates

## SEO / AEO
- JSON-LD schemas inline in `<head>`: Organization, SoftwareApplication, FAQPage
- Canonical set to `https://stamped.sg/`
- Full OG + Twitter Card tags
- After domain live: submit to Google Search Console, add `sitemap.xml` + `robots.txt`
