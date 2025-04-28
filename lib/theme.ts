export const palette = {
  primary: {
    main: "#1F5135", // Elegant deep green
    light: "#3D7B57", // Slightly lighter for hover states
    dark: "#153828", // Very deep for nav, footers
    contrast: "#FFFFFF",
  },

  secondary: {
    main: "#6BA88E", // Soft sage green
    light: "#88BBA1", // Brighter minty-sage
    dark: "#4C8A72", // Muted olive green
    contrast: "#FFFFFF",
  },

  neutral: {
    white: "#FFFFFF",
    background: "#F9F9F7", // Slight off-white with warmth
    lightGrey: "#EAEAE5",
    grey: "#C5C5BD",
    mediumGrey: "#8F8F88",
    darkGrey: "#4A4A44",
    black: "#1A1A1A",
  },

  status: {
    success: "#3D7B57", // Match primary light
    warning: "#A2B78F", // Desaturated green-yellow for softer warning
    error: "#C04040",
    info: "#5B9C8A", // Teal-leaning info tone
  },

  accent: {
    lightGreen: "#D9E7DF", // Soft mint background
    lightSage: "#E5F0EA", // Replacing lightGold
  },
};

// Convert hex to hsl
export function hexToHSL(hex: string): string {
  // Remove the # if present
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find the min and max values to compute the lightness
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // Calculate lightness
  let l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (max !== min) {
    s = l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min);
  }

  // Calculate hue
  let h = 0;
  if (max !== min) {
    if (max === r) {
      h = (g - b) / (max - min) + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / (max - min) + 2;
    } else {
      h = (r - g) / (max - min) + 4;
    }
    h /= 6;
  }

  // Convert to degrees and percentages
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return `${h} ${s}% ${l}%`;
}

// Theme configuration for tailwind
export const theme = {
  light: {
    background: hexToHSL(palette.neutral.background),
    foreground: hexToHSL(palette.neutral.black),
    card: hexToHSL(palette.neutral.white),
    cardForeground: hexToHSL(palette.neutral.black),
    popover: hexToHSL(palette.neutral.white),
    popoverForeground: hexToHSL(palette.neutral.black),
    primary: hexToHSL(palette.primary.main),
    primaryForeground: hexToHSL(palette.primary.contrast),
    secondary: hexToHSL(palette.secondary.main),
    secondaryForeground: hexToHSL(palette.secondary.contrast),
    muted: hexToHSL(palette.neutral.lightGrey),
    mutedForeground: hexToHSL(palette.neutral.mediumGrey),
    accent: hexToHSL(palette.accent.lightGreen),
    accentForeground: hexToHSL(palette.neutral.darkGrey),
    destructive: hexToHSL(palette.status.error),
    destructiveForeground: hexToHSL(palette.neutral.white),
    border: hexToHSL(palette.neutral.lightGrey),
    input: hexToHSL(palette.neutral.lightGrey),
    ring: hexToHSL(palette.primary.main),
    // Chart colors
    chart1: hexToHSL(palette.primary.main),
    chart2: hexToHSL(palette.secondary.main),
    chart3: hexToHSL(palette.secondary.dark),
    chart4: hexToHSL(palette.accent.lightGreen),
    chart5: hexToHSL(palette.status.warning),
    // Sidebar theme
    sidebarBackground: hexToHSL(palette.neutral.background),
    sidebarForeground: hexToHSL(palette.neutral.darkGrey),
    sidebarPrimary: hexToHSL(palette.primary.main),
    sidebarPrimaryForeground: hexToHSL(palette.neutral.white),
    sidebarAccent: hexToHSL(palette.accent.lightSage),
    sidebarAccentForeground: hexToHSL(palette.primary.main),
    sidebarBorder: hexToHSL(palette.neutral.lightGrey),
    sidebarRing: hexToHSL(palette.primary.light),
  },
  dark: {
    background: hexToHSL(palette.neutral.black),
    foreground: hexToHSL(palette.neutral.white),
    card: hexToHSL(palette.neutral.black),
    cardForeground: hexToHSL(palette.neutral.white),
    popover: hexToHSL(palette.neutral.black),
    popoverForeground: hexToHSL(palette.neutral.white),
    primary: hexToHSL(palette.primary.light),
    primaryForeground: hexToHSL(palette.neutral.black),
    secondary: hexToHSL(palette.secondary.dark),
    secondaryForeground: hexToHSL(palette.neutral.white),
    muted: hexToHSL(palette.neutral.darkGrey),
    mutedForeground: hexToHSL(palette.neutral.grey),
    accent: hexToHSL(palette.neutral.darkGrey),
    accentForeground: hexToHSL(palette.neutral.white),
    destructive: hexToHSL(palette.status.error),
    destructiveForeground: hexToHSL(palette.neutral.white),
    border: hexToHSL(palette.neutral.darkGrey),
    input: hexToHSL(palette.neutral.darkGrey),
    ring: hexToHSL(palette.primary.light),
    // Chart colors (slightly adjusted for dark mode visibility)
    chart1: hexToHSL(palette.primary.light),
    chart2: hexToHSL(palette.secondary.light),
    chart3: hexToHSL(palette.status.info),
    chart4: hexToHSL(palette.status.warning),
    chart5: hexToHSL(palette.accent.lightGreen),
    // Sidebar theme
    sidebarBackground: hexToHSL(palette.neutral.darkGrey),
    sidebarForeground: hexToHSL(palette.neutral.background),
    sidebarPrimary: hexToHSL(palette.primary.main),
    sidebarPrimaryForeground: hexToHSL(palette.neutral.white),
    sidebarAccent: hexToHSL(palette.neutral.black),
    sidebarAccentForeground: hexToHSL(palette.neutral.background),
    sidebarBorder: hexToHSL(palette.neutral.black),
    sidebarRing: hexToHSL(palette.primary.light),
  },
};

export const CHART_COLORS = [
  `hsl(var(--chart-1))`,
  `hsl(var(--chart-2))`,
  `hsl(var(--chart-3))`,
  `hsl(var(--chart-4))`,
  `hsl(var(--chart-5))`,
];
