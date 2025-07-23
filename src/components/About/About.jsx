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
import aboutBg from "../../assets/images/careers_bg.jpg"; // Ensure this path is correct
import { FadeIn, SlideUp } from "../../animation/animate";
import { styled } from "@mui/material/styles";
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius,
} from "../../theme/designSystem"; // Ensure this designSystem provides breakpoints or use explicit responsive values

// Removed imports for DiscriptionTypography and ManiHeader as their styles are inlined

// Styled components remain, ensuring consistent styling from your design system
const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  backgroundColor: brandColors.background.primary,
  boxShadow: shadows.small,
  transition: transitions.default,
  borderRadius: borderRadius.medium, // Apply border radius from design system
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large,
  },
  [theme.breakpoints.down('sm')]: {
    padding: spacing.md, // Adjust padding on smaller screens
  },
}));

const ValueCard = styled(Card)(({ theme }) => ({
  padding: spacing.xl,
  height: "100%",
  textAlign: "center",
  backgroundColor: brandColors.background.primary,
  boxShadow: shadows.small, // Apply shadow from design system
  borderRadius: borderRadius.medium, // Apply border radius from design system
  transition: transitions.default,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large, // Apply stronger shadow on hover
  },
  [theme.breakpoints.down('sm')]: {
    padding: spacing.md, // Adjust padding on smaller screens
  },
}));

