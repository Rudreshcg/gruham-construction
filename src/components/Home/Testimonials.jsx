import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Grid, Rating, Button } from '@mui/material';
import { Star, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    location: "Whitefield, Bangalore",
    rating: 5,
    text: "Gruham's Construction transformed our dream home into reality. Their attention to detail and quality craftsmanship exceeded our expectations. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    project: "Luxury Villa Construction"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Business Owner",
    location: "Koramangala, Bangalore",
    rating: 5,
    text: "Professional team, on-time delivery, and exceptional quality. They made our commercial project stress-free and successful.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    project: "Office Complex"
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Property Developer",
    location: "Electronic City, Bangalore",
    rating: 5,
    text: "Outstanding construction quality and project management. Gruham's delivered our residential project ahead of schedule with zero compromises on quality.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    project: "Residential Complex"
  }
];

const Testimonials = () => {
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
              What Our Clients Say
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
              Hear from our satisfied customers who have experienced our exceptional construction services
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
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
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                    },
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    }
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, flex: 1, display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 60,
                          height: 60,
                          mr: 2,
                          border: "3px solid rgba(191, 169, 116, 0.2)",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#2c3e50",
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            fontFamily: "'Montserrat', sans-serif",
                            mb: 0.5,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#7f8c8d",
                            fontSize: "0.9rem",
                            fontFamily: "'Montserrat', sans-serif",
                          }}
                        >
                          {testimonial.role} • {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{
                        mb: 2,
                        "& .MuiRating-icon": {
                          color: "#bfa974",
                        }
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#5a6c7d",
                        lineHeight: 1.7,
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1rem",
                        fontStyle: "italic",
                        mb: 2,
                      }}
                    >
                      "{testimonial.text}"
                    </Typography>

                    <Box
                      sx={{
                        background: "rgba(191, 169, 116, 0.1)",
                        borderRadius: "8px",
                        p: 1.5,
                        textAlign: "center",
                        mt: "auto",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#bfa974",
                          fontWeight: 600,
                          fontSize: "0.8rem",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        {testimonial.project}
                      </Typography>
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
              View All Testimonials
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
