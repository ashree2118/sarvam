# Components (pages)

Specs measured on sarvam.ai unless marked "system". **The repo has no icon, badge, social-icon or customer-logo files:** use motifs for card and tile art, text tags for certifications, and leave out social icons and logos unless they are supplied. Values written `a → b` are mobile → desktop. Most are built into `skills/landing-page/page-base.css`; adaptation per breakpoint is in `layout.md` §5.

## 1. Buttons
Always pills (`--radius-full`). Labels are short verbs in sentence case: *Sign up*, *Get API key*, *Try the playground*, *Contact Us* (the site capitalises "Us").

| Variant | Spec | Use |
|---|---|---|
| Primary, large | Season Mix 525 16px · 56px tall · padding 16px 32px · `--gradient-btn-primary` · white | Hero and section CTAs |
| Secondary, large | Same size · `--gradient-btn-secondary` · text `#1E2033` · inset 1px ring at 14% | Hero pair |
| Primary, content | Matter 525 16px · 48px · padding 12px 26px · `--color-sr-slate` · white · `--shadow-button-dark` | Inline CTAs, "Get API key" |
| Secondary, content | Same size · `--color-sf-secondary` · `--color-tx` · `--shadow-button-light` | "View All Updates" |
| Header | 44px, 15px, padding 10px 22px | *Log In* (dark), *Contact Us* (light) |
| On dark ground | Secondary, white background | Promo and CTA bands |
| Text link | Matter 425, `--sr-indigo-800`, "→" | "Explore Voice Agents →" |
| Play | 56–92px white circle, slate triangle, `--shadow-elevation-md` | On orbs and video |

Padding is enlarged from sarvam.ai (system). States: hover a white 8% overlay over 200ms; press `scale(.97)`; focus 2px `--sr-indigo-600` outline, offset 2px; disabled opacity .4. Below 1024px, card button pairs stack full width.

