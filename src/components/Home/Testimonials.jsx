import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Rating, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';

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

const Testimonials = () => (
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
      {testimonials.map((testimonial, index) => (
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
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: homeTheme.layout.radiusLg,
                boxShadow: homeTheme.layout.shadowSoft,
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                border: `1px solid ${homeTheme.colors.accentMuted}`,
                '&::before': {
                  content: '\"\"',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(135deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                },
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 28px 45px rgba(15, 27, 41, 0.18)',
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2.5,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{
                      width: 62,
                      height: 62,
                      border: `3px solid ${homeTheme.colors.accentMuted}`,
                    }}
                  />
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
                        fontSize: '0.9rem',
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
                    lineHeight: 1.8,
                    fontFamily: homeTheme.fonts.body,
                    fontSize: '1rem',
                    fontStyle: 'italic',
                  }}
                >
                  “{testimonial.text}”
                </Typography>

                <Box
                  sx={{
                    background: 'rgba(191, 169, 116, 0.1)',
                    borderRadius: homeTheme.layout.radiusSm,
                    p: 1.5,
                    textAlign: 'center',
                    mt: 'auto',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: homeTheme.colors.accent,
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
              background: `linear-gradient(135deg, ${homeTheme.colors.accentDark}, ${homeTheme.colors.accent})`,
              transform: 'translateY(-4px)',
              boxShadow: '0 18px 42px rgba(191, 169, 116, 0.5)',
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

export default Testimonials;
