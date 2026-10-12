import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Fade,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  PersonOutline,
  LocalPhoneOutlined,
  SendRounded,
  CheckCircle,
  Star,
  Close,
} from "@mui/icons-material";
import { styled, keyframes } from "@mui/material/styles";
import { submitContactForm } from "../../utils/contactService";
import { homeTheme } from "./sectionStyles";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    background: homeTheme.colors.backgroundNeutral,
    borderRadius: "6px",
    color: homeTheme.colors.textPrimary,
    minHeight: "54px",
    transition: "border-color 0.2s ease",
    "& fieldset": { 
      borderColor: homeTheme.colors.divider,
    },
    "&:hover fieldset": {
      borderColor: homeTheme.colors.accent,
    },
    "&.Mui-focused fieldset": {
      borderColor: homeTheme.colors.accent,
      borderWidth: "1px",
    },
    "& .MuiInputBase-input": {
      padding: "14px 12px",
      fontSize: "0.9rem",
      color: homeTheme.colors.textPrimary,
      "&::placeholder": {
        color: homeTheme.colors.textSecondary,
        opacity: 1,
      },
    },
  },
}));

const fieldLabelSx = {
  display: "block",
  mb: 0.75,
  color: homeTheme.colors.textPrimary,
  fontSize: "0.82rem",
  fontWeight: 700,
  lineHeight: 1.4,
};

const StyledButton = styled(Button)(() => ({
  background: homeTheme.colors.accent,
  color: homeTheme.colors.textPrimary,
  borderRadius: "4px",
  fontWeight: 700,
  textTransform: "none",
  padding: { xs: "10px 0", sm: "12px 0" },
  fontSize: { xs: "0.9rem", sm: "1rem" },
  transition: "background-color 0.2s ease",
  boxShadow: "0 8px 22px rgba(146, 121, 68, 0.2)",
  "&:hover": {
    background: "#d6bd83",
  },
  "&:active": {
    background: homeTheme.colors.accentDark,
    color: homeTheme.colors.backgroundNeutral,
  },
}));

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4+ / Duplex"];

