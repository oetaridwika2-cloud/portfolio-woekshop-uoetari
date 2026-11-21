---
name: Torn Paper & Ink Studio
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4ef'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#5c403c'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#906f6a'
  outline-variant: '#e5bdb8'
  surface-tint: '#bc1510'
  primary: '#b8110d'
  on-primary: '#ffffff'
  primary-container: '#dd3124'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4a9'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#154ddb'
  on-tertiary: '#ffffff'
  tertiary-container: '#3c69f5'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4a9'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930003'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b7c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b4'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-hero:
    fontFamily: Archivo Narrow
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 84px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Archivo Narrow
    fontSize: 44px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Archivo Narrow
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Archivo Narrow
    fontSize: 34px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Archivo Narrow
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Archivo Narrow
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: 0em
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Work Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  annotation-hand:
    fontFamily: Caveat, cursive
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 24px
spacing:
  gutter: 1.5rem
  margin: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system delivers an expressive, tactile blend of hand-made paper poster craft and brutalist-editorial rigor. It celebrates the analog craft of data storytelling, infusing infographics and content portfolios with the kinetic charm of an artist's personal scrapbook.

### Target Audience & Emotional Intent
- **Audience:** Art directors, editorial publications, brand strategists, research institutions, and digital culture enthusiasts seeking compelling visual synthesis.
- **Emotional Hook:** Tangible, authentic, meticulously researched yet irreverent and vibrant. The experience evokes thumbing through a bespoke printed zine or viewing a studio pinboard laden with drafts, cutouts, raw data stamps, and scribbled margin revelations.

### Design Movements
- **Tactile / Scrapbook Collage:** Layered raw paper substrates, visible millimeter grid backings, stamp marks, sticker badges, and simulated paper-tear contours.
- **Brutalist-Editorial Fusion:** Heavy architectural typographic scales, condensed high-impact uppercase display blocks, unapologetic hard-offset drop shadows, and high-contrast ink work.

## Colors

The palette is rooted in print production: tactile newsprint paper stock, dense carbon printing ink, and an electric vermilion editorial red used for grading, critical callouts, and graphic punch.

### Palette Architecture
- **Paper Canvas (`#F1F0EC`):** The foundational substrate. Never pure digital white; carries natural warmth reminiscent of acid-free cotton rag.
- **Deep Black Ink (`#111111`):** Heavy editorial typography, dense structural borders, high-impact linework, and dark fills.
- **Vermilion Accent (`#E8392B`):** Hard contrast accents, offset block drop shadows, highlighter stamps, and active interactive triggers.
- **Cobalt Accent (`#2B5BE8`):** Editorial secondary ink for categorical data distinctions, tertiary stickers, and secondary annotation tags.
- **Muted Ink (`rgba(17, 17, 17, 0.62)`): Used strictly for explanatory paragraphs, captions, metadata timestamps, and secondary editorial copy.
- **Paper Grid Line (`rgba(17, 17, 17, 0.08)`): The faint technical matrix visible across the background canvas, anchoring freeform paper cutouts to a deliberate graphic register.

## Typography

The typography stages an intentional clash: ultra-dense mechanical block headers meet technical data labeling, resolved by spontaneous editorial scrawls.

### Typographic Hierarchy & Roles
- **Headlines & Display:** `Archivo Narrow` rendered in uppercase weights (`700`, `800`) with tight line-height to evoke Swiss poster broadsheets and high-impact protest placards.
- **Editorial Body:** `Work Sans` provides a grounded, highly legible sans-serif structure that contrasts against the condensed display cuts.
- **Metadata & Technical Labels:** `Space Mono` set in full capitals with open tracking (`0.06em`) for data points, dimension keys, dates, and sticker IDs.
- **Margin Notes & Scribbles:** `Caveat` (or fall-back organic display script) used exclusively at gentle 3° to 8° angular tilts for personal asides, circled data callouts, and arrow annotations.

## Layout & Spacing

The layout model is governed by a technical underlying grid juxtaposed with asymmetrical collage overlays. 

### Grid & Composition Rules
- **Desktop (1024px+):** 12-column dynamic grid with a persistent 24px subtle graph-paper pattern overlay. Elements span asymmetric increments (e.g., 7 columns for infographic media, 5 columns for offset scrap notes).
- **Tablet (768px - 1023px):** 8-column layout. Margin shrinks to `1.5rem`, stacking visual assets above annotated analytical copy while maintaining sticker overlays.
- **Mobile (< 768px):** 4-column flow. Offsets and rotation angles are reduced to 1° to 2° to avoid horizontal canvas overflow while preserving the loose, hand-placed aesthetic.
- **Collage Offsets:** Layout modules may utilize intentional negative or overlapping spatial margins (`margin-top: -1.5rem`) to let cards and paper clippings nest on top of structural borders.

