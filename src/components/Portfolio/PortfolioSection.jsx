import React from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioSection.css';
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import AdityaImage from '../../assets/images/WhatsApp Image 2025-10-15 at 18.19.19_dfc7e126.jpg';
import BrindavanamImage from '../../assets/images/RENDERED 3D VIEW-04.R2[1].png';

const portfolioData = [
  
    {
    id: 1,
    image: AdityaImage,
    name: 'Mr. Aditya',
    title: 'Luxury Villa Project',
    link: '/portfolio/aditya'
  },
   {
    id: 2,
    image: jayachandraImage,
    name: 'Mr. Jayachandra',
    title: 'Modern Residential Design',
    link: '/portfolio/jayachandra'
  },
  
  {
    id: 3,
    image: BrindavanamImage,
    name: 'Mr Brindavanam',
    title: 'Elegant Urban Architecture',
    link: '/portfolio/brindavanam'
  }
];

function PortfolioSection() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-grid">
        {portfolioData.map(project => (
          <PortfolioCard
            key={project.id}
            image={project.image}
            name={project.name}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
