export const homeTheme = {
  colors: {
    backgroundLight: "linear-gradient(135deg, #ffffff 0%, #f9f7f2 100%)",
    backgroundTint: "linear-gradient(135deg, #fbf8f1 0%, #f2ede0 100%)",
    backgroundNeutral: "#ffffff",
    accent: "#bfa974",
    accentMuted: "rgba(191, 169, 116, 0.22)",
    accentDark: "#8f7741",
    textPrimary: "#2c3e50",
    textSecondary: "#5a6c7d",
    divider: "rgba(191, 169, 116, 0.28)",
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Montserrat', sans-serif",
  },
  layout: {
    radiusLg: "20px",
    radiusMd: "16px",
    radiusSm: "12px",
    shadowSoft: "0 12px 35px rgba(15, 27, 41, 0.08)",
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
  py: { xs: 6, md: 10 },
  background: getSectionBackground(variant),
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 20%, rgba(191,169,116,0.22) 0%, transparent 45%)," +
      "radial-gradient(circle at 80% 0%, rgba(191,169,116,0.16) 0%, transparent 55%)",
    opacity: 0.4,
    pointerEvents: "none",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "-20%",
    right: { xs: "-40%", md: "-18%" },
    width: { xs: "320px", md: "420px" },
    height: "140%",
    background: "linear-gradient(180deg, rgba(191,169,116,0.25) 0%, transparent 75%)",
    filter: "blur(10px)",
    opacity: 0.45,
    pointerEvents: "none",
    transform: "rotate(-8deg)",
  },
});

export const containerSx = {
  position: "relative",
  zIndex: 1,
};
