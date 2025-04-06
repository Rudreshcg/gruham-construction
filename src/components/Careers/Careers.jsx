import React from "react";
import { Box, Typography, Button, Container, Grid, Card } from "@mui/material";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "../../animation/animate";
import { 
  brandColors, 
  typography, 
  spacing, 
  shadows, 
  transitions,
  borderRadius
} from "../../theme/designSystem";

const careers = [
  {
    id: 1,
    title: "Project Manager",
    department: "Construction",
    location: "Portland, OR",
    type: "Full-time",
    description: "We are seeking an experienced Project Manager to oversee construction projects and ensure successful delivery.",
    requirements: [
      "5+ years of construction project management experience",
      "Strong leadership and communication skills",
      "Knowledge of construction processes and regulations",
      "Bachelor's degree in Construction Management or related field"
    ]
  },
  {
    id: 2,
    title: "Interior Designer",
    department: "Design",
    location: "Portland, OR",
    type: "Full-time",
    description: "Join our design team to create beautiful and functional spaces for our clients.",
    requirements: [
      "3+ years of interior design experience",
      "Proficiency in design software",
      "Strong portfolio of completed projects",
      "Bachelor's degree in Interior Design"
    ]
  },
  {
    id: 3,
    title: "Construction Supervisor",
    department: "Construction",
    location: "Portland, OR",
    type: "Full-time",
    description: "Lead construction teams and ensure quality workmanship on all projects.",
    requirements: [
      "7+ years of construction experience",
      "Strong leadership and problem-solving skills",
      "Knowledge of safety regulations",
      "Trade certification or equivalent experience"
    ]
  }
];

const Careers = () => {
  return (
    <Box sx={{ py: spacing.xxl, backgroundColor: brandColors.background.light }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.8)} initial="initial" animate="animate">
          <Typography
            variant="h2"
            sx={{
              color: brandColors.text.primary,
              fontSize: typography.fontSize.h2,
              fontWeight: typography.fontWeight.bold,
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              letterSpacing: typography.letterSpacing.heading,
              textAlign: "center"
            }}
          >
            Join Our Team
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: brandColors.text.secondary,
              fontSize: typography.fontSize.h3,
              mb: spacing.xl,
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: typography.fontFamily.body,
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              textAlign: "center"
            }}
          >
            Build your career with us and be part of something extraordinary
          </Typography>
        </motion.div>

        <Grid container spacing={spacing.xl}>
          {careers.map((career) => (
            <Grid item xs={12} key={career.id}>
              <motion.div variants={SlideUp(0.5)} initial="initial" animate="animate">
                <Card
                  sx={{
                    p: spacing.xl,
                    backgroundColor: brandColors.background.white,
                    borderRadius: borderRadius.large,
                    boxShadow: shadows.medium,
                    transition: transitions.default,
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: shadows.large,
                    },
                  }}
                >
                  <Grid container spacing={spacing.lg}>
                    <Grid item xs={12} md={8}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: brandColors.text.primary,
                          fontSize: typography.fontSize.h4,
                          fontWeight: typography.fontWeight.bold,
                          mb: spacing.sm,
                          fontFamily: typography.fontFamily.heading,
                          letterSpacing: typography.letterSpacing.heading,
                        }}
                      >
                        {career.title}
                      </Typography>
                      <Box sx={{ mb: spacing.md }}>
                        <Typography
                          variant="body1"
                          sx={{
                            color: brandColors.text.secondary,
                            fontSize: typography.fontSize.body1,
                            fontFamily: typography.fontFamily.body,
                            letterSpacing: typography.letterSpacing.body,
                            mb: spacing.xs,
                          }}
                        >
                          Department: {career.department}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: brandColors.text.secondary,
                            fontSize: typography.fontSize.body1,
                            fontFamily: typography.fontFamily.body,
                            letterSpacing: typography.letterSpacing.body,
                            mb: spacing.xs,
                          }}
                        >
                          Location: {career.location}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: brandColors.text.secondary,
                            fontSize: typography.fontSize.body1,
                            fontFamily: typography.fontFamily.body,
                            letterSpacing: typography.letterSpacing.body,
                          }}
                        >
                          Type: {career.type}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          color: brandColors.text.secondary,
                          fontSize: typography.fontSize.body1,
                          fontFamily: typography.fontFamily.body,
                          letterSpacing: typography.letterSpacing.body,
                          mb: spacing.md,
                        }}
                      >
                        {career.description}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: brandColors.text.primary,
                          fontSize: typography.fontSize.h6,
                          fontWeight: typography.fontWeight.bold,
                          mb: spacing.sm,
                          fontFamily: typography.fontFamily.heading,
                          letterSpacing: typography.letterSpacing.heading,
                        }}
                      >
                        Requirements:
                      </Typography>
                      <Box component="ul" sx={{ pl: spacing.md, mb: spacing.md }}>
                        {career.requirements.map((req, index) => (
                          <Typography
                            key={index}
                            component="li"
                            variant="body1"
                            sx={{
                              color: brandColors.text.secondary,
                              fontSize: typography.fontSize.body1,
                              fontFamily: typography.fontFamily.body,
                              letterSpacing: typography.letterSpacing.body,
                              mb: spacing.xs,
                            }}
                          >
                            {req}
                          </Typography>
                        ))}
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                        Apply Now
                      </Button>
                    </Grid>
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Careers;