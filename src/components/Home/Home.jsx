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
        title="Gruhams - Leading Construction Company in Bangalore"
        description="Gruhams is a premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services. Transform your vision with Gruhams."
        keywords="Gruhams, gruhams, Gruhams construction, gruhams construction Bangalore, Gruhams in, construction company Bangalore, gruham, gruham construction, home construction, commercial construction, interior design, renovation, building contractor, luxury construction"
        canonical="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Gruhams",
            "alternateName": ["Gruhams Construction", "Gruhams in", "Gruham's Construction", "Gruham Construction"],
            "url": "https://www.gruhams.in",
            "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.gruhams.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Gruhams",
            "alternateName": "Gruhams Construction",
            "url": "https://www.gruhams.in",
            "logo": "https://www.gruhams.in/src/assets/images/Logo.png"
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "SiteNavigationElement",
                "position": 1,
                "name": "Home",
                "url": "https://www.gruhams.in/"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 2,
                "name": "Portfolio (Projects)",
                "url": "https://www.gruhams.in/portfolio"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 3,
                "name": "Contact Us",
                "url": "https://www.gruhams.in/contact"
              },
              {
                "@type": "SiteNavigationElement",
                "position": 4,
                "name": "Our Team",
                "url": "https://www.gruhams.in/teams"
              }
            ]
          }
        ]}
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
