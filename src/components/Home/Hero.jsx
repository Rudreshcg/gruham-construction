import React, { useRef, useState } from "react";
import { Box, Typography, Button, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import landingPageImageWebp from "../../assets/images/heros_image.jpg";
import landingPageImageJpg from "../../assets/images/heros_image.jpg";
import RadialGradient from "../../common/RadialGradient";

const Hero = () => {
  const maindivRef = useRef(null);
  const navigate = useNavigate();

  // Dynamic form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}`);
    setFormData({ name: "", email: "", phone: "" });
     navigate("/About");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        maxWidth: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 2, sm: 3, md: 4 },
      }}
      ref={maindivRef}
    >
      {/* Background Image */}
      <picture>
        <source srcSet={landingPageImageWebp} type="image/webp" />
        <img
          src={landingPageImageJpg}
          alt="Luxury Living Spaces"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            transition: "filter 0.6s ease-in-out",
          }}
        />
      </picture>

      {/* Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7))",
          zIndex: 1,
        }}
      />

      {/* Radial Gradient (brightness / swipe effect) */}
      <RadialGradient outerDivRef={maindivRef} />

      {/* Main Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          py: { xs: 4, sm: 6, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#bfa974",
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
            mb: 2,
          }}
        >
           Luxury Living
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#fff",
            maxWidth: "600px",
            textShadow: "0 1px 8px rgba(0,0,0,0.7)",
          }}
        >
          Experience elegance redefined — crafted with precision and passion.
        </Typography>
      </Container>

      {/* Contact Form (Bottom-left corner) */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          bottom: { xs: 20, sm: 30 },
          left: { xs: 20, sm: 30 },
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid #bfa974",
          borderRadius: "16px",
          padding: "22px",
          width: { xs: "85%", sm: "320px" },
          boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          gap: 1.8,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: "#bfa974",
            fontWeight: 700,
            textAlign: "center",
            mb: 1,
          }}
        >
          Contact Us
        </Typography>

        <TextField
          label="Name"
          name="name"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          InputLabelProps={{ style: { color: "#bfa974" } }}
          InputProps={{
            style: { color: "#fff", borderColor: "#bfa974" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#bfa974" },
              "&:hover fieldset": { borderColor: "#bfa974" },
              "&.Mui-focused fieldset": { borderColor: "#bfa974" },
            },
          }}
        />

        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          InputLabelProps={{ style: { color: "#bfa974" } }}
          InputProps={{
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#bfa974" },
              "&:hover fieldset": { borderColor: "#bfa974" },
              "&.Mui-focused fieldset": { borderColor: "#bfa974" },
            },
          }}
        />

        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          variant="outlined"
          size="small"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          InputLabelProps={{ style: { color: "#bfa974" } }}
          InputProps={{
            style: { color: "#fff" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#bfa974" },
              "&:hover fieldset": { borderColor: "#bfa974" },
              "&.Mui-focused fieldset": { borderColor: "#bfa974" },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "#bfa974",
            color: "#000",
            "&:hover": { backgroundColor: "#bfa974" },
            fontWeight: 600,
            mt: 1,
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
