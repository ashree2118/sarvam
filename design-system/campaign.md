# Campaign register

Banners, posters, hero art and bands: the expressive side of the system. Learned from every image in `assets/reference/` (identity boards `brand-*`, sarvam.ai captures `web-*`) and Sarvam's public covers, X banner and billboard (`assets/reference/web/`). **Compose with the language; never rebuild one reference.** Built examples (PNGs) are in `banners/`; their values are recorded below.

## 1. Principles
1. **One message**, eight words or fewer: a headline, optionally a kicker above and **one** support line below (sizes in `typography.md` §4). No paragraphs, no URL, no CTA on the image (except a launch pill or event details in the product-register family).
2. **One form:** one official motif, 2–3 layers at most (`imagery.md` §4). Never two forms.
3. **One continuous ground:** a gradient, a wash or the motif itself, never a single flat colour (exceptions: photo window, night poster). A light zone fades into the colour zone; never two rectangles.
4. **Colour sits at the edges or one end;** the area behind the type is the calmest.
5. **Generous space:** at least 40% quiet; type covers ≤ ~15% of the canvas; text block ≤ ~65% of its form's width; ≥ 0.12 × S clear between type and any form edge. If it feels congested, make the form bigger first, then the type smaller.
6. **One voice:** Season Mix for every banner headline, Matter for the rest (`typography.md` §4).
7. **A set is a range.** A *set* is the banners delivered together for one brief (not everything in `banners/`). Within a set **(review)**:
   - every banner has its own **colour world**: the hue family of its ground and motif, one of indigo/periwinkle, pink/maroon, orange/saffron (incl. `--spectrum-dusk`), yellow/amber, green/forest, red/oxblood, the blue → orange spectrum (`--spectrum-dawn`, `--spectrum-gateway`, model-16), or charcoal;
   - every banner that has a motif uses a different one (spectrum fields, light washes and night posters may have none);
   - vary the families; repeat one only when the message needs it (e.g. two proof banners), and then change colour world and motif;
   - type, wordmark rules and grain stay shared.
   These beat the product-line preferences in §6.

## 2. Rules for every banner
| | Rule |
|---|---|
| **Alignment axis** | Decide first: **centred** or **edge-aligned**. It sets everything else. |
| **Wordmark** | Small (0.028 × S) at the top margin: top centre on centred pieces (`.top-mark`), top-left on edge-aligned ones. Black on light, white on deep **(review)** |
| **Centred headline** | Centred on the canvas both ways **by itself** (`.anchor`). Kicker hangs above (`.above`), support line below (`.below`); neither moves it. Check: its ink centre is within 0.5% of S of the canvas centre **(review)** |
| **Edge-aligned headline** | 0.1 × S, in one quiet corner (usually top-left, or bottom-left on spectrum fields); the form takes the opposite side and bleeds off |
| **Text colour** | Light grounds: darkest tint of the hue directly behind the type (`--sr-indigo-950`, `--sr-green-1000`, `--sr-orange-950`) or `--color-tx`. Deep grounds: white headline, labels in `--on-*-accent`. Kickers and their hairlines tinted from the ground or motif, never default indigo on a warm ground **(review)** |
| **Canvas behind a motif** | Run it in the **same direction** as the motif's own gradient, between the colours the motif visibly shows, so all four corners blend. Check the corners in the render **(review)** |
| **Grain** | On every gradient (`.grain` or the `ground-*` spectrum classes) |

