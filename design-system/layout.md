# Layout (pages)

Grid, spacing, section patterns and how each pattern adapts across breakpoints. Banner layout is in `campaign.md`.

## 1. Breakpoints
Mobile first. **Adapt, don't shrink:** at each breakpoint change order, column count, alignment and interaction, not just size.

| Name | Min width | What changes |
|---|---|---|
| base | 0 | One column, 88% width, stacked, thumb-reach CTAs |
| `sm` | 640 | Lead 18px, 2-up small tiles |
| `md` | 768 | **The main switch:** tablet type and spacing, 10/12 container, 2-column grids |
| `lg` | 1024 | Laptop type scale, side-by-side media, 3-column grids, expanding panels; nav sits beside the buttons up to 1279 |
| `xl` | 1280 | Nav centred, bento full size, a row of four cards (a carousel below 1280) |
| `2xl` | 1536 | Container locks at 1400px; hero height capped at 1080px |

**Deliver PNGs at 375, 768 and 1440; check 320, 1024, 1280, 1600 and 1920 too** (large screens expose fixed-pixel sizing). Nothing may overflow at 320px.

## 2. Responsive tokens
Widths, gaps, padding and type switch inside `tokens.css` (at 640, 768 and 1024), so pages adapt without restating values: `--page-width` (88% → 83.33%), `--page-max` (1400px), `--grid-gap` (16 → 20 → 24), `--section-gap` (96 → 144 → 176), `--section-head-gap` (40 → 48 → 56), `--hero-pad-top`, `--header-h`, `--card-pad` (20 → 28 → 32), `--band-pad`, `--band-radius`, `--touch-min` and every `--text-*` (`typography.md` §3). **Use the token, never the number.** A page's own media queries are only for recomposition.

## 3. Grid, radius, spacing
- **Grid:** 4 columns (mobile), 8 (tablet), 12 (desktop). Container 88%, then 10/12, max 1400px.
- **Radius:** `--radius-md` 6 (small controls) · `-lg` 8 (thumbnails, chips) · `-xl` 12 (tags, icon tiles) · `-2xl` 16 (**cards, inputs**) · `-3xl` 24 (panels, bands, use-case cards) · `-4xl` 32 (hero and showcase cards) · `-full` (**every button, tab, pill, badge**). Nested: inner radius = outer − padding.
- **Spacing:** 4px base. H2 → lead 12/16px. Hero top padding 144/160px. Footer top padding 48/80px. Card grid gap 16/24 (8 in tight bento grids).

## 4. Section patterns
| Pattern | Structure |
|---|---|
| **Centred header** | H2 + lead centred, max 720px, content below. **Every section heading is centred** (two-column sections put the heading above as its own centred block) |
| **Media + list** | Art card (5/12) beside 3 value statements with sparkle bullets and one button (6/12) |
| **Bento** | Large card (6/12) beside a 2×2 of small cards, plus a row of 3 tiles |
| **Three columns** | 3 cards: art header, title, body, list rows |
| **Expanding panels** | One open panel, four collapsed vertical tabs |
| **Carousel** | Horizontally scrolling cards peeking off the right edge |
| **Band** | Full-width rounded band on a deep ground or layered motif (`campaign.md` §5) |

**Composition:** one idea per section (headline, one lead, content). Alternate dense and quiet sections. Story order: promise → proof → how → for whom → trust → act. Whitespace is a brand element: when in doubt, add space. Use the full `--section-gap` between every section, never half.

**Approved alignment rules:**
- Centre the hero and every section heading. Measure the visible ink of a headline, not its box.
- **Stacked blocks share edges:** whatever sits directly under the 960px hero art (the proof strip) uses the same max width. From 768px stats are centred: label, number, then unit, each on its own line; on phones they stack as full-width rows (`.proof-grid`).
- Big closing lines go on two lines ("Now write / your own.").

## 5. How each pattern adapts
| Pattern | Mobile | Tablet (`md`) | Desktop (`lg`+) |
|---|---|---|---|
| Header | Wordmark + *Log In* + menu button; drop-down panel | Same | Full nav, both buttons right |
| Hero | Centred; H1, subhead, buttons stacked full width; **art below as a 2:1 landscape panel** | Buttons side by side; same 2:1 art | Centred copy, 2:1 art below, max 960px. Never a left/right split |
| Logo marquee | 28px logos | 32px | 36px, edges masked 120px |
| Media + list | Art (16:10), list, full-width button | Art 16:9 above, list in 2 columns | Art 5/12 left, list 6/12 right |
| Bento | Hero card, then one column; tiles 2-up | Hero card full width, 2×2 | Hero card 6/12 beside 2×2 |
| Three columns | One column, art headers 16:6 | 2 + 1 (third spans, horizontal) | 3 columns |
| Expanding panels | Numbered accordion 01–05, one open | Accordion, image beside text | Horizontal panels |
| Demo with tabs | Tabs scroll; orb above transcript | Orb 40% left, transcript right | Orb 4/12, transcript 8/12 |
| Pastel feature cards | One column | 2 columns | 2 columns, larger art |
| Use-case carousel | Cards 82% wide, scroll-snap, next peeks | 45% | 300px, four visible from 1280; arrow buttons need a page script (not in `page-base.js`) |
| Pricing | Copy, then card full width | Copy left, card right | Same |
| Bands | Radius 16, padding 32/24, **landscape 16:10**, form at the bottom | Radius 24, padding 40 | Form bleeds off the right |
| Voice list | One column | 2 columns | Intro 5/12, 2-column list 7/12 |
| Playground | Text, controls, code behind "View code" | Text + controls side by side, code below | Three columns |
| Testimonial | Quote 20px, 5-line clamp, button below | 22px | 24px, 3-line clamp |
| Footer | Brand block, 2-column links, legal | 3 columns | Brand block + 5 link columns |

## 6. Touch, images, motion, elevation
- Touch targets ≥ 44px; hover-only affordances have a non-hover equivalent (the whole card is the link); carousels swipe and scroll-snap, with buttons on desktop; inputs keep 16px text; never hide essential content on mobile; body line length 45–75 characters.
- Glows, orbs and motifs are CSS or SVG: **reposition per breakpoint** rather than scaling (a form bleeding off the right on desktop rises from the bottom on mobile). UI screenshots get a `<picture>` mobile crop.
- **Elevation:** barely there. `--shadow-card`, `--shadow-card-hover`, `--shadow-elevation-sm/md/lg`, or a 1px `--color-st-secondary` border.
- **Motion:** calm, never bouncy, `--ease-brand`. Press `scale(.97)` over 150ms; hover colour over 200ms, cards lift by shadow, images scale 1.02 over 500ms; expanding panels 650ms; headings fade up 12px over 700ms on entry, children staggered 55ms; logo marquee ~40px/s, paused on hover. `prefers-reduced-motion` zeroes the durations in `tokens.css`; no transforms or marquees.
