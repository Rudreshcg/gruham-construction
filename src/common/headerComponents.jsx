import { Typography } from "@mui/material";
import { brandColors, spacing, typography } from "../theme/designSystem";

export const ManiHeader = ({ headerText }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: typography.fontFamily.heading,
        fontSize: typography.fontSize.h2,
        color: brandColors.secondary,
        textAlign: "center",
        mb: spacing.md,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: typography.letterSpacing.heading,
      }}
    >
      {headerText}
    </Typography>
  );
};

export const DiscriptionTypography = ({ text }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        color: brandColors.text.secondary,
        textAlign: "center",
        mb: spacing.xl,
        maxWidth: "800px",
        mx: "auto",
        fontFamily: typography.fontFamily.body,
        fontSize: typography.fontSize.h6,
        fontWeight: typography.fontWeight.regular,
        letterSpacing: typography.letterSpacing.body,
      }}
    >
      {text}
    </Typography>
  );
};
