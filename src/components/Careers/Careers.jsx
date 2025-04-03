import React from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  Button,
  Container,
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Chip,
  useMediaQuery, 
  useTheme 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { 
  WorkOutline, 
  ArrowForward, 
  Engineering, 
  Architecture, 
  Construction, 
  School, 
  HealthAndSafety,
  Diversity3
} from "@mui/icons-material";
import careersBg from "../../assets/images/careers_bg.jpg";

// Brand colors
const brandColors = {
  primary: '#C4A484',
  text: '#2C2C2C',
};

// Styled components
const StyledHeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '70vh',
  width: '100%',
  backgroundImage: `url(${careersBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
}));

const JobCard = styled(Card)({
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const StyledListItem = styled(ListItem)({
  padding: '24px',
  '&:hover': {
    backgroundColor: 'rgba(196, 164, 132, 0.1)',
  },
});

const ValueCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 24px rgba(196, 164, 132, 0.2)',
  },
}));

const openPositions = [
  {
    title: "Senior Project Manager",
    location: "Portland, OR",
    type: "Full-time",
    experience: "7+ years",
    department: "Project Management",
    description: "Lead high-value residential and commercial construction projects"
  },
  {
    title: "Architectural Designer",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "3-5 years",
    department: "Design",
    description: "Create innovative designs for luxury residential projects"
  },
  {
    title: "Construction Superintendent",
    location: "Portland, OR",
    type: "Full-time",
    experience: "5+ years",
    department: "Operations",
    description: "Oversee on-site construction activities and team management"
  },
  {
    title: "MEP Coordinator",
    location: "Vancouver, WA",
    type: "Full-time",
    experience: "4+ years",
    department: "Engineering",
    description: "Coordinate mechanical, electrical, and plumbing systems integration"
  },
  {
    title: "Interior Design Specialist",
    location: "Portland, OR",
    type: "Full-time",
    experience: "3+ years",
    department: "Design",
    description: "Create stunning interior spaces for luxury homes"
  }
];

const companyValues = [
  {
    icon: <Engineering sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />,
    title: "Excellence in Craft",
    description: "We take pride in delivering exceptional quality in every project we undertake."
  },
  {
    icon: <Architecture sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />,
    title: "Innovation",
    description: "Embracing new technologies and methods to push the boundaries of construction."
  },
  {
    icon: <Diversity3 sx={{ fontSize: 40, color: brandColors.primary, mb: 2 }} />,
    title: "Inclusive Culture",
    description: "Fostering a diverse workplace where every voice matters and contributes to our success."
  }
];

const benefits = [
  {
    icon: <HealthAndSafety />,
    title: "Comprehensive Benefits",
    items: ["Medical, Dental & Vision", "401(k) with Company Match", "Life Insurance"]
  },
  {
    icon: <School />,
    title: "Growth & Development",
    items: ["Professional Certifications", "Leadership Training", "Education Reimbursement"]
  },
  {
    icon: <Construction />,
    title: "Work Perks",
    items: ["Flexible Work Hours", "Paid Time Off", "Employee Stock Options"]
  }
];

const Career = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <StyledHeroSection>
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1, px: 2 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 3 }}>
            Build Your Future With Us
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
            Join a team that's reshaping the landscape of luxury construction and creating extraordinary spaces.
          </Typography>
          <Button 
            variant="contained" 
            size="large"
            sx={{ 
              backgroundColor: brandColors.primary,
              '&:hover': {
                backgroundColor: '#B39375',
              },
              px: 4,
              py: 1.5
            }}
          >
            View Open Positions
          </Button>
        </Box>
      </StyledHeroSection>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        {/* Company Values Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ color: brandColors.text, mb: 6, textAlign: 'center' }}>
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {companyValues.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <ValueCard>
                  {value.icon}
                  <Typography variant="h5" sx={{ mb: 2, color: brandColors.text }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </ValueCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Open Positions Section */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" sx={{ color: brandColors.text, mb: 4, textAlign: 'center' }}>
            Current Opportunities
          </Typography>
          <JobCard>
            <List disablePadding>
              {openPositions.map((position, index) => (
                <StyledListItem
                  key={index}
                  divider={index !== openPositions.length - 1}
                  secondaryAction={
                    <Button
                      endIcon={<ArrowForward />}
                      sx={{
                        color: brandColors.primary,
                        '&:hover': {
                          backgroundColor: 'rgba(196, 164, 132, 0.1)',
                        }
                      }}
                    >
                      Learn More
                    </Button>
                  }
                >
                  <ListItemIcon>
                    <WorkOutline sx={{ color: brandColors.primary }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ mb: 1 }}>
                        <Typography variant="h6" sx={{ color: brandColors.text, fontSize: '1.1rem', mb: 1 }}>
                          {position.title}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          <Chip size="small" label={position.location} />
                          <Chip size="small" label={position.experience} />
                          <Chip size="small" label={position.department} />
                        </Box>
                      </Box>
                    }
                    secondary={
                      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {position.description}
                      </Typography>
                    }
                  />
                </StyledListItem>
              ))}
            </List>
          </JobCard>
        </Box>

        {/* Benefits Section */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: brandColors.text, mb: 6 }}>
            Why Choose Gruham
          </Typography>
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ p: 4, height: '100%', backgroundColor: index % 2 === 0 ? '#fff' : 'rgba(196, 164, 132, 0.05)' }}>
                  <Box sx={{ color: brandColors.primary, mb: 2 }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2, color: brandColors.text }}>
                    {benefit.title}
                  </Typography>
                  <List>
                    {benefit.items.map((item, idx) => (
                      <ListItem key={idx} sx={{ px: 0 }}>
                        <ListItemText 
                          primary={item}
                          sx={{ textAlign: 'center' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Career;