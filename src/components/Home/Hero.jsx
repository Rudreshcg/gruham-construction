import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import landingPageImageWebp from "../../assets/images/hero_new.png";
import landingPageImageJpg from "../../assets/images/heros_image.jpg";
import ContactUsModal from "./ContactUsModal";
import RadialGradient from "../../common/RadialGradient";

const Hero = () => {
  const maindivRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  // Auto-popup on every page load/refresh
  useEffect(() => {
    console.log('Setting up auto-popup for every refresh');
    setIsFirstVisit(true);
    // Auto-popup after 1.5 seconds on every page load
    const timer = setTimeout(() => {
      console.log('Auto-opening modal on page load');
      setIsModalOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // No localStorage check - modal will show on every refresh
  };

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
        // p: { xs: 2, sm: 3, md: 4 },
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
          textAlign: "center",
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 8, sm: 10, md: 12 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Main heading */}
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5.5rem" },
            fontWeight: 900,
            color: "#fff",
            textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
            mb: { xs: 2, sm: 3 },
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textAlign: "center",
            width: "100%",
            fontFamily: "'Playfair Display', serif",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              background: "linear-gradient(135deg, #bfa974, #9c8658)",
              borderRadius: "2px",
            }
          }}
        >
          Gruham's
          <br />
          <span style={{ 
            color: "#bfa974",
            background: "linear-gradient(135deg, #bfa974, #f4d03f)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>Excellence in Construction</span>
        </Typography>

        {/* Subtitle */}
        <Typography
          component="h2"
          variant="h5"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            color: "rgba(255, 255, 255, 0.95)",
            mb: { xs: 4, sm: 5, md: 6 },
            maxWidth: { xs: "100%", sm: "90%", md: "70%" },
            lineHeight: 1.6,
            textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            textAlign: "center",
            px: { xs: 1, sm: 0 },
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          Transform your vision into reality with our premium construction and design services. 
          <br />
          <span style={{ 
            color: "#bfa974", 
            fontWeight: 600,
            fontSize: "0.9em"
          }}>
            Building dreams, one project at a time.
          </span>
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          onClick={handleOpenModal}
          sx={{
            background: "linear-gradient(135deg, #bfa974, #9c8658)",
            color: "#000",
            px: { xs: 4, sm: 6, md: 8 },
            py: { xs: 1.5, sm: 2, md: 2.5 },
            fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
            fontWeight: 700,
            borderRadius: "50px",
            textTransform: "none",
            boxShadow: "0 12px 30px rgba(191, 169, 116, 0.5)",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            width: { xs: "100%", sm: "auto" },
            maxWidth: { xs: "320px", sm: "none" },
            fontFamily: "'Montserrat', sans-serif",
            letterSpacing: "0.5px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)",
              transition: "left 0.6s",
            },
            "&:hover": {
              background: "linear-gradient(135deg, #9c8658, #bfa974)",
              transform: "translateY(-4px) scale(1.02)",
              boxShadow: "0 20px 40px rgba(191, 169, 116, 0.7)",
              "&::before": {
                left: "100%",
              },
            },
          }}
        >
          Start Your Project
        </Button>
      </Container>

      {/* Contact Us Modal */}
      <ContactUsModal 
        open={isModalOpen} 
        onClose={handleCloseModal} 
        isFirstVisit={isFirstVisit}
      />
    </Box>
  );
};

export default Hero;