// Semantic color names for consistent component styling
export const themeColors = {
  // Semantic naming for easier component composition
  background: {
    primary: "bg-brand-charcoal", // Dark charcoal body background (no black)
    secondary: "bg-brand-charcoal", // Charcoal for floating elements
    overlay: "bg-brand-charcoal/90", // Semi-transparent dark overlay
  },
  text: {
    primary: "text-brand-alabaster", // Light alabaster text on dark backgrounds
    secondary: "text-brand-muted", // Muted text for metadata
    accent: "text-brand-primary-orange", // Vibrant orange accent text
    muted: "text-brand-muted", // Muted descriptive text
  },
  border: {
    primary: "border-brand-obsidian",
    light: "border-brand-alabaster",
    accent: "border-brand-primary-orange",
  },
  button: {
    primary:
      "bg-brand-primary-orange text-brand-alabaster hover:bg-transparent hover:text-brand-primary-orange border border-brand-primary-orange",
    accent:
      "bg-brand-orange text-brand-alabaster hover:bg-transparent hover:text-brand-orange border border-brand-orange",
    secondary:
      "bg-brand-charcoal text-brand-alabaster hover:bg-transparent hover:text-brand-charcoal border border-brand-charcoal",
  },
  link: {
    base: "transition-colors duration-300",
    hover: "hover:text-brand-primary-orange",
  },
};

// Animation utilities
export const animations = {
  smooth: "transition-all duration-300 ease-in-out",
  smoothSlow: "transition-all duration-500 ease-in-out",
  default: "transition-colors duration-300",
};

// Responsive helpers
export const responsive = {
  hideOnMobile: "hidden md:block",
  showOnMobile: "md:hidden",
};
