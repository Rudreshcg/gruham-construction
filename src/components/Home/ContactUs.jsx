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
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    color: "#fff",
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
      padding: { xs: "8px 12px", sm: "10px 14px" },
      fontSize: { xs: "0.85rem", sm: "0.9rem" },
      "&::placeholder": {
        color: "rgba(255, 255, 255, 0.6)",
        opacity: 1,
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.8)",
    fontWeight: 600,
    fontSize: { xs: "0.8rem", sm: "0.85rem" },
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
  padding: "12px 0",
  fontSize: "1rem",
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

const ContactUs = () => {
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
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "16px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 12px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
          p: { xs: 1, sm: 1.8, md: 2.2 },
          width: { xs: "220px", sm: "260px", md: "280px" },
          maxWidth: { xs: "calc(100vw - 16px)", sm: "none" },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1, sm: 1.5, md: 1.8 },
          position: "relative",
          overflow: "hidden",
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(191, 169, 116, 0.5), transparent)",
          },
        }}
      >
        {/* Header with compact styling */}
        <Box sx={{ textAlign: "center", mb: { xs: 0.3, sm: 0.5 } }}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 700,
              fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
              letterSpacing: "0.3px",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              mb: { xs: 0.3, sm: 0.5 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 0.3, sm: 0.5 },
            }}
          >
            <Construction sx={{ color: "#bfa974", fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" } }} />
            Get Free Quote
          </Typography>
          
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              fontWeight: 500,
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

        {/* Success Message */}
        <Fade in={isSubmitted} timeout={500}>
          <Box
            sx={{
              background: "rgba(76, 175, 80, 0.2)",
              border: "1px solid rgba(76, 175, 80, 0.5)",
              borderRadius: "8px",
              p: 1,
              mb: 1,
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <CheckCircle sx={{ color: "#4caf50", fontSize: "1rem" }} />
            <Typography sx={{ color: "#4caf50", fontWeight: 600, fontSize: "0.8rem" }}>
              Thank you! We'll contact you soon.
            </Typography>
          </Box>
        </Fade>

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

        {/* Compact Trust indicators */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 0.5, sm: 1 },
            mt: { xs: 0.8, sm: 1 },
            flexWrap: "wrap",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Chip
            icon={<Star sx={{ fontSize: "0.6rem" }} />}
            label="5-Star Rated"
            size="small"
            sx={{
              background: "rgba(191, 169, 116, 0.15)",
              color: "#bfa974",
              border: "1px solid rgba(191, 169, 116, 0.3)",
              fontSize: { xs: "0.6rem", sm: "0.65rem" },
              height: { xs: "18px", sm: "20px" },
              maxWidth: "100%",
            }}
          />
          <Chip
            icon={<CheckCircle sx={{ fontSize: "0.6rem" }} />}
            label="Free Consultation"
            size="small"
            sx={{
              background: "rgba(191, 169, 116, 0.15)",
              color: "#bfa974",
              border: "1px solid rgba(191, 169, 116, 0.3)",
              fontSize: { xs: "0.6rem", sm: "0.65rem" },
              height: { xs: "18px", sm: "20px" },
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
    </Slide>
  );
};

export default ContactUs;
