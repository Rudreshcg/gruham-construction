import { Box, Grid, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import "./WhyGruham.css";
import openBook from "../../../assets/images/SVGIcons/OpenBookIcon.svg"
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
    header: "All Star Designers",
    description: "100+ premium homes designed",
  },
  {
    id: 3,
    icon: NestedHumans,
    header: "Experienced Project Managers",
    description: "25+ high end homes executed to perfection",
  },
];

const WhyGruham = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f8f8" }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Typography 
            className="luxury-text" 
            variant="h1"
            sx={{ 
              textAlign: "center",
              mb: 6,
              color: "#4a5942",
              fontSize: "5rem"
            }}
          >
            Why Gruham?
          </Typography>
        </motion.div>
        
        <Grid container spacing={4} justifyContent="center">
          {contentWhyArr.map((content, index) => (
            <Grid item xs={12} md={4} key={content.id}>
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
                    p: 4,
                    height: "100%",
                    backgroundColor: "white",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={content.icon}
                    alt={content.header}
                    sx={{
                      width: "80px",
                      height: "80px",
                      mb: 3,
                    }}
                  />
                  <Typography
                    className="header-text"
                    sx={{
                      textAlign: "center",
                      mb: 2,
                    }}
                  >
                    {content.header}
                  </Typography>
                  <Typography
                    className="description-text"
                    sx={{
                      textAlign: "center",
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
