import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Architecture,
  Engineering,
  DesignServices,
  EmojiEvents,
  Groups,
  Business,
} from "@mui/icons-material";
import { FadeIn, SlideUp } from "../../animation/animate";
import { styled } from "@mui/material/styles";
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius,
} from "../../theme/designSystem";
import { Link } from "react-router-dom";
import Team from "./Team"; // Your reusable team component
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

const AccentDivider = styled("div")({
  width: 64,
  height: 4,
  borderRadius: 6,
  background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
  margin: "18px auto 0",
});

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  backgroundColor: brandColors.background.primary,
  boxShadow: shadows.small,
  transition: transitions.default,
  borderRadius: borderRadius.medium,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large,
  },
  [theme.breakpoints.down("sm")]: {
    padding: spacing.md,
  },
}));

const ValueCard = styled(Card)(({ theme }) => ({
  padding: spacing.xl,
  height: "100%",
  textAlign: "center",
  backgroundColor: brandColors.background.primary,
  boxShadow: shadows.small,
  borderRadius: borderRadius.medium,
  transition: transitions.default,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large,
  },
  [theme.breakpoints.down("sm")]: {
    padding: spacing.md,
  },
}));

const StyledHeroSection = styled(Box)({
  width: "100%",
  minHeight: 200,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: brandColors.background.light,
  boxShadow: "none",
  borderBottom: `1.5px solid ${brandColors.border}`,
  position: "relative",
  zIndex: 1,
  padding: "56px 24px 32px",
});