**Canvas grid** (everything a multiple of S, the short side): margin 0.074 × S (0.09 on 1200 × 627); 12 columns, gutter 0.022 × S; baseline 0.0074 × S; kicker → headline 0.022 × S; headline → support 0.03–0.04 × S. Zones: kicker/wordmark at the top, message, form (may overlap and bleed), sign-off. Type never overlaps the busiest part of the form (a face, a glow's core).

## 3. Families
Pick one per banner. Message → family: brand vision → title card or spectrum field · people, culture, inclusion → gateway window or light wash · product or feature → product register (companions: title card, half-band) · number, price or benchmark → product register (proof) · event or talk → half-band or night poster · teaser or quote → night poster or light wash. LinkedIn leans proof and product; Meta leans emotional and visual.

### Gateway title card
One motif in 2–3 concentric layers fills the canvas and bleeds off every edge; **the motif is the ground**. One centred headline. ~80% of Sarvam's blog covers (`web/blog-indic-diarbench`, `web/blog-introducing-saaras-v4`, `brand-06`).
- Centred axis: wordmark top centre, headline alone on the centre (`.anchor`), optional kicker above (`.above`) and support line below (`.below`). Keep type ≥ 0.12 × S inside the inner layer's edge.
- **Portrait (1080 × 1350):** main box ≈ 1.2 × S, each echo + 0.6 × S, 3 layers; the inner layer nearly fills the width and the outer echo shows only at the corners **(review)**.
- **Wide:** `.stack.wide` and §5.
- Built: `banners/linkedin/2026-11-10-saaras-v4-developers/` (model-02, `.stack.wide`, indigo-950 headline, black wordmark top centre).

### Spectrum field
A full-bleed vertical spectrum (`ground-dawn`, `ground-dusk`, `ground-gateway`) with grain. Either one centred symbol (white monogram, one motif or the wordmark alone) or one short serif line in a quiet corner, optionally with one faded motif (`.stack.fade`, 2 layers) cropped by the opposite corner (`brand-01`, `brand-10`, `web/x-profile-banner`).
- Edge-aligned: white wordmark top-left on the deep end, copy bottom-left on the pale end in the darkest tint; optional `.linework` cropped at the opposite edge.
- Built: `banners/linkedin/2026-11-09-bulbul-one-line/` (`--spectrum-gateway`, linework at the right), `banners/meta/2026-11-10-masterbrand-languages/` (`--spectrum-dusk`, model-06 faded in the top corner).

### Light wash
A pale centre (white radial, ~62% × 56%) over a vertical tint: two hues (yellow → green, red → blue…) or one scale (green-50 → green-300), `.linework` tinted from the hue, grain. A one-scale wash counts as that colour world. Everything centred: wordmark top centre, eyebrow between tinted hairlines, headline alone on the centre, one support line (`brand-02`, sarvam.ai card headers). Use it instead of a flat deep colour when the piece has no form.
- Built: `banners/meta/2026-11-09-bulbul-indian-english/` (red → blue), `banners/linkedin/2026-11-10-languages/` (one-scale green, Indic names).

### Gateway window
A deep ground (oxblood, forest, indigo, night) with a licensed photo inside a motif silhouette (`.window.motif-NN`), cropped by one edge or corner; the headline in a pale tint of the ground sits in the opposite quiet corner (`brand-03`, `brand-04`). For people, language, inclusion, editorial questions. Needs a real photo; otherwise choose another family.

### Half-band
Title top-left on a light zone; the motif fills about the bottom half, cropped by the bottom edge or a bottom corner (`brand-11` left, `brand-07` "in context"). **One continuous ground:** white through the motif's palest stop into its own colour, no straight cut. (Here the ground runs white → colour whatever the motif's direction; the §2 direction rule is for motifs that fill the canvas.)
- Edge-aligned: wordmark, kicker and headline (0.1 × S) top-left.
- **Corner crop (portrait):** 3 layers `.stack.fade`, box 0.66 × S, echo + 0.33 × S, centred at 84% across and 91% down; its top tip lands near half the height **(review)**.
- Built: `banners/meta/2026-11-10-bulbul-names-numbers/` (square, model-07, 2 fading layers in the corner).

