/**
 * BRAND COLOR USAGE GUIDE
 *
 * This guide explains how to use the brand color system across the Tani Modi project.
 */

// ============================================================================
// 1. IN TAILWIND CLASSNAMES (Recommended for most components)
// ============================================================================

// Example: Dark background with light text
// <div className="bg-brand-obsidian text-brand-alabaster">Content</div>

// Example: Buttons with orange accent
// <button className="bg-brand-orange text-brand-alabaster hover:bg-transparent hover:text-brand-orange">Click me</button>

// All available color classes:
// - bg-brand-orange, text-brand-orange, border-brand-orange (Active items, branding icons, accents)
// - bg-brand-obsidian, text-brand-obsidian, border-brand-obsidian (Master body background)
// - bg-brand-charcoal, text-brand-charcoal, border-brand-charcoal (Floating elements, navbar glass base)
// - bg-brand-alabaster, text-brand-alabaster, border-brand-alabaster (Crisp headers and logo white)
// - text-brand-muted (Descriptive, secondary editorial metadata)

// ============================================================================
// 2. SEMANTIC THEME UTILITIES (For consistent patterns)
// ============================================================================

// Usage:
// <div className={themeColors.background.primary}>
//   <h1 className={themeColors.text.primary}>Heading</h1>
//   <button className={`${themeColors.button.accent} ${animations.smooth}`}>
//     CTA Button
//   </button>
// </div>

// ============================================================================
// 3. IN JAVASCRIPT/REACT (For dynamic styling)
// ============================================================================

import { brandColors, getColorWithOpacity } from "@/constants/brandColors";

// Usage:
function MyComponent() {
  const backgroundColor = brandColors.obsidian;
  const accentColor = getColorWithOpacity("orange", "0.9");

  return <div style={{ backgroundColor }}>Content</div>;
}

// ============================================================================
// COLOR PALETTE REFERENCE
// ============================================================================

const colorPalette = {
  orange: {
    hex: "#E05A16",
    usage: "Active items, branding icons, CTAs, emphasis",
    semantic: "primary accent/interactive",
  },
  obsidian: {
    hex: "#0D1110",
    usage: "Master body background, dark sections",
    semantic: "primary dark color, main background",
  },
  charcoal: {
    hex: "#111614",
    usage: "Floating elements, navbar glass base, cards on dark",
    semantic: "secondary dark, elevated surfaces",
  },
  alabaster: {
    hex: "#FAF8F5",
    usage: "Crisp headers, logo, text on dark backgrounds",
    semantic: "primary light color, contrast text",
  },
  muted: {
    hex: "#9E9E9E",
    usage: "Descriptive text, secondary editorial metadata, captions",
    semantic: "secondary text, reduced emphasis",
  },
};

// ============================================================================
// COMMON PATTERNS
// ============================================================================

// Button Component Pattern:
// <button className={`
//   px-6 py-2.5 rounded-full
//   font-sans text-xs uppercase tracking-widest font-semibold
//   border transition-all duration-300
//   border-brand-orange bg-brand-orange text-brand-alabaster
//   hover:bg-transparent hover:text-brand-orange
// `}>
//   Button Text
// </button>

// Card Component Pattern (on dark background):
// <div className="bg-brand-charcoal rounded-lg p-8 border border-brand-orange/10">
//   <h2 className="font-serif text-2xl font-bold text-brand-alabaster">Title</h2>
//   <p className="text-brand-muted">Description</p>
// </div>

// Hero Section Pattern:
// <section className="bg-brand-obsidian text-brand-alabaster py-32">
//   <div className="max-w-4xl mx-auto px-6">
//     <h1 className="font-serif text-5xl mb-4">Hero Title</h1>
//     <p className="text-brand-alabaster/80 text-lg">Subtitle</p>
//   </div>
// </section>

// ============================================================================
// GRADIENTS (Custom if needed)
// ============================================================================

// CSS Custom Properties example:
// <div style={{
//   background: `linear-gradient(135deg, ${brandColors.obsidian}, ${brandColors.taupe})`,
// }}>
//   Gradient content
// </div>
