# Fonts

`design-system/tokens.css` loads **Sarvam's licensed file first, then the trial file**. Drop licensed files in with these names and they take over with no code change.

| Family | Licensed file | Trial file (in use) |
|---|---|---|
| Season Mix (300–900) | `SeasonMixVFUprights.woff2` | `SeasonCollectionVF-TRIAL.ttf` (Mix = `SERF` 50, set in tokens.css) |
| Matter (100–1000) | `MatterUprights-VF.woff2` | `MatterCollectionVF-TRIAL.ttf` |
| Matter Mono 400 / 500 | `MatterMono-Regular.woff2`, `-Medium.woff2` | `MatterMono-TRIAL-Regular.otf`, `-Medium.otf` |
| Matter Semi Mono 400 / 500 | `MatterSemiMono-Regular.woff2`, `-Medium.woff2` | `MatterSemiMono-TRIAL-Regular.otf`, `-Medium.otf` |

- Trial files (Befonts) are **personal use only** (`TRIAL-LICENSE.txt`): real letterforms, fine for design and review. Anything published for Sarvam must be re-exported with the licensed files. With licensed Matter, set `--fw-text` back to 425.
- The banner exporter warns when it renders with trial files. Font files are git-ignored.
- Indic scripts use Noto Sans from Google Fonts (SIL OFL); nothing goes here for those.
