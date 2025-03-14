import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import ProjectImage from '../../assets/images/projects/livingarea-4.png';
import { SlideLeft, SlideDown, SlideRight, SlideUp } from "../../animation/animate";

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

const ProjectSection = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 8 }}>
      {projects.map((project, index) => (
        <motion.div
          
        >
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
               key={project.id}
               variants={index % 2 === 0 ? SlideLeft(0.5) : SlideRight(0.5)} // SlideLeft for regular row, SlideRight for reversed row
               initial="initial"
               whileInView="animate"
              >
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%", // Ensures the image takes full width
                    height: { xs: "200px", md: "300px" },
                    borderRadius: "12px",
                    boxShadow: 5,
                    objectFit: "cover",
                  }}
                />
              </motion.div>
            </Grid>

            {/* Project Content */}
            <Grid item xs={12} md={6}>
              <motion.div
                key={project.id}
                variants={index % 2 === 0 ? SlideLeft(0.5) : SlideRight(0.5)} // SlideLeft for regular row, SlideRight for reversed row
                initial="initial"
                whileInView="animate"
              >
                <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#333" }}>
                  {project.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  {project.description}
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      ))}

      {/* See More Projects Button */}
      <Box display="flex" justifyContent="center" mt={6}>
        <motion.div
          variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1.1rem",
              fontWeight: "bold",
              borderRadius: "8px",
              textTransform: "none",
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

export default ProjectSection;
