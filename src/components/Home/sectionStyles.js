export const homeTheme = {
  colors: {
    backgroundLight: "#f6f2eb",
    backgroundTint: "#f0ece4",
    backgroundNeutral: "#fffdf9",
    accent: "#b8924a",
    accentMuted: "rgba(184, 146, 74, 0.12)",
    accentDark: "#7a623a",
    textPrimary: "#1d1d1b",
    textSecondary: "#5d5a56",
    divider: "rgba(29, 29, 27, 0.1)",
    forest: "#2e2d2b",
  },
  fonts: {
    heading: "'DM Serif Display', Georgia, serif",
    body: "'Manrope', 'Segoe UI', sans-serif",
  },
  layout: {
    radiusLg: "18px",
    radiusMd: "14px",
    radiusSm: "10px",
    shadowSoft: "0 18px 40px rgba(27, 24, 19, 0.06)",
    shadowCard: "0 12px 28px rgba(27, 24, 19, 0.04)",
  },
};

export const getSectionBackground = (variant = "light") => {
  switch (variant) {
    case "tint":
      return homeTheme.colors.backgroundTint;
    case "white":
      return homeTheme.colors.backgroundNeutral;
    default:
      return homeTheme.colors.backgroundLight;
  }
};

export const sectionWrapperSx = (variant = "light") => ({
  position: "relative",
  py: { xs: 7, md: 12 },
  background: getSectionBackground(variant),
  overflow: "hidden",
});

export const containerSx = {
  position: "relative",
  zIndex: 1,
};
