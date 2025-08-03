import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectImage from '../../assets/images/projects/livingarea-4.png';
import ModernKitchen from '../../assets/images/projects/modern_kitchen.png'
import BathRoom from '../../assets/images/projects/bathroom_design.png'
import { SlideLeft, SlideRight, SlideUp, FadeIn } from "../../animation/animate";
import { DiscriptionTypography, ManiHeader } from "../../common/headerComponents";

const projects = [
  {
    id: 1,
    title: "Luxury Interior Design",
    description: "Transform your living space into a masterpiece of elegance and comfort. Our luxury interior design services combine timeless aesthetics with modern functionality to create spaces that inspire and delight.",
    image: ProjectImage,
    features: ["Custom Furniture", "Art Curation", "Lighting Design"]
  },
  {
    id: 2,
    title: "Modern Kitchen Design",
    description: "Create the kitchen of your dreams with our expert design services. We focus on creating functional, beautiful spaces that make cooking and entertaining a joy, while maximizing storage and workflow efficiency.",
    image: ModernKitchen,
    features: ["Custom Cabinetry", "Premium Appliances", "Smart Storage"]
  },
  {
    id: 3,
    title: "Bathroom Renovation",
    description: "Elevate your bathroom into a luxurious sanctuary. Our bathroom renovation services combine premium materials with innovative design to create spaces that are both beautiful and functional.",
    image: BathRoom,
    features: ["Custom Fixtures", "Luxury Materials", "Spa Features"]
  }
];

const InteriorSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f8f8" }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <ManiHeader headerText={'Interior Excellence'}/>
          <DiscriptionTypography text={'Discover our range of interior design services that transform spaces into beautiful, functional environments'}/>
        </motion.div>

        {projects.map((project, index) => (
          <motion.div key={project.id}>
            <Grid
              container
              spacing={6}
              alignItems="center"
              sx={{
                mb: 8,
                flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
              }}
            >
              <Grid item xs={12} md={6}>
                <motion.div
                  variants={index % 2 === 0 ? SlideLeft(0.5) : SlideRight(0.5)}
                  initial="initial"
                  whileInView="animate"
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: { xs: "300px", md: "400px" },
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.02)",
                      },
                    }}
                  />
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div
                  variants={index % 2 === 0 ? SlideRight(0.5) : SlideLeft(0.5)}
                  initial="initial"
                  whileInView="animate"
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#4a5942",
                      fontWeight: 600,
                      mb: 2,
                      fontFamily: "'Playfair Display', serif",
                      fontSize: { xs: "1.5rem", md: "1.75rem" },
                      letterSpacing: "0.01em"
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#666",
                      mb: 3,
                      lineHeight: 1.8,
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      letterSpacing: "0.01em"
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {project.features.map((feature, idx) => (
                      <Typography
                        key={idx}
                        variant="body2"
                        sx={{
                          color: "#4a5942",
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.875rem",
                          letterSpacing: "0.01em",
                          "&:before": {
                            content: '"•"',
                            color: "#95805a",
                            mr: 1,
                            fontSize: "1.5rem"
                          }
                        }}
                      >
                        {feature}
                      </Typography>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        ))}

        <Box display="flex" justifyContent="center" mt={6}>
          <motion.div variants={SlideUp(0.5)} initial="initial" whileInView="animate">
            <Button
              variant="contained"
              onClick={() => navigate("/interior")}
              sx={{
                backgroundColor: "#95805a",
                color: "white",
                px: 5,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "8px",
                textTransform: "none",
                transition: "0.3s",
                fontFamily: "'Montserrat', sans-serif",
                "&:hover": {
                  backgroundColor: "#7a6a4a",
                  transform: "scale(1.05)",
                },
              }}
            >
              Explore Interior Services
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default InteriorSection;
