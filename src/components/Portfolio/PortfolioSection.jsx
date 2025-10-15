import React from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioSection.css';
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import AdityaImage from '../../assets/images/adityaImage.jpg';
import BrindavanamImage from '../../assets/images/brindavanam.png';

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
