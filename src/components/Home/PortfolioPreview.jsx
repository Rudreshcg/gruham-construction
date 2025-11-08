import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid, Chip } from '@mui/material';
import { ArrowForward, Visibility } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';

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
    <SectionWrapper id="portfolio-preview" variant="white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          eyebrow="Signature Work"
          title="Featured Projects"
          subtitle="Explore a curated selection of our recent architectural, interior, and construction projects that highlight our craftsmanship and attention to detail."
        />
      </motion.div>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
        {portfolioItems.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  borderRadius: homeTheme.layout.radiusLg,
                  boxShadow: homeTheme.layout.shadowSoft,
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  border: `1px solid ${homeTheme.colors.accentMuted}`,
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 32px 50px rgba(15, 27, 41, 0.18)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{
                      position: 'absolute',
                      bottom: 16,
                      left: 16,
                      background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  />
                </Box>

                <CardContent
                  sx={{
                    p: { xs: 3, md: 4 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: homeTheme.colors.textPrimary,
                        fontWeight: 700,
                        fontFamily: homeTheme.fonts.heading,
                        fontSize: { xs: '1.2rem', md: '1.35rem' },
                        lineHeight: 1.2,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: homeTheme.colors.textSecondary,
                        mt: 1,
                        fontFamily: homeTheme.fonts.body,
                        fontSize: '0.85rem',
                      }}
                    >
                      {project.location} • {project.area}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: homeTheme.colors.textSecondary,
                      lineHeight: 1.7,
                      fontFamily: homeTheme.fonts.body,
                      fontSize: '0.95rem',
                    }}
                  >
                    {project.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {project.features.map((feature, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5,
                          p: 1.1,
                          background: 'rgba(191, 169, 116, 0.08)',
                          borderRadius: homeTheme.layout.radiusSm,
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(191, 169, 116, 0.16)',
                            transform: 'translateX(6px)',
                          },
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: homeTheme.colors.textPrimary,
                            fontFamily: homeTheme.fonts.body,
                            fontSize: '0.85rem',
                            fontWeight: 500,
                          }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mt: 'auto',
                      pt: 2,
                      borderTop: `1px dashed ${homeTheme.colors.accentMuted}`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: homeTheme.colors.textSecondary,
                        fontFamily: homeTheme.fonts.body,
                        fontSize: '0.8rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
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
                        borderColor: homeTheme.colors.accent,
                        color: homeTheme.colors.accent,
                        fontSize: '0.8rem',
                        textTransform: 'none',
                        fontFamily: homeTheme.fonts.body,
                        fontWeight: 600,
                        borderRadius: '999px',
                        px: 2.5,
                        '&:hover': {
                          borderColor: homeTheme.colors.accentDark,
                          color: homeTheme.colors.accentDark,
                          background: 'rgba(191, 169, 116, 0.12)',
                        },
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
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/portfolio')}
            sx={{
              background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
              color: '#fff',
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.08rem' },
              fontWeight: 700,
              borderRadius: '999px',
              textTransform: 'none',
              fontFamily: homeTheme.fonts.body,
              boxShadow: '0 14px 35px rgba(191, 169, 116, 0.38)',
              transition: 'all 0.35s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                background: `linear-gradient(135deg, ${homeTheme.colors.accentDark}, ${homeTheme.colors.accent})`,
                transform: 'translateY(-4px)',
                boxShadow: '0 18px 42px rgba(191, 169, 116, 0.5)',
                '&::before': {
                  left: '100%',
                },
              },
            }}
          >
            View All Projects
          </Button>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default PortfolioPreview;
