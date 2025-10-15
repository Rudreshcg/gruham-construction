import React, { useRef } from "react";
import { Box, Container } from "@mui/material";
import landingPageImageWebp from "../../assets/images/heros_image.jpg";
import landingPageImageJpg from "../../assets/images/heros_image.jpg";
import ContactUs from "./ContactUs"; // ✅ Correct import

const Hero = () => {
  const maindivRef = useRef(null);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 2, sm: 3, md: 4 },
      }}
      ref={maindivRef}
    >
      {/* Background Image */}
      <picture>
        <source srcSet={landingPageImageWebp} type="image/webp" />
        <img
          src={landingPageImageJpg}
          alt="Luxury Living Spaces"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      </picture>

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />

      {/* Hero Content Placeholder */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      />

      {/* Contact Form - Bottom Left */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, sm: 30 },
          left: { xs: 20, sm: 30 },
          zIndex: 100,
        }}
      >
        <ContactUs />
      </Box>
    </Box>
  );
};

export default Hero;
