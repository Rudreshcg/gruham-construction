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
import {
  LocationOnOutlined,
  PhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import bgImage from "../../assets/images/contact-bg.jpeg";

// Accent Divider
const AccentDivider = styled("div")({
  width: "100%",
  height: "6px",
  background: "linear-gradient(to right, #bfa974, #f6e8b8, #bfa974)",
});

// Hero Section wrapper
const HeroWrapper = styled(Box)({
  position: "relative",
  height: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  overflow: "hidden",
});

// Hero Text overlay
const HeroText = styled(Box)({
  position: "absolute",
  zIndex: 2,
  color: "#fff",
  textAlign: "center",
  padding: "0 20px",
});

// Section wrapper
const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 2),
  backgroundColor: "#fff",
}));

// Styled input fields
const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": { borderColor: "#d4cbb6" },
    "&:hover fieldset": { borderColor: "#bfa974" },
    "&.Mui-focused fieldset": { borderColor: "#bfa974" },
    borderRadius: "10px",
    background: "#fff",
  },
  "& .MuiInputLabel-root": { color: "#7a7361" },
}));

// Contact Card wrapper
const ContactCard = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  height: "100%",
}));

// Single contact item
const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  background: "#fdf9f2",
  padding: theme.spacing(2),
  borderRadius: "12px",
  "& svg": {
    color: "#bfa974",
    fontSize: "28px",
  },
}));

// Styled form card
const FormCard = styled(Box)(({ theme }) => ({
  background: "#fff",
  borderRadius: "16px",
  padding: theme.spacing(4),
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("✅ Thank you! We’ll contact you soon.");
    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", message: "" });
      setMessage("");
    }, 4000);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroWrapper component={motion.section} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img
          src={bgImage}
          alt="Contact Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            filter: "brightness(0.6)",
          }}
        />
        <HeroText>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, mx: "auto", lineHeight: 1.6 }}>
            We'd love to hear from you. Please send us a message or reach out directly.
          </Typography>
        </HeroText>
      </HeroWrapper>

      {/* Divider */}
      <AccentDivider />

      {/* Contact Form & Info */}
      <Section>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={7}>
              <FormCard component={motion.div} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: "#2e3921", textAlign: "center" }}>
                  Send Us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField label="Your Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <StyledTextField label="Email Address" name="email" value={form.email} onChange={handleChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <StyledTextField label="Your Message" name="message" value={form.message} onChange={handleChange} fullWidth required multiline rows={4} />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                      <Button variant="contained" type="submit" sx={{ background: "linear-gradient(90deg, #bfa974 0%, #f6e8b8 100%)", color: "#332900", fontWeight: 600, px: 5, py: 1.5, borderRadius: "10px", "&:hover": { background: "#b1936b", color: "#fff" } }}>
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                {message && (
                  <Typography align="center" sx={{ mt: 3, color: "#2e3921", fontWeight: 500 }}>
                    {message}
                  </Typography>
                )}
              </FormCard>
            </Grid>

            {/* Contact Details */}
            <Grid item xs={12} md={5}>
              <ContactCard component={motion.div} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                <Typography variant="h4" sx={{ mb: 3, color: "#2e3921", fontWeight: 600, textAlign: "center" }}>
                  Contact Details
                </Typography>

                <ContactItem>
                  <LocationOnOutlined />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Address</Typography>
                    <Typography>123 Main Street, Bengaluru, India</Typography>
                  </Box>
                </ContactItem>

                <ContactItem>
                  <PhoneOutlined />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                    <Typography>+91 98765 43210</Typography>
                  </Box>
                </ContactItem>

                <ContactItem>
                  <EmailOutlined />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                    <Typography>info@example.com</Typography>
                  </Box>
                </ContactItem>
              </ContactCard>
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* Divider */}
      <AccentDivider />

      {/* Google Map */}
      <Box sx={{ width: "100%", height: { xs: "300px", md: "500px" } }}>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7548691524453!2d77.69393267484278!3d13.051269187271448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11003102f8d5%3A0x9e9517053a418d75!2sTVASHTA%20INTERIOR%20SOLUTIONS%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1753849182414!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </Box>
    </>
  );
}