### Night poster
Charcoal `--ground-night` with one centred serif line, one centred motif, or a centred line plus a single motif rising from the bottom edge (faded, well clear of the type). Lots of dark around it; the wordmark small at the top centre (Sarvam's own posters put it at the bottom; banners use the top for consistency) (`brand-11` middle and right, `web/brand-billboard-built-for-india`). For keynotes, manifestos, quotes, teasers. The only family where a flat ground is right.
- Built: `banners/meta/2026-11-10-saaras-v4/` (centred line + model-10 rising from the bottom at 60%).

### Product register (launch and proof)
White, a pale tint or a lit deep ground; edge-aligned copy left, the product's form (motif, orbs or UI) bleeding off the right (`web/blog-bulbul-v4-flash`, `banner.jpg`).
- **Launch:** ornament → eyebrow → product name → one-line descriptor → form; one pill button allowed.
- **Proof:** headline (0.1 × S), a hairline, then 2–3 stats: Season Mix numbers at 0.052 × S over Matter labels at 0.022–0.03 × S (0.03 on LinkedIn).
- **Dark version:** ground token into its darkest step, lit by a radial glow behind the motif, grain; motif layers at about 60% and 30% opacity; white headline and stats, accent labels, kicker tinted from the motif's rim **(review)**.
- Built: `banners/linkedin/2026-11-09-bulbul-proof/` (forest + model-04, `.stack` at left 66%, box 0.9 × S, echo + 0.42 × S).

## 4. Layer opacity (review)
Sarvam's title cards use fully opaque layers. When a motif sits **on** a ground instead of being the ground (corner crops, side forms, tinted or dark grounds), fade it outwards with `.stack.fade` (echoes at 50% and 25%). On tinted grounds soften the inner layer to ~85%; on dark grounds use ~60% inner and ~30% echo. Opacity only, never recolouring.

## 5. Layered motif art (banners, page hero art and bands)
Used for wide banners, CTA and promo bands, and page hero art. **All sizes are a share of the container width**, so the composition holds at any width.

| Container shape | Layers | Main motif box | Each echo adds |
|---|---|---|---|
| 2.2:1 and wider (desktop bands, covers) | 3 | 76% | +26% |
| ~1.8–1.9:1 (LinkedIn 1200 × 627: `.stack.wide`) | 3 | 86% | +28% |
| ~1.45:1 and 16:10 (tablet bands, phones) | 3 | 96% | +30% |
| Small centred 2:1 hero panel (max 960px) | 2 | pointed motifs (06): 137.5% (visible 110%); round motifs (02, 04, 08): 100%; split gateways (15, 16): ~54% as a starting point, check the render | +125% / +52% / ~+34% |

- Percentages size the square box; visible = box × fill (`imagery.md` §4).
- Copy centred inside the main motif. Smaller containers take fewer layers, spaced further apart.
- **Check:** the edges step out at equal intervals (~10–13% of the width per side) and each echo shows its full edge inside the container. A sliver in a corner means the motif is too big for that shape.
- Choose a motif that steps evenly (`imagery.md` §4). Never 07.
- On phones keep the container landscape (16:10 bands, 2:1 hero art); never switch to a tall card.
- Reference: the "Now write your own." band and the hero art in `website/bulbul-v4/`.

## 6. Lockups
- **Partner:** wordmark · small diamond · partner logo on one line, with the wordmark's clear space (`web/guide-partnership-lockup`). Event banners may use a thin vertical rule instead (`banner.jpg`).
- **Joint title:** "Sarvam x States", lower-case x.
- **Government:** emblem, then "with", then the wordmark, stacked and centred.

**Motif per product line** (inferred from Sarvam's covers, `TODO: confirm`): agents and models use the quatrefoil (04), vision and OCR the eight-point star (06/07). Speech recognition covers use a bracket arch in indigo → peach; our closest file (05) is green, so in the Saaras world use an indigo motif (10, 15) instead. Prefer one motif per product across its covers, banners and page, unless the set rule in §1.7 needs another. The product's colour world (`colors.md` §5) wins over this list.

## 7. Do / don't
| Do | Don't |
|---|---|
| Let the form bleed off an edge for scale | Float a small shape in a big empty canvas with no relation to the frame |
| Keep headlines to 2 lines | Stack three type sizes and a button |
| Use grain on gradients | Use glossy 3D renders, lens flares or neon glows |
| Use real Indian context (names, ₹, scripts) | Use flags, maps, the Taj Mahal or chakra as decoration |
| Give every banner in a set its own colour and motif | Restyle the same banner six times |
