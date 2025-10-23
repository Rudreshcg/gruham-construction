import { Box } from "@mui/material";
import Hero from "./Hero";
import WhyGruham from "./WhyGruham/WhyGruham.jsx";
import AboutCompany from "./AboutCompany";
import Testimonials from "./Testimonials";
import PortfolioPreview from "./PortfolioPreview";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import FAQ from "../SEO/FAQ";

const Home = () => {
  return (
    <Box>
      <SEOHead
        title="Gruham's Construction - Leading Construction Company in Bangalore"
        description="Gruham's Construction is a premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services. Transform your vision into reality with expert construction solutions."
        keywords="construction company Bangalore, Gruham construction, Gruham's, Gruhams, gruham, gruhams construction, construction services, home construction, commercial construction, interior design, renovation, building contractor, Bangalore construction, luxury construction, residential construction, Gruhams construction Bangalore, gruham construction company"
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Gruham's Construction",
          "url": "https://www.gruhams.in",
          "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.gruhams.in/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      <Hero />
      <WhyGruham />
      <AboutCompany />
      <Testimonials />
      <PortfolioPreview />
      <FAQ />
      <InternalLinks currentPage="home" />
    </Box>
  );
};
export default Home;
