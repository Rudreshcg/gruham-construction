import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
import { ArrowForward, Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';

// Import images
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import adityaImage from '../../assets/images/adityaImage.jpg';
import brindavanamImage from '../../assets/images/brindavanam.png';
import interior1 from '../../assets/images/interior1.webp';
import interior2 from '../../assets/images/interior2.webp';

// Image mapping
const imageMap = {
  '/images/residential-architects-mr-jayachandra-residence.webp': jayachandraImage,
  '/images/adityaImage.jpg': adityaImage,
  '/images/brindavanam.png': brindavanamImage,
  '/images/interior1.webp': interior1,
  '/images/interior2.webp': interior2,
};

const PortfolioPreview = () => {
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Get the first 3 projects from the JSON data
    const projects = Object.keys(projectsData.projects).slice(0, 3).map(key => {
      const project = projectsData.projects[key];
      return {
        id: project.id,
        title: project.title,
        category: project.category,
        image: imageMap[project.mainImage] || project.mainImage,
        description: project.content.description,
        features: project.content.highlights.slice(0, 3), // Take first 3 highlights
        year: project.date,
        location: project.location,
        area: project.area,
        link: `/portfolio/${project.id}`
      };
    });
    setPortfolioItems(projects);
  }, []);

  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(191, 169, 116, 0.3), transparent)",
      }
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                color: "#2c3e50",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  background: "linear-gradient(135deg, #bfa974, #9c8658)",
                  borderRadius: "2px",
                }
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#7f8c8d",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 400,
                letterSpacing: "0.01em",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Explore our latest construction and design projects that showcase our expertise and commitment to excellence
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {portfolioItems.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "20px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "scale(1.05)",
                      }
                    }}
                  />
                  
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          background: "linear-gradient(135deg, #bfa974, #9c8658)",
                          color: "white",
                          px: 2,
                          py: 0.5,
                          borderRadius: "20px",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {project.category}
                      </Typography>
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2c3e50",
                        fontWeight: 700,
                        mb: 1,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5a6c7d",
                        mb: 1,
                        lineHeight: 1.6,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.8rem",
                      }}
                    >
                      {project.location} • {project.area}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#5a6c7d",
                        mb: 2,
                        lineHeight: 1.6,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.9rem",
                      }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {project.features.map((feature, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            p: 1,
                            background: "rgba(191, 169, 116, 0.08)",
                            borderRadius: "8px",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              background: "rgba(191, 169, 116, 0.15)",
                              transform: "translateX(4px)",
                            }
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "linear-gradient(135deg, #bfa974, #9c8658)",
                              mr: 1.5,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#2c3e50",
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: "0.8rem",
                              fontWeight: 500,
                            }}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#7f8c8d",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.8rem",
                        }}
                      >
                        Completed {project.year}
                      </Typography>
                      
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<Visibility />}
                        onClick={() => navigate(project.link)}
                        sx={{
                          borderColor: "#bfa974",
                          color: "#bfa974",
                          fontSize: "0.75rem",
                          textTransform: "none",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 600,
                          "&:hover": {
                            borderColor: "#9c8658",
                            color: "#9c8658",
                            background: "rgba(191, 169, 116, 0.1)",
                          }
                        }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" mt={6}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/portfolio')}
              sx={{
                background: "linear-gradient(135deg, #bfa974, #9c8658)",
                color: "white",
                px: { xs: 4, md: 6 },
                py: { xs: 1.5, md: 2 },
                fontSize: { xs: "1rem", md: "1.1rem" },
                fontWeight: 700,
                borderRadius: "50px",
                textTransform: "none",
                fontFamily: "'Montserrat', sans-serif",
                boxShadow: "0 8px 25px rgba(191, 169, 116, 0.4)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-100%",
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transition: "left 0.5s",
                },
                "&:hover": {
                  background: "linear-gradient(135deg, #9c8658, #bfa974)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 35px rgba(191, 169, 116, 0.6)",
                  "&::before": {
                    left: "100%",
                  },
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

export default PortfolioPreview;