## 2. Header
Fixed, white, 1px `--color-st-secondary` hairline, ≈68px tall, container 10/12 (88% mobile), max 1400px. Wordmark 16px tall left (a white version crossfades in over dark sections, 300ms); nav centre (Products · Developers · Resources · Company; Matter 425 15px, pill hit areas 40px, chevrons); *Log In* then *Contact Us* right.
**Below `lg`:** wordmark, *Log In*, a 44px menu button (bars morph into ×). The menu is a white panel dropping from the header (`--radius-3xl` bottom corners, soft shadow) with uppercase rows (Matter 525 14px, 0.08em, 52px tall, hairlines, grey chevrons), then *Log In* and *Contact Us* side by side (48px). Page behind dimmed and blurred. **Position the panel `absolute` inside the header, never `fixed`** (the header's backdrop blur makes a fixed panel collapse).

## 3. Hero lockup
Centred, top to bottom: ornament (24 → 32px) · eyebrow between 1px `--gradient-hairline` lines (20 → 28px below, padding 0 32px) · H1 (16 → 24px below) · subhead (16 → 20px below, max 640px) · button pair (32px below, gap 16 → 20px). Behind it: the bowl glow and hero halo (`imagery.md` §5).
**Product hero:** a version badge under the H1 instead of the eyebrow (outline pill, 2px `--color-tx` border, Matter 425 20 → 26px, padding 4px 24px, "Flash"), and the product's form below the buttons: a 2:1 layered motif panel (`campaign.md` §5) or orbs.

## 4. Inputs and composer
- **Input:** min-height 48px, padding 12px 16px, `--radius-2xl`, 1px `--color-st-secondary`, white, Matter 425 16px. Placeholder `--color-tx-tertiary`. Focus: border `--sr-indigo-800` + 2px ring at 20%. Invalid: `--sr-red-400` + `--sr-red-100` ring. Label above in Matter 525 14px `--color-tx-secondary`. Indian placeholders (*Arjun*, *arjun@company.com*). 16px text on mobile.
- **Composer:** outer panel (`--radius-3xl`, 1px `--color-st`, padding 12 → 16px) around an inner field (`--radius-2xl`, 16 → 18px); context chips (`--color-sf`, `--radius-lg`, 12px).

## 5. Tabs, tags, chips
- **Tab chips:** 48px, padding 12px 24px, Matter 525 15px, 1px `--color-st` border (dark when selected). Dark-active variant: inactive `--color-sf-secondary`, active `--color-sr-slate` + white. Segmented: pills in a bordered track. Product tab rail: active white with `--sr-indigo-800` text. Code tabs: 12px 525, active with a 2px `--sr-indigo-600` top border. Tab rows scroll sideways on mobile.
- **Tags:** Matter 625 14px, padding 8px 14px, `--radius-xl`, background `*-50`, border `*-200`, text `*-600` ("SOC 2 Type I", "DPDP compliant").
- **Spec chips:** white, 1px `--color-st`, pill, Matter 425 13–14px ("WAV", "Python SDK").

## 6. Cards
| Type | Spec |
|---|---|
| Feature | White, 1px `--color-st-secondary`, `--radius-xl → 2xl`, padding 20 → 32px, optional icon tile, card title, body small |
| Elevated | White, `--shadow-card` (hover `--shadow-card-hover`), radius 16–32px |
| Art-header | 16:7 art panel (gradient + glossy white symbol), title 20 → 22px, body, list rows |
| Pastel feature | `--radius-3xl`, light/medium wash in the product hue (diagonal allowed), title, `*-700` body, an Indic sample line, a motif as-is cropped bottom-right (`.motif-corner`), "Listen" button |
| Dark use-case | `--radius-3xl`, deep ground, white Season Mix title 24 → 28px, accent body, a motif rising from the bottom (`.motif-rise`), min-height 380px |
| Stat row | Label 16px tertiary left, value Matter 525 20px tabular right, hairline between |
| Pricing | White, 1px border, `--radius-3xl`, padding 40px: offer meta 13px, old price struck in tertiary + new price as Metric, unit 16px, button pair |
| Testimonial | `--radius-4xl`, padding 32 → 40px, logo, quote 20 → 24px (3-line clamp), 48px avatar + name + role |
| Blog | 16:9 image (`--radius-lg`, hover scale 1.02), meta 13px, title 18px (2-line clamp) |
| Voice row | 56px orb + name (Matter 525 17px) + "Style · Language" 14px; two columns from `md` |
| Deployment | Horizontal: 80px glass icon tile + title + body, white, 1px border, `--radius-2xl` |

**Logo marquee:** overline "INDIA BUILDS WITH SARVAM" (12px, 525, caps, 0.1em) centred, then customer logos in monochrome `#666`, 28 → 36px tall, 48 → 64px apart, faded at both edges.

## 7. Lists and panels
- **List rows:** 20px icon + label (Matter 425 16px) + "→" in `--sr-grey-500`, hairlines, 50px rows; hover turns label and arrow `--sr-indigo-800` and nudges the arrow 2px.
- **Check list:** 18px check badge in `--sr-indigo-600`, Matter 16px `--color-tx-secondary`, 14px apart.
- **Pillar list:** 20px sparkle in `--sr-green-400`, value statement (Matter 525 21px), body 16px tertiary, 32px apart.
- **Expanding panels:** 1px `--color-st-panel`, 16px radius, 492px tall; open panel shows "01", title 24px, description, cropped UI image; collapsed ≥ 72px with a rotated label and "+"; grows over 650ms. Below `lg`: numbered accordion.

## 8. Bands
| Band | Spec |
|---|---|
| Promo | Deep ground of the colour world, `--radius-3xl`, padding 40px, min-height 256px; Season Mix 32 → 36px white headline, accent line, white pill + 12px meta; a motif bleeding off the right (rising from the bottom on mobile) |
| Use-case | Deep ground, H2 white + accent lead, hairline, two columns of title, accent line and 4 items; a motif cropped top-right |
| **CTA** | A layered motif (`.cta .band-cta` + `.motif-stack`, `campaign.md` §5) on a canvas between the motif's own colours (`--band-bg`); `--radius-2xl → 3xl` with a 2px `--color-st` outline at 2px offset; **Season Mix 525**, two lines, colour following the motif (`--cta-ink`); one pill button; 16:10 on phones |
| Inline promo strip | White → `--sr-indigo-50` wash, 1px border, `--radius-2xl`, one sentence left, text link right |

## 9. Footer
On `--color-sf`, below a main area with `--radius-4xl` bottom corners; top padding 48 → 80px. Brand block (wordmark 32px, "AI for all from India" 12px, ISO 27001 + SOC 2 badges, social icons, a bordered legal box), then columns **Products · APIs · Resources · Company · Legal**: headings Matter Semi Mono 12px caps, links Matter 16px tertiary, hover `--sr-indigo-800`.
Legal: "© 2026 Axonwise Private Limited. All rights reserved." · "732, Chinmaya Mission Hospital Road, Indiranagar Stage 1, Bengaluru, Karnataka 560038".

## 10. Code, audio, demo
- **Code block:** `--code-bg`, 1px `--color-st`, `--radius-2xl`; header `--code-header-bg` with tabs (Python · JavaScript · cURL) and "Copy". Matter Mono 13–14px / 1.6 in `--code-fg`; `--code-keyword`, `--code-function`, `--code-string`, `--code-constant`, `--code-comment`. Indic samples (`text="नमस्ते, कैसे हैं आप?"`, `target_language_code="hi-IN"`).
- **Waveform:** 2px rounded bars at 4px pitch, `--sr-grey-300`, played part `--color-tx`, 48px tall.
- **Transcript:** speaker label 12px tertiary + line 17px; inactive lines `--sr-grey-500`.
- **Meta line:** "Hindi · hi-IN · 24 kHz · Pace 1.0", 12px tertiary.