const About = () => {
  const values = [
    {
      icon: (
        <Architecture
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Visionary Design",
      description:
        "We blend creativity, utility, and sustainability to craft architectural landmarks that enrich communities.",
    },
    {
      icon: (
        <Engineering
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Uncompromising Quality",
      description:
        "Every Gruham project upholds the highest construction standards, delivering lasting value and reliability.",
    },
    {
      icon: (
        <DesignServices
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Innovation at Core",
      description:
        "Pioneering new technologies and materials to realize safer, smarter, and more efficient spaces.",
    },
    {
      icon: (
        <EmojiEvents
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Award-Winning Results",
      description:
        "Our commitment to excellence is recognized through industry accolades and continuous client satisfaction.",
    },
    {
      icon: (
        <Groups
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Collaborative Spirit",
      description:
        "From architects and engineers to clients and communities, we build together for shared success.",
    },
    {
      icon: (
        <Business
          sx={{
            fontSize: { xs: 36, md: 44 },
            color: brandColors.primary,
            mb: { xs: 2, md: 3 },
          }}
        />
      ),
      title: "Enduring Partnerships",
      description:
        "We believe in trust, transparency, and building relationships that last well beyond project delivery.",
    },
  ];

  return (
    <Box>
      <SEOHead
        title="About Gruham's Construction - Leading Construction Company in Bangalore"
        description="Learn about Gruham's Construction (Gruhams), a premier construction company in Bangalore. Discover our mission, values, and commitment to delivering exceptional construction services, luxury homes, and commercial buildings with Gruhams construction team."
        keywords="about Gruham construction, about Gruhams construction, gruham construction company, construction company Bangalore, construction mission, construction values, Bangalore construction team, construction expertise, Gruhams construction team, gruham construction about"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Gruham's Construction",
            "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
            "url": "https://gruhams.in/about"
          }
        }}
      />
      {/* Hero Section */}
      <StyledHeroSection>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: typography.fontFamily.heading,
              color: brandColors.secondary,
              fontWeight: typography.fontWeight.bold,
              fontSize: { xs: typography.fontSize.h3, md: typography.fontSize.h2 },
              letterSpacing: typography.letterSpacing.heading,
              mb: 0,
            }}
          >
            Welcome to Gruham
          </Typography>
          <AccentDivider />
          <Typography
            variant="subtitle1"
            sx={{
              color: brandColors.text.primary,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" },
              mb: { xs: 4, md: spacing.xl },
              maxWidth: 800,
              mx: "auto",
              fontFamily: typography.fontFamily.body,
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              textAlign: "center",
              lineHeight: 1.5,
              opacity: 0.95,
            }}
          >
            Transforming the spaces where you live, work, and dream.
          </Typography>
        </Container>
      </StyledHeroSection>

      {/* Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: spacing.xl, md: spacing.xxl } }}>
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Typography
            variant="h3"
            sx={{
              fontFamily: typography.fontFamily.heading,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: brandColors.secondary,
              textAlign: "center",
              mb: spacing.md,
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.heading,
              lineHeight: 1.2,
            }}
          >
            Built on Vision. Driven by Values.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: brandColors.text.secondary,
              textAlign: "center",
              mb: spacing.xxl,
              maxWidth: 800,
              mx: "auto",
              fontFamily: typography.fontFamily.body,
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 },
            }}
          >
            Gruham was founded on a simple but powerful idea: to create spaces that elevate everyday
            living. With unwavering passion, technical expertise, and a commitment to clients,
            we've become a trusted name in construction—delivering iconic projects across residential,
            commercial, and landmark developments.
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: spacing.xxl }}>
          <Grid item xs={12} md={6}>
            <motion.div variants={SlideUp(0.5)} initial="initial" whileInView="animate">
              <StyledCard>
                <CardContent sx={{ p: { xs: spacing.md, md: spacing.xl } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: { xs: "1.25rem", md: "1.75rem" },
                      letterSpacing: typography.letterSpacing.heading,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      lineHeight: typography.lineHeight.body,
                      fontFamily: typography.fontFamily.body,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      letterSpacing: typography.letterSpacing.body,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    To deliver inspiring, sustainable, and technically excellent environments—placing
                    each client's aspirations at the heart of our craft.
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div variants={SlideUp(0.7)} initial="initial" whileInView="animate">
              <StyledCard>
                <CardContent sx={{ p: { xs: spacing.md, md: spacing.xl } }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: { xs: "1.25rem", md: "1.75rem" },
                      letterSpacing: typography.letterSpacing.heading,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      lineHeight: typography.lineHeight.body,
                      fontFamily: typography.fontFamily.body,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      letterSpacing: typography.letterSpacing.body,
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    To be India's most admired and innovative construction company—setting
                    benchmarks in design, quality, and client experience.
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Values Section */}
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Typography
            variant="h3"
            sx={{
              fontFamily: typography.fontFamily.heading,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              color: brandColors.secondary,
              textAlign: "center",
              mb: spacing.md,
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.heading,
              lineHeight: 1.2,
            }}
          >
            What Sets Us Apart
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: brandColors.text.secondary,
              textAlign: "center",
              mb: spacing.xxl,
              maxWidth: 800,
              mx: "auto",
              fontFamily: typography.fontFamily.body,
              fontSize: { xs: "0.95rem", md: "1.15rem" },
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 },
            }}
          >
            Discover the foundational values and principles that define the Gruham difference.
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={SlideUp(0.5 + index * 0.1)} initial="initial" whileInView="animate">
                <ValueCard>
                  {value.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: { xs: "1.15rem", md: "1.25rem" },
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    {value.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      lineHeight: typography.lineHeight.body,
                      fontFamily: typography.fontFamily.body,
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      letterSpacing: typography.letterSpacing.body,
                    }}
                  >
                    {value.description}
                  </Typography>
                </ValueCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <Team />

        {/* Internal Links */}
        <InternalLinks currentPage="about" />

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: "center",
            mt: spacing.xxxl,
            p: { xs: spacing.xl, md: spacing.xxl },
            backgroundColor: brandColors.background.secondary,
            borderRadius: borderRadius.medium,
            boxShadow: shadows.medium,
          }}
        >
          <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
            <Typography
              variant="h3"
              sx={{
                fontFamily: typography.fontFamily.heading,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                color: brandColors.secondary,
                textAlign: "center",
                mb: spacing.md,
                fontWeight: typography.fontWeight.bold,
                letterSpacing: typography.letterSpacing.heading,
                lineHeight: 1.2,
              }}
            >
              Let's Build Your Vision Together
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: brandColors.text.secondary,
                textAlign: "center",
                mb: spacing.xl,
                maxWidth: 600,
                mx: "auto",
                fontFamily: typography.fontFamily.body,
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: typography.fontWeight.regular,
                letterSpacing: typography.letterSpacing.body,
                lineHeight: 1.5,
                px: { xs: 2, sm: 0 },
              }}
            >
              Whether you're starting a new project or looking for a partner to bring your vision to
              reality, the Gruham team is here to help. Reach out and let's make something
              extraordinary together.
            </Typography>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                  px: spacing.lg,
                  py: spacing.sm,
                  minWidth: 174,
                  fontFamily: typography.fontFamily.body,
                  fontSize: typography.fontSize.body1,
                  fontWeight: typography.fontWeight.semiBold,
                  textTransform: "none",
                  color: "#332900",
                  boxShadow: "0 6px 24px #bfa9741c",
                  borderRadius: "14px",
                  letterSpacing: "0.05em",
                  transition: "background .28s, box-shadow .28s, color .14s",
                  "&:hover": {
                    background: "#B39375",
                    color: "#fffbe7",
                  },
                }}
              >
                Contact Gruham
              </Button>
            </Link>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
