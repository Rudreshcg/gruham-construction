import React, { useState } from "react";
import { Box, Typography, Button, Container, Grid, Card, Chip, Tabs, Tab, Paper, Avatar, Divider } from "@mui/material";
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
import { 
  Construction, 
  Engineering, 
  Architecture, 
  Business, 
  Design, 
  Work,
  LocationOn,
  Schedule,
  Star,
  CheckCircle,
  ArrowForward
} from "@mui/icons-material";

// Accent divider as on Services/Contact pages
const AccentDivider = styled("div")({
  width: 64,
  height: 4,
  borderRadius: 6,
  background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
  margin: "18px auto 0",
});

// Modern Hero Section with gradient background
const StyledHeroSection = styled(Box)({
  width: "100%",
  minHeight: "60vh",
  background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 0",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><defs><pattern id=\"grain\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"1\" fill=\"%23bfa974\" opacity=\"0.1\"/></pattern></defs><rect width=\"100\" height=\"100\" fill=\"url(%23grain)\"/></svg>')",
    opacity: 0.3,
  },
});

// Glassmorphism Card
const GlassCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
});

// Gradient Button
const GradientButton = styled(Button)({
  background: "linear-gradient(45deg, #bfa974 0%, #f6e8b8 100%)",
  color: "#1a1a1a",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "12px",
  padding: "12px 32px",
  fontSize: "16px",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "linear-gradient(45deg, #f6e8b8 0%, #bfa974 100%)",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(191, 169, 116, 0.4)",
  },
});

