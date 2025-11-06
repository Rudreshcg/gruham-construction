import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Construction, Article, Book } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';
import './Publications.css';

const Publications = () => {
  return (
    <Box>
      <SEOHead
        title="Publications - Gruham's Construction"
        description="Explore publications, articles, and resources from Gruham's Construction. Learn about construction industry insights, project case studies, and expert knowledge."
        keywords="construction publications, construction articles, Gruham publications, construction resources, construction case studies, construction industry insights"
        canonical="/publications"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Publications",
          "description": "Publications and resources from Gruham's Construction",
          "url": "https://www.gruhams.in/publications"
        }}
      />

      {/* Hero Section */}
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
            <Box sx={{ textAlign: "center" }}>
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
                Publications
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
                Explore our publications, articles, and resources on construction and design
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Coming Soon Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "800px",
            mx: "auto",
            py: { xs: 6, md: 10 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Icon Container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 3,
                mb: 4,
                flexWrap: "wrap",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(191, 169, 116, 0.1), rgba(156, 134, 88, 0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid rgba(191, 169, 116, 0.2)",
                  }}
                >
                  <Article sx={{ fontSize: 50, color: "#bfa974" }} />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(191, 169, 116, 0.1), rgba(156, 134, 88, 0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid rgba(191, 169, 116, 0.2)",
                  }}
                >
                  <Book sx={{ fontSize: 50, color: "#bfa974" }} />
                </Box>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(191, 169, 116, 0.1), rgba(156, 134, 88, 0.1))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "3px solid rgba(191, 169, 116, 0.2)",
                  }}
                >
                  <Construction sx={{ fontSize: 50, color: "#bfa974" }} />
                </Box>
              </motion.div>
            </Box>

            {/* Main Message */}
            <Typography
              variant="h3"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "2rem", md: "2.5rem" },
                color: "#2c3e50",
                fontWeight: 700,
                mb: 3,
              }}
            >
              We're Working on It!
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", md: "1.1rem" },
                color: "#5a6c7d",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Our publications section is currently under development. We're working hard to bring you 
              valuable resources, case studies, articles, and insights about construction and design.
            </Typography>

            <Typography
              variant="body2"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "#7f8c8d",
                lineHeight: 1.7,
                fontStyle: "italic",
                mb: 4,
              }}
            >
              Check back soon for exciting content!
            </Typography>

            {/* Decorative Line */}
            <Box
              sx={{
                width: "100px",
                height: "3px",
                background: "linear-gradient(135deg, #bfa974, #9c8658)",
                borderRadius: "2px",
                mx: "auto",
                mb: 4,
              }}
            />

            {/* What to Expect Section */}
            <Box
              sx={{
                mt: 6,
                p: { xs: 3, md: 4 },
                background: "linear-gradient(135deg, rgba(191, 169, 116, 0.05), rgba(156, 134, 88, 0.05))",
                borderRadius: "16px",
                border: "1px solid rgba(191, 169, 116, 0.2)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: { xs: "1.4rem", md: "1.6rem" },
                  color: "#2c3e50",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                What to Expect
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  textAlign: "left",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "#5a6c7d",
                      lineHeight: 1.7,
                    }}
                  >
                    Project case studies and success stories
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "#5a6c7d",
                      lineHeight: 1.7,
                    }}
                  >
                    Industry insights and expert articles
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "#5a6c7d",
                      lineHeight: 1.7,
                    }}
                  >
                    Construction guides and best practices
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    sx={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      mt: 1,
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      color: "#5a6c7d",
                      lineHeight: 1.7,
                    }}
                  >
                    Design trends and innovation updates
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Container>

      <InternalLinks currentPage="publications" />
    </Box>
  );
};

export default Publications;

