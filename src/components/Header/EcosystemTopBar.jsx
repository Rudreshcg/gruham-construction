import React from "react";
import { Box, Typography } from "@mui/material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

const GOLD = "#b8924a";
const DARK_SLATE = "#151e28";

const EcosystemTopBar = () => {
  const brands = [
    {
      name: "Gruham Construction",
      tagline: "Turnkey Civil Builds",
      url: "https://www.gruhams.in",
      icon: <HomeWorkOutlinedIcon sx={{ fontSize: "0.95rem" }} />,
      isCurrent: true,
    },
    {
      name: "Gruhams XR Studio",
      tagline: "1:1 Life-Size Walkthrough",
      url: "https://gruhamsxrstudio.com",
      icon: <ViewInArOutlinedIcon sx={{ fontSize: "0.95rem" }} />,
      isCurrent: false,
    },
    {
      name: "Tvashta Interior",
      tagline: "Luxury Atelier",
      url: "https://tvashtainterior.com",
      icon: <ChairOutlinedIcon sx={{ fontSize: "0.95rem" }} />,
      isCurrent: false,
    },
  ];

  return (
    <Box
      component="aside"
      aria-label="Gruham & Tvashta Living Group Ecosystem"
      sx={{
        bgcolor: DARK_SLATE,
        borderBottom: "1px solid rgba(184, 146, 74, 0.22)",
        py: { xs: 0.6, md: 0.75 },
        px: { xs: 1.5, sm: 3, md: 6 },
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-between" },
        flexWrap: "wrap",
        gap: { xs: 1, sm: 1.5 },
        fontFamily: "var(--font-body, 'Manrope', sans-serif)",
        position: "relative",
        zIndex: 1102,
        transition: "all 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 1.2,
        }}
      >
        <Box
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: GOLD,
            boxShadow: "0 0 8px rgba(184, 146, 74, 0.8)",
          }}
        />
        <Typography
          sx={{
            fontFamily: "var(--font-body, 'Manrope', sans-serif)",
            fontSize: "0.7rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9aaec1",
            fontWeight: 700,
          }}
        >
          Gruham & Tvashta Living Group
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.8, sm: 1.6, md: 2.4 },
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {brands.map((brand) => {
          const content = (
            <>
              <Box
                sx={{
                  color: brand.isCurrent ? GOLD : "#899bb0",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.25s ease, transform 0.25s ease",
                }}
              >
                {brand.icon}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                    fontSize: { xs: "0.7rem", sm: "0.74rem" },
                    fontWeight: brand.isCurrent ? 700 : 500,
                    letterSpacing: "0.04em",
                    color: brand.isCurrent ? "#f0e6d2" : "#9aaec1",
                    whiteSpace: "nowrap",
                    transition: "color 0.25s ease",
                  }}
                >
                  {brand.name}
                </Typography>
                {brand.isCurrent ? (
                  <Box
                    component="span"
                    sx={{
                      bgcolor: "rgba(184, 146, 74, 0.2)",
                      color: "#f0e6d2",
                      fontSize: "0.58rem",
                      px: 0.7,
                      py: 0.15,
                      borderRadius: "50px",
                      border: "1px solid rgba(184, 146, 74, 0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 700,
                      ml: 0.3,
                      display: { xs: "none", sm: "inline-block" },
                    }}
                  >
                    Current Firm
                  </Box>
                ) : (
                  <NorthEastRoundedIcon
                    sx={{
                      fontSize: "0.7rem",
                      color: GOLD,
                      opacity: 0.8,
                      transition: "transform 0.2s ease, opacity 0.2s ease",
                    }}
                  />
                )}
              </Box>
            </>
          );

          return brand.isCurrent ? (
            <Box
              key={brand.name}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                px: { xs: 1, sm: 1.2 },
                py: 0.3,
                borderRadius: "50px",
                bgcolor: "rgba(184, 146, 74, 0.1)",
                border: "1px solid rgba(184, 146, 74, 0.25)",
              }}
            >
              {content}
            </Box>
          ) : (
            <Box
              key={brand.name}
              component="a"
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                textDecoration: "none",
                px: { xs: 0.8, sm: 1.2 },
                py: 0.3,
                borderRadius: "50px",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "rgba(184, 146, 74, 0.15)",
                  "& span": { color: "#ffffff" },
                  "& .MuiSvgIcon-root": { color: "#ffffff", transform: "translateY(-1px)" },
                },
              }}
            >
              {content}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default EcosystemTopBar;
