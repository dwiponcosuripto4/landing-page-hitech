---
name: Digital Blueprint
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#42474f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#2c3348'
  on-tertiary: '#ffffff'
  tertiary-container: '#424a5f'
  on-tertiary-container: '#b2bad3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 60px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The design system is engineered to project the reliability of an established enterprise while maintaining the agility of a high-tech digital transformation partner. The brand personality is **authoritative, precise, and visionary**, catering to corporate decision-makers and CTOs who value structured innovation.

The design style follows a **Corporate Modern** aesthetic with a heavy emphasis on **Tonal Layering**. It utilizes a clean, systematic interface where whitespace is used strategically to separate complex data sets and service offerings. To evoke a sense of "High-Tech," the system integrates subtle glassmorphism for navigation elements and crisp, micro-interactions that respond with mathematical precision. The emotional response should be one of absolute confidence and technical excellence.

## Colors

The palette is anchored by **Classic Navy (#0F4C81)**, used for structural elements and primary actions to establish trust. **Electric Slate (#3B82F6)** serves as the high-energy accent for interactive states and data visualization, cutting through the conservative base colors with a tech-forward vibrance.

Backgrounds primarily utilize **Off-white (#F8FAFC)** to ensure high legibility and a clinical, professional feel. **Dark Slate Blue (#0F172A)** is reserved for high-impact sections, such as the footer or featured solution blocks, to create a strong visual "anchor" for the page. Typography is strictly kept to **Charcoal (#1E293B)** to avoid the harshness of pure black while maintaining optimal contrast ratios for accessibility.

## Typography

This design system utilizes **Inter** exclusively to ensure a systematic, utilitarian aesthetic across all digital touchpoints. The typeface’s tall x-height and neutral character reflect a modern, tech-oriented personality.

**Key Rules:**
- **Headlines:** Use tighter letter spacing for large display sizes to maintain a punchy, editorial feel. 
- **Hierarchy:** Ensure a clear distinction between `body-lg` (used for introductions/leads) and `body-md` (standard content).
- **Labels:** Small labels use a medium weight and slight tracking (letter spacing) to enhance readability in uppercase formats, such as in eyebrow titles or navigation links.

## Layout & Spacing

The layout is built on a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The system follows an **8px linear scale** for all internal component spacing, ensuring consistent rhythm.

**Breakpoints:**
- **Mobile:** < 768px (20px side margins).
- **Tablet:** 768px - 1024px (32px side margins).
- **Desktop:** > 1024px (Max-width container of 1280px).

Large vertical gaps (120px) are used between major sections to signify a change in content context and to maintain the "Modern & Clean" design narrative. Content within cards and modules should favor a "generous" padding approach (32px+) to prevent information density fatigue.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** supplemented by **Ambient Shadows**. Instead of heavy, dark shadows, this design system uses soft, multi-layered shadows with a slight tint of the primary Navy color to create a more natural sense of depth.

**Elevation Levels:**
- **Level 0 (Flat):** Primary background surfaces.
- **Level 1 (Subtle):** Resting state for cards. 1px stroke in #E2E8F0 with a 4px blur shadow.
- **Level 2 (Active):** Hover states for interactive elements. 12px blur shadow with 10% opacity, slightly lifted.
- **Level 3 (Overlay):** Modals and dropdowns. 24px blur shadow with a crisp 1px border to define the edge against complex backgrounds.

## Shapes

The design system adopts a **Rounded (2xl)** approach to soften the industrial nature of tech services, making the brand feel more accessible and human-centric. 

Standard components (buttons, inputs) utilize a `0.5rem` radius. Larger structural containers, such as feature cards or hero image masks, utilize the `rounded-2xl` (1.5rem/24px) property to create a distinctive, friendly silhouette that sets the UI apart from traditional "sharp" corporate designs.

## Components

### Buttons
- **Primary:** Solid #0F4C81 background, white text. No border. On hover, background shifts to a slightly lighter tint.
- **Secondary:** Outline style. #0F4C81 border (2px) and text. Background is transparent.
- **Ghost:** Used for low-priority actions. No background or border; uses #3B82F6 text color.

### Cards
Feature cards must have a 24px (2xl) corner radius. Use #FFFFFF backgrounds on #F8FAFC surfaces. Include a subtle transition where the card "lifts" (Elevation Level 2) and the accent border (#3B82F6) appears on the left edge during hover.

### Input Fields
Inputs are structured with a #F1F5F9 (Light Grey) background and a 1px border that turns #3B82F6 on focus. Labels sit outside the field in `label-md` style.

### Navigation (Navbar)
The navbar should utilize a backdrop-blur (Glassmorphism) effect when scrolling, using a semi-transparent version of #0F4C81 (90% opacity) for a sophisticated, high-tech feel.

### Lists & Data
Use a horizontal divider system with 1px #E2E8F0 lines. Bullet points are replaced by custom 16px icons in #3B82F6 to reinforce the "Digital Transformation" visual language.