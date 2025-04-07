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
import aboutBg from "../../assets/images/careers_bg.jpg";
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
import {
  DiscriptionTypography,
  ManiHeader,
} from "../../common/headerComponents";

const StyledCard = styled(Card)({
  height: "100%",
  backgroundColor: brandColors.background.primary,
  boxShadow: shadows.small,
  transition: transitions.default,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large,
  },
});

const ValueCard = styled(Card)({
  padding: spacing.xl,
  height: "100%",
  textAlign: "center",
  backgroundColor: brandColors.background.primary,
  transition: transitions.default,
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: shadows.large,
  },
});

const About = () => {
  const values = [
    {
      icon: (
        <Architecture
          sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }}
        />
      ),
      title: "Excellence in Design",
      description:
        "Creating timeless architectural masterpieces that blend aesthetics with functionality.",
    },
    {
      icon: (
        <Engineering sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />
      ),
      title: "Quality Craftsmanship",
      description:
        "Delivering superior construction quality through skilled expertise and attention to detail.",
    },
    {
      icon: (
        <DesignServices
          sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }}
        />
      ),
      title: "Innovative Solutions",
      description:
        "Implementing cutting-edge design and construction techniques for modern living spaces.",
    },
    {
      icon: (
        <EmojiEvents sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />
      ),
      title: "Industry Recognition",
      description:
        "Award-winning projects that set new standards in luxury construction and design.",
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />,
      title: "Expert Team",
      description:
        "A dedicated team of professionals committed to bringing your vision to life.",
    },
    {
      icon: (
        <Business sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />
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
          height: "60vh",
          width: "100%",
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          },
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            variants={FadeIn(0.8)}
            initial="initial"
            animate="animate"
          >
            <Typography
              variant="h1"
              sx={{
                color: brandColors.text.light,
                fontSize: typography.fontSize.h1,
                fontWeight: typography.fontWeight.bold,
                mb: spacing.md,
                fontFamily: typography.fontFamily.heading,
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                letterSpacing: typography.letterSpacing.heading,
                textAlign: "center",
              }}
            >
              About Gruham
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: brandColors.text.light,
                fontSize: typography.fontSize.h3,
                mb: spacing.xl,
                maxWidth: "800px",
                margin: "0 auto",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                fontFamily: typography.fontFamily.body,
                fontWeight: typography.fontWeight.regular,
                letterSpacing: typography.letterSpacing.body,
                textAlign: "center",
              }}
            >
              Building Dreams, Creating Excellence
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision Section */}
      <Container maxWidth="lg" sx={{ py: spacing.xxl }}>
        <motion.div
          variants={FadeIn(0.5)}
          initial="initial"
          whileInView="animate"
        >
          <ManiHeader headerText={"Our Story"} />
          <DiscriptionTypography
            text={`Founded with a vision to transform the construction industry, Gruham
            has been at the forefront of innovative design and exceptional
            craftsmanship.`}
          />
        </motion.div>

        <Grid container spacing={4} sx={{ mb: spacing.xxl }}>
          <Grid item xs={12} md={6}>
            <motion.div
              variants={SlideUp(0.5)}
              initial="initial"
              whileInView="animate"
            >
              <StyledCard>
                <CardContent sx={{ p: spacing.xl }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: typography.fontSize.h4,
                      letterSpacing: typography.letterSpacing.heading,
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
                      fontSize: typography.fontSize.body1,
                      letterSpacing: typography.letterSpacing.body,
                    }}
                  >
                    To deliver exceptional construction and design services that
                    exceed client expectations, while maintaining the highest
                    standards of quality, innovation, and sustainability.
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
                <CardContent sx={{ p: spacing.xl }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.secondary,
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: typography.fontSize.h4,
                      letterSpacing: typography.letterSpacing.heading,
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
                      fontSize: typography.fontSize.body1,
                      letterSpacing: typography.letterSpacing.body,
                    }}
                  >
                    To be the leading construction company known for creating
                    iconic structures that inspire, while fostering innovation
                    and sustainable practices in the industry.
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
          <ManiHeader headerText={"Our Core Values"} />
          <DiscriptionTypography
            text={"The principles that guide our work and define our success"}
          />
        </motion.div>

        <Grid container spacing={4}>
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
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: typography.fontSize.h5,
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
                      fontSize: typography.fontSize.body1,
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
            mt: spacing.xxl,
            p: spacing.xl,
            backgroundColor: brandColors.background.secondary,
            borderRadius: borderRadius.medium,
            boxShadow: shadows.medium,
          }}
        >
          <ManiHeader headerText={"Ready to Start Your Project?"} />
          <DiscriptionTypography
            text={"Let's discuss how we can bring your vision to life"}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: brandColors.primary,
              color: brandColors.text.light,
              px: spacing.xl,
              py: spacing.md,
              fontSize: typography.fontSize.body1,
              fontWeight: typography.fontWeight.semiBold,
              borderRadius: borderRadius.medium,
              textTransform: "none",
              transition: transitions.default,
              fontFamily: typography.fontFamily.body,
              "&:hover": {
                backgroundColor: "#B39375",
                transform: "scale(1.05)",
              },
            }}
          >
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
