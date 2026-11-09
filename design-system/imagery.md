# Imagery

Marks, motifs, glows, orbs, texture and photography. All assets are official (from sarvam.ai); never draw your own version.

| Asset | Path |
|---|---|
| Wordmark, black / white | `assets/brand/logos/sarvam-wordmark-{black,white}.svg` |
| Monogram, black / white | `assets/brand/logos/sarvam-logomark-{black,white}.svg` |
| Ornament (hero flourish) | `assets/brand/motifs/ornament.svg` |
| 16 model motifs | `assets/brand/motifs/models/model-01.svg … model-16.svg` |
| Signature bowl glow | `assets/brand/hero-gradient.webp` |

## 1. Wordmark
- **Black on light, white on dark. Nothing else:** no colours, gradients, shadows, outlines or effects (`assets/reference/wordmark-dont.jpg`). Black on a light tinted ground even when the headline is tinted **(review)**.
- **Clear space:** the height of the "r" on every side (`wordmark-clear-space.jpg`). Aspect 6.3:1; set height only.
- **Sizes:** 16px tall in the web header; on banners **0.028 × S** (`.wordmark`); minimum 14px on screen.
- **On banners (review):** small, at the top margin. Top centre on centred pieces (`.top-mark`), top-left on edge-aligned ones. It's never glued to the headline as a lockup.
- Don't copy Sarvam's footer wordmark filled with miniature paintings; it's a one-off.

## 2. Monogram
A lotus of repeated circles: the gateway. For product UI, app icons, avatars, loaders and as the single centred symbol of a vision poster (`brand-01`). **Never in the same composition as the wordmark.** Black or white only (white at 60–100% on a spectrum); never cropped, rotated or recoloured (`logomark-dont.jpg`). Minimum 24px; as a poster centrepiece 12–18% of S.

## 3. Ornament
A scroll flourish over a baseline, the lintel above the hero eyebrow (24px tall on mobile, 32px from 768). One per page, hero only. On campaign work it may sit above a kicker. Tint it by CSS mask (`.ornament`): **white over the bowl glow** (as on sarvam.ai, `web-home-1`), `--sr-indigo-300` on a plain light ground, `--color-tx-inverse` at 50% on dark. It's an ornament, not a mark, so tinting is allowed.

## 4. Motifs
**The only shapes in the system.** Every gateway, frame, window, echo or rising form is one of these files, **as-is**: its own two-stop gradient and inner shadow.

| # | Shape | Colours as rendered (top → bottom) | Fill | Max layers | Steps evenly | Use for |
|---|---|---|---|---|---|---|
| 01 | Cusped quatrefoil | orange → pink | 80% | 3 | yes | Pointed window, corner crop |
| 02 | Scalloped disc | white → periwinkle | 80% | 3 | yes | Title cards, CTA bands |
| 03 | Eight-lobe flower | periwinkle → pale blue, saffron edge glow | 80% | 2 | | Flower accent, rising form |
| 04 | Quatrefoil | very dark green → leaf green, gold rim | 80% | 3 | ovals in 3:1 | Soft gateway, dark proof ("Knowledge Fabric" cover) |
| 05 | Square gateway with cusps | light green → lime, periwinkle inner glow at the base | 80% | 3 | yes | Gateway frame, speech products ("Indic ASR" cover) |
| 06 | Eight-point star | red → saffron | 80% | 2 | yes | Hero art, vision and OCR |
| 07 | Lotus star | red → mist | 70% | 2 | **no** | Single lotus, rising form, corner crop; never in a wide stack (§5 of campaign.md) |
| 08 | Scalloped flower | green → blush | 80% | 2 | | Accent, rising form |
| 09 | Eight-lobe star | cream → gold | 77% | 2 | | Accent |
| 10 | Four-petal cross | indigo | 77% | 3 | | Small signature, indigo grounds |
| 11 | Pointed quatrefoil | pink, indigo edge | 80% | 2 | | Pointed window |
| 12 | Cusped dome | saffron → orange | 70% | 3 | yes | Arch window, amber grounds |
| 13 | Four-petal cross | blue → cream | 77% | 3 | | Small signature |
| 14 | Eight-lobe star | cream → gold | 77% | 2 | | Accent |
| 15 | Split gateway (4 leaves) | periwinkle → pale blue (runs left → right) | 80% | 3 | | Hero art, bands |
| 16 | Split gateway (4 leaves) | pale blue → orange | 80% | 3 | yes | Wide title cards in the spectrum world |

