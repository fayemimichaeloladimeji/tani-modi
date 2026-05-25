// Brand Color Palette - Centralized color system
export const brandColors = {
  // Primary Brand Colors
  primaryOrange: "#FF7A3D", // Vibrant orange - primary branding color
  orange: "#E05A16", // Active items, branding icons, accents
  obsidian: "#0D1110", // Master body background
  charcoal: "#111614", // Floating elements, navbar glass base
  alabaster: "#FAF8F5", // Crisp headers and logo white
  muted: "#9E9E9E", // Descriptive, secondary editorial metadata

  // Semantic variants (Tailwind-ready)
  light: "#FAF8F5", // Light backgrounds
  dark: "#0D1110", // Dark backgrounds
  accent: "#FF7A3D", // Primary CTA & highlights
  secondary: "#111614", // Secondary interactions

  // Opacity variants for common use cases
  transparent: {
    primaryOrange: "rgb(255, 122, 61 / <alpha-value>)",
    orange: "rgb(224, 90, 22 / <alpha-value>)",
    obsidian: "rgb(13, 17, 16 / <alpha-value>)",
    charcoal: "rgb(17, 22, 20 / <alpha-value>)",
    alabaster: "rgb(250, 248, 245 / <alpha-value>)",
    muted: "rgb(158, 158, 158 / <alpha-value>)",
  },
};


// Utility function to get color with opacity
export const getColorWithOpacity = (color, opacity) => {
  const rgbMap = {
    primaryOrange: "255 122 61",
    orange: "224 90 22",
    obsidian: "13 17 16",
    charcoal: "17 22 20",
    alabaster: "250 248 245",
    muted: "158 158 158",
  };


  if (rgbMap[color]) {
    return `rgb(${rgbMap[color]} / ${opacity})`;
  }
  return color;
};

// Tailwind CSS config export
export const tailwindBrandConfig = {
  colors: {
    brand: {
      primaryOrange: brandColors.primaryOrange,
      orange: brandColors.orange,
      obsidian: brandColors.obsidian,
      charcoal: brandColors.charcoal,
      alabaster: brandColors.alabaster,
      muted: brandColors.muted,
    },
  },
};
