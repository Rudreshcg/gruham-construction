import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingPageImageWebp from "../../assets/images/hero_image.webp"; // WebP version
import landingPageImageJpg from "../../assets/images/hero_image.jpg"; // JPEG fallback
import { SlideUp, FadeIn } from "../../animation/animate";
import RadialGradient from "../../common/RadialGradient"; // Assuming this component is correctly implemented

const Hero = () => {
  const maindivRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // Using minHeight with 100vh for better mobile compatibility
        // 100dvh (dynamic viewport height) is a newer, more robust option for mobile
        // but 100vh is widely supported.
        minHeight: "100vh",
        maxWidth: "100%",
        overflow: "hidden", // Prevents scrollbars if content slightly overflows
        display: "flex",
        flexDirection: "column", // Ensure content stacks vertically
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center", // Center text within the Box itself
        p: { xs: 2, sm: 3, md: 4 }, // Add padding around the entire hero section for mobile safety
      }}
      ref={maindivRef}
    >
      {/* Background Image with <picture> for WebP and JPEG fallback */}
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
            objectFit: "cover", // Ensures the image covers the area without distortion
            zIndex: 0, // Image at the lowest layer
          }}
        />
      </picture>

      {/* Overlay gradient for text readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",
          zIndex: 1, // Gradient above image, below content
        }}
      />

      {/* Radial gradient effect (assuming this component works as intended) */}
      {/* Ensure RadialGradient's internal z-index is managed relative to other layers */}
      <RadialGradient outerDivRef={maindivRef} />

      {/* Main content container (text and button) */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2, // Ensure content is above image and gradients
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%", // Allow container to take full height for vertical centering
          py: { xs: 4, sm: 6, md: 0 }, // Add vertical padding to container on smaller screens
        }}
      >
        <motion.div variants={FadeIn(0.8)} initial="initial" animate="animate">
          <Typography
            variant="h1"
            sx={{
              color: "white",
              // Responsive font sizes for main heading
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
              fontWeight: 700,
              mb: { xs: 1.5, md: 2 }, // Adjusted margin bottom for mobile
              fontFamily: "'Playfair Display', serif", // Ensure this font is loaded globally
              textShadow: "2px 2px 4px rgba(0,0,0,0.4)", // Slightly stronger shadow
              letterSpacing: { xs: "0.01em", md: "0.02em" }, // Adjust letter spacing for mobile
              lineHeight: { xs: 1.2, md: 1.1 }, // Adjust line height for better readability
            }}
          >
            Welcome to Gruham
          </Typography>
          <Typography
            variant="h2" // Using h2 for semantic hierarchy, but styled as a subheading
            sx={{
              color: "white",
              // Responsive font sizes for subheading
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" },
              mb: { xs: 3, md: 4 }, // Adjusted margin bottom for mobile
              maxWidth: "800px",
              margin: "0 auto", // Centers the text block
              textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
              fontFamily: "'Montserrat', sans-serif", // Ensure this font is loaded globally
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.5,
              px: { xs: 2, sm: 0 }, // Add horizontal padding for very small screens
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
                px: { xs: 3, md: 4 }, // Responsive horizontal padding
                py: { xs: 1.2, md: 1.5 }, // Responsive vertical padding
                fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none", // Keeps button text as is (e.g., "Start Your Project")
                transition: "0.3s",
                fontFamily: "'Montserrat', sans-serif",
                "&:hover": {
                  backgroundColor: "#7a6a4a",
                  transform: "scale(1.05)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.2)", // Add subtle shadow on hover
                },
                mt: { xs: 1, md: 0 }, // Add top margin on mobile if needed
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