- **Fill** is how much of the square 125 × 125 box the shape covers. Sizes always set the box: box = visible size ÷ fill.
- **Max layers:** petalled and pointed motifs take 2; simple outlines take 3. Never more.
- **Steps evenly:** proven to give equal gaps when nested wide (`campaign.md` §5). Blank = untested: check the render.
- **States:** *gateway* (one small centred motif), *under load* (2–3 concentric echoes), *in context* (cropped by the frame: rising from an edge, corner crop, side strip). See `brand-07`.

**Rules**
- One motif per composition: per banner, card, band or hero panel (a page uses several, one per section). Keep the box square; crop with the frame, never stretch, rotate or edit paths.
- Never repaint, refill or tint a motif. Pick another motif if the colours don't suit. **Opacity is allowed** (fading echoes, `campaign.md` §4) **(review)**.
- The only mask use: `.window.motif-NN` holding a photograph, never a made-up gradient.
- Text colour follows the motif: dark on light motifs, white on deep ones.
- Neutral version for quiet texture on white: the silhouette flat in `#F0F0F0`.
- Banners: `.stack > img.layer[style="--n:k"]` (`banner-base.css`); pages: `.motif-stack`, `.motif-rise` (rising from the bottom, ~115% of the card width) and `.motif-corner` (`page-base.css`). CSS masks need the repo served over http, not file://.

## 5. Glows
Light, not paint: every glow is blurred.
- **Signature bowl (masterbrand hero):** `hero-gradient.webp`, a warm orange half-disc hanging from the top inside a periwinkle halo, positioned so its curve sits just above the headline (`.hero-bowl` in `page-base.css` sets its width and offset per breakpoint), with a white fade at the top for the header.
- **Halo behind copy:** `--gradient-hero-halo`, 600 × 400px, blur 100px, opacity .4 (288px, blur 80px, .3 on mobile).
- **Rising form:** never a drawn half-disc. Use a motif rising from the bottom edge.

## 6. Orbs (voice and audio products only)
Glossy spheres, one hue per voice: a white specular highlight top-left, the body hue, a darker rim.
```css
.orb{border-radius:50%;aspect-ratio:1;
  background:radial-gradient(circle at 32% 26%,rgb(255 255 255/.45),transparent 28%),
             radial-gradient(circle at 50% 45%,var(--hue-300),var(--hue-500) 55%,var(--hue-800) 100%);
  box-shadow:inset 0 -12px 30px rgb(0 0 0/.18)}
```

## 7. Icon tiles
A 12–16px-radius tile with a medium gradient and grain, a white icon at 90% and a soft inner glow (`--shadow-inset-glow-indigo`). Card-header art is the same idea larger: a textured gradient panel with one glossy white symbol and faint linework.

## 8. Texture
- **Grain** (`--grain`, soft-light) on every campaign gradient. Never on UI surfaces.
- **Mandala linework (review):** the monogram's circle geometry (one centred circle with six around it, an outer ring, optional radial spokes), **4px lines at 6% opacity**, tinted from the ground's hue (white on deep grounds). Large, cropped by the frame, behind the type, like a watermark (`brand-02`, `web/stt-bento-01`). Banners: `.linework`.
- **Indic letterform field:** faint glyphs from many scripts in `--sr-indigo-200` / `--sr-orange-200` at 30–50%, at the edges only, never behind copy.

## 9. Photography
- Real Indian people mid-action, architecture (jharokhas, carved arches, stepwells), textile and flower close-ups. Warm natural light, grain or soft motion blur.
- **Always framed by a gateway** (`brand-03`, `brand-04`, `brand-14`). Never a plain rectangle with text on top.
- Only licensed photos you've been given. Otherwise use a gradient window or a `.placeholder`; never fake one.
- No stock business shots, posed smiles or the clichés in `design.md` §4.

## 10. Product UI as image
Show the real product (composer, playground, code) on white cards (`--radius-3xl`, `--shadow-card`) over a pale wash, cropped by the card edge, with Indian sample content.