const About = () => {
  const values = [
    {
      icon: (
        <Architecture
          sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }}
        />
      ),
      title: "Excellence in Design",
      description:
        "Creating timeless architectural masterpieces that blend aesthetics with functionality.",
    },
    {
      icon: (
        <Engineering sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }} />
      ),
      title: "Quality Craftsmanship",
      description:
        "Delivering superior construction quality through skilled expertise and attention to detail.",
    },
    {
      icon: (
        <DesignServices
          sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }}
        />
      ),
      title: "Innovative Solutions",
      description:
        "Implementing cutting-edge design and construction techniques for modern living spaces.",
    },
    {
      icon: (
        <EmojiEvents sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }} />
      ),
      title: "Industry Recognition",
      description:
        "Award-winning projects that set new standards in luxury construction and design.",
    },
    {
      icon: <Groups sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }} />,
      title: "Expert Team",
      description:
        "A dedicated team of professionals committed to bringing your vision to life.",
    },
    {
      icon: (
        <Business sx={{ fontSize: { xs: 32, md: 40 }, color: brandColors.primary, mb: { xs: 1, md: 2 } }} />
      ),
      title: "Client Success",
      description:
        "Building lasting relationships through trust, transparency, and exceptional service.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", sm: "50vh", md: "60vh" }, // Responsive height
          width: "100%",
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, sm: 3, md: 4 }, // Add horizontal padding for safety
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1, // Ensure overlay is above image
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}> {/* Ensure content is above overlay */}
          <motion.div
            variants={FadeIn(0.8)}
            initial="initial"
            animate="animate"
          >
            <Typography
              variant="h1"
              sx={{
                color: brandColors.text.light,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" }, // Responsive font size
                fontWeight: typography.fontWeight.bold,
                mb: { xs: 1, md: spacing.md }, // Responsive margin
                fontFamily: typography.fontFamily.heading, // Playfair Display
                textShadow: "2px 2px 6px rgba(0,0,0,0.4)", // Stronger shadow
                letterSpacing: typography.letterSpacing.heading,
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              About Gruham
            </Typography>
            <Typography
              variant="subtitle1" // Semantic change from h2
              sx={{
                color: brandColors.text.light,
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.75rem" }, // Responsive font size
                mb: { xs: 3, md: spacing.xl }, // Responsive margin
                maxWidth: "800px",
                margin: "0 auto", // Centers the text block
                textShadow: "1px 1px 3px rgba(0,0,0,0.3)", // Stronger shadow
                fontFamily: typography.fontFamily.body, // Montserrat
                fontWeight: typography.fontWeight.regular,
                letterSpacing: typography.letterSpacing.body,
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Building Dreams, Creating Excellence
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ py: { xs: spacing.xl, md: spacing.xxl } }}> {/* Responsive padding */}
        <motion.div
          variants={FadeIn(0.5)}
          initial="initial"
          whileInView="animate"
        >
          {/* Replaced ManiHeader */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: typography.fontFamily.heading, // Playfair Display
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              color: brandColors.secondary,
              textAlign: "center",
              mb: { xs: 1, md: spacing.md },
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.heading,
              lineHeight: 1.2,
            }}
          >
            Our Story
          </Typography>
          {/* Replaced DiscriptionTypography */}
          <Typography
            variant="subtitle1"
            sx={{
              color: brandColors.text.secondary,
              textAlign: "center",
              mb: { xs: spacing.xl, md: spacing.xxl }, // Responsive margin
              maxWidth: "800px",
              mx: "auto",
              fontFamily: typography.fontFamily.body, // Montserrat
              fontSize: { xs: "0.95rem", md: "1.15rem" }, // Responsive font size
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 }, // Add horizontal padding for mobile text
            }}
          >
            Founded with a vision to transform the construction industry, Gruham has been at the forefront of innovative design and exceptional craftsmanship.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: spacing.xl, md: spacing.xxl } }}> {/* Responsive spacing and margin */}
          <Grid item xs={12} md={6}>
            <motion.div
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
            >
              <StyledCard>
                <CardContent sx={{ p: { xs: spacing.md, md: spacing.xl } }}> {/* Responsive padding */}
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: { xs: spacing.sm, md: spacing.md }, // Responsive margin
                      fontFamily: typography.fontFamily.heading, // Playfair Display
                      fontSize: { xs: "1.25rem", md: "1.75rem" }, // Responsive font size
                      letterSpacing: typography.letterSpacing.heading,
                      textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      lineHeight: typography.lineHeight.body,
                      fontFamily: typography.fontFamily.body, // Montserrat
                      fontSize: { xs: "0.95rem", md: "1rem" }, // Responsive font size
                      letterSpacing: typography.letterSpacing.body,
                      textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                    }}
                  >
                    To deliver exceptional construction and design services that exceed client expectations, while maintaining the highest standards of quality, innovation, and sustainability.
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={SlideUp(0.7)}
              initial="initial"
              whileInView="animate"
            >
              <StyledCard>
                <CardContent sx={{ p: { xs: spacing.md, md: spacing.xl } }}> {/* Responsive padding */}
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: { xs: spacing.sm, md: spacing.md }, // Responsive margin
                      fontFamily: typography.fontFamily.heading, // Playfair Display
                      fontSize: { xs: "1.25rem", md: "1.75rem" }, // Responsive font size
                      letterSpacing: typography.letterSpacing.heading,
                      textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      lineHeight: typography.lineHeight.body,
                      fontFamily: typography.fontFamily.body, // Montserrat
                      fontSize: { xs: "0.95rem", md: "1rem" }, // Responsive font size
                      letterSpacing: typography.letterSpacing.body,
                      textAlign: { xs: "center", md: "left" }, // Center on mobile, left on desktop
                    }}
                  >
                    To be the leading construction company known for creating iconic structures that inspire, while fostering innovation and sustainable practices in the industry.
                  </Typography>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>

        {/* Values Section */}
        <motion.div
          variants={FadeIn(0.5)}
          initial="initial"
          whileInView="animate"
        >
          {/* Replaced ManiHeader */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: typography.fontFamily.heading, // Playfair Display
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
              color: brandColors.secondary,
              textAlign: "center",
              mb: { xs: 1, md: spacing.md },
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.heading,
              lineHeight: 1.2,
            }}
          >
            Our Core Values
          </Typography>
          {/* Replaced DiscriptionTypography */}
          <Typography
            variant="subtitle1"
            sx={{
              color: brandColors.text.secondary,
              textAlign: "center",
              mb: { xs: spacing.xl, md: spacing.xxl }, // Responsive margin
              maxWidth: "800px",
              mx: "auto",
              fontFamily: typography.fontFamily.body, // Montserrat
              fontSize: { xs: "0.95rem", md: "1.15rem" }, // Responsive font size
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
              px: { xs: 2, sm: 0 }, // Add horizontal padding for mobile text
            }}
          >
            The principles that guide our work and define our success.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, md: 4 }}> {/* Responsive spacing */}
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                variants={SlideUp(0.5 + index * 0.1)}
                initial="initial"
                whileInView="animate"
              >
                <ValueCard>
                  {value.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: { xs: spacing.sm, md: spacing.md }, // Responsive margin
                      fontFamily: typography.fontFamily.heading, // Playfair Display
                      fontSize: { xs: "1.15rem", md: "1.25rem" }, // Responsive font size
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
                      fontFamily: typography.fontFamily.body, // Montserrat
                      fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
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

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: { xs: spacing.xxl, md: spacing.xxxl }, // Responsive top margin
            p: { xs: spacing.xl, md: spacing.xxl }, // Responsive padding
            backgroundColor: brandColors.background.secondary,
            borderRadius: borderRadius.medium,
            boxShadow: shadows.medium,
          }}
        >
          <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
            {/* Replaced ManiHeader */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: typography.fontFamily.heading, // Playfair Display
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" }, // Responsive font size
                color: brandColors.primaryDark, // Use a darker shade for contrast on light background
                textAlign: "center",
                mb: { xs: 1, md: spacing.md },
                fontWeight: typography.fontWeight.bold,
                letterSpacing: typography.letterSpacing.heading,
                lineHeight: 1.2,
              }}
            >
              Ready to Start Your Project?
            </Typography>
            {/* Replaced DiscriptionTypography */}
            <Typography
              variant="subtitle1"
              sx={{
                color: brandColors.text.secondary,
                textAlign: "center",
                mb: { xs: spacing.md, md: spacing.xl }, // Responsive margin
                maxWidth: "600px",
                mx: "auto",
                fontFamily: typography.fontFamily.body, // Montserrat
                fontSize: { xs: "0.9rem", md: "1rem" }, // Responsive font size
                fontWeight: typography.fontWeight.regular,
                letterSpacing: typography.letterSpacing.body,
                lineHeight: 1.5,
                px: { xs: 2, sm: 0 }, // Add horizontal padding for mobile text
              }}
            >
              Let's discuss how we can bring your vision to life.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: brandColors.primary,
                color: brandColors.text.light,
                px: { xs: spacing.lg, md: spacing.xl }, // Responsive padding
                py: { xs: spacing.sm, md: spacing.md }, // Responsive padding
                fontSize: { xs: "0.95rem", md: "1rem" }, // Responsive font size
                fontWeight: typography.fontWeight.semiBold,
                borderRadius: borderRadius.medium,
                textTransform: "none",
                transition: transitions.default,
                fontFamily: typography.fontFamily.body, // Montserrat
                "&:hover": {
                  backgroundColor: "#7a6a4a", // Slightly darker shade for hover
                  transform: "scale(1.05)",
                  boxShadow: shadows.large, // Add subtle shadow on hover
                },
              }}
            >
              Contact Us Today
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;