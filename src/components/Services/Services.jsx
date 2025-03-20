import { Container, Grid, Card, CardContent, Typography, Box } from "@mui/material";
import { HomeWork, Business, Architecture, DesignServices } from "@mui/icons-material";

const services = [
  {
    title: "Residential Construction",
    description: "We build strong and beautiful homes with modern designs and quality materials.",
    icon: <HomeWork fontSize="large" />,
  },
  {
    title: "Commercial Construction",
    description: "From office spaces to retail stores, we create commercial buildings that stand out.",
    icon: <Business fontSize="large" />,
  },
  {
    title: "Residential Interior",
    description: "Transform your home with stunning interiors tailored to your style.",
    icon: <DesignServices fontSize="large" />,
  },
  {
    title: "Commercial Interior",
    description: "Enhance your commercial space with functional and elegant interior designs.",
    icon: <Architecture fontSize="large" />,
  },
];

const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 3 }}>
              <Box sx={{ color: "primary.main", mb: 2 }}>{service.icon}</Box>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
