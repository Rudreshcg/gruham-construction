import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import { Construction, Engineering, Architecture, Star, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';

const stats = [
  { number: '100+', label: 'Projects Completed', icon: <Construction /> },
  { number: '5+', label: 'Years Experience', icon: <Engineering /> },
  { number: '100%', label: 'Client Satisfaction', icon: <Star /> },
  { number: '50+', label: 'Expert Team', icon: <Architecture /> },
];

const values = [
  {
    title: 'Quality Excellence',
    description:
      'We maintain the highest standards in every construction project, using premium materials and proven construction techniques.',
    icon: <CheckCircle sx={{ color: '#bfa974', fontSize: '2rem' }} />,
  },
  {
    title: 'Construction Expertise',
    description:
      'With over 15 years of experience, we bring deep knowledge of construction methods, building codes, and project management.',
    icon: <Construction sx={{ color: '#bfa974', fontSize: '2rem' }} />,
  },
  {
    title: 'Client Partnership',
    description:
      'Your vision is our priority. We work closely with you throughout the construction process to bring your dream home to life.',
    icon: <Star sx={{ color: '#bfa974', fontSize: '2rem' }} />,
  },
];

const AboutCompany = () => (
  <SectionWrapper id="about-gruham" variant="light">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow="Who We Are"
        title="About Gruham's Construction"
        subtitle="Building dreams into reality with over 15 years of expertise in construction and design. We are committed to delivering exceptional quality and innovative solutions for every project."
      />
    </motion.div>

    <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Card
              sx={{
                height: '100%',
                textAlign: 'center',
                p: { xs: 0 },
                background: 'rgba(255, 255, 255, 0.88)',
                borderRadius: homeTheme.layout.radiusLg,
                border: `1px solid ${homeTheme.colors.accentMuted}`,
                boxShadow: homeTheme.layout.shadowSoft,
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(6px)',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '100%',
                  background: `linear-gradient(180deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                  opacity: 0.9,
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.35s ease',
                },
                '&:hover': {
                  transform: 'translateY(-14px)',
                  boxShadow: '0 28px 45px rgba(15, 27, 41, 0.16)',
                  '&::before': {
                    transform: 'scaleY(1)',
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    color: homeTheme.colors.accent,
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(191,169,116,0.22), rgba(191,169,116,0.05))',
                    boxShadow: 'inset 0 2px 12px rgba(191,169,116,0.12)',
                    '& .MuiSvgIcon-root': {
                      fontSize: '2.2rem',
                    },
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: homeTheme.colors.textPrimary,
                    fontWeight: 800,
                    fontSize: { xs: '1.9rem', md: '2.35rem' },
                    fontFamily: homeTheme.fonts.heading,
                    mb: 0.8,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: homeTheme.colors.textSecondary,
                    fontFamily: homeTheme.fonts.body,
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
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

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Stack
        spacing={{ xs: 3, md: 4 }}
        sx={{
          mb: { xs: 6, md: 8 },
          background: 'rgba(255, 255, 255, 0.86)',
          borderRadius: homeTheme.layout.radiusLg,
          border: `1px solid ${homeTheme.colors.accentMuted}`,
          boxShadow: '0 20px 45px rgba(15,27,41,0.10)',
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: homeTheme.colors.textPrimary,
            fontWeight: 700,
            fontFamily: homeTheme.fonts.heading,
            fontSize: { xs: '1.75rem', md: '2.1rem' },
          }}
        >
          Our Story & Mission
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: homeTheme.colors.textSecondary,
            lineHeight: 1.9,
            fontFamily: homeTheme.fonts.body,
            fontSize: { xs: '1rem', md: '1.08rem' },
            maxWidth: '880px',
            mx: 'auto',
          }}
        >
          Founded with a vision to build exceptional homes and structures in Bangalore, Gruham's Construction has grown from a small family business to one of the most trusted construction companies in the city. Our journey began with a simple belief: every client deserves exceptional quality construction, innovative building solutions, and personalised project management.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: homeTheme.colors.textSecondary,
            lineHeight: 1.9,
            fontFamily: homeTheme.fonts.body,
            fontSize: { xs: '1rem', md: '1.08rem' },
            maxWidth: '880px',
            mx: 'auto',
          }}
        >
          Today, we continue to uphold these values while embracing modern construction technology and sustainable building practices. Our team of skilled construction professionals, architects, and engineers work together to deliver projects that exceed expectations and stand the test of time.
        </Typography>
        <Divider flexItem sx={{ borderColor: homeTheme.colors.divider, my: { xs: 1, md: 2 } }} />
        <Typography
          variant="body2"
          sx={{
            color: homeTheme.colors.textSecondary,
            fontFamily: homeTheme.fonts.body,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          "Crafting enduring spaces with precision, integrity, and heart."
        </Typography>
      </Stack>
    </motion.div>

    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
      {values.map((value, index) => (
        <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <Card
              sx={{
                height: '100%',
                background: 'rgba(255, 255, 255, 0.88)',
                borderRadius: homeTheme.layout.radiusLg,
                border: `1px solid ${homeTheme.colors.accentMuted}`,
                boxShadow: homeTheme.layout.shadowSoft,
                transition: 'transform 0.35s ease, box-shadow 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '6px',
                  height: '100%',
                  background: `linear-gradient(180deg, ${homeTheme.colors.accent}, ${homeTheme.colors.accentDark})`,
                  opacity: 0.9,
                  transform: 'scaleY(0)',
                  transformOrigin: 'top',
                  transition: 'transform 0.35s ease',
                },
                '&:hover': {
                  transform: 'translateY(-14px)',
                  boxShadow: '0 28px 45px rgba(15, 27, 41, 0.16)',
                  '&::before': {
                    transform: 'scaleY(1)',
                  },
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(191,169,116,0.22), rgba(191,169,116,0.05))',
                    mx: 'auto',
                  }}
                >
                  {value.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    color: homeTheme.colors.textPrimary,
                    fontWeight: 700,
                    fontFamily: homeTheme.fonts.heading,
                    fontSize: { xs: '1.4rem', md: '1.58rem' },
                  }}
                >
                  {value.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: homeTheme.colors.textSecondary,
                    lineHeight: 1.75,
                    fontFamily: homeTheme.fonts.body,
                    fontSize: { xs: '0.97rem', md: '1.05rem' },
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
  </SectionWrapper>
);

export default AboutCompany;
