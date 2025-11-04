import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Construction, Engineering, Architecture, Star, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const stats = [
  { number: "100+", label: "Projects Completed", icon: <Construction /> },
  { number: "5+", label: "Years Experience", icon: <Engineering /> },
  { number: "100%", label: "Client Satisfaction", icon: <Star /> },
  { number: "50+", label: "Expert Team", icon: <Architecture /> }
];

const values = [
  {
    title: "Quality Excellence",
    description: "We maintain the highest standards in every construction project, using premium materials and proven construction techniques.",
    icon: <CheckCircle sx={{ color: "#bfa974", fontSize: "2rem" }} />
  },
  {
    title: "Construction Expertise",
    description: "With over 15 years of experience, we bring deep knowledge of construction methods, building codes, and project management.",
    icon: <Construction sx={{ color: "#bfa974", fontSize: "2rem" }} />
  },
  {
    title: "Client Partnership",
    description: "Your vision is our priority. We work closely with you throughout the construction process to bring your dream home to life.",
    icon: <Star sx={{ color: "#bfa974", fontSize: "2rem" }} />
  }
];

const AboutCompany = () => {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
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
              About Gruham's Construction
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#7f8c8d",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 400,
                letterSpacing: "0.01em",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Building dreams into reality with over 15 years of expertise in construction and design. 
              We are committed to delivering exceptional quality and innovative solutions for every project.
            </Typography>
          </Box>
        </motion.div>

        {/* Stats Section */}
        <Grid container spacing={4} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    textAlign: "center",
                    p: 3,
                    background: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    display: "flex",
                    flexDirection: "column",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    }
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Box
                      sx={{
                        color: "#bfa974",
                        mb: 2,
                        display: "flex",
                        justifyContent: "center",
                        "& .MuiSvgIcon-root": {
                          fontSize: "2.5rem"
                        }
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#2c3e50",
                        fontWeight: 800,
                        fontSize: { xs: "2rem", md: "2.5rem" },
                        fontFamily: "'Playfair Display', serif",
                        mb: 1,
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#5a6c7d",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h4"
              sx={{
                color: "#2c3e50",
                fontWeight: 700,
                mb: 3,
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
              }}
            >
              Our Story & Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#5a6c7d",
                lineHeight: 1.8,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto",
                mb: 4,
              }}
            >
              Founded with a vision to build exceptional homes and structures in Bangalore, Gruham's Construction 
              has grown from a small family business to one of the most trusted construction companies in the city. 
              Our journey began with a simple belief: every client deserves exceptional quality construction, 
              innovative building solutions, and personalized project management.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#5a6c7d",
                lineHeight: 1.8,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                textAlign: "center",
                maxWidth: "900px",
                mx: "auto",
              }}
            >
              Today, we continue to uphold these values while embracing modern construction technology and sustainable building practices. 
              Our team of skilled construction professionals, architects, and engineers work together to deliver construction projects that 
              exceed expectations and stand the test of time.
            </Typography>
          </Box>
        </motion.div>

        {/* Values Section */}
        <Grid container spacing={4} alignItems="stretch">
          {values.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    background: "#ffffff",
                    borderRadius: "16px",
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "0",
                      height: "3px",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      transition: "width 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      "&::after": {
                        width: "60%",
                      },
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
                    <Box sx={{ mb: 3 }}>
                      {value.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#2c3e50",
                        fontWeight: 700,
                        mb: 2,
                        fontFamily: "'Playfair Display', serif",
                        fontSize: { xs: "1.4rem", md: "1.6rem" },
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#5a6c7d",
                        lineHeight: 1.7,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                      }}
                    >
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCompany;
