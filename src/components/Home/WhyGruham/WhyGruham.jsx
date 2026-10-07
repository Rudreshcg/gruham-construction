import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import openBook from "../../../assets/images/SVGIcons/OpenBookIcon.svg";
import StarHeadHuman from "../../../assets/images/SVGIcons/StarHeadHuman.svg";
import NestedHumans from "../../../assets/images/SVGIcons/NestedHumans.svg";
import { FadeIn, SlideUp } from "../../../animation/animate";
import SectionWrapper from "../SectionWrapper";
import SectionHeading from "../SectionHeading";
import { homeTheme } from "../sectionStyles";

const contentWhyArr = [
  {
    id: 1,
    icon: openBook,
    header: "Exclusive Catalogue",
    description: "300+ designs, materials, and finishes",
  },
  {
    id: 2,
    icon: StarHeadHuman,
    header: "All-Star Designers",
    description: "100+ premium homes designed",
  },
  {
    id: 3,
    icon: NestedHumans,
    header: "Experienced Project Managers",
    description: "25+ high-end homes executed to perfection",
  },
];

const WhyGruham = () => (
  <SectionWrapper id="why-gruham">
    <motion.div variants={FadeIn(0.4)} initial="initial" whileInView="animate">
      <SectionHeading
        eyebrow="Our Signature Advantages"
        title="Why Choose Gruham?"
        subtitle="Experience the difference with our commitment to thoughtful design, transparent execution, and personalised project care from concept to completion."
        align="center"
      />
    </motion.div>

    <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center" alignItems="stretch" sx={{ maxWidth: 1100, mx: "auto" }}>
      {contentWhyArr.map((content, index) => (
        <Grid item xs={12} sm={6} md={4} key={content.id} sx={{ display: "flex" }}>
          <motion.div
            variants={SlideUp(0.5 + index * 0.15)}
            initial="initial"
            whileInView="animate"
            style={{ width: "100%" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxSizing: "border-box",
                width: "100%",
                minHeight: { xs: 208, md: 216 },
                pt: { xs: 2.5, md: 3 },
                px: { xs: 2.2, md: 2.6 },
                pb: { xs: 2.1, md: 2.5 },
                borderRadius: homeTheme.layout.radiusMd,
                background: "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(240,236,228,0.76))",
                border: `1px solid ${homeTheme.colors.divider}`,
                boxShadow: homeTheme.layout.shadowCard,
                transition: "all 0.25s ease",
                "& .spin-icon": {
                  transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(184, 146, 74, 0.7)",
                  boxShadow: "0 18px 32px rgba(27, 24, 19, 0.08)",
                  "& .spin-icon": {
                    transform: "rotate(360deg)",
                  }
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  flexShrink: 0,
                  mb: 1.75,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, rgba(184,146,74,0.18), rgba(184,146,74,0.08))",
                }}
              >
                <Box
                  component="img"
                  src={content.icon}
                  alt={content.header}
                  className="spin-icon"
                  sx={{
                    width: "40px",
                    height: "40px",
                    position: "relative",
                    zIndex: 1,
                    filter: "none",
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  mb: 0.5,
                  color: homeTheme.colors.textPrimary,
                  fontSize: { xs: "1.14rem", md: "1.22rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontFamily: homeTheme.fonts.heading,
                  letterSpacing: 0,
                  maxWidth: 300,
                }}
              >
                {content.header}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: homeTheme.colors.textSecondary,
                  fontSize: { xs: "0.86rem", md: "0.9rem" },
                  fontWeight: 500,
                  lineHeight: 1.6,
                  fontFamily: homeTheme.fonts.body,
                  letterSpacing: "0.01em",
                  maxWidth: 290,
                }}
              >
                {content.description}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </SectionWrapper>
);

export default WhyGruham;