import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Rating, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { homeTheme } from '../Home/sectionStyles';
import SEOHead from '../SEO/SEOHead';
import testimonialsData from '../../data/testimonials.json';

const TestimonialsPage = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 }, background: homeTheme.colors.backgroundLight, minHeight: '100vh' }}>
      <SEOHead
        title="Client Testimonials | Gruham's Construction"
        description="Read reviews and testimonials from our delighted homeowners and partners who trust Gruham's Construction to deliver thoughtful, high-quality spaces."
      />
      
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            component="p"
            className="eyebrow-pill"
            sx={{ mb: 2 }}
          >
            Client Voices
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: homeTheme.colors.textPrimary,
              fontFamily: homeTheme.fonts.heading,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 400,
              mb: 2
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: homeTheme.colors.textSecondary,
              maxWidth: 600,
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            Hear from our delighted homeowners and partners who trust Gruham's Construction to deliver thoughtful, high-quality spaces.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={testimonial.id} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.15 }}
                viewport={{ once: true }}
                style={{ width: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.82), rgba(240,236,228,0.72))',
                    borderRadius: homeTheme.layout.radiusMd,
                    boxShadow: homeTheme.layout.shadowCard,
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    border: `1px solid ${homeTheme.colors.divider}`,
                    '&:hover': {
                      borderColor: 'rgba(184, 146, 74, 0.75)',
                      transform: 'translateY(-3px)',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: { xs: 2.1, md: 2.6 },
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1.6,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: '8px',
                          bgcolor: homeTheme.colors.accentMuted,
                          color: homeTheme.colors.textPrimary,
                          fontSize: '1.35rem',
                          fontWeight: 600,
                          fontFamily: homeTheme.fonts.heading,
                          boxShadow: 'none',
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            color: homeTheme.colors.textPrimary,
                            fontWeight: 700,
                            fontSize: '1.1rem',
                            fontFamily: homeTheme.fonts.body,
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: homeTheme.colors.textSecondary,
                            fontSize: '0.8rem',
                            lineHeight: 1.5,
                            fontFamily: homeTheme.fonts.body,
                          }}
                        >
                          {testimonial.role} • {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Rating
                      value={testimonial.rating}
                      readOnly
                      size="small"
                      sx={{
                        '& .MuiRating-icon': {
                          color: homeTheme.colors.accent,
                        },
                      }}
                    />

                    <Typography
                      variant="body1"
                      sx={{
                        color: homeTheme.colors.textSecondary,
                        lineHeight: 1.75,
                        fontFamily: homeTheme.fonts.body,
                        fontSize: '0.94rem',
                        fontStyle: 'normal',
                      }}
                    >
                      “{testimonial.text}”
                    </Typography>

                    <Box
                      sx={{
                        background: 'transparent',
                        borderRadius: 0,
                        borderTop: `1px solid ${homeTheme.colors.divider}`,
                        pt: 1.5,
                        textAlign: 'left',
                        mt: 'auto',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: homeTheme.colors.accentDark,
                          fontWeight: 600,
                          fontSize: '0.82rem',
                          fontFamily: homeTheme.fonts.body,
                          letterSpacing: '0.05em',
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
      </Container>
    </Box>
  );
};

export default TestimonialsPage;
