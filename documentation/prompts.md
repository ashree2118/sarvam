# The prompts that shaped the system

These are some my prompts from the Claude Code sessions. They are grouped by stage, and under each one is a short note on what changed because of it.

### 1. Establishing the approach

> I want to keep this project as simple as possible without compromising accuracy. The goal isn't to generate banners and webpages that simply copy existing Sarvam designs. I want to build a system that captures Sarvam's design language accurately enough to generate consistent, on-brand work across different formats.
>
> Break the project into phases rather than attempting everything at once. Include a testing phase where we evaluate the outputs, identify inaccuracies and iterate until the results are reliable.

### 2. Building the design system

> This is a good starting point. Refine it so that it reads like Sarvam's actual design specification, not a case study about the brand. Make it detailed and actionable. For example, typography should specify font sizes, weights, letter spacing and where each text style is used.
>
> The system should document reusable rules rather than just observations, so AI tools can follow it without repeatedly referring to the original references.

### 3. Refining the visual language

> Don't replicate the composition of a single reference image. Study all the references together, along with Sarvam's website and social media creatives. Identify the recurring visual principles and patterns that explain how its posters and banners are constructed. Incorporate those findings into both the design system and the banner-generation skill.
>
> The generated banners should have different compositions and colour treatments while maintaining a consistent brand identity.

### 4. Making the system reusable and testing it

> We've made several corrections to the banners and webpage. Make sure the successful changes, including responsive behaviour, typography, alignment and layered compositions, are incorporated into the design system and relevant skills.
>
> Then generate additional banners and webpages using the same system. Have fresh agents independently review the outputs, identify inconsistencies or missing rules, and incorporate those findings back into the system.


