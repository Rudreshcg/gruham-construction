import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Rating, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';
import testimonialsData from '../../data/testimonials.json';

const Testimonials = () => {
  const navigate = useNavigate();
  // Only display the first 3 on the home page
  const displayTestimonials = testimonialsData.testimonials.slice(0, 3);

  return (
    <SectionWrapper id="testimonials" variant="tint">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          eyebrow="Client Voices"
          title="What Our Clients Say"
          subtitle="Hear from our delighted homeowners and partners who trust Gruham's Construction to deliver thoughtful, high-quality spaces."
        />
      </motion.div>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
        {displayTestimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={testimonial.id} sx={{ display: 'flex' }}>
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
          onClick={() => navigate('/testimonials')}
          sx={{
            background: homeTheme.colors.accent,
            color: homeTheme.colors.textPrimary,
            px: { xs: 4, md: 6 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: '1rem', md: '1.08rem' },
            fontWeight: 700,
            borderRadius: '4px',
            textTransform: 'none',
            fontFamily: homeTheme.fonts.body,
            boxShadow: 'none',
            transition: 'all 0.35s ease',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '\"\"',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
              transition: 'left 0.5s ease',
            },
            '&:hover': {
              background: '#d6bd83',
              transform: 'translateY(-2px)',
              boxShadow: 'none',
              '&::before': {
                left: '100%',
              },
            },
          }}
        >
          View All Testimonials
        </Button>
      </motion.div>
    </Box>
  </SectionWrapper>
  );
};

export default Testimonials;
