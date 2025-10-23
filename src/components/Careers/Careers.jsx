import React, { useState } from "react";
import { Box, Typography, Button, Container, Grid, Card, Chip, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "../../animation/animate";
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius,
} from "../../theme/designSystem";
import styled from "@emotion/styled";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";

// Accent divider as on Services/Contact pages
const AccentDivider = styled("div")({
  width: 64,
  height: 4,
  borderRadius: 6,
  background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
  margin: "18px auto 0",
});

// HeroSection styled as a neutral content block (not image)
const StyledHeroSection = styled(Box)({
  width: "100%",
  minHeight: 190,
  backgroundColor: brandColors.background.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "48px 0 24px",
  borderBottom: `1.5px solid ${brandColors.border}`,
  boxShadow: "none",
  position: "relative",
  zIndex: 1,
});

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
      "Bachelor's degree in Construction Management or related field",
    ],
    responsibilities: [
      "Manage construction projects from start to finish",
      "Coordinate with clients, architects, and contractors",
      "Ensure projects are completed on time and within budget",
      "Implement quality control measures",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Professional development opportunities",
    ],
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
      "Bachelor's degree in Interior Design",
    ],
    responsibilities: [
      "Create interior design concepts",
      "Select materials, furniture, and accessories",
      "Collaborate with clients to meet their needs",
      "Prepare design presentations",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Design software subscription",
    ],
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
      "Trade certification or equivalent experience",
    ],
    responsibilities: [
      "Supervise construction crews",
      "Ensure compliance with safety regulations",
      "Monitor project progress",
      "Coordinate with subcontractors",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Tool allowance",
    ],
  },
  {
    id: 4,
    title: "Architectural Designer",
    department: "Design",
    location: "Portland, OR",
    type: "Full-time",
    description: "Create innovative architectural designs that meet client needs and exceed expectations.",
    requirements: [
      "5+ years of architectural design experience",
      "Proficiency in AutoCAD, Revit, and other design software",
      "Strong portfolio of completed projects",
      "Bachelor's or Master's degree in Architecture",
    ],
    responsibilities: [
      "Develop architectural designs and plans",
      "Create detailed drawings and specifications",
      "Collaborate with clients and construction teams",
      "Ensure designs meet building codes and regulations",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Professional development opportunities",
    ],
  },
  {
    id: 5,
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Portland, OR",
    type: "Full-time",
    description: "Develop and implement marketing strategies to promote our construction and design services.",
    requirements: [
      "3+ years of marketing experience",
      "Strong written and verbal communication skills",
      "Experience with digital marketing",
      "Bachelor's degree in Marketing or related field",
    ],
    responsibilities: [
      "Develop marketing campaigns",
      "Create content for website and social media",
      "Track marketing performance metrics",
      "Coordinate with external marketing agencies",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Marketing tools and software",
    ],
  },
  {
    id: 6,
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "Portland, OR",
    type: "Full-time",
    description: "Provide exceptional customer service to our clients throughout their project journey.",
    requirements: [
      "2+ years of customer service experience",
      "Excellent communication and problem-solving skills",
      "Ability to work in a fast-paced environment",
      "High school diploma or equivalent",
    ],
    responsibilities: [
      "Respond to client inquiries",
      "Schedule appointments and consultations",
      "Follow up with clients on project status",
      "Resolve client concerns and issues",
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) with company match",
      "Paid time off",
      "Customer service training",
    ],
  },
];

