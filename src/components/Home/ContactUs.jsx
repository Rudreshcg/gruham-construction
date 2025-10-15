import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import {
  PersonOutline,
  MailOutline,
  LocalPhoneOutlined,
  SendRounded,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

// Styled Input Field
const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    background: "rgba(255, 255, 255, 0.15)",
    borderRadius: "10px",
    color: "#fff",
    transition: "all 0.3s ease-in-out",
    "& fieldset": { borderColor: "rgba(191, 169, 116, 0.4)" },
    "&:hover fieldset": {
      borderColor: "#bfa974",
      boxShadow: "0 0 8px rgba(191, 169, 116, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#bfa974",
      boxShadow: "0 0 10px rgba(191, 169, 116, 0.7)",
    },
    "& input": { padding: "12px 16px" },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.9)",
    fontWeight: 500,
    "&.Mui-focused": { color: "#bfa974" },
  },
}));

// Styled Button
const StyledButton = styled(Button)(() => ({
  background: "linear-gradient(135deg, #bfa974, #9c8658)",
  color: "#000",
  borderRadius: "10px",
  fontWeight: 700,
  textTransform: "none",
  padding: "10px 0",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 10px rgba(191,169,116,0.4)",
  "&:hover": {
    background: "linear-gradient(135deg, #a48d5e, #c5b07a)",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(191,169,116,0.6)",
  },
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255,255,255,0.2)",
        borderRadius: "16px",
        backdropFilter: "blur(18px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
        p: { xs: 3, sm: 4 },
        width: { xs: "90%", sm: "340px" },
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        animation: "slideUp 0.8s ease forwards",
        "@keyframes slideUp": {
          from: { transform: "translateY(100px)", opacity: 0 },
          to: { transform: "translateY(0)", opacity: 1 },
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#fff",
          fontWeight: 700,
          textAlign: "center",
          mb: 1,
          letterSpacing: "1px",
          textShadow: "0 0 8px rgba(0,0,0,0.5)",
        }}
      >
        Contact Us
      </Typography>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 1 }} />

      <StyledTextField
        label="Name"
        name="name"
        type="text"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonOutline sx={{ color: "#bfa974" }} />
            </InputAdornment>
          ),
        }}
      />

      <StyledTextField
        label="Email"
        name="email"
        type="email"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutline sx={{ color: "#bfa974" }} />
            </InputAdornment>
          ),
        }}
      />

      <StyledTextField
        label="Phone No"
        name="phone"
        type="tel"
        fullWidth
        value={formData.phone}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocalPhoneOutlined sx={{ color: "#bfa974" }} />
            </InputAdornment>
          ),
        }}
      />

      <StyledButton type="submit" endIcon={<SendRounded />} sx={{ mt: 1 }}>
        Send Message
      </StyledButton>
    </Box>
  );
};

export default ContactUs;
