import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingPageImageWebp from "../../assets/images/contact-bg.jpeg";
import landingPageImageJpg from "../../assets/images/heros_image.jpg";
import ContactUsModal from "./ContactUsModal";
import { homeTheme } from "./sectionStyles";

const heroHighlights = [
  "Luxury Residences",
  "Commercial Spaces",
  "Turnkey Interiors",
];

const heroStats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "5+", label: "Years Building Trust" },
  { value: "100%", label: "Client Satisfaction" },
];

const Hero = () => {
  const navigate = useNavigate();
  const maindivRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    setIsFirstVisit(true);
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNavigatePortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <Box
      ref={maindivRef}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <picture>
          <source srcSet={landingPageImageWebp} type="image/webp" />
          <img
            src={landingPageImageJpg}
            alt="Luxury Living Spaces"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </picture>
      </motion.div>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(120deg, rgba(8,12,20,0.78) 0%, rgba(10,18,30,0.65) 45%, rgba(8,12,20,0.35) 100%)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "-40%",
          right: "-10%",
          width: { xs: "320px", md: "520px" },
          height: "160%",
          background: "radial-gradient(circle at center, rgba(191,169,116,0.35), transparent 70%)",
          filter: "blur(0px)",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="md"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 10, md: 14 },
        }}
      >
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Stack spacing={{ xs: 3, md: 4 }} alignItems="center" textAlign="center">
            <Stack direction="row" spacing={1.5} flexWrap="wrap" justifyContent="center" useFlexGap sx={{ maxWidth: "520px" }}>
              {heroHighlights.map((highlight) => (
                <Chip
                  key={highlight}
                  label={highlight}
                  sx={{
                    backgroundColor: "rgba(191, 169, 116, 0.18)",
                    color: "#f7f4ec",
                    border: "1px solid rgba(191, 169, 116, 0.4)",
                    fontFamily: homeTheme.fonts.body,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    fontSize: "0.7rem",
                  }}
                />
              ))}
            </Stack>

            <Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: homeTheme.fonts.heading,
                  fontSize: { xs: "3rem", sm: "3.6rem", md: "4.2rem" },
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "0 16px 32px rgba(0,0,0,0.32)",
                }}
              >
                Gruham&apos;s
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 1.5,
                  fontFamily: homeTheme.fonts.body,
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "rgba(247, 244, 236, 0.75)",
                }}
              >
                Design • Build • Inspire
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(247, 244, 236, 0.9)",
                fontFamily: homeTheme.fonts.body,
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.75,
                maxWidth: "640px",
              }}
            >
              Luxury homes, bespoke interiors, and commercial environments crafted with precision in Bangalore. Partner with us to bring your next project to life—
              <Box
                component="span"
                sx={{
                  background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                seamlessly and beautifully.
              </Box>
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} width="100%" justifyContent="center">
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleOpenModal}
                sx={{
                  background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                  color: "#0f121a",
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  fontWeight: 700,
                  borderRadius: "999px",
                  textTransform: "none",
                  fontFamily: homeTheme.fonts.body,
                  boxShadow: "0 18px 40px rgba(191, 169, 116, 0.45)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    background: `linear-gradient(135deg, ${homeTheme.colors.accentDark}, ${homeTheme.colors.accent})`,
                    transform: "translateY(-4px)",
                    boxShadow: "0 24px 48px rgba(191, 169, 116, 0.6)",
                  },
                }}
              >
                Start Your Project
              </Button>
              <Button
                variant="outlined"
                onClick={handleNavigatePortfolio}
                sx={{
                  borderColor: "rgba(247, 244, 236, 0.6)",
                  color: "#f7f4ec",
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  fontWeight: 600,
                  borderRadius: "999px",
                  textTransform: "none",
                  fontFamily: homeTheme.fonts.body,
                  backdropFilter: "blur(6px)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    borderColor: homeTheme.colors.accent,
                    color: homeTheme.colors.accent,
                    backgroundColor: "rgba(247, 244, 236, 0.12)",
                  },
                }}
              >
                View Portfolio
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              justifyContent="center"
              sx={{ maxWidth: "640px" }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <Chip
                    label={`${stat.value} ${stat.label}`}
                    sx={{
                      background: "rgba(15, 18, 26, 0.55)",
                      color: "#f7f4ec",
                      border: "1px solid rgba(191, 169, 116, 0.45)",
                      fontFamily: homeTheme.fonts.body,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      fontSize: "0.68rem",
                      px: 1.8,
                      py: 0.45,
                      borderRadius: "999px",
                      backdropFilter: "blur(8px)",
                      "&:hover": {
                        background: "rgba(191, 169, 116, 0.26)",
                        color: "#0f121a",
                      },
                    }}
                  />
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>

      <ContactUsModal open={isModalOpen} onClose={handleCloseModal} isFirstVisit={isFirstVisit} />
    </Box>
  );
};

export default Hero;