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
  LocationOnOutlined,
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
    background: "#ffffff",
    borderRadius: "8px",
    color: homeTheme.colors.textPrimary,
    minHeight: "46px",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    "& fieldset": { 
      borderColor: "rgba(29, 29, 27, 0.14)",
    },
    "&:hover fieldset": {
      borderColor: homeTheme.colors.accent,
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 3px rgba(184, 146, 74, 0.14)",
    },
    "&.Mui-focused fieldset": {
      borderColor: homeTheme.colors.accent,
      borderWidth: "1px",
    },
    "& .MuiInputBase-input": {
      padding: "11px 12px",
      fontSize: "0.88rem",
      color: homeTheme.colors.textPrimary,
      "&::placeholder": {
        color: "rgba(93, 90, 86, 0.72)",
        opacity: 1,
      },
    },
  },
}));

const fieldLabelSx = {
  display: "block",
  mb: 0.6,
  color: homeTheme.colors.textPrimary,
  fontSize: "0.8rem",
  fontWeight: 700,
  lineHeight: 1.35,
};

const StyledButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(135deg, #c39a50 0%, #9b7737 100%)",
  color: "#ffffff",
  borderRadius: "8px",
  fontWeight: 700,
  textTransform: "none",
  padding: "11px 16px",
  fontSize: "0.92rem",
  letterSpacing: "0.02em",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
  boxShadow: "0 10px 24px rgba(155, 119, 55, 0.26)",
  [theme.breakpoints.up("sm")]: {
    padding: "12px 20px",
    fontSize: "0.95rem",
  },
  "&:hover": {
    background: "linear-gradient(135deg, #b58d45 0%, #8a682e 100%)",
    boxShadow: "0 12px 28px rgba(155, 119, 55, 0.34)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
    background: homeTheme.colors.accentDark,
    color: "#ffffff",
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
          minHeight: { xs: "auto", md: "100%" },
          overflow: "visible",
          px: { xs: 2.25, sm: 2.75, md: 3.5 },
          pt: { xs: 2, sm: 2.5, md: 3.25 },
          pb: { xs: 2.25, sm: 2.75, md: 3.25 },
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 1.25, sm: 1.4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 1.5,
            pb: { xs: 1, md: 1.25 },
            borderBottom: `1px solid ${homeTheme.colors.divider}`,
            position: { xs: "static", md: "sticky" },
            top: 0,
            zIndex: 2,
            background: homeTheme.colors.backgroundNeutral,
          }}
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                display: { xs: "none", md: "block" },
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
                mt: { xs: 0, md: 0.25 },
                color: homeTheme.colors.textPrimary,
                fontFamily: `${homeTheme.fonts.heading} !important`,
                fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.8rem" },
                lineHeight: 1.2,
                letterSpacing: "0 !important",
              }}
            >
              Get Free Quote
            </Typography>
            <Typography
              sx={{
                mt: 0.35,
                color: homeTheme.colors.textSecondary,
                fontSize: { xs: "0.78rem", sm: "0.84rem" },
                lineHeight: 1.45,
              }}
            >
              Tell us about your project and we’ll be in touch.
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            aria-label="Close contact form"
            sx={{
              display: { xs: "none", md: "inline-flex" },
              flex: "0 0 auto",
              color: homeTheme.colors.textPrimary,
              border: `1px solid ${homeTheme.colors.divider}`,
              borderRadius: "8px",
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
              gap: { xs: 0.65, sm: 0.85 },
              "& .MuiToggleButtonGroup-grouped": {
                m: 0,
                border: "1px solid rgba(29, 29, 27, 0.14) !important",
                borderRadius: "8px !important",
              },
            }}
          >
            {propertyTypes.map((type) => (
              <ToggleButton
                key={type}
                value={type}
                sx={{
                  minWidth: 0,
                  minHeight: { xs: 40, sm: 42 },
                  px: { xs: 0.5, sm: 0.75 },
                  backgroundColor: "#ffffff",
                  color: homeTheme.colors.textSecondary,
                  fontSize: { xs: "0.72rem", sm: "0.78rem" },
                  fontWeight: 600,
                  lineHeight: 1.2,
                  textTransform: "none",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(184, 146, 74, 0.06)",
                    borderColor: `${homeTheme.colors.accent} !important`,
                  },
                  "&.Mui-selected": {
                    color: homeTheme.colors.accentDark,
                    fontWeight: 700,
                    backgroundColor: "rgba(184, 146, 74, 0.14)",
                    borderColor: `${homeTheme.colors.accent} !important`,
                    boxShadow: "inset 0 0 0 1px rgba(184, 146, 74, 0.35)",
                  },
                  "&.Mui-selected:hover": { backgroundColor: "rgba(184, 146, 74, 0.18)" },
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnOutlined sx={{ color: homeTheme.colors.accent, fontSize: "1.15rem" }} />
                </InputAdornment>
              ),
            }}
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
          endIcon={isLoading ? <Star sx={{ animation: `${float} 1s ease-in-out infinite` }} /> : <SendRounded sx={{ fontSize: "1.05rem" }} />}
          disabled={isLoading || isSubmitted}
          sx={{
            mt: 0.25,
            width: "100%",
            maxWidth: "100%",
            minHeight: { xs: "46px", sm: "48px" },
            opacity: isSubmitted ? 0.7 : 1,
            "&:disabled": {
              background: homeTheme.colors.accentMuted,
              color: homeTheme.colors.textSecondary,
              boxShadow: "none",
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