const ContactUs = ({ onClose }) => {
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    name: "",
    phone: "",
    whatsappOptIn: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePropertyTypeChange = (_, propertyType) => {
    if (propertyType) setFormData((current) => ({ ...current, propertyType }));
  };

  const handleWhatsappChange = (e) => {
    setFormData((current) => ({ ...current, whatsappOptIn: e.target.checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.propertyType) {
      setError("Choose a property type to continue.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await submitContactForm({
        ...formData,
        message: [
          `Property type: ${formData.propertyType}`,
          `Property location: ${formData.location || "Not provided"}`,
          `WhatsApp updates: ${formData.whatsappOptIn ? "Yes" : "No"}`,
        ].join("\n"),
        submittedAt: new Date().toISOString(),
        source: "home-construction-quote-modal",
      });

      setIsSubmitted(true);

      setTimeout(() => {
        setFormData({
          propertyType: "",
          location: "",
          name: "",
          phone: "",
          whatsappOptIn: true,
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(
        err?.message ||
          "We couldn’t submit your request. Please try again in a moment."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          background: "transparent",
          minHeight: "100%",
          overflow: "visible",
          p: { xs: 1.75, sm: 2.5, md: 3.5 },
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.25, sm: 1.5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1.5,
            pb: 1.25,
            borderBottom: `1px solid ${homeTheme.colors.divider}`,
            position: "sticky",
            top: 0,
            zIndex: 2,
            background: homeTheme.colors.backgroundNeutral,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                color: homeTheme.colors.accentDark,
                fontSize: "0.65rem",
                fontWeight: 800,
                lineHeight: 1.4,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              Free consultation
            </Typography>
            <Typography
              id="contact-modal-title"
              component="h2"
              sx={{
                mt: 0.25,
                color: homeTheme.colors.textPrimary,
                fontFamily: homeTheme.fonts.heading,
                fontSize: { xs: "1.3rem", sm: "1.55rem", md: "1.8rem" },
                lineHeight: 1.2,
              }}
            >
              Get Free Quote
            </Typography>
            <Typography
              sx={{
                mt: 0.5,
                color: homeTheme.colors.textSecondary,
                fontSize: { xs: "0.76rem", sm: "0.82rem" },
                lineHeight: 1.5,
              }}
            >
              Tell us about your project and we’ll be in touch.
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            aria-label="Close contact form"
            sx={{
              flex: "0 0 auto",
              color: homeTheme.colors.textPrimary,
              border: `1px solid ${homeTheme.colors.divider}`,
              borderRadius: "6px",
              width: 36,
              height: 36,
              mt: 0.25,
              "&:hover": { background: homeTheme.colors.accentMuted },
            }}
          >
            <Close fontSize="small" />
          </IconButton>
        </Box>

        <Box>
          <Typography component="label" sx={fieldLabelSx} id="property-type-label">
            Property type <Box component="span" sx={{ color: "#a33d32" }}>*</Box>
          </Typography>
          <ToggleButtonGroup
            exclusive
            fullWidth
            value={formData.propertyType}
            onChange={handlePropertyTypeChange}
            aria-labelledby="property-type-label"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: { xs: 0.5, sm: 0.75 },
              "& .MuiToggleButtonGroup-grouped": {
                m: 0,
                border: `1px solid ${homeTheme.colors.divider} !important`,
                borderRadius: "5px !important",
              },
            }}
          >
            {propertyTypes.map((type) => (
              <ToggleButton
                key={type}
                value={type}
                sx={{
                  minWidth: 0,
                  minHeight: { xs: 40, sm: 44 },
                  px: { xs: 0.3, sm: 0.75 },
                  color: homeTheme.colors.textSecondary,
                  fontSize: { xs: "0.64rem", sm: "0.76rem" },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  textTransform: "none",
                  whiteSpace: "normal",
                  "&.Mui-selected": {
                    color: homeTheme.colors.textPrimary,
                    background: homeTheme.colors.accentMuted,
                    borderColor: homeTheme.colors.accent,
                  },
                  "&.Mui-selected:hover": { background: homeTheme.colors.accentMuted },
                }}
              >
                {type}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        <Box>
          <Typography component="label" htmlFor="contact-location" sx={fieldLabelSx}>
            Property location
          </Typography>
          <StyledTextField
            id="contact-location"
            name="location"
            type="text"
            aria-label="Property location"
            placeholder="City or area"
            fullWidth
            value={formData.location}
            onChange={handleChange}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "grid", sm: "grid" },
            gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "minmax(0, 1fr) minmax(0, 1fr)" },
            gap: { xs: 1.25, sm: 1.5 },
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography component="label" htmlFor="contact-name" sx={fieldLabelSx}>
              Your name <Box component="span" sx={{ color: "#a33d32" }}>*</Box>
            </Typography>
            <StyledTextField
              id="contact-name"
              name="name"
              type="text"
              aria-label="Your name"
              placeholder="Full name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline sx={{ color: homeTheme.colors.accent, fontSize: "1.15rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography component="label" htmlFor="contact-phone" sx={fieldLabelSx}>
              Mobile number <Box component="span" sx={{ color: "#a33d32" }}>*</Box>
            </Typography>
            <StyledTextField
              id="contact-phone"
              name="phone"
              type="tel"
              aria-label="Mobile number"
              placeholder="10-digit mobile number"
              fullWidth
              value={formData.phone}
              onChange={handleChange}
              required
              inputProps={{ inputMode: "tel", maxLength: 15 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneOutlined sx={{ color: homeTheme.colors.accent, fontSize: "1.15rem" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.whatsappOptIn}
              onChange={handleWhatsappChange}
              size="small"
              sx={{
                color: homeTheme.colors.accentDark,
                "&.Mui-checked": { color: homeTheme.colors.accentDark },
              }}
            />
          }
          label="Send me project updates on WhatsApp"
          sx={{
            my: -0.5,
            ml: -0.75,
            color: homeTheme.colors.textSecondary,
            "& .MuiFormControlLabel-label": { fontSize: "0.8rem" },
          }}
        />

        <StyledButton
          type="submit"
          endIcon={isLoading ? <Star sx={{ animation: `${float} 1s ease-in-out infinite` }} /> : <SendRounded />}
          disabled={isLoading || isSubmitted}
          sx={{
            mt: 0.25,
            py: { xs: 1, sm: 1.2 },
            px: { xs: 1.5, sm: 2 },
            fontSize: { xs: "0.8rem", sm: "0.9rem" },
            width: "100%",
            maxWidth: "100%",
            minHeight: { xs: "48px", sm: "52px" },
            opacity: isSubmitted ? 0.7 : 1,
            "&:disabled": {
              background: homeTheme.colors.accentMuted,
              color: homeTheme.colors.textSecondary,
            }
          }}
        >
          {isLoading ? "Sending..." : isSubmitted ? "Request Sent" : "Book a Free Consultation"}
        </StyledButton>

        <Typography
          sx={{
            color: homeTheme.colors.textSecondary,
            fontSize: "0.68rem",
            lineHeight: 1.5,
            textAlign: "center",
          }}
        >
          By submitting, you agree that Gruham&apos;s team may contact you about your project.
        </Typography>

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
              fontFamily: homeTheme.fonts.body,
            }}>
              Thank you! We'll contact you soon.
            </Typography>
          </Box>
        </Fade>

        {!isSubmitted && error && (
          <Fade in timeout={500}>
            <Box
              sx={{
                background: "rgba(244, 67, 54, 0.08)",
                border: "1px solid rgba(244, 67, 54, 0.3)",
                borderRadius: "8px",
                p: { xs: 0.8, sm: 1 },
                mt: { xs: 1, sm: 1.5 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#b71c1c",
                  fontWeight: 600,
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  fontFamily: homeTheme.fonts.body,
                  textAlign: "center",
                }}
              >
                {error}
              </Typography>
            </Box>
          </Fade>
        )}

      </Box>
  );
};

export default ContactUs;
