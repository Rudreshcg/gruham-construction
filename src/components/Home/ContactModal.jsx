import React, { useState } from "react";
import {
  Button,
  Box,
  Paper,
  IconButton,
  Checkbox,
  TextField,
  FormControlLabel,
  Typography,
  MenuItem,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import { styled } from "@mui/system";
import { submitContactForm } from "../../utils/contactService";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  margin: "auto",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const timeOptions = [
  "Within 15 Min.",
  "08AM To 12PM",
  "12PM To 04PM",
  "04PM To 08PM",
  "Anytime",
];

const ContactModal = ({ open, setOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    phone: "",
    bestTimeToTalk: "",
    message: "",
    whatsappOptIn: true,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setFormData({
        name: "",
        location: "",
        phone: "",
        bestTimeToTalk: "",
        message: "",
        whatsappOptIn: true,
      });
      setIsSubmitted(false);
      setError("");
    }, 200);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await submitContactForm({
        name: formData.name,
        location: formData.location,
        phone: formData.phone,
        bestTimeToTalk: formData.bestTimeToTalk,
        message: formData.message,
        whatsappOptIn: formData.whatsappOptIn,
        submittedAt: new Date().toISOString(),
        source: "contact-modal",
      });

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          location: "",
          phone: "",
          bestTimeToTalk: "",
          message: "",
          whatsappOptIn: true,
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(
        err?.message ||
          "We couldn't submit your request right now. Please try again shortly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) {
    return null;
  }

  return (
    <Box
      component={motion.div}
      variants={SlideUp(0.8)}
      initial="initial"
      animate="animate"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        bgcolor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 0 },
      }}
    >
      <StyledPaper elevation={3} component="form" onSubmit={handleSubmit}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
        >
          Designs for Every Budget
        </Typography>
        <motion.div variants={SlideUp(0.8)}>
          <TextField
            fullWidth
            required
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          />
        </motion.div>
        <motion.div variants={SlideUp(1)}>
          <TextField
            fullWidth
            label="Property Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          />
        </motion.div>
        <motion.div variants={SlideUp(1.2)}>
          <TextField
            fullWidth
            required
            label="Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          />
        </motion.div>
        <motion.div variants={SlideUp(1.4)}>
          <TextField
            select
            fullWidth
            label="Best Time to Call You"
            name="bestTimeToTalk"
            value={formData.bestTimeToTalk}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            {timeOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </motion.div>
        <motion.div variants={SlideUp(1.6)}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            margin="normal"
            multiline
            minRows={3}
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.8)",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          />
        </motion.div>
        <motion.div variants={SlideUp(1.8)}>
          <FormControlLabel
            control={
              <Checkbox
                name="whatsappOptIn"
                checked={formData.whatsappOptIn}
                onChange={handleChange}
              />
            }
            label="Send me updates on WhatsApp"
            sx={{ fontSize: { xs: "0.75rem", sm: "1rem" } }}
          />
        </motion.div>
        <motion.div variants={SlideUp(2)}>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isSubmitting}
            sx={{
              bgcolor: "#4a5942",
              my: 2,
              fontWeight: "bold",
              p: "10px 16px",
              borderRadius: "10px",
              fontSize: { xs: "0.875rem", sm: "1rem" },
              opacity: isSubmitting ? 0.85 : 1,
            }}
          >
            {isSubmitting ? "Sending..." : "GET FREE QUOTE"}
          </Button>
        </motion.div>
        <Fade in={isSubmitted} timeout={500} unmountOnExit>
          <Box
            sx={{
              background: "rgba(76, 175, 80, 0.1)",
              border: "1px solid rgba(76, 175, 80, 0.3)",
              borderRadius: "8px",
              p: 1,
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#2e7d32",
                fontWeight: 600,
                fontSize: "0.85rem",
              }}
            >
              Thank you! We’ll contact you shortly.
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
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#b71c1c",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                {error}
              </Typography>
            </Box>
          </Fade>
        )}
        <motion.div variants={SlideUp(2.2)}>
          <Typography
            variant="caption"
            color="textSecondary"
            sx={{
              mt: 1,
              fontSize: { xs: "0.625rem", sm: "0.75rem" },
            }}
          >
            By submitting this form, you agree to the{" "}
            <a
              href="/privacy-policy"
              style={{
                textDecoration: "none",
                color: "red",
              }}
            >
              privacy policy
            </a>{" "}
            &{" "}
            <a
              href="/terms"
              style={{
                textDecoration: "none",
                color: "red",
              }}
            >
              terms and conditions
            </a>
            .
          </Typography>
        </motion.div>
      </StyledPaper>
    </Box>
  );
};

export default ContactModal;
