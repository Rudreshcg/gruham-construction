import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { homeTheme } from "./sectionStyles";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  maxWidth = 760,
  gutterBottom = { xs: 4, md: 6 },
  eyebrowProps = {},
  titleProps = {},
  subtitleProps = {},
}) => {
  const { sx: eyebrowSx = {}, ...restEyebrowProps } = eyebrowProps;
  const { sx: titleSx = {}, ...restTitleProps } = titleProps;
  const { sx: subtitleSx = {}, ...restSubtitleProps } = subtitleProps;

  const alignment = align === "center" ? "center" : "flex-start";

  return (
    <Box
      sx={{
        textAlign: align,
        mx: align === "center" ? "auto" : 0,
        mb: gutterBottom,
        maxWidth: align === "center" ? maxWidth : "100%",
      }}
    >
      <Stack spacing={subtitle ? 3 : 2} alignItems={alignment} textAlign={align}>
        {eyebrow && (
          <Typography
            component="p"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: 2,
              py: 0.5,
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              backgroundColor: homeTheme.colors.accentMuted,
              color: homeTheme.colors.accentDark,
              fontFamily: homeTheme.fonts.body,
              ...eyebrowSx,
            }}
            {...restEyebrowProps}
          >
            {eyebrow}
          </Typography>
        )}

        {title && (
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontFamily: homeTheme.fonts.heading,
              fontWeight: 800,
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.1rem" },
              letterSpacing: "-0.02em",
              color: homeTheme.colors.textPrimary,
              mb: subtitle ? 1 : 0,
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: "-10px",
                left: align === "center" ? "50%" : 0,
                transform: align === "center" ? "translateX(-50%)" : "none",
                width: "72px",
                height: "4px",
                borderRadius: "999px",
                background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
              },
              ...titleSx,
            }}
            {...restTitleProps}
          >
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography
            component="p"
            sx={{
              color: homeTheme.colors.textSecondary,
              fontFamily: homeTheme.fonts.body,
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.7,
              letterSpacing: "0.01em",
              mx: align === "center" ? "auto" : 0,
              maxWidth: align === "center" ? maxWidth : "620px",
              ...subtitleSx,
            }}
            {...restSubtitleProps}
          >
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Box>
  );
};

export default SectionHeading;
