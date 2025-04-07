import React from "react";
import {
  Container,
  Grid,
  Card,
  Typography,
  Box,
  Button,
  Tab,
  Tabs,
  useTheme,
  useMediaQuery
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  HomeWork,
  Business,
  Architecture,
  DesignServices,
  Construction,
  Apartment,
  Kitchen,
  Bathroom,
  Engineering,
  Handyman
} from "@mui/icons-material";
import serviceImage from "../../assets/images/service.png";
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius
} from "../../theme/designSystem";

const services = [
  {
    category: "residential",
    title: "Custom Home Construction",
    description: "Build your dream home from the ground up with our expert craftsmanship and attention to detail.",
    features: ["Custom Design Collaboration", "Premium Materials", "Energy Efficient Solutions"],
    icon: <HomeWork sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "residential",
    title: "Luxury Home Renovation",
    description: "Transform your existing home into a modern masterpiece with our comprehensive renovation services.",
    features: ["Complete Home Makeovers", "Kitchen & Bath Remodeling", "Room Additions"],
    icon: <Apartment sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "residential",
    title: "Interior Design & Finishing",
    description: "Create stunning living spaces that reflect your personal style and enhance your lifestyle.",
    features: ["Custom Cabinetry", "High-end Finishes", "Smart Home Integration"],
    icon: <DesignServices sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "commercial",
    title: "Commercial Construction",
    description: "Develop state-of-the-art commercial spaces that drive business success and growth.",
    features: ["Office Buildings", "Retail Spaces", "Industrial Facilities"],
    icon: <Business sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "commercial",
    title: "Tenant Improvements",
    description: "Customize commercial spaces to meet your specific business needs and brand identity.",
    features: ["Space Planning", "Custom Build-outs", "Modern Amenities"],
    icon: <Architecture sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "specialized",
    title: "Kitchen Remodeling",
    description: "Create your dream kitchen with premium materials and expert craftsmanship.",
    features: ["Custom Cabinetry", "High-end Appliances", "Luxury Countertops"],
    icon: <Kitchen sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "specialized",
    title: "Bathroom Renovation",
    description: "Transform your bathroom into a luxurious spa-like retreat.",
    features: ["Custom Showers", "Premium Fixtures", "Luxury Tiles"],
    icon: <Bathroom sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  },
  {
    category: "specialized",
    title: "Custom Solutions",
    description: "Specialized construction services tailored to your unique needs.",
    features: ["Home Theaters", "Wine Cellars", "Outdoor Living"],
    icon: <Engineering sx={{ fontSize: 45, color: brandColors.primary }} />,
    image: serviceImage
  }
];

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: transitions.default,
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .service-image': {
      transform: 'scale(1.1)',
    }
  }
}));

const ImageBox = styled(Box)({
  height: 200,
  overflow: 'hidden',
  position: 'relative',
  '& .service-image': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: transitions.default
  }
});

const Services = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const categories = [
    { label: "All Services", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Specialized", value: "specialized" }
  ];

  const filteredServices = selectedTab === 0
    ? services
    : services.filter(service => service.category === categories[selectedTab].value);

  return (
    <Box sx={{ py: spacing.xxl, backgroundColor: brandColors.background.primary }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: spacing.xxl }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: typography.fontFamily.heading,
              fontSize: typography.fontSize.h2,
              color: brandColors.secondary,
              textAlign: "center",
              mb: spacing.md,
              fontWeight: typography.fontWeight.bold,
              letterSpacing: typography.letterSpacing.heading
            }}
          >
        Our Services
      </Typography>
          <Typography
            variant="h6"
            sx={{
              color: brandColors.text.secondary,
              maxWidth: 800,
              mx: 'auto',
              mb: spacing.lg,
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.h6
            }}
          >
            From concept to completion, we deliver exceptional construction and design services
            tailored to your vision.
          </Typography>

          {/* Category Tabs */}
          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            centered
            sx={{
              mb: spacing.lg,
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: typography.fontSize.body1,
                minWidth: isMobile ? 'auto' : 120,
                fontFamily: typography.fontFamily.body
              },
              '& .Mui-selected': {
                color: `${brandColors.primary} !important`,
              },
              '& .MuiTabs-indicator': {
                backgroundColor: brandColors.primary,
              }
            }}
          >
            {categories.map((category, index) => (
              <Tab key={index} label={category.label} />
            ))}
          </Tabs>
        </Box>

        {/* Services Grid */}
      <Grid container spacing={4}>
          {filteredServices.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <ImageBox>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: spacing.md,
                      right: spacing.md,
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '50%',
                      p: spacing.xs,
                    }}
                  >
                    {service.icon}
                  </Box>
                </ImageBox>
                <Box sx={{ p: spacing.lg, flexGrow: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: typography.fontWeight.semiBold,
                      mb: spacing.md,
                      color: brandColors.text.secondary,
                      fontFamily: typography.fontFamily.heading,
                      fontSize: typography.fontSize.h5
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      mb: spacing.md,
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.body1
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: spacing.md }}>
                    {service.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: brandColors.text.secondary,
                          display: 'flex',
                          alignItems: 'center',
                          gap: spacing.xs,
                          mb: spacing.xs,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.body2
                        }}
                      >
                        <Construction sx={{ fontSize: 16, color: brandColors.primary }} />
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ p: spacing.lg, pt: 0 }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      borderColor: brandColors.primary,
                      color: brandColors.primary,
                      fontFamily: typography.fontFamily.body,
                      fontSize: typography.fontSize.body1,
                      fontWeight: typography.fontWeight.medium,
                      '&:hover': {
                        borderColor: brandColors.primary,
                        backgroundColor: 'rgba(196, 164, 132, 0.1)',
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </StyledCard>
          </Grid>
        ))}
      </Grid>

        {/* Call to Action */}
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
              color: brandColors.text.primary,
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
              color: brandColors.text.secondary,
              mb: spacing.lg,
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.body1
            }}
          >
            Let's discuss how we can bring your vision to life.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: brandColors.primary,
              px: spacing.xl,
              py: spacing.md,
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.body1,
              fontWeight: typography.fontWeight.medium,
              '&:hover': {
                backgroundColor: '#B39375',
              }
            }}
          >
            Contact Us Today
          </Button>
        </Box>
    </Container>
    </Box>
  );
};

export default Services;
