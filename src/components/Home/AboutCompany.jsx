import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack, Divider } from '@mui/material';
import { Construction, Engineering, Architecture, Star, CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';

const stats = [
  { number: '30+', label: 'Projects Completed', icon: <Construction /> },
  { number: '5+', label: 'Years Experience', icon: <Engineering /> },
  { number: '100%', label: 'Client Satisfaction', icon: <Star /> },
  { number: '15+', label: 'Expert Team', icon: <Architecture /> },
];

const values = [
  {
    title: 'Quality Excellence',
    description:
      'We maintain the highest standards in every construction project, using premium materials and proven construction techniques.',
    icon: <CheckCircle sx={{ color: homeTheme.colors.accentDark, fontSize: '1.6rem' }} />,
  },
  {
    title: 'Construction Expertise',
    description:
      'With over 15 years of experience, we bring deep knowledge of construction methods, building codes, and project management.',
    icon: <Construction sx={{ color: homeTheme.colors.accentDark, fontSize: '1.6rem' }} />,
  },
  {
    title: 'Client Partnership',
    description:
      'Your vision is our priority. We work closely with you throughout the construction process to bring your dream home to life.',
    icon: <Star sx={{ color: homeTheme.colors.accentDark, fontSize: '1.6rem' }} />,
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

    <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mb: { xs: 6, md: 8 } }} alignItems="stretch">
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
                background: 'linear-gradient(180deg, rgba(255,255,255,0.78), rgba(240,236,228,0.72))',
                borderRadius: homeTheme.layout.radiusMd,
                border: `1px solid ${homeTheme.colors.divider}`,
                boxShadow: homeTheme.layout.shadowCard,
                transition: 'all 0.25s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  borderColor: 'rgba(184,146,74,0.7)',
                  '& .spin-icon': {
                    transform: 'rotate(360deg)',
                  }
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2, md: 2.2 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box
                  className="spin-icon"
                  sx={{
                    color: homeTheme.colors.accent,
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 42,
                    height: 42,
                    borderRadius: '8px',
                    background: homeTheme.colors.accentMuted,
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.4rem',
                    },
                  }}
                >
                  {stat.icon}
                </Box>
                <Typography
                  variant="h3"
                  sx={{
                    color: homeTheme.colors.textPrimary,
                    fontWeight: 600,
                    fontSize: { xs: '1.65rem', md: '1.9rem' },
                    fontFamily: homeTheme.fonts.heading,
                    mb: 0.5,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: homeTheme.colors.textSecondary,
                    fontFamily: homeTheme.fonts.body,
                    fontSize: '0.9rem',
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
        spacing={{ xs: 2.5, md: 2.8 }}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          mb: { xs: 6, md: 8 },
          background: 'linear-gradient(180deg, rgba(246,242,235,0.95), rgba(255,255,255,0.82))',
          borderRadius: '28px',
          border: `1px solid rgba(184,146,74,0.18)`,
          boxShadow: '0 26px 50px rgba(27, 24, 19, 0.06)',
          px: { xs: 2.4, md: 4 },
          py: { xs: 3, md: 4.5 },
          textAlign: 'left',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at top left, rgba(184,146,74,0.09), transparent 38%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: homeTheme.colors.textPrimary,
            fontWeight: 400,
            fontFamily: homeTheme.fonts.heading,
            fontSize: { xs: '2.3rem', md: '4.2rem' },
            lineHeight: 0.95,
            letterSpacing: '-0.05em',
            maxWidth: '760px',
          }}
        >
          Our Story &amp; Mission
        </Typography>
        <Box sx={{ position: 'relative', zIndex: 1, maxWidth: '820px' }}>
          <Typography
            variant="body1"
            sx={{
              color: homeTheme.colors.textSecondary,
              lineHeight: 1.8,
              fontFamily: homeTheme.fonts.body,
              fontSize: { xs: '1rem', md: '1.12rem' },
              maxWidth: '820px',
              mb: 2,
            }}
          >
            Founded with a vision to build exceptional homes and structures in Bangalore, Gruham&apos;s Construction has grown from a small family business to one of the most trusted construction companies in the city. Our journey began with a simple belief: every client deserves exceptional quality construction, innovative building solutions, and personalised project management.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: homeTheme.colors.textSecondary,
              lineHeight: 1.8,
              fontFamily: homeTheme.fonts.body,
              fontSize: { xs: '1rem', md: '1.12rem' },
              maxWidth: '820px',
              mb: 0,
            }}
          >
            Today, we continue to uphold these values while embracing modern construction technology and sustainable building practices. Our team of skilled construction professionals, architects, and engineers work together to deliver projects that exceed expectations and stand the test of time.
          </Typography>
        </Box>
        <Divider flexItem sx={{ position: 'relative', zIndex: 1, borderColor: 'rgba(31,45,61,0.12)', my: 0.4 }} />
        <Typography
          variant="body2"
          sx={{
            position: 'relative',
            zIndex: 1,
            color: homeTheme.colors.accentDark,
            fontFamily: homeTheme.fonts.body,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 700,
            fontSize: { xs: '0.76rem', md: '0.8rem' },
            lineHeight: 1.7,
            fontStyle: 'italic',
          }}
        >
          "Crafting enduring spaces with precision, integrity, and heart."
        </Typography>
      </Stack>
    </motion.div>

    <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch" sx={{ mt: { xs: 5, md: 7 } }}>
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
                background: 'linear-gradient(180deg, rgba(255,255,255,0.72), rgba(239,237,230,0.7))',
                borderRadius: '18px',
                border: `1px solid ${homeTheme.colors.divider}`,
                boxShadow: homeTheme.layout.shadowSoft,
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  borderColor: 'rgba(201, 173, 112, 0.7)',
                  transform: 'translateY(-3px)',
                  '& .spin-icon': {
                    transform: 'rotate(360deg)',
                  }
                },
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 2.5, md: 3 },
                  textAlign: 'center',
                  alignItems: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Box
                  className="spin-icon"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 48,
                    height: 48,
                    borderRadius: '4px',
                    background: homeTheme.colors.accentMuted,
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
