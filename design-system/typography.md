# Typography

## 1. Families
| Family | Weights | Role |
|---|---|---|
| **Season Mix** (variable) | 300–900 | The voice: H1, H2, band and banner headlines, metrics, large buttons |
| **Matter** (variable) | 100–1000 | Everything else: body, UI, nav, card titles, labels, stats on pages |
| **Matter Mono** / **Matter Semi Mono** | 400, 500 | Code / footer column headings |
| **Noto Sans** per script (Google Fonts) | 400, 500 | Indic scripts (Season Mix and Matter have no Indic glyphs) |

Tokens: `--font-season-mix`, `--font-matter`, `--font-matter-mono`, `--font-matter-semi-mono`, `--font-indic`.
- **Files and licence:** `tokens.css` loads Sarvam's licensed files from `assets/fonts/` when present, otherwise the trial files (personal use only; see the README there). **Say which you used when you hand work over.** System-font renders are drafts.
- **`SERF` axis:** the trial Season file holds Sans, Mix and Serif on one axis. Mix is `SERF` 50, set on `html` in `tokens.css`. If you set `font-variation-settings` on an element, keep `"SERF" 50` in it, or headlines turn into Season Sans.

## 2. Weights
| Token | Value | Use |
|---|---|---|
| `--fw-light` | 325 | Rare, very large display only |
| `--fw-regular` | 425 | **All Season Mix headings** (H1, H2, band and in-section titles, banner headlines), body, metrics, as on sarvam.ai |
| `--fw-text` | 415 | Matter running text on pages. The trial Matter renders ~2% heavier than the licensed file; set back to 425 with licensed fonts |
| `--fw-medium` | 525 | Matter card titles, labels, buttons, stats. Never on Season Mix headings |
| `--fw-semibold` | 625 | Tags; blog-cover titles (§4) |

Never 700+. Hierarchy comes from size and the Season Mix / Matter contrast.

## 3. Web type scale
Sizes are responsive tokens in `tokens.css`, measured on sarvam.ai (mobile → tablet at 768 → laptop at 1024; "fluid" sizes grow smoothly from 375 to 1280px); use the token, never the number. Secondary text on Sarvam is 16–18px: never set paragraphs, tabs, chips or links at 13–14px.

| Style | Font / weight | Token | Size (mobile → tablet, laptop) | LH | Tracking | Colour |
|---|---|---|---|---|---|---|
| Hero H1 | Season Mix 425 | `--text-h1` | 44 → 64, fluid | 1.05 | -0.025em | `tx` |
| Product H1 | Season Mix 425 | `--text-h1-product` | 44 → 56, fluid | 1.05 | -0.025em | `tx` |
| Section H2 | Season Mix 425 | `--text-h2` | 28 → 40, fluid | 1.15 | -0.02em | `tx` |
| Band headline | Season Mix 425 | `--text-band` | 32 → 44, fluid | 1.1 | -0.02em | follows the motif |
| In-section title | Season Mix 425 | `--text-h3` | 26 | 1.2 | -0.015em | `tx` / white |
| Metric (price, big number) | Season Mix 425 | `--text-metric` | 56 → 72, fluid | 1 | -0.02em | `tx` |
| Hero subhead | Matter 425 | `--text-subhead` | 18 → 20 | 1.6 | 0 | `tx-secondary` |
| Section lead / body | Matter 425 | `--text-lead` / `--text-body` | 17 → 18, 20 / 16 → 17, 18 | 1.6 | 0 | `tx-secondary`, max 60ch |
| Body small | Matter 425 | `--text-body-sm` | 15 → 16 | 1.55 | 0 | `tx-tertiary` |
| UI text (tabs, chips, rows, links) | Matter 425 | `--text-ui` | 16 | 1.5 | 0 | |
| Card title | Matter 525 | `--text-card-title` | 20 → 22, 24 | 1.3 | -0.015em | `tx` |
| Value statement / quote | Matter 525 / 425 | `--text-value` / `--text-quote` | 20 → 21, 22 / 20 → 22, 24 | 1.4 / 1.6 | 0 | `tx` |
| Eyebrow | Matter 425 | `--text-eyebrow` | 14 → 16 | 1.5 | 0.025em | `sr-indigo-900` |
| Overline | Matter 525 caps | `--text-overline` | 12 | 1.33 | 0.1em | `tx-tertiary` |
| Meta / label | Matter 425 / 525 | `--text-meta` / `--text-label` | 14 / 13 | 1.55 | 0 | `tx-tertiary` |
| Nav item | Matter 425 | | 15 | normal | 0 | `tx` |
| Button large / small | Season Mix 525 / Matter 525 | | 16 / 15–16 | 1.5 | 0 | |
| Stat value | Matter 525 tabular | | 20 | 1.3 | -0.5px | `tx` |
| Footer heading | Matter Semi Mono 400 caps | | 12 | 18px | 0 | `tx` |
| Legal / code | Matter 425 / Matter Mono 400 | | 12 / 13–14 | 1.5 / 1.6 | 0 | `tx-tertiary` / `code-fg` |

