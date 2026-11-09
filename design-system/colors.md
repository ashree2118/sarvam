# Colors

Every value is a token in `tokens.css`; never hard-code a hex that isn't there.

## 1. Neutrals and text
| Token | Hex | Use |
|---|---|---|
| `--color-white` | `#FFFFFF` | Cards, inputs, header |
| `--color-sf` | `#FCFCFC` | **Page background** |
| `--color-sf-secondary` / `-tertiary` / `-quaternary` | `#F5F5F5` / `#F0F0F0` / `#E6E6E6` | Secondary buttons and panels / wells, code headers, ornament / pressed wells |
| `--color-st` / `-secondary` / `-panel` | `#E6E6E6` / `#F0F0F0` / `#D5D5D5` | Default border / hairlines, input border / expanding-panel border |
| `--color-tx` | `#1F1F1F` | Headings, primary text |
| `--color-tx-secondary` | `#3D3D3D` | Leads, paragraphs, inactive tabs, labels |
| `--color-tx-tertiary` | `#666666` | Card descriptions, meta, footer links only |
| `--color-tx-inverse` | `#FAF8F5` | Text on dark (warm white) |
| `--color-sr-slate` | `#2A2C33` | Dark buttons and panels |
| `--color-br-blue` / `--color-br-orange` | `#393CC1` / `#D5650F` | Brand anchors: the two ends of the spectrum |

## 2. Brand scales
Indigo, orange, pink, yellow, green, red and grey, steps 50–950 (green and red end at 1000 instead of 950). Named `--sr-<hue>-<step>`; hexes are in `tokens.css`.

| Role | Token |
|---|---|
| Interactive (link hover, focus border, active tab) | `--sr-indigo-800` |
| Focus outline, check icons | `--sr-indigo-600` |
| Eyebrow text on pages | `--sr-indigo-900`, hairlines `--gradient-hairline` |
| Highlighted phrase in a headline | `--sr-indigo-700` |
| Pillar sparkle bullet | `--sr-green-400` |
| Error | border `--sr-red-400`, ring `--sr-red-100` |
| Tags | background `*-50`, border `*-200`, text `*-600` |

## 3. Cultural palette
Sampled from Indian textiles and architecture (`assets/reference/brand-05.jpg`). Campaign accents only, never UI colours.
`--cult-door-green` `#293A18` (temple door) · `--cult-bandhani` `#B1205F` · `--cult-marigold` `#FEBF2B` · `--cult-brocade` `#C11317` (Banarasi) · `--cult-sandstone` `#9E5F0A` (jharokha).

## 4. Deep grounds
For dark banners, cards and bands. Headlines on them are `--color-tx-inverse`; supporting copy uses the ground's accent.

| Ground | Hex | Accent | Feels like | Lit version on banners (base → end, glow) |
|---|---|---|---|---|
| `--ground-night` | `#141414` | `--on-night-accent` `#F9BB9E` | Quiet, premium, keynote | Flat (night poster) |
| `--ground-indigo` | `#12127A` | `--on-indigo-accent` `#D2DFF9` | Calm, intelligent | indigo → `--sr-indigo-950`, glow `--sr-indigo-800` |
| `--ground-maroon` | `#4D192C` | `--on-maroon-accent` `#F9BB9E` | Voice, warmth, launch | `--sr-pink-900` → maroon, glow `--sr-pink-800` |
| `--ground-oxblood` | `#54180E` | `--on-oxblood-accent` `#FDDCCE` | Editorial, human | oxblood → `--sr-red-1000`, glow `--sr-red-700` |
| `--ground-forest` | `#1D3A0E` | `--on-forest-accent` `#C8E4B0` | Growth, infrastructure | forest → `--sr-green-1000`, glow `--sr-green-800` |
| `--ground-amber` | `#5A3A0A` | `--on-amber-accent` `#FFE8B7` | Energy, events | amber → `--sr-yellow-950`, glow `--sr-yellow-900` |
| `--ground-slate` | `#2A2C33` | `--sr-indigo-200` | Product CTA | Pages only |

- One ground per banner or card. Never two deep grounds side by side in one composition; in a carousel or grid of cards, each card may have its own.
- On a banner, a deep ground is never flat on its own: use the lit version in the table: a vertical gradient between two steps, a radial glow behind the form, plus grain **(review)**. A flat ground is allowed only behind a photo window or as a charcoal night poster.
- Long copy on dark uses `--color-tx-inverse`, never `#FFFFFF`. Body text reaches 4.5:1; every accent above passes on its ground.

## 5. Product colour worlds
Each product leads with one hue family across its page, banners and motif. Masterbrand, Indus and Bulbul are from sarvam.ai; the rest are system assignments (`TODO: confirm` with Sarvam).

| Product | Lead family | Ground | Form |
|---|---|---|---|
| Sarvam (masterbrand) | blue ↔ orange spectrum | night or white | Bowl glow, gateway motifs |
| Indus / Indus Cowork | indigo | white, indigo | Blue gateway motifs, product UI |
| Bulbul (Text to Speech) | pink / maroon; voice orbs in green, orange, yellow, blue | maroon | Glossy orbs, motifs rising |
| Saaras (Speech to Text) | indigo → lilac | indigo or night | Indigo motifs (10, 15, 02) |
| Samvaad (Voice Agents) | orange → pink | maroon or white | Orange-pink motif |
| Mayura (Translation) | green → yellow | forest | Multifoil motif |
| Parse / Doc Agents | yellow / sandstone | amber or white | Cusped motif |
| Sarvam-105B and models | full spectrum | night | Model motifs |

**In a set of banners, each banner gets its own colour world, even for one product (review).**

## 6. Gradients
All brand gradients run vertically (180°). Light and medium versions for large areas (washes, pastel cards); full strength for small marks, orbs and icon tiles.
- `--gradient-{blue|orange|pink|green}` with `-medium` and `-light` variants.
- **Spectrum** (campaign fields, sampled from the identity images), always with `--grain` at soft-light:

| Token | Stops | Use |
|---|---|---|
| `--spectrum-dawn` | night → indigo → periwinkle → peach → saffron | Monogram moments, vision statements (`brand-01`) |
| `--spectrum-dusk` | deep saffron → orange → peach → mist | Wordmark-led masterbrand (`brand-10`, X banner) |
| `--spectrum-gateway` | indigo → lilac → rose → peach | Nested gateways, developer messages (`brand-06`) |

- **Utility:** `--gradient-surface-wash` (section wash), `--gradient-footer`, `--gradient-halo-indigo`, `--gradient-hero-halo` (blurred ellipse behind hero copy), `--gradient-hairline` (eyebrow lines), `--gradient-cta-band`, `--gradient-btn-primary` / `-secondary`.
- **Rules:** never on the wordmark or monogram. No hard-edged, rainbow, conic or diagonal multi-stop gradients (a diagonal is allowed only for pastel card washes). Blue and orange are a spectrum, never two flat swatches side by side.
