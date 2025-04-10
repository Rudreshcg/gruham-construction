import React, { useRef } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingPageImage from "../../assets/images/hero_image.webp";
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
        backgroundImage: `url(${landingPageImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))",
          zIndex: 1,
        },
      }}
      ref={maindivRef}
    >
      <RadialGradient outerDivRef={maindivRef} />
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
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
