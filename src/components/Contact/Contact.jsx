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
    <Box sx={{ py: spacing.xxl, backgroundColor: brandColors.background.light }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.8)} initial="initial" animate="animate">
          <Typography
            variant="h2"
            sx={{
              color: brandColors.text.primary,
              fontSize: typography.fontSize.h2,
              fontWeight: typography.fontWeight.bold,
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              letterSpacing: typography.letterSpacing.heading,
              textAlign: "center"
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: brandColors.text.secondary,
              fontSize: typography.fontSize.h3,
              mb: spacing.xl,
              maxWidth: "800px",
              margin: "0 auto",
              fontFamily: typography.fontFamily.body,
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              textAlign: "center"
            }}
          >
            Get in touch with us to discuss your project requirements
          </Typography>
        </motion.div>

        <Grid container spacing={spacing.xl} sx={{ mt: spacing.md }}>
          <Grid item xs={12} md={6}>
            <motion.div variants={SlideUp(0.5)} initial="initial" animate="animate">
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: spacing.md,
                }}
              >
                <TextField
                  label="Name"
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
                    },
                  }}
                />
                <TextField
                  label="Email"
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
                    },
                  }}
                />
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
                    },
                  }}
                />
                <TextField
                  label="Message"
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
                    },
                  }}
                />
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
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div variants={SlideUp(0.5)} initial="initial" animate="animate">
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
                    color: brandColors.text.primary,
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
                    color: brandColors.text.primary,
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
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
