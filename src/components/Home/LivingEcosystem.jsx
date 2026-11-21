import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const GOLD = "#b8924a";
const GOLD_DEEP = "#8a7243";
const NAVY = "#1f2d3d";

const ecosystemPillars = [
  {
    step: "01. EXPERIENCE & VALIDATE",
    brand: "Gruhams XR Studio",
    title: "1:1 Life-Size Scale Floor Plan Walkthrough",
    description:
      "Avoid lakhs in civil rework and demolition. Walk inside your architectural floor plan at actual 1:1 scale before ground is broken. Test room proportions, hallway widths, and window placements in real life.",
    icon: <ViewInArOutlinedIcon sx={{ fontSize: 32, color: GOLD }} />,
    badge: "XR Division",
    linkText: "Explore 1:1 XR Studio",
    url: "https://gruhamsxrstudio.com",
    isCurrent: false,
    highlights: ["1:1 Scale Physical Walkthrough", "Prevent Costly Construction Changes", "Architect & Client Design Alignment"],
  },
  {
    step: "02. CONSTRUCT & EXECUTE",
    brand: "Gruham Construction",
    title: "Turnkey Civil Architecture & Engineering",
    description:
      "Precision civil engineering for residential villas, independent homes, and commercial landmarks. We offer zero cost-escalation contracts, certified quality materials, and milestone-tracked site execution.",
    icon: <HomeWorkOutlinedIcon sx={{ fontSize: 32, color: GOLD }} />,
    badge: "This Builder",
    linkText: "You Are Here",
    url: "#",
    isCurrent: true,
    highlights: ["Turnkey Architectural & Civil Build", "Transparent Itemized BOQ", "Strict Milestone On-Time Delivery"],
  },
  {
    step: "03. ELEVATE & FURNISH",
    brand: "Tvashta Interior",
    title: "Bespoke Luxury Interior Atelier",
    description:
      "Complete your newly constructed home with our in-house luxury interior design house. Seamless transition from structural handover to custom German-engineered modular kitchens, wardrobes, and curated finishes.",
    icon: <ChairOutlinedIcon sx={{ fontSize: 32, color: GOLD }} />,
    badge: "Interior Division",
    linkText: "Explore Tvashta Interiors",
    url: "https://tvashtainterior.com",
    isCurrent: false,
    highlights: ["In-House German CNC Fabrication", "10-Year Factory Warranty", "Zero Civil-to-Interior Friction"],
  },
];

const LivingEcosystem = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#fbf8f2",
        borderTop: "1px solid rgba(184, 146, 74, 0.25)",
        borderBottom: "1px solid rgba(184, 146, 74, 0.25)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <motion.div
            variants={SlideUp(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2.2,
                py: 0.7,
                borderRadius: "50px",
                bgcolor: "rgba(184, 146, 74, 0.12)",
                border: "1px solid rgba(184, 146, 74, 0.35)",
                mb: 2,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: GOLD_DEEP,
                  textTransform: "uppercase",
                }}
              >
                The Gruham & Tvashta Living Group
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                fontSize: { xs: "2.1rem", md: "3rem" },
                color: NAVY,
                mb: 2,
                lineHeight: 1.15,
              }}
            >
              One Complete Ecosystem: Validate, Build & Furnish
            </Typography>
          </motion.div>

          <motion.div
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                color: "var(--text-secondary, #555)",
                maxWidth: "750px",
                mx: "auto",
                fontSize: { xs: "0.95rem", md: "1.05rem" },
                lineHeight: 1.8,
              }}
            >
              Building a dream home shouldn't involve juggling disconnected vendors. Under common leadership, our group companies deliver end-to-end excellence—from 1:1 blueprint walkthroughs, to structural execution, to bespoke interior furnishing.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3.5}>
          {ecosystemPillars.map((pillar, idx) => (
            <Grid item xs={12} md={4} key={pillar.brand}>
              <motion.div
                variants={SlideUp(0.2 + idx * 0.15)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                style={{ height: "100%" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: { xs: 3, md: 3.5 },
                    borderRadius: "16px",
                    bgcolor: "#ffffff",
                    border: pillar.isCurrent
                      ? "2px solid #b8924a"
                      : "1px solid rgba(184, 146, 74, 0.25)",
                    boxShadow: pillar.isCurrent
                      ? "0 18px 40px -10px rgba(184, 146, 74, 0.25)"
                      : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 22px 45px -10px rgba(184, 146, 74, 0.35)",
                      borderColor: GOLD,
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, mb: 3 }}>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2.5 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: "12px",
                          bgcolor: "rgba(184, 146, 74, 0.12)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid rgba(184, 146, 74, 0.35)",
                        }}
                      >
                        {pillar.icon}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "0.68rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: GOLD_DEEP,
                          bgcolor: "rgba(184, 146, 74, 0.12)",
                          px: 1.4,
                          py: 0.5,
                          borderRadius: "50px",
                          border: "1px solid rgba(184, 146, 74, 0.3)",
                        }}
                      >
                        {pillar.badge}
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        color: "#8a7243",
                        textTransform: "uppercase",
                        mb: 0.5,
                      }}
                    >
                      {pillar.step}
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                        color: NAVY,
                        fontSize: "1.45rem",
                        mb: 1.2,
                      }}
                    >
                      {pillar.brand}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                        fontSize: "0.88rem",
                        fontWeight: 700,
                        color: GOLD_DEEP,
                        mb: 1.8,
                        lineHeight: 1.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                        fontSize: "0.85rem",
                        color: "rgba(31, 45, 61, 0.8)",
                        lineHeight: 1.7,
                        mb: 2.5,
                      }}
                    >
                      {pillar.description}
                    </Typography>

                    <Box sx={{ borderTop: "1px dashed rgba(184, 146, 74, 0.3)", pt: 2 }}>
                      {pillar.highlights.map((item) => (
                        <Box
                          key={item}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mb: 0.8,
                            fontSize: "0.8rem",
                            color: NAVY,
                            fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                          }}
                        >
                          <span style={{ color: GOLD, fontWeight: "bold" }}>✓</span>
                          <span>{item}</span>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>

                  <Box sx={{ pt: 1 }}>
                    {pillar.isCurrent ? (
                      <Button
                        fullWidth
                        disabled
                        sx={{
                          py: 1.3,
                          borderRadius: "50px",
                          fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                          fontWeight: 800,
                          fontSize: "0.82rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--gold-deep, #8a7243) !important",
                          bgcolor: "rgba(184, 146, 74, 0.12) !important",
                          border: "1.5px solid rgba(184, 146, 74, 0.4)",
                        }}
                      >
                        Active Construction Firm
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        component="a"
                        href={pillar.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem !important" }} />}
                        sx={{
                          py: 1.3,
                          borderRadius: "50px",
                          fontFamily: "var(--font-body, 'Manrope', sans-serif)",
                          fontWeight: 800,
                          fontSize: "0.82rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: "linear-gradient(135deg, #d4b679 0%, #b8924a 100%)",
                          color: "#ffffff",
                          boxShadow: "0 6px 20px rgba(184, 146, 74, 0.35)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            background: "linear-gradient(135deg, #b8924a 0%, #8a7243 100%)",
                            color: "#ffffff",
                            boxShadow: "0 10px 26px rgba(184, 146, 74, 0.45)",
                            transform: "translateY(-2px)",
                          },
                        }}
                      >
                        {pillar.linkText}
                      </Button>
                    )}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LivingEcosystem;
