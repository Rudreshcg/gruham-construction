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
// Removed unused imports: motion, FadeIn, SlideUp, as they are not utilized in the component
import contactBg from "../../assets/images/careers_bg.jpg"; // Keeping the original hero image import as requested

// Importing design system variables from the external file as requested
// This assumes your '../../theme/designSystem' file correctly exports these constants.
import {
  brandColors,
  typography,
  spacing,
  shadows,
  transitions,
  borderRadius
} from "../../theme/designSystem";


// Styled components for reusability and cleaner code
const StyledHeroSection = styled(Box)({
  position: 'relative',
  height: '60vh',
  width: '100%',
  backgroundImage: `url(${contactBg})`, // Using the original contactBg image
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly adjusted overlay for better text contrast
  }
});

// Reusable styles for TextField to reduce repetition
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
    borderRadius: borderRadius.medium, // Rounded text fields
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
  const [submissionMessage, setSubmissionMessage] = useState(""); // State for submission feedback

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (e.g., API call)
    console.log("Form Data Submitted:", formData);
    setSubmissionMessage("Thank you for your message! We will get back to you soon.");
    // Clear form after a short delay for user to see the message
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmissionMessage(""); // Clear message after clearing form
    }, 3000); // Clear after 3 seconds
  };

  return (
    <Box sx={{ backgroundColor: brandColors.background.light, minHeight: '100vh' }}> {/* Overall page background */}
      {/* Hero Section */}
      <StyledHeroSection>
        <Box sx={{ position: 'relative', textAlign: 'center', color: brandColors.text.light, zIndex: 1, p: spacing.md }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: typography.fontWeight.bold,
              mb: spacing.md,
              fontFamily: typography.fontFamily.heading,
              fontSize: { xs: typography.fontSize.h3, md: typography.fontSize.h2 }, // Responsive font size
              letterSpacing: typography.letterSpacing.heading,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)', // Add text shadow for better readability
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
              fontSize: { xs: typography.fontSize.body1, md: typography.fontSize.h5 }, // Responsive font size
              fontWeight: typography.fontWeight.regular,
              letterSpacing: typography.letterSpacing.body,
              lineHeight: 1.6,
            }}
          >
            If you'd like to learn more about how we can help make your dream home a reality, please reach out. We can't wait to hear from you!
          </Typography>
        </Box>
      </StyledHeroSection>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ my: spacing.xxl }}>
        <Grid container spacing={spacing.xl} alignItems="stretch"> {/* Use alignItems="stretch" for equal height cards */}
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: spacing.xl,
                backgroundColor: brandColors.background.white,
                borderRadius: borderRadius.large,
                boxShadow: shadows.large, // Enhanced shadow
                height: "100%", // Make it take full height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Distribute content vertically
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
              <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}> {/* Allow form to grow */}
                <Grid container spacing={spacing.md}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      fullWidth
                      sx={textFieldStyles} // Applied reusable styles
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
                      sx={textFieldStyles} // Applied reusable styles
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      fullWidth
                      sx={textFieldStyles} // Applied reusable styles
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
                      sx={textFieldStyles} // Applied reusable styles
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
                        boxShadow: shadows.medium, // Add shadow to button
                        "&:hover": {
                          backgroundColor: '#B39375', // A slightly darker gold on hover
                          transform: "translateY(-2px)", // Slight lift on hover
                          boxShadow: shadows.large,
                        },
                        width: { xs: '100%', sm: 'auto' }, // Full width on small screens, auto on larger
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                  {submissionMessage && ( // Display submission message
                    <Grid item xs={12}>
                      <Typography
                        variant="body1"
                        sx={{
                          mt: spacing.md,
                          color: brandColors.success,
                          fontFamily: typography.fontFamily.body,
                          textAlign: 'center',
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
                boxShadow: shadows.large, // Enhanced shadow
                height: "100%", // Make it take full height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
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
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ height: { xs: '300px', md: '450px' }, width: '100%', mt: spacing.xxl, mb: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4910851644447!2d-122.5672493!3d45.4285799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495740aa5c2c8ab%3A0x2c5b75b1b4a6c8a4!2s9206%20SE%20Idleman%20Rd%2C%20Happy%20Valley%2C%20OR%2097086!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: borderRadius.large }} // Apply border radius to map
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location" // Add a title for accessibility
        />
      </Box>
    </Box>
  );
};

export default Contact;
