# Bulbul V4 Flash landing page

**Open:** run `npm run serve` from the repo root, then go to http://localhost:8080/website/bulbul-v4/
**Deliverables:** `screenshots/mobile-375.png`, `tablet-768.png`, `desktop-1440.png`. Regenerate with `node skills/landing-page/screenshot.js website/bulbul-v4/index.html`, which also checks 320–1600px.

## Built from the system
- `styles.css` imports `design-system/tokens.css` and `skills/landing-page/page-base.css`, and only composes sections.
- Spacing and type come from the responsive tokens. The page's media queries only recompose.
- Every shape is an official model motif, used as-is: 06 (hero art), 02 (closing band), 07 (promo band; the same lotus as Meta banner 1), 08, 11, 12, 09 (demo), 08, 02, 11, 12 (capability cards), and 04, 10, 07, 12 (use-case cards).

## How it adapts
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

## Facts and open items
All product facts are from sarvam.ai/apis/text-to-speech (captured Nov 2026): the "Expressive, accurate, fast." line, ₹20 → ₹10 per 10,000 characters until 12 Nov, a third less than V3, 8–48 kHz, API / Playground / Content Studio, the sample scripts and the use cases.
- **TODO: confirm** the Python SDK call names in the code sample against the current API docs.
- **Audio:** sample audio isn't embedded (no audio files in the repo). The demo links to the samples on sarvam.ai.
- **Offer date:** the 50%-off copy expires on 12 Nov. Update or remove it after that date.
- Header, footer and CTA links are placeholders (`#`).

## Laptop type size (by request)
From 1024px up, this page sets headings and all other text 2px larger than the system's sarvam.ai-measured sizes (the last two blocks of `styles.css`). Mobile and tablet use the system sizes. To fit the larger text at 1024–1279px, the nav flows beside the buttons instead of being centred, the hero splits evenly, and the use cases stay a carousel. From 1280px the nav is centred again and the use cases are a row of four.

## Heading weight (by request)
All headings on this page (H1, section H2s, in-section and card titles, band headlines) use `--fw-medium` (525), one step heavier than the system default. Bold (700) and semibold (625) were tried and read too heavy. sarvam.ai uses regular-weight headings.

## Closing band (by request)
The "Now write your own." band uses one large model-02 scalloped disc (as-is, white to periwinkle; dark text and a dark button for contrast) that holds the copy and bleeds past the top and bottom, plus two wide echoes that fill the sides: 3 layers in total (reference: the brand-06 nested-gateway image).

## Heading sizes (by request)
All headings on this page are larger than the system defaults: hero 52 → 74px, section headings 34 → 52px, in-section titles 28 → 32px, card titles 22 → 28px, the promo band headline up to 54px and the closing band up to 64px (mobile → desktop). Page-level only.
