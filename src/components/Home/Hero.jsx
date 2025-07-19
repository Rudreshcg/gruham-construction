import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingPageImageWebp from "../../assets/images/hero_image.webp"; // WebP version
import landingPageImageJpg from "../../assets/images/hero_image.jpg"; // JPEG fallback
import { SlideUp, FadeIn } from "../../animation/animate";
import RadialGradient from "../../common/RadialGradient";

const Hero = () => {
  const maindivRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex", // Needed for centering content
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        // The backgroundImage CSS property is removed from here
        // as we're now using an <img> tag with <picture>
      }}
      ref={maindivRef}
    >
      {/* Use the <picture> element for responsive image with fallback */}
      {/* Browsers that support WebP will use the <source> tag. */}
      {/* Other browsers (like older Safari) will fall back to the <img> tag. */}
      <picture>
        <source srcSet={landingPageImageWebp} type="image/webp" />
        <img
          src={landingPageImageJpg} // This is your JPEG fallback image
          alt="Luxury Living Spaces" // Important for accessibility
          style={{
            position: "absolute", // Position the image to cover the entire Box
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the area without distortion
            zIndex: 0, // Place the image at the lowest layer
          }}
        />
      </picture>

      {/* Overlay gradient to darken the image and improve text readability */}
      <Box
        sx={{
          content: '""', // Required for pseudo-element (though not strictly needed for a Box)
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",
          zIndex: 1, // Place gradient above the image but below the content
        }}
      />

      {/* Radial gradient effect (assuming this component works as intended) */}
      <RadialGradient outerDivRef={maindivRef} />

      {/* Main content container (text and button) */}
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }} // Ensure content is above image and gradient
      >
        <motion.div variants={FadeIn(0.8)} initial="initial" animate="animate">
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              letterSpacing: "0.02em",
            }}
          >
            Welcome to Gruham
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              mb: 4,
              maxWidth: "800px",
              margin: "0 auto",
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Crafting Luxury Living Spaces with Excellence and Innovation
          </Typography>
          <motion.div variants={SlideUp(1)} initial="initial" animate="animate">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "#95805a",
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                transition: "0.3s",
                fontFamily: "'Montserrat', sans-serif",
                "&:hover": {
                  backgroundColor: "#7a6a4a",
                  transform: "scale(1.05)",
                },
              }}
            >
              Start Your Project
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;