const jobCategories = [
  { id: "all", label: "All Positions" },
  { id: "construction", label: "Construction" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "customer-service", label: "Customer Service" },
];

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState(null);

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
    setSelectedJob(null);
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const filteredJobs =
    selectedCategory === "all"
      ? careers
      : careers.filter(
          (job) =>
            job.department.toLowerCase().replace(/\s/g, "-") === selectedCategory
        );

  return (
    <Box>
      <SEOHead
        title="Careers at Gruham's Construction - Join Our Construction Team in Bangalore"
        description="Join Gruham's Construction (Gruhams) team in Bangalore. Explore construction careers, project management jobs, interior design positions, and architectural roles. Build your career with Gruhams construction company."
        keywords="Gruham construction careers, Gruhams construction jobs, construction jobs Bangalore, gruham construction company careers, construction careers Bangalore, project management jobs, interior design jobs, architectural jobs Bangalore"
        canonical="/careers"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Careers at Gruham's Construction",
          "description": "Join our construction team and build your career with Gruham's Construction in Bangalore.",
          "mainEntity": {
            "@type": "Organization",
            "name": "Gruham's Construction",
            "alternateName": ["Gruhams", "gruham", "gruhams construction"],
            "url": "https://gruhams.in/careers",
            "hasJobPosting": careers.map(job => ({
              "@type": "JobPosting",
              "title": job.title,
              "description": job.description,
              "employmentType": job.type,
              "hiringOrganization": {
                "@type": "Organization",
                "name": "Gruham's Construction"
              },
              "jobLocation": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
                }
              }
            }))
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
            Join Our Team
          </Typography>
          <AccentDivider />
          <Typography
            variant="h5"
            sx={{
              maxWidth: 700,
              mx: "auto",
              mt: spacing.md,
              mb: 0,
              fontFamily: typography.fontFamily.body,
              color: brandColors.text.primary,
              fontSize: { xs: typography.fontSize.body1, md: typography.fontSize.h5 },
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
              opacity: 0.95,
            }}
          >
            Build your career with us and be part of something extraordinary
          </Typography>
        </Container>
      </StyledHeroSection>

      {/* Why Work With Us Section */}
      <Box sx={{ py: spacing.xxl, backgroundColor: brandColors.background.light }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: brandColors.text.secondary,
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.bold,
              mb: spacing.xl,
              textAlign: "center",
              fontFamily: typography.fontFamily.heading,
              letterSpacing: typography.letterSpacing.heading,
            }}
          >
            Why Work With Us
          </Typography>
          <Grid container spacing={spacing.xl}>
            {[
              {
                title: "Growth Opportunities",
                description:
                  "We invest in our employees' development with training programs and career advancement paths.",
              },
              {
                title: "Work-Life Balance",
                description:
                  "We value your time and offer flexible schedules and paid time off to ensure a healthy work-life balance.",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Enjoy comprehensive health insurance, 401(k) matching, and other perks that support your well-being.",
              },
              {
                title: "Inclusive Culture",
                description:
                  "Join a diverse team where everyone's voice matters and collaboration is encouraged.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={SlideUp(0.2 * index)}
                  initial="initial"
                  animate="animate"
                >
                  <Card
                    sx={{
                      p: spacing.lg,
                      height: "100%",
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
                    <Typography
                      variant="h5"
                      sx={{
                        color: brandColors.text.primary,
                        fontSize: typography.fontSize.h5,
                        fontWeight: typography.fontWeight.bold,
                        mb: spacing.md,
                        fontFamily: typography.fontFamily.heading,
                        letterSpacing: typography.letterSpacing.heading,
                      }}
                    >
                      {item.title}
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
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Job Listings Section */}
      <Box sx={{ py: spacing.xxl }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: brandColors.text.secondary,
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.bold,
              mb: spacing.xl,
              textAlign: "center",
              fontFamily: typography.fontFamily.heading,
              letterSpacing: typography.letterSpacing.heading,
            }}
          >
            Open Positions
          </Typography>

          <Box sx={{ mb: spacing.xl }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                borderBottom: 1,
                borderColor: brandColors.border,
                "& .MuiTab-root": {
                  color: brandColors.text.secondary,
                  fontSize: typography.fontSize.body1,
                  fontWeight: typography.fontWeight.medium,
                  textTransform: "none",
                  minWidth: 120,
                  fontFamily: typography.fontFamily.body,
                },
                "& .Mui-selected": {
                  color: brandColors.primary,
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: brandColors.primary,
                },
              }}
            >
              {jobCategories.map((category) => (
                <Tab key={category.id} label={category.label} value={category.id} />
              ))}
            </Tabs>
          </Box>

          <Grid container spacing={spacing.xl}>
            {/* Job List */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxHeight: "600px", overflow: "auto" }}>
                {filteredJobs.map((job) => (
                  <Card
                    key={job.id}
                    sx={{
                      p: spacing.lg,
                      mb: spacing.md,
                      backgroundColor:
                        selectedJob?.id === job.id
                          ? brandColors.primary
                          : brandColors.background.white,
                      color:
                        selectedJob?.id === job.id
                          ? brandColors.text.light
                          : brandColors.text.primary,
                      borderRadius: borderRadius.large,
                      boxShadow: shadows.medium,
                      transition: transitions.default,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: shadows.large,
                      },
                    }}
                    onClick={() => handleJobSelect(job)}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: typography.fontSize.h5,
                        fontWeight: typography.fontWeight.bold,
                        mb: spacing.sm,
                        fontFamily: typography.fontFamily.heading,
                        letterSpacing: typography.letterSpacing.heading,
                      }}
                    >
                      {job.title}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: spacing.sm, mb: spacing.sm }}>
                      <Chip
                        label={job.department}
                        size="small"
                        sx={{
                          backgroundColor:
                            selectedJob?.id === job.id
                              ? "rgba(255, 255, 255, 0.2)"
                              : brandColors.background.light,
                          color:
                            selectedJob?.id === job.id
                              ? brandColors.text.light
                              : brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.caption,
                        }}
                      />
                      <Chip
                        label={job.location}
                        size="small"
                        sx={{
                          backgroundColor:
                            selectedJob?.id === job.id
                              ? "rgba(255, 255, 255, 0.2)"
                              : brandColors.background.light,
                          color:
                            selectedJob?.id === job.id
                              ? brandColors.text.light
                              : brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.caption,
                        }}
                      />
                      <Chip
                        label={job.type}
                        size="small"
                        sx={{
                          backgroundColor:
                            selectedJob?.id === job.id
                              ? "rgba(255, 255, 255, 0.2)"
                              : brandColors.background.light,
                          color:
                            selectedJob?.id === job.id
                              ? brandColors.text.light
                              : brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.caption,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: typography.fontSize.body2,
                        fontFamily: typography.fontFamily.body,
                        letterSpacing: typography.letterSpacing.body,
                      }}
                    >
                      {job.description.substring(0, 100)}...
                    </Typography>
                  </Card>
                ))}
              </Box>
            </Grid>

            {/* Job Details */}
            <Grid item xs={12} md={7}>
              {selectedJob ? (
                <Card
                  sx={{
                    p: spacing.xl,
                    backgroundColor: brandColors.background.white,
                    borderRadius: borderRadius.large,
                    boxShadow: shadows.medium,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: brandColors.text.primary,
                      fontSize: typography.fontSize.h4,
                      fontWeight: typography.fontWeight.bold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    {selectedJob.title}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: spacing.sm, mb: spacing.lg }}>
                    <Chip
                      label={selectedJob.department}
                      sx={{
                        backgroundColor: brandColors.background.light,
                        color: brandColors.text.secondary,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.body2,
                      }}
                    />
                    <Chip
                      label={selectedJob.location}
                      sx={{
                        backgroundColor: brandColors.background.light,
                        color: brandColors.text.secondary,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.body2,
                      }}
                    />
                    <Chip
                      label={selectedJob.type}
                      sx={{
                        backgroundColor: brandColors.background.light,
                        color: brandColors.text.secondary,
                        fontFamily: typography.fontFamily.body,
                        fontSize: typography.fontSize.body2,
                      }}
                    />
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.secondary,
                      fontSize: typography.fontSize.body1,
                      fontFamily: typography.fontFamily.body,
                      letterSpacing: typography.letterSpacing.body,
                      mb: spacing.lg,
                    }}
                  >
                    {selectedJob.description}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.text.primary,
                      fontSize: typography.fontSize.h5,
                      fontWeight: typography.fontWeight.bold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    Requirements
                  </Typography>
                  <Box component="ul" sx={{ pl: spacing.md, mb: spacing.lg }}>
                    {selectedJob.requirements.map((req, index) => (
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

                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.text.primary,
                      fontSize: typography.fontSize.h5,
                      fontWeight: typography.fontWeight.bold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    Responsibilities
                  </Typography>
                  <Box component="ul" sx={{ pl: spacing.md, mb: spacing.lg }}>
                    {selectedJob.responsibilities.map((resp, index) => (
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
                        {resp}
                      </Typography>
                    ))}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.text.primary,
                      fontSize: typography.fontSize.h5,
                      fontWeight: typography.fontWeight.bold,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    Benefits
                  </Typography>
                  <Box component="ul" sx={{ pl: spacing.md, mb: spacing.lg }}>
                    {selectedJob.benefits.map((benefit, index) => (
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
                        {benefit}
                      </Typography>
                    ))}
                  </Box>

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
                </Card>
              ) : (
                <Box
                  sx={{
                    p: spacing.xl,
                    backgroundColor: brandColors.background.light,
                    borderRadius: borderRadius.large,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      color: brandColors.text.secondary,
                      fontSize: typography.fontSize.h5,
                      fontFamily: typography.fontFamily.body,
                      letterSpacing: typography.letterSpacing.body,
                      textAlign: "center",
                    }}
                  >
                    Select a position to view details
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Application Process Section */}
      <Box sx={{ py: spacing.xxl, backgroundColor: brandColors.background.light }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              color: brandColors.text.secondary,
              fontSize: typography.fontSize.h3,
              fontWeight: typography.fontWeight.bold,
              mb: spacing.xl,
              textAlign: "center",
              fontFamily: typography.fontFamily.heading,
              letterSpacing: typography.letterSpacing.heading,
            }}
          >
            Application Process
          </Typography>
          <Grid container spacing={spacing.xl}>
            {[
              {
                step: "1",
                title: "Submit Application",
                description: "Fill out our online application form with your details and resume.",
              },
              {
                step: "2",
                title: "Initial Interview",
                description:
                  "Meet with our HR team to discuss your experience and career goals.",
              },
              {
                step: "3",
                title: "Technical Assessment",
                description:
                  "Complete a skills assessment relevant to the position you're applying for.",
              },
              {
                step: "4",
                title: "Final Interview",
                description:
                  "Meet with the hiring manager and team members to discuss the role in detail.",
              },
              {
                step: "5",
                title: "Offer & Onboarding",
                description:
                  "Receive an offer letter and begin the onboarding process to join our team.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <motion.div variants={SlideUp(0.2 * index)} initial="initial" animate="animate">
                  <Box
                    sx={{
                      p: spacing.lg,
                      height: "100%",
                      backgroundColor: brandColors.background.white,
                      borderRadius: borderRadius.large,
                      boxShadow: shadows.medium,
                      textAlign: "center",
                      position: "relative",
                      transition: transitions.default,
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: shadows.large,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: brandColors.primary,
                        color: brandColors.text.light,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto",
                        mb: spacing.md,
                        fontFamily: typography.fontFamily.heading,
                        fontSize: typography.fontSize.h6,
                        fontWeight: typography.fontWeight.bold,
                      }}
                    >
                      {item.step}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: brandColors.text.primary,
                        fontSize: typography.fontSize.h5,
                        fontWeight: typography.fontWeight.bold,
                        mb: spacing.sm,
                        fontFamily: typography.fontFamily.heading,
                        letterSpacing: typography.letterSpacing.heading,
                      }}
                    >
                      {item.title}
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
                      {item.description}
                    </Typography>
                    {index < 4 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          right: -20,
                          width: 40,
                          height: 2,
                          backgroundColor: brandColors.primary,
                          display: { xs: "none", md: "block" },
                        }}
                      />
                    )}
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Internal Links */}
      <InternalLinks currentPage="careers" />
    </Box>
  );
};

export default Careers;
