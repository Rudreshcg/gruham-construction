import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectImage from '../../assets/images/projects/livingarea-4.png';
import { SlideLeft, SlideRight, SlideUp, FadeIn } from "../../animation/animate";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Construction",
    description: "Experience the epitome of luxury living with our custom villa construction services. We combine innovative design with premium materials to create stunning, functional spaces that reflect your unique style and preferences.",
    image: ProjectImage,
    features: ["Custom Design", "Premium Materials", "Smart Home Integration"]
  },
  {
    id: 2,
    title: "Modern Apartment Complex",
    description: "Our modern apartment complexes are designed with contemporary living in mind. We focus on creating spaces that maximize natural light, promote community interaction, and offer luxurious amenities for a premium living experience.",
    image: ProjectImage,
    features: ["Community Spaces", "Energy Efficient", "Modern Amenities"]
  },
  {
    id: 3,
    title: "Commercial Development",
    description: "Transform your business space with our commercial construction expertise. We specialize in creating functional, aesthetically pleasing environments that enhance productivity and leave a lasting impression on clients.",
    image: ProjectImage,
    features: ["Custom Layouts", "Professional Finish", "Business Solutions"]
  }
];

const ConstructionSection = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#4a5942",
              textAlign: "center",
              mb: 2,
              fontWeight: 700,
              letterSpacing: "0.02em"
            }}
          >
            Our Construction Projects
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: "#666",
              textAlign: "center",
              mb: 6,
              maxWidth: "800px",
              mx: "auto",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 400,
              letterSpacing: "0.01em"
            }}
          >
            Discover our portfolio of exceptional construction projects that showcase our commitment to quality and innovation
          </Typography>
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
              onClick={() => navigate("/projects")}
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
              View All Projects
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default ConstructionSection;
