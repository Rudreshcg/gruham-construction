import React, { useRef, useState, useEffect } from "react";
import { Box, Container, Typography, Button, Stack, Chip } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/luxury_villa_hero.png";
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
        <img
          src={heroImage}
          alt="Luxury Living Spaces"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10, 10, 10, 0.3) 0%, rgba(10, 10, 10, 0.75) 50%, rgba(10, 10, 10, 0.9) 100%)",
          zIndex: 1,
        }}
      />

      {/* Radial glow removed for better text contrast */}

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
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: { xs: "4rem", sm: "4.8rem", md: "5.5rem" },
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "0.02em",
                  color: "#bca061",
                  textShadow: "0 4px 20px rgba(0,0,0,1)",
                }}
              >
                Gruham&apos;s
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 1.5,
                  fontFamily: homeTheme.fonts.body,
                  fontWeight: 500,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255, 255, 255, 1)",
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                Design • Build • Inspire
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 1)",
                fontFamily: homeTheme.fonts.body,
                fontSize: { xs: "1.05rem", md: "1.18rem" },
                lineHeight: 1.75,
                textShadow: "0 2px 8px rgba(0,0,0,0.8)",
                maxWidth: "640px",
              }}
            >
              Luxury homes, bespoke interiors, and commercial environments crafted with precision in Bangalore. Partner with us to bring your next project to life—
              <Box
                component="span"
                sx={{
                  color: "#bca061",
                  fontWeight: 600,
                  textShadow: "0 2px 8px rgba(0,0,0,0.8)",
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