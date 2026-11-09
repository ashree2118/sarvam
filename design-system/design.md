# Sarvam design system

The source of truth for anything that carries the Sarvam name: banners, posters, web pages, UI, decks. **Read this file first, then the files for your task.**

Built from sarvam.ai (home and product pages, /brand, /brand-guidelines, production CSS), Sarvam's identity imagery and its public covers. Captures are in `assets/reference/`. In `tokens.css`, values are measured from sarvam.ai unless marked "system". Rules marked **(review)** were approved in design review and override older guidance.

| File | Covers |
|---|---|
| `tokens.css` | Every value as a CSS variable. **All work imports it.** |
| `colors.md` | Colour roles, deep grounds, product colour worlds, gradients and spectrum |
| `typography.md` | Fonts, weights, web and poster type scales, Indic scripts |
| `imagery.md` | Marks, the motif catalogue, glows, orbs, texture, photography |
| `campaign.md` | Banners, posters and hero art: the 7 families, the rules and motif layering |
| `layout.md` | Page grid, spacing, section patterns, breakpoints and how each pattern adapts |
| `components.md` | Page component specs |
| `brand-voice.md` | Tone, headlines, naming, copy length |
| `preview.html` | A visual style guide for people (serve the repo, then open `/design-system/preview.html`). Not needed for tasks. |

Code building blocks: `skills/social-banner/banner-base.css` (banners, sized from the canvas short side) and `skills/landing-page/page-base.css` (pages, sized from the responsive tokens).

## 1. Who we are
**Sarvam** (सर्वम्, Sanskrit for *all*) builds sovereign, full-stack AI from India: speech, text and document models for 22 Indian languages and English, the platforms people build on, and agents that do work.
**Tagline:** AI for all from India · **Positioning:** India's Full-Stack Sovereign AI Platform
Language counts differ by product (each sarvam.ai product page states its own); use that product's number, never "22" for a single model unless its page says so.

## 2. The idea
- **The gateway.** Architectural gateways are everywhere in Indian life. They are structure, not decoration, and they mark a transition: human and machine, culture and computation.
- **Mandala construction.** Simple, repeated geometry. The monogram is circles resolving into a lotus; the motifs are four-fold petals and cusped arches, layered into echoes.
- **The spectrum.** Blue to orange as continuous light, never flat blocks.
- **Feel:** grounded, familiar and modern, without nostalgia or spectacle.

> **The formula:** one gateway form + one gradient + generous space + one short, strong message.

## 3. Two registers, one system
| | Product register | Campaign register |
|---|---|---|
| Where | Web pages, product UI, docs: anything that explains | Banners, posters, hero art, launch moments, promo and CTA bands |
| Ground | `#FCFCFC` / white | One continuous gradient, wash or deep ground, or the motif itself |
| Colour | Saturated colour ≤ ~10% of the screen, as glows and motifs | Can fill the frame, but only as gradient and light |
| Form | Small motifs, glows, product UI on white cards | One large official motif, nested, cropped or holding a photo (`campaign.md`) |
| Type | Season Mix headlines in `#1F1F1F`, Matter body | Season Mix headline in a tint of the ground's hue, or white on deep grounds |
| Texture | None | Grain on gradients; optional mandala linework |

A landing page uses both: product register for the body, campaign register for the hero art, use-case cards and bands. That's what makes a page and its banners one family.

## 4. Non-negotiables
1. **Official marks only.** Wordmark and monogram from `assets/brand/logos/`, black or white only, never redrawn, recoloured, outlined, shadowed, cropped or rotated. Never put the monogram and the wordmark in one composition.
2. **Every shape is an official motif** from `assets/brand/motifs/models/`, used **as-is** (its own gradient and inner shadow). Scale, crop, nest and fade them; never repaint, stretch or redraw them. A motif silhouette is used as a mask only to hold a photograph.
3. **Tokens only.** No colour, font, radius or shadow that isn't in `tokens.css`. If something is missing, propose an addition; don't improvise.
4. **Text is never pure black:** `#1F1F1F`. Never bold (700+).
5. **No flat multi-colour blocks, rainbow, diagonal multi-stop or hard-edged gradients.**
6. **No clichés:** robots, glowing brains, circuit boards, stock handshakes, Taj Mahal, flags, chakra, tricolour washes, elephants.
7. **Indic scripts are shown natively**, never romanised in a showcase.
8. **Voice:** sentence case, no "!", no hype words (`brand-voice.md`). Don't invent facts: names, numbers and prices come from the brief or sarvam.ai, otherwise mark them `TODO: confirm`.

## 5. Checklist (before handing anything over)
1. Imports `tokens.css`; no invented values.
2. **Product register:** canvas `#FCFCFC`/white, headings `#1F1F1F`, paragraphs `#3D3D3D` (#666 only for card text and meta), saturated colour ≤ ~10%.
3. **Campaign register:** one continuous ground (never a single flat colour, except a photo window or a night poster), one official motif as-is, grain on gradients. Checks in `campaign.md` §2.
4. Headlines are Season Mix with negative tracking; everything else Matter. Pages: headings medium (525).
5. Pills for buttons, 16–32px card radii, barely visible shadows.
6. Whitespace dominates; one message per banner or section.
7. Wordmark official, black or white, with clear space, never beside the monogram.
8. Pages: hero and section headings centred, full section gap between sections, layouts recompose at 768/1024/1280px, layered art stays landscape on phones, no overflow at 320px, touch targets ≥ 44px (`layout.md`).
9. Indic scripts native; examples feel Indian (names, ₹, places).
10. Copy passes `brand-voice.md`.