## Elevation & Depth

This system discards conventional digital drop shadows and blur-driven lighting in favor of hard-edged, physical printing offset shadows and physical paper layering.

### Depth Mechanics
- **Hard Solid Offset Shadows:** Elevated components (cards, badges, buttons, stickers) utilize unblurred, directional hard drops: `box-shadow: 4px 4px 0px #111111` or high-intensity vermilion drops: `box-shadow: 4px 4px 0px #E8392B`.
- **Z-Index Layer Hierarchy:**
  1. *Substrate (z: 0):* Warm paper background with repeating 20px SVG millimeter grid lines.
  2. *Base Containers (z: 10):* Primary content sheets with solid 2px ink borders.
  3. *Torn Slips & Clippings (z: 20):* Cards with simulated perforated or torn edges, angled between -2deg and +3deg.
  4. *Badges, Stamps & Annotations (z: 30):* High-contrast labels, washi-tape tabs, and handwritten scribbles pinned above content boundaries.
  5. *Interactive Flyouts & Overlays (z: 50):* Framed modal sheets with heavy 8px 8px solid black shadows.

## Shapes

The design embraces an unrounded, hard-cut structural baseline (`0` / 0px). Paper sheets, stickers, and data containers mimic guillotine-cut card stock.

### Contour Stylization
- **Hard Cuts:** True 90-degree corners on cards, text boxes, and buttons to maintain brutalist poster punch.
- **Torn Edge Treatment:** Key featured elements feature irregular polygon clip-paths or jagged border masks simulating hand-torn raw stock edges.
- **Washi Tape Strips:** Rectangular ribbon shapes overlaid at the tops of project cards with translucent ivory-matte finishes and slight angled rotations.
- **Sticker Shapes:** Circular, scalloped, or starburst graphic badges carrying uppercase `Space Mono` copy, rotated dynamically (`transform: rotate(-6deg)`).

## Components

### Buttons
- **Primary:** Solid `#111111` ink fill, `#F1F0EC` text, 2px solid `#111111` border, with a solid `#E8392B` offset shadow (`box-shadow: 4px 4px 0px #E8392B`). On hover, translate 2px down/right with the shadow compressing to 2px (`box-shadow: 2px 2px 0px #E8392B`).
- **Secondary (Tape/Sticker Style):** `#F1F0EC` paper background, 2px solid `#111111` border, `#111111` uppercase text. On hover, background shifts to vermilion `#E8392B` and text shifts to `#F1F0EC`.

### Badges, Stamps & Stickers
- **Data Callout Badges:** Pill-less, rectangular, 1.5px `#111111` outline, vivid vermilion or cobalt fill, small uppercase `Space Mono` typography.
- **Round Inspection Stamps:** Circular 2px bordered stamps tilted -12deg with semi-transparent ink effect, reading "VERIFIED DATA" or "VISUAL ESSAY".

### Cards (Project & Infographic Snippets)
- **Container:** Paper sheet cards with 2px solid `#111111` borders, sharp corners (`0px`), and `4px 4px 0px #111111` drop shadow.
- **Header Accent:** Top margin adorned with an absolute-positioned simulated washi-tape rectangle (`rgba(241, 240, 236, 0.85)` with semi-transparent rough edge).
- **Interactive State:** Hover elevates the card upward (`transform: translate(-3px, -3px)`) while expanding the shadow to `7px 7px 0px #E8392B`.

### Lists & Data Keys
- **Editorial Index:** Border-bottom 1.5px solid `#111111` with alternating mono index numbering (`01`, `02`, `03`) in vermilion `#E8392B`.
- **Chart Legend Dots:** Miniature filled geometric shapes (solid black squares, red triangles, cobalt circles) instead of standard rounded dots.

### Input Fields
- **Text Inputs:** Sharp 2px `#111111` border on `#F1F0EC` paper ground, mono label perched on the top border line, active focus creates a 3px 3px 0px `#E8392B` offset frame.
- **Checkboxes & Radios:** Sharp square check inputs with solid black heavy cross ("X") checks in lieu of modern curved checkmarks.

### Casual Handwritten Notes
- Hand-drawn vector arrows (`stroke: #E8392B; stroke-width: 2px;`) linking project statistics to handwritten commentary tags rendered in `Caveat`.