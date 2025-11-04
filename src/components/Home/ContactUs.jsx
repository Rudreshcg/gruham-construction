import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Divider,
  Chip,
  Fade,
  Slide,
} from "@mui/material";
import {
  PersonOutline,
  MailOutline,
  LocalPhoneOutlined,
  SendRounded,
  CheckCircle,
  Star,
  Construction,
} from "@mui/icons-material";
import { styled, keyframes } from "@mui/material/styles";

// Enhanced animations
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(191, 169, 116, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(191, 169, 116, 0.8), 0 0 30px rgba(191, 169, 116, 0.6);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

// Enhanced Styled Input Field
const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "12px",
    color: "#2c3e50",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    backdropFilter: "blur(10px)",
    "& fieldset": { 
      borderColor: "rgba(191, 169, 116, 0.3)",
      borderWidth: "1px",
    },
    "&:hover fieldset": {
      borderColor: "#bfa974",
      boxShadow: "0 0 15px rgba(191, 169, 116, 0.3)",
      transform: "translateY(-1px)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#bfa974",
      borderWidth: "2px",
      boxShadow: "0 0 20px rgba(191, 169, 116, 0.5)",
      animation: `${glow} 2s ease-in-out infinite`,
    },
    "& input": { 
      padding: { xs: "10px 14px", sm: "12px 16px" },
      fontSize: { xs: "0.85rem", sm: "0.9rem" },
      color: "#2c3e50",
      "&::placeholder": {
        color: "rgba(44, 62, 80, 0.6)",
        opacity: 1,
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: "#5a6c7d",
    fontWeight: 600,
    fontSize: { xs: "0.8rem", sm: "0.9rem" },
    "&.Mui-focused": { 
      color: "#bfa974",
      fontWeight: 700,
    },
  },
}));

// Enhanced Styled Button
const StyledButton = styled(Button)(() => ({
  background: "linear-gradient(135deg, #bfa974, #9c8658)",
  color: "#000",
  borderRadius: "12px",
  fontWeight: 700,
  textTransform: "none",
  padding: { xs: "10px 0", sm: "12px 0" },
  fontSize: { xs: "0.9rem", sm: "1rem" },
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 6px 20px rgba(191,169,116,0.4)",
  position: "relative",
  overflow: "hidden",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
    transition: "left 0.5s",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #a48d5e, #c5b07a)",
    transform: "translateY(-3px)",
    boxShadow: "0 10px 30px rgba(191,169,116,0.6)",
    "&:before": {
      left: "100%",
    },
  },
  "&:active": {
    transform: "translateY(-1px)",
  },
}));

const ContactUs = ({ shouldScroll = false }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Slide direction="up" in={true} timeout={800}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: "rgba(255, 255, 255, 0.95)",
          border: "1px solid rgba(191, 169, 116, 0.2)",
          borderRadius: { xs: "0px", sm: "16px" },
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          p: { xs: 2, sm: 3 },
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.5, sm: 2 },
          position: "relative",
          overflow: shouldScroll ? "auto" : "hidden",
        }}
      >
        {/* Header with compact styling */}
        <Box sx={{ textAlign: "center", mb: { xs: 1, sm: 1.5 } }}>
          <Typography
            variant="h6"
            sx={{
              color: "#2c3e50",
              fontWeight: 700,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
              letterSpacing: "0.3px",
              mb: { xs: 0.5, sm: 1 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 0.5, sm: 1 },
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            <Construction sx={{ color: "#bfa974", fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem" } }} />
            Get Free Quote
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: "#5a6c7d",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              fontWeight: 500,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Start your dream project today
          </Typography>
        </Box>

        <Divider 
          sx={{ 
            borderColor: "rgba(191, 169, 116, 0.3)", 
            mb: 0.5,
            "&:before, &:after": {
              borderColor: "rgba(191, 169, 116, 0.2)",
            }
          }} 
        />


        {/* Form Fields */}
        <StyledTextField
          label="Full Name"
          name="name"
          type="text"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutline sx={{ color: "#bfa974", fontSize: "1.2rem" }} />
              </InputAdornment>
            ),
          }}
        />

        <StyledTextField
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline sx={{ color: "#bfa974", fontSize: "1.2rem" }} />
              </InputAdornment>
            ),
          }}
        />

        <StyledTextField
          label="Phone Number"
          name="phone"
          type="tel"
          fullWidth
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+1 (555) 123-4567"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneOutlined sx={{ color: "#bfa974", fontSize: "1.2rem" }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Compact Submit Button */}
        <StyledButton 
          type="submit" 
          endIcon={isLoading ? <Star sx={{ animation: `${float} 1s ease-in-out infinite` }} /> : <SendRounded />}
          disabled={isLoading || isSubmitted}
          sx={{ 
            mt: { xs: 0.8, sm: 1 },
            py: { xs: 0.8, sm: 1 },
            px: { xs: 1.5, sm: 2 },
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            width: "100%",
            maxWidth: "100%",
            minHeight: { xs: "36px", sm: "40px" },
            opacity: isSubmitted ? 0.7 : 1,
            "&:disabled": {
              background: "rgba(191, 169, 116, 0.3)",
              color: "rgba(0, 0, 0, 0.5)",
            }
          }}
        >
          {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Get Free Quote"}
        </StyledButton>

        {/* Success Message - positioned after button */}
        <Fade in={isSubmitted} timeout={500}>
          <Box
            sx={{
              background: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.3)",
              borderRadius: "8px",
              p: { xs: 0.8, sm: 1 },
              mt: { xs: 1, sm: 1.5 },
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <CheckCircle sx={{ color: "#4caf50", fontSize: { xs: "0.9rem", sm: "1rem" } }} />
            <Typography sx={{ 
              color: "#4caf50", 
              fontWeight: 600, 
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Thank you! We'll contact you soon.
            </Typography>
          </Box>
        </Fade>

        {/* Trust indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 0.5, sm: 1 },
            mt: { xs: 1.5, sm: 2 },
            flexWrap: "wrap",
            width: "100%",
            px: 0.5,
            overflow: "hidden",
          }}
        >
          <Chip
            icon={<Star sx={{ fontSize: "0.6rem" }} />}
            label="5-Star Rated"
            size="small"
            sx={{
              background: "rgba(191, 169, 116, 0.1)",
              color: "#bfa974",
              border: "1px solid rgba(191, 169, 116, 0.3)",
              fontSize: "0.6rem",
              height: "20px",
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
              maxWidth: "calc(50% - 4px)",
              "& .MuiChip-label": {
                px: 0.3,
                fontSize: "0.6rem",
              },
            }}
          />
          <Chip
            icon={<CheckCircle sx={{ fontSize: "0.6rem" }} />}
            label="Free Consultation"
            size="small"
            sx={{
              background: "rgba(191, 169, 116, 0.1)",
              color: "#bfa974",
              border: "1px solid rgba(191, 169, 116, 0.3)",
              fontSize: "0.6rem",
              height: "20px",
              fontWeight: 600,
              fontFamily: "'Montserrat', sans-serif",
              maxWidth: "calc(50% - 4px)",
              "& .MuiChip-label": {
                px: 0.3,
                fontSize: "0.6rem",
              },
            }}
          />
        </Box>
      </Box>
    </Slide>
  );
};

export default ContactUs;
