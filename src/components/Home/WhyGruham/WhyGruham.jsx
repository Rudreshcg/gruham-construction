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
    <Box sx={{ py: 8, backgroundColor: "#f8f8f8" }}>
      <Container maxWidth="lg">
        <motion.div variants={FadeIn(0.5)} initial="initial" whileInView="animate">
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              mb: 6,
              color: "#4a5942",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              fontFamily: "inherit",
            }}
          >
            Why Choose Gruham?
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch"> {/* Add alignItems="stretch" */}
          {contentWhyArr.map((content, index) => (
            <Grid item xs={12} sm={6} md={4} key={content.id}>
              <motion.div
                variants={SlideUp(0.5 + index * 0.2)}
                initial="initial"
                whileInView="animate"
                // style={{ height: '100%' }} // Ensure motion.div also takes full height
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                    height: "100%", // This ensures the Box takes full height available from Grid item
                    backgroundColor: "white",
                    borderRadius: "16px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                    },
                    minHeight: { xs: "100px", md: "250px" }
                    
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
                      filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.1))",
                    }}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      mb: 2,
                      color: "#95805a",
                      fontSize: { xs: "1.5rem", md: "1.8rem" },
                      fontWeight: 600,
                      lineHeight: 1.2,
                      maxWidth: "326px",
                    }}
                  >
                    {content.header}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: "#6b7a60",
                      fontSize: { xs: "0.95rem", md: "1.1rem" },
                      fontWeight: 400,
                      lineHeight: 1.5,
                      margin: "0 auto",
                      maxWidth: "250px",
                      flexGrow: 1, // Allows description to take up available space
                      display: 'flex', // Ensures text remains centered if it expands
                      alignItems: 'center', // Centers text vertically if it expands
                      justifyContent: 'center', // Centers text horizontally if it expands
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