import { Box } from "@mui/material";
import Hero from "./Hero";
import ConstructionSection from "./ConstructionSection";
import InteriorSection from "./InteriorSection";
import WhyGruham from "./WhyGruham/WhyGruham.jsx";

const Home = () => {
  return (
    <Box>
      <Hero />
      <WhyGruham />
      <ConstructionSection />
      <InteriorSection />
    </Box>
  );
};
export default Home;
