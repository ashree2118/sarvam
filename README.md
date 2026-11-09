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
| Landing page | [`website/bulbul-v4/`](website/bulbul-v4/): [375](website/bulbul-v4/screenshots/mobile-375.png) · [768](website/bulbul-v4/screenshots/tablet-768.png) · [1440](website/bulbul-v4/screenshots/desktop-1440.png) · live: `TODO: add URL` |

Banner folders hold the exact-size PNG only; the page folder holds its code and screenshots. Drafts and other explorations are kept locally in `drafts/` (git-ignored).

## Run it
```bash
npm install                                                     # once
npm run serve                                                   # http://localhost:8080/website/bulbul-v4/
node skills/social-banner/export.js banners/meta/<folder>/index.html
node skills/landing-page/screenshot.js website/<slug>/index.html
```
Needs Node and Chrome or Edge. Fonts are trial files (personal use only); see `assets/fonts/README.md`.
