import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  MenuItem,
  Card,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  LocationOnOutlined,
  PhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import { submitContactForm } from "../../utils/contactService";
import { homeTheme } from "../Home/sectionStyles";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    bestTimeToTalk: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsSubmitting(true);

    try {
      await submitContactForm({
        ...form,
        submittedAt: new Date().toISOString(),
        source: "contact-page",
      });
      setMessage("✅ Thank you! We’ll contact you soon.");
      setTimeout(() => {
        setForm({
          name: "",
          email: "",
          phone: "",
          bestTimeToTalk: "",
          message: "",
        });
        setMessage("");
      }, 4000);
    } catch (err) {
      setError(
        err?.message ||
        "Something went wrong while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      background: 'rgba(255, 255, 255, 0.65)',
      borderRadius: '8px',
      "& fieldset": { borderColor: "rgba(31, 45, 61, 0.15)" },
      "&:hover fieldset": { borderColor: homeTheme.colors.accent },
      "&.Mui-focused fieldset": { borderColor: homeTheme.colors.accent, borderWidth: '1px' },
    },
    "& .MuiInputLabel-root": { color: homeTheme.colors.textSecondary, fontFamily: homeTheme.fonts.body },
    "& .MuiInputBase-input": { fontFamily: homeTheme.fonts.body, color: homeTheme.colors.textPrimary },
  };

  return (
    <Box
      sx={{
        background: `radial-gradient(circle at top left, rgba(191, 169, 116, 0.16), transparent 28%), linear-gradient(180deg, #f6f2ec 0%, #f8f8f7 100%)`,
        minHeight: '100vh',
        pt: { xs: 9, md: 11 },
        pb: 10,
        overflowX: 'hidden',
      }}
    >
      <SEOHead
        title="Contact Gruham's Construction - Get Your Construction Quote Today"
        description="Contact Gruham's Construction (Gruhams) for your construction needs in Bangalore. Get expert construction quotes, consultation, and project planning. Call +91-8431000242 or email info@gruhams.in"
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box textAlign="center" mb={{ xs: 6, md: 7 }}>
          <Typography
            component="p"
            className="eyebrow-pill"
            sx={{ mb: '18px' }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant="h1"
            className="page-title"
            sx={{
              fontFamily: homeTheme.fonts.heading,
              fontSize: 'var(--page-title-size)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              lineHeight: 'var(--page-title-line-height)',
              mb: 2.5,
              letterSpacing: 'var(--page-title-letter-spacing)',
            }}
          >
            Let's Build Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: homeTheme.colors.textSecondary,
              fontFamily: homeTheme.fonts.body,
              maxWidth: 720,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7
            }}
          >
            Whether you have a question about our services, pricing, or want to start a new project, our team is ready to answer all your questions.
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Card
                sx={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: homeTheme.layout.radiusLg,
                  p: { xs: 3, md: 5 },
                  boxShadow: homeTheme.layout.shadowCard,
                  border: '1px solid rgba(31,45,61,0.08)',
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, fontFamily: homeTheme.fonts.heading, color: homeTheme.colors.textPrimary }}>
                  Send Us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField sx={textFieldSx} label="Your Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField sx={textFieldSx} label="Email Address" name="email" value={form.email} onChange={handleChange} fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField sx={textFieldSx} label="Phone Number" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField sx={textFieldSx} select label="Best Time to Talk" name="bestTimeToTalk" value={form.bestTimeToTalk} onChange={handleChange} fullWidth>
                        <MenuItem value="Within 15 Min.">Within 15 Min.</MenuItem>
                        <MenuItem value="08AM To 12PM">08AM To 12PM</MenuItem>
                        <MenuItem value="12PM To 04PM">12PM To 04PM</MenuItem>
                        <MenuItem value="04PM To 08PM">04PM To 08PM</MenuItem>
                        <MenuItem value="Anytime">Anytime</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField sx={textFieldSx} label="Your Message" name="message" value={form.message} onChange={handleChange} fullWidth required multiline rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        sx={{
                          width: '100%',
                          background: `linear-gradient(135deg, ${homeTheme.colors.accentDark} 0%, ${homeTheme.colors.accent} 100%)`,
                          color: '#fff',
                          fontFamily: homeTheme.fonts.body,
                          fontWeight: 700,
                          py: 1.8,
                          borderRadius: '999px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          boxShadow: '0 8px 20px rgba(184, 146, 74, 0.25)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: '0 12px 28px rgba(184, 146, 74, 0.35)',
                          },
                          opacity: isSubmitting ? 0.8 : 1
                        }}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                {message && (
                  <Typography align="center" sx={{ mt: 3, color: '#2e8b57', fontWeight: 600, fontFamily: homeTheme.fonts.body }}>
                    {message}
                  </Typography>
                )}
                {error && (
                  <Typography align="center" sx={{ mt: 2, color: '#d32f2f', fontWeight: 600, fontFamily: homeTheme.fonts.body }}>
                    {error}
                  </Typography>
                )}
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} md={5} sx={{ display: 'flex' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ width: '100%' }}>
              <Card
                sx={{
                  background: 'linear-gradient(160deg, rgba(255,255,255,0.9) 0%, rgba(251,248,241,0.95) 100%)',
                  borderRadius: homeTheme.layout.radiusLg,
                  p: { xs: 3, md: 5 },
                  boxShadow: homeTheme.layout.shadowCard,
                  border: '1px solid rgba(184,146,74,0.15)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4
                }}
              >
                <Typography variant="h4" sx={{ fontFamily: homeTheme.fonts.heading, color: homeTheme.colors.textPrimary }}>
                  Contact Details
                </Typography>

                {[
                  { icon: <LocationOnOutlined sx={{ fontSize: '1.5rem' }} />, title: "Address", desc: "Sree Sai heights, 3rd floor ideal home town ship Rajarajeshwari Nagar Bangalore - 560098" },
                  { icon: <PhoneOutlined sx={{ fontSize: '1.5rem' }} />, title: "Phone", desc: "+91-8431000242" },
                  { icon: <EmailOutlined sx={{ fontSize: '1.5rem' }} />, title: "Email", desc: "info@gruhams.in" }
                ].map((item, i) => (
                  <Box 
                    key={i} 
                    sx={{ 
                      display: 'flex', 
                      gap: 2, 
                      alignItems: 'flex-start',
                      '&:hover .spin-icon': {
                        transform: 'rotate(360deg)',
                      }
                    }}
                  >
                    <Box 
                      className="spin-icon"
                      sx={{
                        width: 48, height: 48, borderRadius: '50%', background: 'rgba(184, 146, 74, 0.1)',
                        color: homeTheme.colors.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontFamily: homeTheme.fonts.body, fontWeight: 700, fontSize: '1rem', color: homeTheme.colors.textPrimary, mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ fontFamily: homeTheme.fonts.body, color: homeTheme.colors.textSecondary, lineHeight: 1.6 }}>
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Google Map Full Width */}
      <Box
        sx={{
          width: '90%',
          maxWidth: 1320,
          height: { xs: 340, md: 460 },
          mt: { xs: 6, md: 8 },
          mx: 'auto',
          overflow: 'hidden',
          borderRadius: homeTheme.layout.radiusLg,
          border: '1px solid rgba(31,45,61,0.1)',
          boxShadow: homeTheme.layout.shadowSoft,
        }}
      >
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124435.81943600824!2d77.5166835!3d12.9321688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab48133c8ac43d4f%3A0xc69e73be8b1bc0c8!2sGruhams!5e0!3m2!1sen!2sin!4v1762250751081!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>

      <InternalLinks currentPage="contact" />
    </Box>
  );
}
