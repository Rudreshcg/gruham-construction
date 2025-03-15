import React from "react";
import { Box, Button, Container, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectImage from '../../assets/images/projects/livingarea-4.png';
import { SlideLeft, SlideRight, SlideUp, FadeIn } from "../../animation/animate";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautifully designed living area with modern interiors, bringing warmth and style to your home. The space is designed to maximize comfort and functionality, with an open floor plan and sleek furniture.",
    image: ProjectImage,
  },
  {
    id: 2,
    title: "Project Two",
    description: "An elegant and spacious architecture project with unique aesthetics and high-end materials. The project combines innovative designs with traditional craftsmanship, offering a luxurious feel throughout the entire space.",
    image: ProjectImage,
  },
  {
    id: 3,
    title: "Project Three",
    description: "A stunning outdoor landscape project that perfectly blends nature with contemporary design. From lush greenery to carefully designed hardscapes, this outdoor space creates a serene environment for relaxation and entertainment.",
    image: ProjectImage,
  }
];

const InteriorSection = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      {/* Section Heading */}
      <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          sx={{ color: "#222", mb: 4 }}
        >
          Our Featured Projects
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
            {/* Project Image */}
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
                    height: { xs: "250px", md: "350px" },
                    borderRadius: "16px",
                    boxShadow: 5,
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Project Content */}
            <Grid item xs={12} md={6}>
              <motion.div
                variants={index % 2 === 0 ? SlideLeft(0.5) : SlideRight(0.5)}
                initial="initial"
                whileInView="animate"
              >
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#333" }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, mb: 3 }}
                >
                  {project.description}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      ))}

      {/* See More Projects Button */}
      <Box display="flex" justifyContent="center" mt={6}>
        <motion.div variants={SlideUp(0.5)} initial="initial" whileInView="animate">
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "secondary.main",
                transform: "scale(1.05)",
              },
            }}
            onClick={() => navigate("/projects")}
          >
            See More Projects
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default InteriorSection;