## 4. Poster type scale (banners)
Sizes are a share of the canvas **short side S**.

| Style | Font / weight | Size | LH | Tracking | Colour |
|---|---|---|---|---|---|
| **Headline** | Season Mix 425 | **0.088–0.11 × S** (0.1 is the default) | 1.04–1.1 | -0.025em | Darkest tint of the ground's hue on light grounds (`--sr-indigo-950`, `--sr-green-1000`, or `--color-tx`); `--color-tx-inverse` on deep ones **(review)** |
| Headline, 8–10 words | Season Mix 425 | 0.055–0.062 × S | 1.1 | -0.02em | same |
| Support line | Matter 425 | 0.028–0.034 × S | 1.4 | 0 | Dark tint of the hue / ground accent |
| Kicker / eyebrow | Matter 425 | 0.024–0.032 × S | 1.4 | 0.025em | **Tinted from the ground or motif**, e.g. `--sr-pink-700` on pink or peach, `--sr-red-600` on red, `--sr-yellow-300` on forest; hairlines tinted to match **(review)** |
| Proof number | Season Mix 425 | 0.052 × S | 1 | -0.02em | headline colour |
| Proof label | Matter 425 | 0.022–0.03 × S | 1.3 | 0 | support colour / ground accent |
| Overline / meta | Matter 525 caps / 425 | 0.018–0.02 × S | 1.3–1.4 | 0.12em / 0.01em | support colour |

On LinkedIn (S = 627px), use the top of each range so small text stays legible in the feed.
**Blog and announcement covers only:** Sarvam's covers set the title in Matter semibold, ~0.108 × S, centred, LH 1.1, tracking -0.015em (`.cover-title`, `web/blog-indic-diarbench`). Social banners always use Season Mix **(review)**.

## 5. Rules
- Sentence case. Uppercase only for overlines and footer headings, tracked out.
- Negative tracking on headlines, positive on small caps labels, 0 on body.
- `text-wrap: balance` on headlines, `pretty` on paragraphs. Keep the last two words together with `&nbsp;`.
- Headlines: one or two balanced lines (three at most on a portrait poster).
- Highlight one product name in a headline with `--sr-indigo-700`, never a whole line.
- Stats and prices: `tabular-nums`, ₹ for prices (with the trial Matter, tabular figures leave a wide gap at a decimal point; turn them off for decimals like "99.9"). No italics.

## 6. Indic scripts
- Native scripts always: हिन्दी · বাংলা · தமிழ் · తెలుగు · ಕನ್ನಡ · മലയാളം · ਪੰਜਾਬੀ · ଓଡ଼ିଆ · ગુજરાતી · मराठी · اردو.
- Load only the Noto Sans scripts used, at 400 and 500, e.g. `https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500&display=swap`.
- Tag every Indic run with its `lang` code. Set it at ~0.9× the Latin text it sits beside (a language showcase may use the support size or larger), line-height ≥ 1.5. Fonts: Noto Sans per script; Noto Naskh Arabic for Urdu, Sindhi and Kashmiri (`--font-indic`).
- **India's 22 scheduled languages:** অসমীয়া (Assamese) · বাংলা (Bengali) · बड़ो (Bodo) · डोगरी (Dogri) · ગુજરાતી (Gujarati) · हिन्दी (Hindi) · ಕನ್ನಡ (Kannada) · كٲشُر (Kashmiri) · कोंकणी (Konkani) · मैथिली (Maithili) · മലയാളം (Malayalam) · মৈতৈলোন্ (Manipuri) · मराठी (Marathi) · नेपाली (Nepali) · ଓଡ଼ିଆ (Odia) · ਪੰਜਾਬੀ (Punjabi) · संस्कृतम् (Sanskrit) · ᱥᱟᱱᱛᱟᱲᱤ (Santali, Ol Chiki) · سنڌي (Sindhi) · தமிழ் (Tamil) · తెలుగు (Telugu) · اردو (Urdu). Which of these a given Sarvam model supports: `TODO: confirm` per product.
- `dir="rtl"` only for Perso-Arabic scripts (Urdu, Sindhi).
- Code-mixed lines are welcome: "हाँ जी, umm… एक second".
