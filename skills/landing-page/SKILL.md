---
name: landing-page
description: Design and build complete, responsive Sarvam AI web pages (product landing pages, feature pages, launch and campaign pages) as HTML/CSS in website/, from hero to footer, matching sarvam.ai and the Sarvam design system. Use when asked for a Sarvam webpage, landing page, product page, microsite or web poster.
---

# Sarvam landing page

A full page, header to footer, that would sit naturally on sarvam.ai: neutral canvas, Season Mix headings, generous space, one idea per section, with campaign moments (hero art, dark cards, bands) that tie it to the banners. It must **adapt** at mobile, tablet and desktop, not shrink. The rules live in `design-system/`; this file is the procedure.

## 1. Read
1. `design-system/design.md`
2. `design-system/layout.md`: breakpoints, tokens, section patterns, **the adaptation table**
3. `design-system/components.md`
4. `design-system/typography.md` §1–3, `colors.md` (product colour worlds §5), `imagery.md`
5. `design-system/campaign.md` §5 for layered hero art and bands
6. `design-system/brand-voice.md`

Calibrate against `assets/reference/web-*.png` and the built Bulbul page (`index.html` at the repo root).

## 2. Brief
Product or feature (required) · audience (default: developers and enterprise buyers) · primary action ("Get API key" / "Sign up") · secondary action ("Try the playground" / "Contact Us") · colour world (`colors.md` §5) · proof: real numbers only, else `TODO: confirm`.

## 3. Page anatomy
Story order: promise → proof → how → for whom → trust → act. A complete page has at least 1, 2, 3, two of 4–9, 10, 11 and 12.

| # | Section | Pattern | Components |
|---|---|---|---|
| 1 | Header | | Header |
| 2 | Hero | Centred | Ornament, eyebrow or version badge, H1, subhead, buttons, 2:1 layered motif art or orbs |
| 3 | Proof strip | Centred | Logo marquee or 3 stats, same width as the hero art |
| 4 | Demo ("Don't take our word for it") | Centred header | Tab chips, orb or motif + transcript + waveform, or composer, or code |
| 5 | Capabilities | Centred header + 2×2 | Pastel feature cards |
| 6 | How it works / developers | Bento or three columns | Spec chips, code block, stat rows |
| 7 | Use cases | Carousel or use-case band | Dark use-case cards with rising motifs |
| 8 | Pricing / offer | Centred header + split | Check list, pricing card, promo band |
| 9 | Trust | Centred header + cards | Tags, deployment cards, testimonial |
| 10 | Related | Centred | Blog cards or list rows |
| 11 | CTA band | Band | Season Mix two-line headline, one button |
| 12 | Footer | | Footer |

## 4. Build
- Output to `website/<slug>/`: `index.html`, `styles.css`, `script.js` only if needed. **Start by copying `skills/landing-page/starter/`** (`index.html` + `styles.css` into `website/<slug>/`; the paths are written for that depth).html` + `styles.css`, ~100 lines): it uses the shared blocks and follows every rule. Replace its content, colour world and motifs.
- `styles.css` starts with:
  ```css
  @import url("../../design-system/tokens.css");
  @import url("../../skills/landing-page/page-base.css");
  ```
  Load `skills/landing-page/page-base.js` with `defer` (menu, tabs, reveals).
- **Reuse `page-base.css` before writing CSS:** `.product-hero` + `.hero-stack` + `.hero-copy` + `.hero-art` (set `--art-bg`), `.proof` / `.proof-grid`, `.head-center` + `.tabs`, `.code`, `.strip`, `.accordion`, `.cta .band-cta` + `.cta-copy` (set `--band-bg`, `--cta-ink`), `.motif-stack`, `.motif-rise`, `.motif-corner`, grids via `.grid[data-cols="1-2-3"]` and `data-tablet="2+1"`. A page's own CSS sets its colour world and adds only new components (the Saaras page needed ~120 lines).
- **Responsive tokens** for all spacing and type; media queries (mobile first: 768, 1024, 1280, 1536) only to recompose each section per `layout.md` §5.
- Every shape is an official motif, as-is. Marks from `assets/brand/logos/`.
- Semantic HTML: one `h1`, ordered headings, landmarks, `section[aria-labelledby]`, correct `button` vs `a`, `alt` on informative images, `aria-hidden` on decoration.
- Accessibility: visible focus, keyboard-operable tabs (arrow keys), accordion and carousel, `prefers-reduced-motion`, contrast ≥ 4.5:1, targets ≥ 44px. Everything readable without JS.
- Indic text: tag each run with its `lang` (page-base sets the Noto font for all 22 scheduled languages); load only the Noto families used.
- Plain HTML/CSS/JS unless a framework is asked for. Serve with `npm run serve` (CSS masks don't load over file://).

## 5. Review
```bash
node skills/landing-page/screenshot.js website/<slug>/index.html   # --all to save every width
```
Writes `mobile-375.png`, `tablet-768.png`, `desktop-1440.png` to `website/<slug>/screenshots/` and checks 320, 1024, 1280 and 1600. Fails on horizontal overflow, missing fonts, broken images, console errors or more than one h1. Then open every screenshot:
- [ ] Each section follows its `layout.md` §5 row at each width; tablet is its own composition.
- [ ] Hero and every section heading centred; full section gap everywhere; stacked blocks share edges.
- [ ] Headings Season Mix 525 at token sizes; paragraphs `#3D3D3D`; no 13–14px secondary text.
- [ ] Layered art and bands landscape on phones; motif layering checks in `campaign.md` §5 pass.
- [ ] Saturated colour ≤ ~10% outside the campaign moments; banners for the product would sit beside it as one family.
- [ ] Keyboard pass through header, tabs, accordion, carousel and CTA. No orphaned words in headlines.
- [ ] `design.md` §5 checklist passes.

Hand over how to open the page, the three PNGs, which fonts rendered, and any `TODO: confirm` facts or missing assets.
