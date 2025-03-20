import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import contactBg from "../../assets/images/careers_bg.jpg";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: "100%",
          padding: "2rem",
          boxShadow: 5,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            gutterBottom
            color="primary"
          >
            Get in Touch
          </Typography>
          <Typography variant="body1" textAlign="center" color="textSecondary">
            We would love to hear from you! Please fill out the form below.
          </Typography>

          {/* Contact Details */}
          <Grid container spacing={3} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton color="primary">
                <Email fontSize="large" />
              </IconButton>
              <Typography variant="body1">contact@example.com</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton color="primary">
                <Phone fontSize="large" />
              </IconButton>
              <Typography variant="body1">+1 234 567 890</Typography>
            </Grid>
            <Grid item xs={12} md={4} textAlign="center">
              <IconButton color="primary">
                <LocationOn fontSize="large" />
              </IconButton>
              <Typography variant="body1">123 Main Street, City</Typography>
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Subject"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 4, py: 1 }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
