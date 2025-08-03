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
import contactBg from "../../assets/images/careers_bg.jpg";
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius
} from "../../theme/designSystem";

const StyledHeroSection = styled(Box)({
  position: "relative",
  height: "60vh",
  width: "100%",
  backgroundImage: `url(${contactBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1
  }
});

const textFieldStyles = {
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
    borderRadius: borderRadius.medium,
  },
  "& .MuiInputLabel-root": {
    color: brandColors.text.secondary,
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.body1,
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmissionMessage("Thank you for contacting Gruham! We will respond soon.");
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmissionMessage("");
    }, 3000);
  };

  return (
    <Box sx={{ backgroundColor: brandColors.background.light, minHeight: "100vh" }}>
      {/* Hero Section */}
      <StyledHeroSection>
        <Box sx={{ position: "relative", textAlign: "center", color: brandColors.text.light, zIndex: 2, p: spacing.md }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: typography.fontWeight.bold,
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              fontSize: { xs: typography.fontSize.h3, md: typography.fontSize.h2 },
              letterSpacing: typography.letterSpacing.heading,
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Contact Gruham
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: 600,
              mx: "auto",
              fontFamily: typography.fontFamily.body,
              fontSize: { xs: typography.fontSize.body1, md: typography.fontSize.h5 },
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
            }}
          >
            Planning a new project or need expert advice? Our team is ready to guide you every step of the way.
          </Typography>
        </Box>
      </StyledHeroSection>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ my: spacing.xxl }}>
        <Grid container spacing={spacing.xl} alignItems="stretch">
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: spacing.xl,
                backgroundColor: brandColors.background.white,
                borderRadius: borderRadius.large,
                boxShadow: shadows.large,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
                Get in Touch
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
                <Grid container spacing={spacing.md}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      sx={textFieldStyles}
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
                      sx={textFieldStyles}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone (optional)"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      sx={textFieldStyles}
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
                      sx={textFieldStyles}
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
                        boxShadow: shadows.medium,
                        "&:hover": {
                          backgroundColor: "#B39375",
                          transform: "translateY(-2px)",
                          boxShadow: shadows.large,
                        },
                        width: { xs: "100%", sm: "auto" },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                  {submissionMessage && (
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        sx={{
                          mt: spacing.md,
                          color: brandColors.success,
                          fontFamily: typography.fontFamily.body,
                          textAlign: "center",
                        }}
                      >
                        {submissionMessage}
                      </Typography>
                    </Grid>
                  )}
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
                boxShadow: shadows.large,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
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
                Contact Details
              </Typography>
              <Box sx={{ mb: spacing.lg, flexGrow: 1 }}>
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
                  <Box component="span" sx={{ fontWeight: typography.fontWeight.semiBold }}>Address:</Box> 123 Construction Ave, Building District
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
                  <Box component="span" sx={{ fontWeight: typography.fontWeight.semiBold }}>Phone:</Box> +1 234 567 8900
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
                  <Box component="span" sx={{ fontWeight: typography.fontWeight.semiBold }}>Email:</Box> info@gruhamconstruction.com
                </Typography>
              </Box>
              <Box>
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
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ height: { xs: "300px", md: "450px" }, width: "100%", mt: 20, mb: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7548691524453!2d77.69393267484278!3d13.051269187271448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11003102f8d5%3A0x9e9517053a418d75!2sTVASHTA%20INTERIOR%20SOLUTIONS%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753849182414!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: borderRadius.large }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </Box>
    </Box>
  );
};

export default Contact;
