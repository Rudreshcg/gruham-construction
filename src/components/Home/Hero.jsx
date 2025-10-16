import React, { useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import landingPageImageWebp from "../../assets/images/hero_new.png";
import landingPageImageJpg from "../../assets/images/heros_image.jpg";
import ContactUs from "./ContactUs";
import RadialGradient from "../../common/RadialGradient";

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

      {/* Simple Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.4)",
          zIndex: 1,
        }}
      />

      {/* Radial Gradient Effect - positioned after overlay */}
      <RadialGradient outerDivRef={maindivRef} />

      {/* Hero Content */}
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
          transform: { 
            xs: "translateY(-35%)", 
            sm: "translateY(-25%)", 
            md: "translateY(-30%)" 
          },
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 16, sm: 18, md: 20 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Main heading */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem", lg: "3.2rem" },
            fontWeight: 800,
            color: "#fff",
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            mb: { xs: 1, sm: 1.5 },
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            textAlign: "center",
            width: "100%",
          }}
        >
          Gruham's
          <br />
          <span style={{ color: "#bfa974" }}>Excellence in Construction</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
            color: "rgba(255, 255, 255, 0.9)",
            mb: { xs: 3, sm: 4, md: 5 },
            maxWidth: { xs: "100%", sm: "90%", md: "80%" },
            lineHeight: 1.4,
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            textAlign: "center",
            px: { xs: 1, sm: 0 },
          }}
        >
          Transform your vision into reality with our premium construction and design services.
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{
            background: "linear-gradient(135deg, #bfa974, #9c8658)",
            color: "#000",
            px: { xs: 3, sm: 4 },
            py: { xs: 1.2, sm: 1.5 },
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
            fontWeight: 700,
            borderRadius: "50px",
            textTransform: "none",
            boxShadow: "0 8px 25px rgba(191, 169, 116, 0.4)",
            transition: "all 0.3s ease",
            width: { xs: "100%", sm: "auto" },
            maxWidth: { xs: "280px", sm: "none" },
            "&:hover": {
              background: "linear-gradient(135deg, #a48d5e, #c5b07a)",
              transform: "translateY(-3px)",
              boxShadow: "0 12px 35px rgba(191, 169, 116, 0.6)",
            },
          }}
        >
          Start Your Project
        </Button>
      </Container>

      {/* Contact Form */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 8, sm: 20, md: 30 },
          left: { xs: "50%", sm: "50%", md: 30 },
          right: { xs: 8, sm: "auto", md: "auto" },
          transform: { xs: "translateX(-50%)", sm: "translateX(-50%)", md: "none" },
          zIndex: 90,
          width: { xs: "240px", sm: "280px", md: "300px" },
          maxWidth: { xs: "calc(100vw - 16px)", sm: "none" },
          display: { xs: "block", sm: "block" },
          overflow: "visible",
        }}
      >
        <ContactUs />
      </Box>
    </Box>
  );
};

export default Hero;