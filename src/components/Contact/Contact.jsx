import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Email, Phone, AccessTime, LocationOn } from "@mui/icons-material";
import contactBg from "../../assets/images/careers_bg.jpg";

// Brand colors - simple palette
const brandColors = {
  primary: '#C4A484',
  text: '#2C2C2C',
};

// Styled components
const StyledHeroSection = styled(Box)(({ theme }) => ({
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
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    '&.Mui-focused fieldset': {
      borderColor: brandColors.primary,
    }
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: brandColors.primary,
  }
});

const ContactCard = styled(Card)({
  padding: '24px',
  height: '100%',
  backgroundColor: '#fff',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
});

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <StyledHeroSection>
        <Box sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 600, mx: 'auto' }}>
            If you'd like to learn more about how we can help make your dream home a reality.
            We can't wait to hear from you!
          </Typography>
        </Box>
      </StyledHeroSection>

      {/* Contact Form Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h4" gutterBottom sx={{ color: brandColors.text, mb: 4 }}>
                Send us a Message
              </Typography>
              <Box component="form">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Your Name"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Your Email"
                      required
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Phone"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Subject"
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Your Message"
                      multiline
                      rows={4}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        py: 1.5,
                        backgroundColor: brandColors.primary,
                        '&:hover': {
                          backgroundColor: '#B39375',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ContactCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOn sx={{ color: brandColors.primary, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ color: brandColors.text }}>
                      ADDRESS
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 5 }}>
                    9206 SE Idleman Rd.
                    <br />
                    Happy Valley, OR 97086
                  </Typography>
                </ContactCard>
              </Grid>
              
              <Grid item xs={12}>
                <ContactCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Phone sx={{ color: brandColors.primary, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ color: brandColors.text }}>
                      PHONE
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 5 }}>
                    (503) 327-8351
                  </Typography>
                </ContactCard>
              </Grid>

              <Grid item xs={12}>
                <ContactCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <AccessTime sx={{ color: brandColors.primary, mr: 2, fontSize: 28 }} />
                    <Typography variant="h6" sx={{ color: brandColors.text }}>
                      HOURS
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 5 }}>
                    M-F, 8am – 5pm
                  </Typography>
                </ContactCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Google Maps Section */}
      <Box sx={{ height: '450px', width: '100%', mt: 6 }}>
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
