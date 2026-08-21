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
The canonical mark is the **Stamped wordmark**, shared with the product apps
(source of truth: `Stamped` repo, `apps/dashboard/src/assets/brand/`). It is
"STAMPED" in condensed uppercase outlines over a full-width baseline rule at
22% opacity, with a green (`#00B37E`) segment covering the last ~22% of that
rule. Ratio 514.22 : 132 (3.9 : 1). Never use emoji or text as a substitute.

It is defined **once** as an SVG `<symbol id="stamped-wordmark">` at the top of
`index.html` and referenced with `<use href="#stamped-wordmark"/>` in all four
places it appears: nav, footer, hero ghost watermark, pilot-card ghost
watermark. The paths use `currentColor`, so colour comes from CSS (`.brand-mark`)
and one symbol serves both navy and light backgrounds. Standalone copies live in
`assets/brand/stamped-wordmark-{white,navy}.svg`.

The old stamp-frame lockup (rectangular border + two rules) is retired. If it
turns up anywhere, it is stale.

**Watermark placement:** unlike the old framed lockup, a wordmark cannot bleed
off an edge — a half-clipped letter reads as a rendering bug, not a design
choice. Keep both ghost watermarks fully inside their container.

## Design concept
"Official Record" — institutional documentary aesthetic. Document reference codes (CASE/001), ghost stamp watermarks at low opacity, tabular numbers, ledger-line horizontal rules. The green appears only where certification or verification lives.

## Section order
nav → hero → metrics → problem → how-it-works → proof → pricing → faq → pilot-cta → footer

Sections alternate dark navy / light (#F7F8FA). Do not make all sections dark.
The metrics strip is `--navy-deep` and reads as the base of the hero, not a section of its own.

## Product app URLs
The marketing site links out to the two live apps (nav "Log in" menu, pilot section, footer):
- Managing agent dashboard — `https://dashboard.stampedsg.com`
- Contractor app — `https://app.stampedsg.com`

Both come from the `Stamped` repo's docs (`docs/runbook/`, `docs/log/`). If those hostnames
ever change, all three link locations must be updated together.

## CSS gotcha — clamp() math
CSS requires whitespace around `+` and `-` inside `clamp()`/`calc()`. `clamp(3rem,1.5rem+5vw,6.5rem)`
is invalid and the browser silently drops the whole declaration — headings fall back to UA
defaults (this shipped live and made the site look small). Always write `1.5rem + 5vw`.

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
