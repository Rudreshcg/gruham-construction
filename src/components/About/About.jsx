import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Groups, Business, EmojiEvents } from "@mui/icons-material";
import aboutBg from "../../assets/images/careers_bg.jpg";

const About = () => {
  return (
    <Box>
      {/* Header Section with Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
          padding: "1rem",
        }}
      >
        <Typography variant="h4" fontWeight={600} sx={{ background: "rgba(0, 0, 0, 0.6)", padding: "1rem", borderRadius: "8px" }}>
          About Us
        </Typography>
      </Box>

      {/* Company Mission & Vision Section */}
      <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "3rem 2rem" }}>
        <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" textAlign="center" color="textSecondary">
          We are a team of passionate professionals dedicated to delivering top-quality solutions.
        </Typography>

        <Grid container spacing={4} sx={{ marginTop: "3rem" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, backgroundColor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="h5" fontWeight={600} color="primary">
                  Our Mission
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                  To empower businesses with innovative technology solutions and exceptional service.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3, backgroundColor: "#f5f5f5" }}>
              <CardContent>
                <Typography variant="h5" fontWeight={600} color="primary">
                  Our Vision
                </Typography>
                <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                  To be the leading provider of cutting-edge digital solutions that transform industries.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Core Values or Team Section */}
      <Box sx={{ backgroundColor: "#f9f9f9", padding: "3rem 2rem" }}>
        <Typography variant="h4" fontWeight={600} textAlign="center" gutterBottom>
          What We Stand For
        </Typography>
        <Grid container spacing={4} sx={{ maxWidth: "1000px", margin: "auto", marginTop: "2rem" }}>
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar sx={{ bgcolor: "primary.main", margin: "auto", width: 64, height: 64 }}>
              <Groups fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: "1rem" }}>
              Teamwork
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Collaboration is key to our success.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar sx={{ bgcolor: "secondary.main", margin: "auto", width: 64, height: 64 }}>
              <Business fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: "1rem" }}>
              Innovation
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We strive to be pioneers in our industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar sx={{ bgcolor: "success.main", margin: "auto", width: 64, height: 64 }}>
              <EmojiEvents fontSize="large" />
            </Avatar>
            <Typography variant="h6" fontWeight={600} sx={{ marginTop: "1rem" }}>
              Excellence
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We deliver quality results in everything we do.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
