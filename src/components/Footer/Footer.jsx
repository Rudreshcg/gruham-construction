import React from "react";
import Logo from '../../assets/images/Logo.png';
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Pinterest,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box component={motion.footer} bgcolor="#1C1C1E" color="white" py={10}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Company info section */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
            >
              <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                <img
                  src={Logo}
                  alt="Gruham's Construction Logo - Bangalore Construction Company"
                  style={{
                    maxWidth: '50px',
                    height: 'auto',
                  }}
                />

              </Box>
              <Typography variant="body1" textAlign="center" color="burlywood" sx={{ fontWeight: 500 }}>
                Where design meets your dream lifestyle. Premium construction services in Bangalore.
              </Typography>
              <Box
                mt={3}
                display="flex"
                justifyContent="center"
                flexWrap="wrap"
                gap={{ xs: 1, sm: 1.5, md: 2 }} // responsive spacing
              >
                {[Facebook, Twitter, Instagram, YouTube, Pinterest, LinkedIn].map((Icon, idx) => (
                  <IconButton
                    key={idx}
                    color="inherit"
                    href="#"
                    aria-label={Icon.displayName || "social link"}
                    sx={{
                      fontSize: { xs: 20, sm: 24, md: 28 }, // responsive icon size
                      '& svg': { fontSize: 'inherit' },
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#bfa974' },
                      padding: { xs: 0.75, sm: 1 } // smaller padding on mobile
                    }}
                  >
                    <Icon />
                  </IconButton>
                ))}
              </Box>

            </motion.div>
          </Grid>

          {/* Useful Links */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.3)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Useful Links
              </Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                <MuiLink
                  component={RouterLink}
                  to="/about"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  About Us
                </MuiLink>
                <MuiLink
                  component={RouterLink}
                  to="/contact"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  Contact Us
                </MuiLink>
                <MuiLink
                  component={RouterLink}
                  to="/privacy-policy"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  Privacy Policy
                </MuiLink>
                <MuiLink
                  component={RouterLink}
                  to="/terms"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  Terms & Conditions
                </MuiLink>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.4)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Call
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                +91-8431000242
              </Typography>

              <Typography variant="h6" fontWeight="bold" mt={4} mb={2}>
                Write
              </Typography>
              <MuiLink
                href="mailto:info@gruhams.in"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: 500 }}
              >
                info@gruhams.in
              </MuiLink>
            </motion.div>
          </Grid>

          {/* Visit Us */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.5)}
              initial="initial"
              whileInView="animate"
            >
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Visit
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                Gruham's
              </Typography>
              <Typography variant="body2" mt={1}>
                3rd floor, Corporation Bank, Sri sai heights, 456 C, 1st Main Rd, Ideal Homes Twp, Rajarajeshwari Nagar, Bengaluru, Karnataka 560098
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, borderColor: '#444' }} />

        {/* bottom section */}
        <Typography
          textAlign="center"
          variant="body2"
          fontWeight="bold"
          pt={4}
          color="gray"
          sx={{ userSelect: "none" }}
        >
          &copy; {new Date().getFullYear()} Gruham. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
