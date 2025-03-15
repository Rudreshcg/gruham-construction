import { Box } from "@mui/material";
import Hero from "./Hero";
import ConstructionSection from "./ConstructionSection";
import InteriorSection from "./InteriorSection";


const Home = () =>{
    
    return (
        <Box>
            <Hero/>
            <ConstructionSection/>
            <InteriorSection/>
        </Box>
    )
}
export default Home;