import React from "react";
import { Box, Container } from "@mui/material";
import { sectionWrapperSx, containerSx } from "./sectionStyles";

const SectionWrapper = ({
  children,
  id,
  variant = "light",
  maxWidth = "lg",
  containerProps = {},
  sx = {},
}) => {
  const { sx: containerSxOverride = {}, ...restContainerProps } = containerProps;

  return (
    <Box component="section" id={id} sx={{ ...sectionWrapperSx(variant), ...sx }}>
      <Container
        maxWidth={maxWidth}
        {...restContainerProps}
        sx={{ ...containerSx, ...containerSxOverride }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;
