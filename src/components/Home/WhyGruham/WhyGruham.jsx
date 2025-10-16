import { Box, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import openBook from "../../../assets/images/SVGIcons/OpenBookIcon.svg";
import StarHeadHuman from "../../../assets/images/SVGIcons/StarHeadHuman.svg";
import NestedHumans from "../../../assets/images/SVGIcons/NestedHumans.svg";
import { FadeIn, SlideUp } from "../../../animation/animate";

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

const WhyGruham = () => {
  return (
    <Box sx={{ 
      py: { xs: 6, md: 10 }, 
      background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(191, 169, 116, 0.3), transparent)",
      }
    }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.2rem" },
                color: "#2c3e50",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-8px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "3px",
                  background: "linear-gradient(135deg, #bfa974, #9c8658)",
                  borderRadius: "2px",
                }
              }}
            >
              Why Choose Gruham?
            </Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#7f8c8d",
                fontFamily: "'Montserrat', sans-serif",
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 400,
                letterSpacing: "0.01em",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Experience the difference with our commitment to excellence, innovation, and customer satisfaction
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {contentWhyArr.map((content, index) => (
            <Grid item xs={12} sm={6} md={4} key={content.id}>
              <motion.div
                variants={SlideUp(0.5 + index * 0.2)}
                initial="initial"
                whileInView="animate"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(135deg, #bfa974, #9c8658)",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                      "&::before": {
                        transform: "scaleX(1)",
                      },
                    },
                    minHeight: { xs: "280px", md: "320px" }
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      mb: 3,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "100px",
                        height: "100px",
                        background: "linear-gradient(135deg, rgba(191, 169, 116, 0.1), rgba(156, 134, 88, 0.1))",
                        borderRadius: "50%",
                        zIndex: 0,
                      }
                    }}
                  >
                    <Box
                      component="img"
                      src={content.icon}
                      alt={content.header}
                      sx={{
                        width: "80px",
                        height: "80px",
                        position: "relative",
                        zIndex: 1,
                        filter: "drop-shadow(2px 2px 8px rgba(0,0,0,0.1))",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      mb: 2,
                      color: "#2c3e50",
                      fontSize: { xs: "1.4rem", md: "1.6rem" },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {content.header}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "#5a6c7d",
                      fontSize: { xs: "0.95rem", md: "1.05rem" },
                      fontWeight: 400,
                      lineHeight: 1.6,
                      fontFamily: "'Montserrat', sans-serif",
                      letterSpacing: "0.01em",
                      flexGrow: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {content.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyGruham;