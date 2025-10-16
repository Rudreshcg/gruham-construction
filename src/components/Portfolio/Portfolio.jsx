import React from 'react';
import PortfolioSection from '../Portfolio/PortfolioSection'; // Import the new section
import SEOHead from '../SEO/SEOHead';
import InternalLinks from '../SEO/InternalLinks';

function Portfolio() {
  return (
    <div>
      <SEOHead
        title="Construction Portfolio - Gruham's Construction Projects in Bangalore"
        description="Explore Gruham's construction portfolio showcasing luxury homes, commercial buildings, and interior design projects in Bangalore. View our completed construction projects and get inspired for your next project."
        keywords="construction portfolio Bangalore, Gruham construction projects, luxury home construction, commercial construction projects, interior design portfolio, construction gallery, Bangalore construction examples"
        canonical="/portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Construction Portfolio",
          "description": "Showcase of Gruham's construction projects including luxury homes, commercial buildings, and interior design work in Bangalore.",
          "url": "https://gruhams.in/portfolio",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Construction Projects",
            "description": "Collection of completed construction projects by Gruham's Construction"
          }
        }}
      />
      {/* You can add a title here if you wish */}
      {/* <h2>Our Latest Projects</h2> */}
      <PortfolioSection />
      <InternalLinks currentPage="portfolio" />
    </div>
  );
}

export default Portfolio;