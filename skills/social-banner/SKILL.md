---
name: social-banner
description: Create on-brand Sarvam AI social banners and posters for Meta (Instagram, Facebook) and LinkedIn as fixed-size HTML artboards exported to PNG. Use when asked for a Sarvam social post, banner, poster, ad creative, launch graphic, event graphic or announcement image.
---

# Sarvam social banner

Each banner is an HTML artboard at the exact platform size, built on `tokens.css` and `banner-base.css`, then exported to PNG. The rules live in `design-system/`; this file is the procedure.

## 1. Read
1. `design-system/design.md`
2. `design-system/campaign.md`: **the families, the rules for every banner, layering**
3. `design-system/imagery.md` §1 and §4: wordmark and the motif catalogue
4. `design-system/typography.md` §4 and `colors.md` §4–6
5. `design-system/brand-voice.md` §2 and §5

Then look at `assets/reference/brand-*.jpg`, `assets/reference/web/` and the built banners in `banners/` to calibrate. Learn the language from all of them; never rebuild one.

## 2. Brief
Infer what you can and say what you assumed. Ask only about what you can't infer.
- **Subject** (required) and facts from the brief or sarvam.ai (else `TODO: confirm`).
- **Message:** ≤ 8 words; propose 2–3 options from the brand-voice patterns. Optional support line (≤ 12 words) or 2–3 stats.
- **Formats:**

| Platform | Size | `data-size` | Notes |
|---|---|---|---|
| Meta feed portrait / square | 1080 × 1350 / 1080 × 1080 | `1080x1350` / `1080x1080` | |
| Meta story | 1080 × 1920 | `1080x1920` | Content inside `.safe` (250px top, 340px bottom clear) |
| LinkedIn landscape | 1200 × 627 | `1200x627` | Default for LinkedIn |
| LinkedIn cover | 1128 × 191 | `1128x191` | No wordmark; avoid the left 300px |

## 3. Compose (decide before writing HTML; record it in the file's top comment)
1. **Family** (`campaign.md` §3) from the message. In a set, vary families and give every banner its own colour world and motif (`campaign.md` §1.7).
2. **Alignment axis:** centred or edge-aligned. This places the wordmark and the headline (`campaign.md` §2).
3. **Ground:** one continuous gradient, wash or the motif itself.
4. **Form:** one motif from the catalogue, its layer count and placement, using the proven sizes in `campaign.md` §3 and §5. Fade it when it sits on a ground (§4).
5. **Text colours:** headline, kicker and labels per `campaign.md` §2.

## 4. Build
1. Copy `skills/social-banner/template.html` to `banners/<meta|linkedin>/<yyyy-mm-dd>-<slug>/index.html`; paths become `../../../`.
2. One `<section class="artboard grain" data-name="<slug>-<w>x<h>" data-size="<w>x<h>">` per format. Every size is `calc(var(--S) * n)`; never hard-code a value that isn't a token or an S multiple.
3. Classes in `banner-base.css`:
   - **Grounds:** `ground-light | white | night | indigo | maroon | oxblood | forest | amber | dawn | dusk | gateway`, `grain`.
   - **Type:** `headline` (`.long`, `.xl`), `support`, `kicker`, `overline`, `eyebrow > span`, `meta`, `stat-num`, `stat-label`, `hl`, `rule`.
   - **Placement:** `.top-mark` (centred wordmark), `.anchor` with `.above` / `.below` (centred headline), `.safe` (margins, flex column), `.signoff`.
   - **Forms:** `.stack > img.layer[style="--n:k"]` (`.wide` for 1200 × 627, `.fade` for fading), `.motif` (single), `.window.motif-NN` (photo only), `.linework`, `.ornament`, `.glow`.
   - `.lockup-cover` / `.cover-title` are for blog covers only.
4. Indic text: load the Noto Sans script used; ~0.9× the Latin size, line-height ≥ 1.5.
5. Missing licensed photos: `<div class="placeholder">Photo: …</div>` (the exporter then refuses to ship).

## 5. Export
```bash
npm install                                              # once
node skills/social-banner/export.js banners/<platform>/<folder>/index.html
```
Writes `<data-name>.png` at the exact size plus `@2x`. Fails if Season Mix or Matter didn't load or a placeholder remains (`--draft` to export anyway for review). CSS masks need http or the exporter, not file://.

## 6. Review every PNG (full size and at ~300px wide)
- [ ] Headline ≤ 8 words, ≤ 2 lines, Season Mix, readable as a thumbnail.
- [ ] Wordmark small at the top, centred or top-left per the axis; black or white only.
- [ ] A centred headline's ink sits on the canvas centre (within 0.5% of S).
- [ ] One official motif, as-is, within its max layers; edges read at thumbnail size; it doesn't collide with type.
- [ ] One continuous ground (flat only for a night poster or photo window), no rectangular split; when a motif fills the canvas, all four corners blend with it; grain on gradients.
- [ ] Text colours: darkest tint on light grounds, white and accents on deep ones; kicker and hairlines tinted.
- [ ] ≥ 40% quiet space; ≥ 0.12 × S between type and form edges; text inside a form spans ≤ ~65% of its width.
- [ ] In a set: no two banners share a colour world or motif.
- [ ] Copy passes `brand-voice.md`; facts sourced or marked `TODO: confirm`.
- [ ] `design.md` §5 checklist passes.

Hand over the PNG paths, which fonts rendered (trial files are personal use only), and anything still needing real assets or facts.
