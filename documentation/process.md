# Building Sarvam's AI-Ready Brand System

## 1. The approach

I started by exploring Sarvam's website, brand resources, product pages, blog covers and public social media to understand its visual language. I documented my initial observations around typography, colours, gradients, motifs, layouts and brand communication.

I then shared my findings with Claude and asked it to conduct a deeper analysis and translate the research into a structured design system.

We built it in phases rather than generating everything at once: first the system, then banners and the webpage, with testing and refinement throughout.

### Brand references

A few references that shaped the initial direction:

| Reference | Observation |
|---|---|
| ![](../assets/reference/brand-06.jpg) | Sarvam's layered gateway motif |
| ![](../assets/reference/brand-07.jpg) | Different treatments of the same motif |
| ![](images/02-sarvam-cover-reference.png) | Motif usage in campaign imagery |
| ![](../assets/reference/web-home-1.png) | Website typography, whitespace and gradients |

## 2. The design system

The system documents Sarvam's visual identity through reusable design tokens, typography, colours, imagery, layout, components, brand voice and responsive rules.

It is organised into three parts:

- **Design system:** The actual brand rules and specifications.
- **Skills:** Step-by-step instructions for generating social creatives and landing pages.
- **Project instructions:** Guidelines that help AI tools navigate and use the system.

The goal was to make it reusable, so future designs wouldn't depend on the context of previous conversations.

## 3. Applying the system

Using the same system, I created:

- **4 Meta banners** exploring different compositions, colours and product messages.
- **4 LinkedIn banners** covering product capabilities and developer-focused messaging.
- **1 responsive landing page** for Bulbul V4 Flash.

The banners and webpage share the same design language while adapting their compositions to suit each format.

### Meta banners

| | |
|---|---|
| ![](../banners/meta/2026-11-09-bulbul-indian-english/sarvam-bulbul-indian-english-1080x1080.png) | ![](../banners/meta/2026-11-10-masterbrand-languages/sarvam-masterbrand-languages-1080x1080.png) |
| ![](../banners/meta/2026-11-10-bulbul-names-numbers/sarvam-bulbul-names-numbers-1080x1080.png) | ![](../banners/meta/2026-11-10-saaras-v4/sarvam-saaras-v4-perfected-1080x1350.png) |

### LinkedIn banners

| | |
|---|---|
| ![](../banners/linkedin/2026-11-09-bulbul-proof/sarvam-bulbul-proof-1200x627.png) | ![](../banners/linkedin/2026-11-09-bulbul-one-line/sarvam-bulbul-one-line-1200x627.png) |
| ![](../banners/linkedin/2026-11-10-languages/sarvam-languages-1200x627.png) | ![](../banners/linkedin/2026-11-10-saaras-v4-developers/sarvam-saaras-v4-developers-1200x627.png) |

### Landing page — Bulbul V4 Flash

Live: [sarvam-znz7.vercel.app](https://sarvam-znz7.vercel.app/)

![](../website/bulbul-v4/screenshots/desktop-1440.png)

## 4. Refinement & testing

The first generations weren't always accurate. Some examples included AI-recreated motifs instead of Sarvam's original assets, repetitive banner compositions, incorrect typography and layouts that didn't adapt properly on mobile.

### Example: Using official brand assets

| Initial AI output | Sarvam reference |
|---|---|
| ![](images/02-ai-shape-radial-gradient.png) | ![](images/02-sarvam-cover-reference.png) |

The AI initially recreated the gateway shapes using simple gradients. After comparing them with Sarvam's references, I directed Claude to use the 16 official motif assets instead of recreating or recolouring them.

### Other refinements

**Visual hierarchy and layering**

![](images/01-banner-too-much-nesting.png)

Reduced excessive layering and introduced more whitespace around text.

**Typography**

![](images/04-cta-band-wrong-font.png)

The closing band used the sans-serif on a single line. I switched it to Season Mix, Sarvam's headline serif, set over two lines.

**Layered compositions**

![](images/05-layers-text-on-top.png)

![](images/05-layers-too-many.png)

| Approved | Reused on another page |
|---|---|
| ![](images/05-layers-fixed-bulbul.png) | ![](images/05-layers-fixed-saaras.png) |

Refined the relationship between text and visual layers, then documented the approved proportions for reuse.

**Responsive behaviour**

| Our first mobile layout | Sarvam's mobile layout |
|---|---|
| ![](images/06-mobile-band-portrait.png) | ![](images/06-mobile-band-target.png) |

Corrected the mobile layout to preserve the landscape composition instead of turning it into a portrait card.

Rather than fixing these issues only in individual designs, I worked with Claude to turn approved corrections into reusable system rules.

### Testing the system independently

I simplified the documentation, removed duplication and resolved conflicting rules.

To test whether the system worked independently of our previous iterations, I used fresh AI agents with access to the refined system but without the original conversation context. They generated additional banners and webpages, which I reviewed for consistency and accuracy.

Their findings were used to identify and fix gaps in the documentation. Some of the resulting generations were selected as final deliverables.

See [system-testing.md](system-testing.md) for the detailed comparisons.

## 5. Responsive validation

The landing page was tested at the three required viewport sizes.

| Mobile — 375px | Tablet — 768px | Desktop — 1440px |
|---|---|---|
| ![](../website/bulbul-v4/screenshots/mobile-375.png) | ![](../website/bulbul-v4/screenshots/tablet-768.png) | ![](../website/bulbul-v4/screenshots/desktop-1440.png) |

Layouts rearrange rather than simply shrink. Navigation, typography, spacing, cards and layered visuals adapt to the available space.

On mobile, the navigation follows Sarvam's own drop-down menu:

![](images/07-mobile-nav-reference.png)

I also tested widths from 320px to 1600px for overflow, missing fonts and broken images.

## 6. Tools & collaboration

- **Claude Code (Claude Opus):** Brand analysis, design-system development, generation and refinement.
- **HTML & CSS:** Banner and webpage implementation.
- **Node.js & headless Chrome:** Image exports and responsive screenshots.
- **VS Code:** Development and project management.

I led the research, creative direction and design decisions, reviewing generated work and guiding each iteration. Claude assisted with research, documentation, generation and implementation.

### Explore further

- [Design system](../design-system/design.md)
- [Key prompts](prompts.md)
- [System testing](system-testing.md)
- [Final deliverables](../README.md#final-deliverables)
- [Live landing page](https://sarvam-znz7.vercel.app/)
