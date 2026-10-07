import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { homeTheme } from "./sectionStyles";

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  maxWidth = 760,
  gutterBottom = { xs: 4, md: 7 },
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
      <Stack spacing={subtitle ? 1.75 : 1.25} alignItems={alignment} textAlign={align}>
        {eyebrow && (
          <Typography
            component="p"
            className="eyebrow-pill"
            sx={eyebrowSx}
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
              fontWeight: 400,
              fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3.05rem" },
              lineHeight: 1.08,
              letterSpacing: 0,
              color: homeTheme.colors.textPrimary,
              mb: subtitle ? 0.5 : 0,
              position: "relative",
              display: "inline-block",
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
              fontSize: { xs: "0.98rem", md: "1.04rem" },
              lineHeight: 1.75,
              letterSpacing: 0,
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
