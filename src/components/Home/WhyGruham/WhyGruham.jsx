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
      />
    </motion.div>

    <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
      {contentWhyArr.map((content, index) => (
        <Grid item xs={12} sm={10} md={4} key={content.id} sx={{ display: "flex" }}>
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
                p: { xs: 3, md: 4 },
                height: "100%",
                background: "rgba(255, 255, 255, 0.88)",
                borderRadius: homeTheme.layout.radiusMd,
                boxShadow: homeTheme.layout.shadowSoft,
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(6px)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
                border: `1px solid ${homeTheme.colors.accentMuted}`,
                "&::after": {
                  content: '\"\"',
                  position: "absolute",
                  inset: "auto 18% -36px 18%",
                  height: "140px",
                  background: `linear-gradient(180deg, ${homeTheme.colors.accentMuted} 0%, transparent 80%)`,
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                },
                "&:hover": {
                  transform: "translateY(-14px)",
                  boxShadow: "0 28px 45px rgba(15, 27, 41, 0.16)",
                  "&::after": {
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  mb: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(191,169,116,0.25), rgba(191,169,116,0.05))",
                  boxShadow: "inset 0 2px 12px rgba(191,169,116,0.15)",
                }}
              >
                <Box
                  component="img"
                  src={content.icon}
                  alt={content.header}
                  sx={{
                    width: "72px",
                    height: "72px",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 10px 18px rgba(191, 169, 116, 0.35))",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </Box>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  mb: 2,
                  color: homeTheme.colors.textPrimary,
                  fontSize: { xs: "1.35rem", md: "1.55rem" },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  fontFamily: homeTheme.fonts.heading,
                  letterSpacing: "-0.01em",
                }}
              >
                {content.header}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  color: homeTheme.colors.textSecondary,
                  fontSize: { xs: "0.98rem", md: "1.05rem" },
                  fontWeight: 500,
                  lineHeight: 1.7,
                  fontFamily: homeTheme.fonts.body,
                  letterSpacing: "0.01em",
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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