import React, { useState } from "react";
import { Box, Container, Typography, Button, Stack, Divider } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/images/luxury_villa_hero.png";
import ContactUsModal from "./ContactUsModal";
import "./Hero.css";
import { homeTheme } from "./sectionStyles";

const heroStats = [
  { value: "35+", label: "Projects Delivered" },
  { value: "5+", label: "Years Building Trust" },
  { value: "100%", label: "Client Satisfaction" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: { xs: 760, md: "min(780px, calc(100svh - 72px))" },
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <div className="hero-image-motion" style={{ position: "absolute", inset: 0 }}>
        <Box
          component="img"
          src={heroImage}
          alt=""
          aria-hidden="true"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: { xs: "62% center", md: "center 57%" },
          }}
        />
      </div>
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          inset: 0,
          background: {
            xs: "linear-gradient(90deg, rgba(247,246,242,0.98) 0%, rgba(247,246,242,0.91) 48%, rgba(247,246,242,0.3) 100%), linear-gradient(0deg, #f7f6f2 0%, rgba(247,246,242,0.35) 36%, transparent 72%)",
            md: "linear-gradient(90deg, #f7f6f2 0%, rgba(247,246,242,0.98) 28%, rgba(247,246,242,0.84) 43%, rgba(247,246,242,0.12) 72%, transparent 100%), linear-gradient(0deg, rgba(26,26,26,0.34), transparent 26%)",
          },
        }}
      />
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          py: { xs: 7, md: 8 },
          minHeight: { xs: 760, md: "min(780px, calc(100svh - 72px))" },
        }}
      >
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Stack spacing={{ xs: 2.5, md: 3 }} alignItems="flex-start" textAlign="left" sx={{ maxWidth: 620, py: { xs: 2, md: 4 } }}>
            <Box component="span" className="eyebrow-pill">
              Gruham&apos;s · Bengaluru
            </Box>

            <Box>
              <Typography
                component="h1"
                sx={{
                  fontFamily: homeTheme.fonts.heading,
                  fontSize: { xs: "3.45rem", sm: "4.4rem", md: "5rem" },
                  fontWeight: 400,
                  lineHeight: 1.02,
                  letterSpacing: 0,
                  color: homeTheme.colors.textPrimary,
                  maxWidth: 620,
                }}
              >
                Homes, made for living.
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 2,
                  color: homeTheme.colors.textSecondary,
                  fontFamily: homeTheme.fonts.body,
                  fontSize: { xs: "1rem", md: "1.12rem" },
                  fontWeight: 600,
                  lineHeight: 1.6,
                  letterSpacing: 0,
                  maxWidth: 480,
                }}
              >
                Thoughtful construction and interiors, delivered with clarity from first sketch to final handover.
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: 2,
                  fontFamily: homeTheme.fonts.body,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: homeTheme.colors.textPrimary,
                }}
              >
                Design <Box component="span" sx={{ color: homeTheme.colors.accent }}>·</Box> Build <Box component="span" sx={{ color: homeTheme.colors.accent }}>·</Box> Inspire
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                color: homeTheme.colors.textSecondary,
                fontFamily: homeTheme.fonts.body,
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                maxWidth: 530,
              }}
            >
              One considered team for your home, from architecture and construction through interiors and finishing.
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} width="100%" justifyContent="flex-start" sx={{ pt: 0.5 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={handleOpenModal}
                sx={{
                  background: homeTheme.colors.accent,
                  color: homeTheme.colors.textPrimary,
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  fontWeight: 700,
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: homeTheme.fonts.body,
                  boxShadow: "0 8px 22px rgba(146, 121, 68, 0.2)",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    background: "#d6bd83",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 26px rgba(146, 121, 68, 0.26)",
                  },
                }}
              >
                Start Your Project
              </Button>
              <Button
                variant="outlined"
                onClick={handleNavigatePortfolio}
                sx={{
                  borderColor: "rgba(56, 56, 56, 0.38)",
                  color: homeTheme.colors.textPrimary,
                  px: { xs: 4, md: 5 },
                  py: { xs: 1.4, md: 1.6 },
                  fontSize: { xs: "1rem", md: "1.05rem" },
                  fontWeight: 600,
                  borderRadius: "4px",
                  textTransform: "none",
                  fontFamily: homeTheme.fonts.body,
                  transition: "all 0.35s ease",
                  "&:hover": {
                    color: homeTheme.colors.accentDark,
                    borderColor: homeTheme.colors.accentDark,
                    backgroundColor: homeTheme.colors.accentMuted,
                  },
                }}
              >
                View Portfolio
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 1.5, md: 3 }}
              divider={<Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(56, 56, 56, 0.2)" }} />}
              sx={{ width: "100%", maxWidth: 560, pt: { xs: 1, md: 2 } }}
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                >
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ color: homeTheme.colors.textPrimary, fontFamily: homeTheme.fonts.heading, fontSize: { xs: "1.45rem", md: "1.8rem" }, lineHeight: 1.1 }}>{stat.value}</Typography>
                    <Typography sx={{ mt: 0.7, color: homeTheme.colors.textSecondary, fontFamily: homeTheme.fonts.body, fontSize: "0.65rem", fontWeight: 700, lineHeight: 1.4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{stat.label}</Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          right: { md: 40, lg: 72 },
          bottom: 34,
          zIndex: 1,
          color: "#fff",
          textAlign: "right",
          textShadow: "0 2px 14px rgba(0,0,0,0.42)",
        }}
      >
        <Typography sx={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Gruham&apos;s · Bengaluru
        </Typography>
        <Typography sx={{ mt: 0.6, fontFamily: homeTheme.fonts.heading, fontSize: "1.45rem" }}>
          Built to belong.
        </Typography>
      </Box>
      <ContactUsModal open={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Hero;