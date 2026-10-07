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
  const socialLinks = {
    Facebook: "https://www.facebook.com/gruhamconstruction",
    Twitter: "#",
    Instagram: "https://www.instagram.com/gruhams.official?igsh=Z21xenQ5anNzdHAx",
    YouTube: "https://youtube.com/@gruhamsxtvashta?si=fWzjDuDBW6NBBYc2",
    Pinterest: "https://pin.it/BlFuBJJJp",
    LinkedIn: "https://www.linkedin.com/company/gruhamconstruction"
  };

  const socialIcons = [
    { Icon: Facebook, name: "Facebook" },
    { Icon: Twitter, name: "Twitter" },
    { Icon: Instagram, name: "Instagram" },
    { Icon: YouTube, name: "YouTube" },
    { Icon: Pinterest, name: "Pinterest" },
    { Icon: LinkedIn, name: "LinkedIn" }
  ];

  return (
    <Box component={motion.footer} bgcolor="#efede6" color="#383838" py={{ xs: 7, md: 9 }}>
      <Container
        maxWidth="lg"
        sx={{
          "& .MuiLink-root:hover": { color: "#927944" },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Company info section */}
          <Grid item xs={12} md={3}>
            <motion.div
              variants={SlideLeft(0.2)}
              initial="initial"
              whileInView="animate"
            >
              <Box display="flex" alignItems="center" justifyContent={{ xs: "center", md: "flex-start" }} mb={2}>
                <img
                  src={Logo}
                  alt="Gruham's Construction Logo - Bangalore Construction Company"
                  style={{
                    maxWidth: '110px',
                    height: 'auto',
                  }}
                />

              </Box>
              <Typography variant="body1" textAlign={{ xs: "center", md: "left" }} color="#666666" sx={{ fontWeight: 500, lineHeight: 1.7 }}>
                Where design meets your dream lifestyle. Premium construction services in Bangalore.
              </Typography>
              <Box
                mt={3}
                display="flex"
                justifyContent={{ xs: "center", md: "flex-start" }}
                flexWrap="wrap"
                gap={{ xs: 1, sm: 1.5, md: 2 }} // responsive spacing
              >
                {socialIcons.map(({ Icon, name }, idx) => (
                  <IconButton
                    key={idx}
                    color="inherit"
                    href={socialLinks[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    sx={{
                      fontSize: { xs: 20, sm: 24, md: 28 }, // responsive icon size
                      '& svg': { fontSize: 'inherit' },
                      transition: 'color 0.3s ease',
                      '&:hover': { color: '#d6bd83' },
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
                <MuiLink
                  component={RouterLink}
                  to="/careers"
                  color="inherit"
                  underline="hover"
                  sx={{ fontWeight: 500, cursor: 'pointer' }}
                >
                  Careers
                </MuiLink>
                <MuiLink
                  href="https://gruhams.construct.sevenr.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="hover"
                  sx={{ fontWeight: 700, cursor: 'pointer', color: '#d6bd83' }}
                >
                  Client & Employee Login
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
                Sree Sai heights , 3rd floor ideal home town ship Rajarajeshwari Nagar Bangalore - 560098
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 6, borderColor: 'rgba(56, 56, 56, 0.18)' }} />

        {/* bottom section */}
        <Typography
          textAlign="center"
          variant="body2"
          fontWeight="bold"
          pt={4}
          color="#666666"
          sx={{ userSelect: "none" }}
        >
          &copy; {new Date().getFullYear()} Gruham. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
