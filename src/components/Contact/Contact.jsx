import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { FadeIn, SlideUp } from "../../animation/animate";
import { 
  brandColors, 
  typography, 
  spacing, 
  shadows, 
  transitions,
  borderRadius
} from "../../theme/designSystem";
import contactBg from "../../assets/images/careers_bg.jpg";

// Styled components
const StyledHeroSection = styled(Box)({
  position: 'relative',
  height: '60vh',
  width: '100%',
  backgroundImage: `url(${contactBg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box>
      {/* Hero Section */}
      <StyledHeroSection>
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              fontWeight: typography.fontWeight.bold, 
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              fontSize: typography.fontSize.h2,
              letterSpacing: typography.letterSpacing.heading,
            }}
          >
            Contact Us
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto',
              fontFamily: typography.fontFamily.body,
              fontSize: typography.fontSize.h5,
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
            }}
          >
            If you'd like to learn more about how we can help make your dream home a reality.
            We can't wait to hear from you!
          </Typography>
        </Box>
      </StyledHeroSection>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ my: spacing.xxl }}>
        <Grid container spacing={spacing.xl}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: spacing.xl,
                backgroundColor: brandColors.background.white,
                borderRadius: borderRadius.large,
                boxShadow: shadows.medium,
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  color: brandColors.text.secondary, 
                  mb: spacing.lg,
                  fontFamily: typography.fontFamily.heading,
                  fontSize: typography.fontSize.h4,
                  fontWeight: typography.fontWeight.bold,
                  letterSpacing: typography.letterSpacing.heading,
                }}
              >
                Send us a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={spacing.md}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: brandColors.border,
                          },
                          "&:hover fieldset": {
                            borderColor: brandColors.primary,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: brandColors.primary,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.body1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: brandColors.border,
                          },
                          "&:hover fieldset": {
                            borderColor: brandColors.primary,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: brandColors.primary,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.body1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: brandColors.border,
                          },
                          "&:hover fieldset": {
                            borderColor: brandColors.primary,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: brandColors.primary,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.body1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: brandColors.border,
                          },
                          "&:hover fieldset": {
                            borderColor: brandColors.primary,
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: brandColors.primary,
                          },
                        },
                        "& .MuiInputLabel-root": {
                          color: brandColors.text.secondary,
                          fontFamily: typography.fontFamily.body,
                          fontSize: typography.fontSize.body1,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: brandColors.primary,
                        color: brandColors.text.light,
                        px: spacing.xl,
                        py: spacing.md,
                        fontSize: typography.fontSize.body1,
                        fontWeight: typography.fontWeight.semiBold,
                        borderRadius: borderRadius.medium,
                        textTransform: "none",
                        transition: transitions.default,
                        fontFamily: typography.fontFamily.body,
                        "&:hover": {
                          backgroundColor: "#B39375",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                p: spacing.xl,
                backgroundColor: brandColors.background.white,
                borderRadius: borderRadius.large,
                boxShadow: shadows.medium,
                height: "100%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: brandColors.text.secondary,
                  fontSize: typography.fontSize.h4,
                  fontWeight: typography.fontWeight.bold,
                  mb: spacing.lg,
                  fontFamily: typography.fontFamily.heading,
                  letterSpacing: typography.letterSpacing.heading,
                }}
              >
                Contact Information
              </Typography>
              <Box sx={{ mb: spacing.lg }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: brandColors.text.secondary,
                    fontSize: typography.fontSize.body1,
                    fontFamily: typography.fontFamily.body,
                    letterSpacing: typography.letterSpacing.body,
                    mb: spacing.sm,
                  }}
                >
                  Address: 123 Construction Ave, Building District
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: brandColors.text.secondary,
                    fontSize: typography.fontSize.body1,
                    fontFamily: typography.fontFamily.body,
                    letterSpacing: typography.letterSpacing.body,
                    mb: spacing.sm,
                  }}
                >
                  Phone: +1 234 567 8900
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: brandColors.text.secondary,
                    fontSize: typography.fontSize.body1,
                    fontFamily: typography.fontFamily.body,
                    letterSpacing: typography.letterSpacing.body,
                  }}
                >
                  Email: info@gruhamconstruction.com
                </Typography>
              </Box>
              <Typography
                variant="h5"
                sx={{
                  color: brandColors.text.secondary,
                  fontSize: typography.fontSize.h5,
                  fontWeight: typography.fontWeight.bold,
                  mb: spacing.md,
                  fontFamily: typography.fontFamily.heading,
                  letterSpacing: typography.letterSpacing.heading,
                }}
              >
                Business Hours
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: brandColors.text.secondary,
                  fontSize: typography.fontSize.body1,
                  fontFamily: typography.fontFamily.body,
                  letterSpacing: typography.letterSpacing.body,
                }}
              >
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ height: '450px', width: '100%', mt: spacing.xxl }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4910851644447!2d-122.5672493!3d45.4285799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495740aa5c2c8ab%3A0x2c5b75b1b4a6c8a4!2s9206%20SE%20Idleman%20Rd%2C%20Happy%20Valley%2C%20OR%2097086!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default Contact;