const careers = [
  {
    id: 1,
    title: "Construction Project Manager",
    department: "Construction",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "5-8 years",
    description: "Lead and manage construction projects from conception to completion, ensuring quality, safety, and timely delivery of luxury residential and commercial projects.",
    requirements: [
      "5+ years of construction project management experience in residential/commercial projects",
      "Strong leadership and communication skills with team management experience",
      "Knowledge of construction processes, safety regulations, and quality standards",
      "Bachelor's degree in Civil Engineering, Construction Management, or related field",
      "Proficiency in project management software and tools",
    ],
    responsibilities: [
      "Manage construction projects from planning to completion",
      "Coordinate with clients, architects, engineers, and contractors",
      "Ensure projects are completed on time, within budget, and to quality standards",
      "Implement safety protocols and quality control measures",
      "Prepare project reports and maintain documentation",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Comprehensive health insurance coverage",
      "Provident Fund with company contribution",
      "Paid time off and festival holidays",
      "Professional development and training opportunities",
      "Site allowance and transportation benefits",
    ],
  },
  {
    id: 2,
    title: "Interior Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Create stunning interior designs for luxury homes and commercial spaces, bringing client visions to life with innovative design solutions.",
    requirements: [
      "3+ years of interior design experience in residential/commercial projects",
      "Proficiency in AutoCAD, SketchUp, 3D Max, and other design software",
      "Strong portfolio showcasing luxury residential and commercial projects",
      "Bachelor's degree in Interior Design or Architecture",
      "Knowledge of materials, finishes, and construction processes",
    ],
    responsibilities: [
      "Create comprehensive interior design concepts and layouts",
      "Select materials, furniture, fixtures, and accessories",
      "Collaborate with clients to understand their vision and requirements",
      "Prepare detailed design presentations and 3D visualizations",
      "Coordinate with construction teams for design implementation",
    ],
    benefits: [
      "Competitive salary with design project bonuses",
      "Health insurance and wellness programs",
      "Provident Fund with company contribution",
      "Design software licenses and tools provided",
      "Creative workspace and design resources",
      "Opportunity to work on luxury projects",
    ],
  },
  {
    id: 3,
    title: "Site Engineer",
    department: "Construction",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Oversee construction activities on-site, ensuring quality workmanship, safety compliance, and adherence to project specifications.",
    requirements: [
      "2+ years of construction site experience",
      "Strong technical knowledge of construction processes",
      "Knowledge of safety regulations and quality standards",
      "Bachelor's degree in Civil Engineering or Construction Technology",
      "Ability to read and interpret construction drawings",
    ],
    responsibilities: [
      "Supervise construction activities and ensure quality workmanship",
      "Monitor project progress and maintain construction schedules",
      "Ensure compliance with safety regulations and quality standards",
      "Coordinate with contractors, suppliers, and site workers",
      "Maintain site documentation and progress reports",
    ],
    benefits: [
      "Competitive salary with site allowances",
      "Health insurance and safety equipment provided",
      "Provident Fund with company contribution",
      "Professional development opportunities",
      "Site accommodation and transportation",
      "Safety training and certifications",
    ],
  },
  {
    id: 4,
    title: "Architectural Designer",
    department: "Design",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "4-6 years",
    description: "Design innovative architectural solutions for residential and commercial projects, creating functional and aesthetically pleasing spaces.",
    requirements: [
      "4+ years of architectural design experience",
      "Proficiency in AutoCAD, Revit, SketchUp, and other design software",
      "Strong portfolio of completed residential and commercial projects",
      "Bachelor's or Master's degree in Architecture",
      "Knowledge of building codes, regulations, and construction processes",
    ],
    responsibilities: [
      "Develop architectural designs and detailed construction plans",
      "Create 3D models and visualizations for client presentations",
      "Collaborate with clients, engineers, and construction teams",
      "Ensure designs meet building codes and regulatory requirements",
      "Prepare construction drawings and specifications",
    ],
    benefits: [
      "Competitive salary with design excellence bonuses",
      "Health insurance and wellness programs",
      "Provident Fund with company contribution",
      "Latest design software and tools provided",
      "Creative design studio environment",
      "Opportunity to work on diverse architectural projects",
    ],
  },
  {
    id: 5,
    title: "Construction Marketing Specialist",
    department: "Marketing",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-4 years",
    description: "Develop and execute marketing strategies to promote Gruham's construction services and build brand awareness in the construction industry.",
    requirements: [
      "2+ years of marketing experience, preferably in construction/real estate",
      "Strong written and verbal communication skills",
      "Experience with digital marketing, social media, and content creation",
      "Bachelor's degree in Marketing, Communications, or related field",
      "Knowledge of construction industry and target audience",
    ],
    responsibilities: [
      "Develop and execute marketing campaigns for construction services",
      "Create engaging content for website, social media, and marketing materials",
      "Manage social media presence and online reputation",
      "Track marketing performance and analyze campaign results",
      "Coordinate with external agencies and vendors",
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Health insurance and wellness programs",
      "Provident Fund with company contribution",
      "Marketing tools and software licenses",
      "Creative workspace and marketing resources",
      "Opportunity to build brand in construction industry",
    ],
  },
  {
    id: 6,
    title: "Construction Sales Executive",
    department: "Sales",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "2-5 years",
    description: "Build relationships with potential clients and drive sales for construction projects, helping clients realize their dream homes and commercial spaces.",
    requirements: [
      "2+ years of sales experience, preferably in construction/real estate",
      "Excellent communication and interpersonal skills",
      "Strong understanding of construction services and project requirements",
      "Bachelor's degree in Business, Marketing, or related field",
      "Ability to understand client needs and provide solutions",
    ],
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain relationships with potential clients",
      "Present construction services and project proposals",
      "Follow up with leads and convert prospects to clients",
      "Maintain client database and sales records",
    ],
    benefits: [
      "Competitive salary with commission structure",
      "Health insurance and wellness programs",
      "Provident Fund with company contribution",
      "Sales training and development programs",
      "Client entertainment and networking opportunities",
      "Performance-based incentives and bonuses",
    ],
  },
];

