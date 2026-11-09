# AGENTS.md

The Sarvam AI brand system: Sarvam's design language written down so AI tools produce on-brand banners and web pages, plus the skills, assets and tooling to make them.

## Layout
| Path | Purpose |
|---|---|
| `design-system/` | **Source of truth.** Start at `design.md`; every value is in `tokens.css` |
| `skills/social-banner/` | `SKILL.md`, `banner-base.css`, `template.html`, `export.js` |
| `skills/landing-page/` | `SKILL.md`, `page-base.css`, `page-base.js`, `screenshot.js`, `starter/` (a complete page to copy) |
| `assets/brand/` | Official logos, ornament, bowl glow and the 16 model motifs: the only shapes allowed |
| `assets/fonts/` | Licensed fonts if present, else trial files (personal use only). Committed; see its README |
| `assets/reference/` | Captures of Sarvam's identity (`brand-*`), website (`web-*`) and public covers (`web/`) for calibration |
| `banners/<meta\|linkedin>/<yyyy-mm-dd>-<slug>/` | Banner output: `index.html` + PNGs while working; delivered folders keep the exact-size PNG only |
| `website/<slug>/` | Page output: `index.html`, `styles.css`, `screenshots/` |
| `README.md`, `documentation/` | Project write-up for people (process, prompts, testing). Not needed for tasks |

## Workflow
1. **Brief:** subject, message, formats, colour world, facts available.
2. **Read** `design-system/design.md`, then the skill for the task and every file it lists.
3. **Copy first:** headline and support line against `brand-voice.md`.
4. **Build** with the skill, from tokens and the base CSS.
5. **Render and look:** `export.js` for banners, `screenshot.js` for pages. Check the skill's review list and `design.md` §5 before handing over.

## Rules
1. **Tokens only.** Every banner and page imports `design-system/tokens.css`. If something is missing, propose an addition to the right design-system file; don't improvise.
2. **Official marks and motifs only**, used as-is (`design.md` §4).
3. **Don't invent facts.** Names, numbers and prices come from the brief or sarvam.ai; mark anything unverified `TODO: confirm`.
4. **Fonts:** say whether licensed or trial files rendered. System-font renders are drafts.

## Changing the system
- Each fact lives in one file. Change it there (and in `tokens.css` if it's a value); point to it from elsewhere instead of repeating it.
- Mark values as measured from sarvam.ai or "system", and rules from design review as **(review)**.
- Keep `design.md`'s file index and checklist in sync. Anything a task had to discover (a new size, pattern or rule) goes back into the system.
