import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Card,
  CardContent,
  Button
} from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  brandColors,
  typography,
  spacing,
  shadows,
  borderRadius
} from "../../theme/designSystem";
import { Link } from 'react-router-dom';


// Import your image
import homeConstructionImage from '../../assets/images/home-construction.png';
import homeRenovationImage from '../../assets/images/home-renovation.png'
import homeConsultingImage from '../../assets/images/home-consulting.png'
import outdoorLivingImage from '../../assets/images/outdoor-living-space.png'
import InteriorImage from '../../assets/images/interior-designing.png'
import ProjectManagementImage from '../../assets/images/planning-management.png'
import commercialContructionImage from '../../assets/images/commercial-construct.png'
import architectureStructural from '../../assets/images/architecture-structural.png'
import ResidentialDevImage from '../../assets/images/residential-development.png'


const ServiceIcon = styled(Box)(({ theme }) => ({
  width: '250px',
  height: '150px',
  // borderRadius: '50%',
  backgroundColor: brandColors.primary, // Gold background for icons
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: spacing.md,
  boxShadow: shadows.medium,
  overflow: 'hidden', // Ensures the image is clipped to the circle
  '& img': {
    width: '100%', // Make the image fill the container
    height: '100%', // Make the image fill the container
    objectFit: 'cover', // Cover the area without distortion
  },
}));

const Services = () => {
  // Define the services data with more content
  const servicesData = [
    {
      title: "Home Renovation",
      description: "Upgrade your existing spaces with modern designs, superior craftsmanship, and attention to detail to make your home feel brand new. We handle everything from minor updates to major overhauls, ensuring a seamless transformation that reflects your style and enhances functionality.",
      image: homeRenovationImage
    },
    {
      title: "Home Construction",
      description: "Build your dream home from the ground up with expert planning, quality materials, and flawless execution tailored to your preferences. Our team works closely with you through every phase, from initial design concepts to the final touches, to ensure your vision becomes a reality.",
      image: homeConstructionImage, // Use the imported image
    },
    {
      title: "Outdoor Living Spaces",
      description: "Transforming your outdoor areas into functional and stunning spaces, including patios, gardens, decks, and more, designed for relaxation and entertainment. We create bespoke outdoor environments that seamlessly blend with your home's architecture and the natural landscape.",
      image: outdoorLivingImage, // Use the imported image
    },
    {
      title: "Home Consulting",
      description: "Get expert advice on optimizing your space, materials, and budget to ensure your construction project meets your expectations. Our consultants provide valuable insights and strategic guidance to help you make informed decisions throughout the entire project lifecycle.",
      image: homeConsultingImage, // Use the imported image
    },
    {
      title: "Interior Designing",
      description: "Elevate your interiors with stylish and functional designs that blend aesthetics with practicality, selecting your unique personality. From concept development to material selection and furniture placement, we create harmonious and inviting indoor spaces.",
      image: InteriorImage, // Use the imported image
    },
    {
      title: "Planning Management",
      description: "Enjoy a hassle-free experience with our end-to-end project management, covering timelines, budgeting, and seamless coordination. We meticulously plan and execute every step, ensuring your project progresses smoothly and efficiently from start to finish.",
      image: ProjectManagementImage, // Use the imported image
    },
    {
      title: "Architecture Structural Design",
      description: "Bring your vision to life with innovative and sustainable architectural designs combined with strong and reliable structural planning. Our architects and engineers collaborate to create structures that are not only visually appealing but also safe, durable, and environmentally conscious.",
      image: architectureStructural, // Use the imported image
    },
    {
      title: "Commercial Construction",
      description: "Specializing in the construction of commercial properties, including offices, retail spaces, and industrial facilities. We focus on delivering functional, efficient, and aesthetically pleasing commercial buildings that meet business needs and industry standards.",
      image: commercialContructionImage, // Use the imported image
    },
    {
      title: "Residential Development",
      description: "Developing high-quality residential projects, from single-family homes to multi-unit complexes. We create communities that offer comfort, convenience, and modern living, ensuring every residence is built to the highest standards.",
      image: ResidentialDevImage, // Use the imported image
    },
  ];

  // Function to dynamically determine the lg size for Grid items
  const getLgSize = (index) => {
    const numServices = servicesData.length;
    const lgCols = 3; // Now showing 3 items per row (12/4 = 3)
    const remainder = numServices % lgCols;

    // If it's a full row, or not in the last incomplete row, use default lg={4}
    if (remainder === 0 || index < numServices - remainder) {
      return 4;
    } else {
      // For items in the last incomplete row, adjust their width
      if (remainder === 1) return 12; // Single item takes full width
      if (remainder === 2) return 6;  // Two items take half width each
      return 4; // Fallback
    }
  };

  return (
    <Box sx={{ backgroundColor: brandColors.background.light, py: spacing.xxl, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            fontWeight: typography.fontWeight.bold,
            mb: spacing.xl,
            color: brandColors.secondary,
            fontFamily: typography.fontFamily.heading,
            fontSize: { xs: typography.fontSize.h3, md: typography.fontSize.h2 },
            letterSpacing: typography.letterSpacing.heading,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            maxWidth: 800,
            mx: 'auto',
            mb: spacing.xxl,
            color: brandColors.text.primary,
            fontFamily: typography.fontFamily.body,
            fontSize: { xs: typography.fontSize.body1, md: typography.fontSize.h5 },
            fontWeight: typography.fontWeight.regular,
            letterSpacing: typography.letterSpacing.body,
            lineHeight: 1.6,
          }}
        >
          We offer a comprehensive range of construction services, from initial planning and design to final execution and interior finishing, ensuring your project is handled with unparalleled expertise.
        </Typography>

        <Grid container spacing={spacing.xl} justifyContent="center">
          {servicesData.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} lg={getLgSize(index)} py={4} key={index}> {/* Dynamically set lg size */}
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  p: spacing.lg,
                  backgroundColor: brandColors.background.white,
                  borderRadius: borderRadius.large,
                  boxShadow: shadows.medium,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: shadows.large,
                  },
                }}
              >
                <ServiceIcon>
                  <img src={service.image} alt={service.title} />
                </ServiceIcon>
                <CardContent sx={{ flexGrow: 1, p: 0, '&:last-child': { pb: 0 }, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: brandColors.text.secondary,
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: typography.fontSize.h5,
                      fontWeight: typography.fontWeight.semiBold,
                      letterSpacing: typography.letterSpacing.heading,
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: brandColors.text.primary,
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.body1,
                      letterSpacing: typography.letterSpacing.body,
                      lineHeight: 1.5,
                      // mt: 'auto'
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            textAlign: 'center',
            mt: spacing.xxl,
            p: spacing.xl,
            backgroundColor: brandColors.background.primary,
            borderRadius: borderRadius.medium,
            boxShadow: shadows.medium
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: brandColors.text.secondary,
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              fontSize: typography.fontSize.h4,
              fontWeight: typography.fontWeight.semiBold
            }}
          >
            Ready to Start Your Project?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: brandColors.text.primary,
              mb: spacing.lg,
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.body1
            }}
          >
            Let's discuss how we can bring your vision to life.
          </Typography>

          {/* Link wrapper for navigation */}
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: brandColors.primary,
                px: spacing.lg, // Reduce width padding
                py: spacing.sm, // Reduce height padding
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.body1,
                fontWeight: typography.fontWeight.medium,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#B39375',
                }
              }}
            >
              Contact Us Today
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;