# Sarvam AI brand system

Sarvam's brand and design language written down so AI tools produce on-brand, consistent work, plus the skills and tooling to make social banners and web pages with it.

## Start here
| I want to… | Go to |
|---|---|
| Understand the project and how it was built | [`documentation/process.md`](documentation/process.md) |
| See the prompts that drove it | [`documentation/prompts.md`](documentation/prompts.md) |
| See how the system was tested | [`documentation/system-testing.md`](documentation/system-testing.md) |
| Use the system (AI agents start here) | [`AGENTS.md`](AGENTS.md) → [`design-system/design.md`](design-system/design.md) |
| Make a banner | [`skills/social-banner/SKILL.md`](skills/social-banner/SKILL.md) |
| Make a web page | [`skills/landing-page/SKILL.md`](skills/landing-page/SKILL.md) |

## Final deliverables
| | Output |
|---|---|
| Design system | [`design-system/`](design-system/) + [`skills/`](skills/) |
| Meta banners (4) | [Indian English](banners/meta/2026-11-09-bulbul-indian-english/sarvam-bulbul-indian-english-1080x1080.png) · [22 languages](banners/meta/2026-11-10-masterbrand-languages/sarvam-masterbrand-languages-1080x1080.png) · [Names and numbers](banners/meta/2026-11-10-bulbul-names-numbers/sarvam-bulbul-names-numbers-1080x1080.png) · [Saaras V4](banners/meta/2026-11-10-saaras-v4/sarvam-saaras-v4-perfected-1080x1350.png) |
| LinkedIn banners (4) | [Expressive, accurate, fast](banners/linkedin/2026-11-09-bulbul-proof/sarvam-bulbul-proof-1200x627.png) · [One model string](banners/linkedin/2026-11-09-bulbul-one-line/sarvam-bulbul-one-line-1200x627.png) · [22 languages](banners/linkedin/2026-11-10-languages/sarvam-languages-1200x627.png) · [Saaras V4 for developers](banners/linkedin/2026-11-10-saaras-v4-developers/sarvam-saaras-v4-developers-1200x627.png) |
| Landing page | Bulbul V4 Flash at the repo root: [`index.html`](index.html) + [`styles.css`](styles.css) · screenshots [375](website/bulbul-v4/screenshots/mobile-375.png) · [768](website/bulbul-v4/screenshots/tablet-768.png) · [1440](website/bulbul-v4/screenshots/desktop-1440.png) · live: `TODO: add URL` |

Banner folders hold the exact-size PNG only. The landing page sits at the root so the site's home URL opens it; its styles and shapes load from `design-system/`, `skills/` and `assets/`. Drafts and other explorations are kept locally in `drafts/` (git-ignored).

### Landing page: how it adapts
| Section | Mobile 375 | Tablet 768 | Desktop 1440 |
|---|---|---|---|
| Header | Wordmark, Log In, menu sheet | Same | Centred nav, both buttons |
| Hero | Centred copy, stacked full-width buttons, art below as the same wide 2:1 layered panel as desktop, scaled down | Centred copy, landscape art panel | Centred copy, 2:1 art panel below, max 960px wide, 2 motif layers |
| Proof | Three stacked rows | Three columns with hairlines | Same |
| Demo | Tabs scroll; motif above the script; speaker above each line | Motif left, script right; speaker beside line | 4/12 + 8/12 |
| Capabilities | One column | 2 × 2 | 2 × 2, larger cards |
| Developers | Centred heading and chips, then code (scrolls sideways) | Same | Same, code max 880px wide |
| Use cases | Carousel, next card peeks | Carousel, two in view | Full row of four |
| Pricing | Centred heading, then list, then card with full-width buttons | Centred heading, list beside card | Same |
| Promo band | Lotus rises from the bottom | Lotus in the right corner | Lotus bleeds off the right edge |
| CTA band | Landscape 16:10 card, same layered composition as desktop | Same layering | Layering at 76% / 26% |

### Landing page: facts and open items
All product facts are from sarvam.ai/apis/text-to-speech (captured Nov 2026): the "Expressive, accurate, fast." line, ₹20 → ₹10 per 10,000 characters until 12 Nov, a third less than V3, 8–48 kHz, API / Playground / Content Studio, the sample scripts and the use cases.
- **TODO: confirm** the Python SDK call names in the code sample against the current API docs.
- **Audio:** sample audio isn't embedded (no audio files in the repo). The demo links to the samples on sarvam.ai.
- **Offer date:** the 50%-off copy expires on 12 Nov. Update or remove it after that date.
- Header, footer and CTA links are placeholders (`#`).

## Deploy
Deploy the whole repo root as a static site (GitHub Pages, Netlify, Vercel, Cloudflare Pages); no build step. The trial fonts in `assets/fonts/` are committed, so the deployed page renders with Season Mix and Matter. They are licensed for personal use only.

## Run it
```bash
npm install                                                     # once
npm run serve                                                   # http://localhost:8080/ (the Bulbul page)
node skills/social-banner/export.js banners/meta/<folder>/index.html
node skills/landing-page/screenshot.js index.html --out website/bulbul-v4/screenshots   # new pages: website/<slug>/index.html
```
Needs Node and Chrome or Edge. Fonts are trial files (personal use only); see `assets/fonts/README.md`.