const jobCategories = [
  { id: "all", label: "All Positions" },
  { id: "construction", label: "Construction" },
  { id: "design", label: "Design" },
  { id: "marketing", label: "Marketing" },
  { id: "sales", label: "Sales" },
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
        <Container maxWidth="lg" sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: typography.fontFamily.heading,
                color: "#ffffff",
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                letterSpacing: "-0.02em",
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #bfa974 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build Your Career
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: typography.fontFamily.heading,
                color: "#bfa974",
                fontWeight: 600,
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                mb: 3,
              }}
            >
              with Gruham's Construction
            </Typography>
            <AccentDivider />
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: "auto",
                mt: 4,
                mb: 4,
                fontFamily: typography.fontFamily.body,
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              Join our construction team and help build the future of Bangalore. Be part of creating exceptional homes and commercial spaces that define luxury living.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
              <GradientButton size="large" startIcon={<Work />}>
                View Open Positions
              </GradientButton>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#bfa974",
                  borderColor: "#bfa974",
                  px: 4,
                  py: 1.5,
                  fontSize: "16px",
                  fontWeight: 600,
                  borderRadius: "12px",
                  "&:hover": {
                    borderColor: "#f6e8b8",
                    backgroundColor: "rgba(191, 169, 116, 0.1)",
                  },
                }}
                startIcon={<Star />}
              >
                Why Join Us
              </Button>
            </Box>
          </motion.div>
        </Container>
      </StyledHeroSection>

      {/* Why Work With Us Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#1a1a1a",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                textAlign: "center",
                fontFamily: typography.fontFamily.heading,
              }}
            >
              Why Choose Gruham's?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                fontSize: "1.2rem",
                textAlign: "center",
                mb: 6,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Discover what makes us the preferred choice for construction professionals
            </Typography>
          </motion.div>
          
          <Grid container spacing={4}>
            {[
              {
                icon: <Construction sx={{ fontSize: 40, color: "#bfa974" }} />,
                title: "Construction Excellence",
                description: "Work on premium construction projects and develop expertise in luxury residential and commercial construction.",
                color: "#bfa974",
              },
              {
                icon: <Engineering sx={{ fontSize: 40, color: "#bfa974" }} />,
                title: "Professional Growth",
                description: "Advance your career with training programs, certifications, and opportunities to lead major construction projects.",
                color: "#bfa974",
              },
              {
                icon: <Star sx={{ fontSize: 40, color: "#bfa974" }} />,
                title: "Competitive Benefits",
                description: "Enjoy comprehensive health insurance, Provident Fund, site allowances, and performance-based bonuses.",
                color: "#bfa974",
              },
              {
                icon: <Architecture sx={{ fontSize: 40, color: "#bfa974" }} />,
                title: "Team Collaboration",
                description: "Join a collaborative team of architects, engineers, and construction professionals working together.",
                color: "#bfa974",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: "100%",
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(191, 169, 116, 0.1)",
                      transition: "all 0.3s ease",
                      position: "relative",
                      overflow: "hidden",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 60px rgba(191, 169, 116, 0.2)",
                        "& .icon-container": {
                          transform: "scale(1.1)",
                        },
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${item.color} 0%, #f6e8b8 100%)`,
                      },
                    }}
                  >
                    <Box
                      className="icon-container"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "20px",
                        backgroundColor: `${item.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#1a1a1a",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        mb: 2,
                        fontFamily: typography.fontFamily.heading,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        fontFamily: typography.fontFamily.body,
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
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#ffffff" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#1a1a1a",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                textAlign: "center",
                fontFamily: typography.fontFamily.heading,
              }}
            >
              Open Positions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                fontSize: "1.2rem",
                textAlign: "center",
                mb: 6,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Find your perfect role in our construction team
            </Typography>
          </motion.div>

          <Box sx={{ mb: 6 }}>
            <Paper
              sx={{
                p: 2,
                borderRadius: "16px",
                backgroundColor: "#f8f9fa",
                border: "1px solid rgba(191, 169, 116, 0.1)",
              }}
            >
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  "& .MuiTab-root": {
                    color: "#666",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    minWidth: 140,
                    px: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    margin: "0 4px",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(191, 169, 116, 0.1)",
                      color: "#bfa974",
                    },
                  },
                  "& .Mui-selected": {
                    color: "#ffffff",
                    backgroundColor: "#bfa974",
                    "&:hover": {
                      backgroundColor: "#bfa974",
                    },
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                {jobCategories.map((category) => (
                  <Tab key={category.id} label={category.label} value={category.id} />
                ))}
              </Tabs>
            </Paper>
          </Box>

          <Grid container spacing={4}>
            {/* Job List */}
            <Grid item xs={12} md={5}>
              <Box sx={{ maxHeight: "700px", overflow: "auto", pr: 2 }}>
                {filteredJobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card
                      sx={{
                        p: 3,
                        mb: 3,
                        backgroundColor: selectedJob?.id === job.id ? "#bfa974" : "#ffffff",
                        color: selectedJob?.id === job.id ? "#ffffff" : "#1a1a1a",
                        borderRadius: "16px",
                        boxShadow: selectedJob?.id === job.id 
                          ? "0 10px 40px rgba(191, 169, 116, 0.3)" 
                          : "0 5px 20px rgba(0, 0, 0, 0.1)",
                        border: selectedJob?.id === job.id 
                          ? "2px solid #bfa974" 
                          : "1px solid rgba(191, 169, 116, 0.1)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: selectedJob?.id === job.id 
                            ? "0 15px 50px rgba(191, 169, 116, 0.4)" 
                            : "0 10px 30px rgba(0, 0, 0, 0.15)",
                        },
                        "&::before": selectedJob?.id === job.id ? {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: "linear-gradient(90deg, #f6e8b8 0%, #ffffff 100%)",
                        } : {},
                      }}
                      onClick={() => handleJobSelect(job)}
                    >
                      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                        <Avatar
                          sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: selectedJob?.id === job.id ? "rgba(255, 255, 255, 0.2)" : "#bfa974",
                            color: selectedJob?.id === job.id ? "#ffffff" : "#1a1a1a",
                            fontWeight: "bold",
                            fontSize: "1.2rem",
                          }}
                        >
                          {job.department.charAt(0)}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              mb: 1,
                              fontFamily: typography.fontFamily.heading,
                            }}
                          >
                            {job.title}
                          </Typography>
                          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                            <Chip
                              icon={<LocationOn sx={{ fontSize: 16 }} />}
                              label={job.location}
                              size="small"
                              sx={{
                                backgroundColor: selectedJob?.id === job.id 
                                  ? "rgba(255, 255, 255, 0.2)" 
                                  : "#f8f9fa",
                                color: selectedJob?.id === job.id ? "#ffffff" : "#666",
                                fontSize: "0.8rem",
                                height: 28,
                              }}
                            />
                            <Chip
                              icon={<Schedule sx={{ fontSize: 16 }} />}
                              label={job.experience}
                              size="small"
                              sx={{
                                backgroundColor: selectedJob?.id === job.id 
                                  ? "rgba(255, 255, 255, 0.2)" 
                                  : "#bfa974",
                                color: selectedJob?.id === job.id ? "#ffffff" : "#ffffff",
                                fontSize: "0.8rem",
                                height: 28,
                              }}
                            />
                            <Chip
                              label={job.type}
                              size="small"
                              sx={{
                                backgroundColor: selectedJob?.id === job.id 
                                  ? "rgba(255, 255, 255, 0.2)" 
                                  : "#f8f9fa",
                                color: selectedJob?.id === job.id ? "#ffffff" : "#666",
                                fontSize: "0.8rem",
                                height: 28,
                              }}
                            />
                          </Box>
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              lineHeight: 1.5,
                              opacity: 0.9,
                            }}
                          >
                            {job.description.substring(0, 120)}...
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Job Details */}
            <Grid item xs={12} md={7}>
              {selectedJob ? (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      p: 4,
                      backgroundColor: "#ffffff",
                      borderRadius: "20px",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(191, 169, 116, 0.1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                      <Avatar
                        sx={{
                          width: 60,
                          height: 60,
                          backgroundColor: "#bfa974",
                          color: "#ffffff",
                          fontWeight: "bold",
                          fontSize: "1.5rem",
                        }}
                      >
                        {selectedJob.department.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "1.8rem",
                            fontWeight: 700,
                            mb: 1,
                            fontFamily: typography.fontFamily.heading,
                          }}
                        >
                          {selectedJob.title}
                        </Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          <Chip
                            icon={<LocationOn sx={{ fontSize: 16 }} />}
                            label={selectedJob.location}
                            sx={{
                              backgroundColor: "#f8f9fa",
                              color: "#666",
                              fontSize: "0.9rem",
                            }}
                          />
                          <Chip
                            icon={<Schedule sx={{ fontSize: 16 }} />}
                            label={selectedJob.experience}
                            sx={{
                              backgroundColor: "#bfa974",
                              color: "#ffffff",
                              fontSize: "0.9rem",
                            }}
                          />
                          <Chip
                            label={selectedJob.type}
                            sx={{
                              backgroundColor: "#f8f9fa",
                              color: "#666",
                              fontSize: "0.9rem",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#666",
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                        mb: 4,
                        fontFamily: typography.fontFamily.body,
                      }}
                    >
                      {selectedJob.description}
                    </Typography>

                    <Grid container spacing={3}>
                      <Grid item xs={12} md={4}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: typography.fontFamily.heading,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <CheckCircle sx={{ color: "#bfa974", fontSize: 20 }} />
                          Requirements
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {selectedJob.requirements.map((req, index) => (
                            <Typography
                              key={index}
                              component="li"
                              variant="body2"
                              sx={{
                                color: "#666",
                                fontSize: "0.95rem",
                                lineHeight: 1.6,
                                mb: 1,
                                fontFamily: typography.fontFamily.body,
                              }}
                            >
                              {req}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: typography.fontFamily.heading,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Work sx={{ color: "#bfa974", fontSize: 20 }} />
                          Responsibilities
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {selectedJob.responsibilities.map((resp, index) => (
                            <Typography
                              key={index}
                              component="li"
                              variant="body2"
                              sx={{
                                color: "#666",
                                fontSize: "0.95rem",
                                lineHeight: 1.6,
                                mb: 1,
                                fontFamily: typography.fontFamily.body,
                              }}
                            >
                              {resp}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>

                      <Grid item xs={12} md={4}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: typography.fontFamily.heading,
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}
                        >
                          <Star sx={{ color: "#bfa974", fontSize: 20 }} />
                          Benefits
                        </Typography>
                        <Box component="ul" sx={{ pl: 2 }}>
                          {selectedJob.benefits.map((benefit, index) => (
                            <Typography
                              key={index}
                              component="li"
                              variant="body2"
                              sx={{
                                color: "#666",
                                fontSize: "0.95rem",
                                lineHeight: 1.6,
                                mb: 1,
                                fontFamily: typography.fontFamily.body,
                              }}
                            >
                              {benefit}
                            </Typography>
                          ))}
                        </Box>
                      </Grid>
                    </Grid>

                    <Box sx={{ mt: 4, textAlign: "center" }}>
                      <GradientButton
                        size="large"
                        endIcon={<ArrowForward />}
                        sx={{ px: 6, py: 2, fontSize: "1.1rem" }}
                      >
                        Apply for this Position
                      </GradientButton>
                    </Box>
                  </Card>
                </motion.div>
              ) : (
                <Box
                  sx={{
                    p: 6,
                    backgroundColor: "#f8f9fa",
                    borderRadius: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "2px dashed rgba(191, 169, 116, 0.3)",
                  }}
                >
                  <Work sx={{ fontSize: 80, color: "#bfa974", mb: 2, opacity: 0.5 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#666",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      mb: 1,
                      fontFamily: typography.fontFamily.heading,
                    }}
                  >
                    Select a Position
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#999",
                      fontSize: "1rem",
                      fontFamily: typography.fontFamily.body,
                    }}
                  >
                    Choose a job from the list to view detailed information
                  </Typography>
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Application Process Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#f8f9fa" }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#1a1a1a",
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 700,
                mb: 2,
                textAlign: "center",
                fontFamily: typography.fontFamily.heading,
              }}
            >
              How to Join Our Team
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#666",
                fontSize: "1.2rem",
                textAlign: "center",
                mb: 6,
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Our streamlined hiring process designed for construction professionals
            </Typography>
          </motion.div>
          
          {/* Process Timeline */}
          <Box sx={{ position: "relative", mb: 8 }}>
            {/* Timeline Line */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "10%",
                right: "10%",
                height: "4px",
                background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                borderRadius: "2px",
                display: { xs: "none", md: "block" },
                zIndex: 1,
              }}
            />
            
            <Grid container spacing={4}>
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Fill out our online application form with your construction experience and portfolio.",
                  icon: <Work sx={{ fontSize: 30 }} />,
                  color: "#bfa974"
                },
                {
                  step: "2",
                  title: "Initial Screening",
                  description: "Meet with our HR team to discuss your construction background and career aspirations.",
                  icon: <Business sx={{ fontSize: 30 }} />,
                  color: "#bfa974"
                },
                {
                  step: "3",
                  title: "Technical Assessment",
                  description: "Complete a construction skills assessment and portfolio review relevant to your role.",
                  icon: <Engineering sx={{ fontSize: 30 }} />,
                  color: "#bfa974"
                },
                {
                  step: "4",
                  title: "Site Visit & Interview",
                  description: "Visit our construction sites and meet with project managers to understand our work environment.",
                  icon: <Construction sx={{ fontSize: 30 }} />,
                  color: "#bfa974"
                },
                {
                  step: "5",
                  title: "Offer & Onboarding",
                  description: "Receive an offer letter and begin construction-specific onboarding to join our team.",
                  icon: <Star sx={{ fontSize: 30 }} />,
                  color: "#bfa974"
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ position: "relative", zIndex: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      {/* Step Circle */}
                      <Box
                        sx={{
                          width: 100,
                          height: 100,
                          borderRadius: "50%",
                          backgroundColor: item.color,
                          color: "white",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto",
                          mb: 3,
                          boxShadow: `0 10px 30px ${item.color}40`,
                          transition: "all 0.3s ease",
                          position: "relative",
                          "&:hover": {
                            transform: "scale(1.1)",
                            boxShadow: `0 15px 40px ${item.color}60`,
                          },
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -4,
                            left: -4,
                            right: -4,
                            bottom: -4,
                            borderRadius: "50%",
                            background: `linear-gradient(45deg, ${item.color} 0%, #f6e8b8 100%)`,
                            zIndex: -1,
                          },
                        }}
                      >
                        <Box sx={{ mb: 1 }}>
                          {item.icon}
                        </Box>
                        <Typography
                          sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "white",
                          }}
                        >
                          {item.step}
                        </Typography>
                      </Box>
                      
                      {/* Content Card */}
                      <Card
                        sx={{
                          p: 3,
                          backgroundColor: "#ffffff",
                          borderRadius: "20px",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                          border: `2px solid ${item.color}20`,
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            boxShadow: "0 20px 60px rgba(191, 169, 116, 0.2)",
                            borderColor: item.color,
                          },
                          minHeight: "220px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          position: "relative",
                          overflow: "hidden",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "4px",
                            background: `linear-gradient(90deg, ${item.color} 0%, #f6e8b8 100%)`,
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#1a1a1a",
                            fontSize: "1.2rem",
                            fontWeight: 700,
                            mb: 2,
                            fontFamily: typography.fontFamily.heading,
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#666",
                            fontSize: "0.95rem",
                            fontFamily: typography.fontFamily.body,
                            lineHeight: 1.6,
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Card>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                textAlign: "center",
                p: 6,
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(191, 169, 116, 0.2)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "6px",
                  background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)",
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#1a1a1a",
                  fontSize: { xs: "1.8rem", md: "2.5rem" },
                  fontWeight: 700,
                  mb: 2,
                  fontFamily: typography.fontFamily.heading,
                }}
              >
                Ready to Build Your Career?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#666",
                  fontSize: "1.2rem",
                  fontFamily: typography.fontFamily.body,
                  mb: 4,
                  maxWidth: "700px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                Join our construction team and be part of creating exceptional homes and commercial spaces in Bangalore. Start your journey with Gruham's today.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
                <GradientButton
                  size="large"
                  startIcon={<Work />}
                  sx={{ px: 6, py: 2, fontSize: "1.1rem" }}
                >
                  Apply Now
                </GradientButton>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "#bfa974",
                    borderColor: "#bfa974",
                    px: 6,
                    py: 2,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "12px",
                    "&:hover": {
                      borderColor: "#f6e8b8",
                      backgroundColor: "rgba(191, 169, 116, 0.1)",
                    },
                  }}
                  startIcon={<Star />}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Internal Links */}
      <InternalLinks currentPage="careers" />
    </Box>
  );
};

export default Careers;
