import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioSection.css';
import projectsData from '../../data/projects.json';

// Import images
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import adityaImage from '../../assets/images/adityaImage.jpg';
import brindavanamImage from '../../assets/images/brindavanam.png';
import interior1 from '../../assets/images/interior1.webp';
import interior2 from '../../assets/images/interior2.webp';

// Image mapping
const imageMap = {
  '/images/residential-architects-mr-jayachandra-residence.webp': jayachandraImage,
  '/images/adityaImage.jpg': adityaImage,
  '/images/brindavanam.png': brindavanamImage,
  '/images/interior1.webp': interior1,
  '/images/interior2.webp': interior2,
};

function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Transform JSON data to use imported images
    const transformedProjects = Object.keys(projectsData.projects).map((key, index) => {
      const project = projectsData.projects[key];
      return {
        id: key,
        image: imageMap[project.mainImage] || project.mainImage,
        name: project.name,
        title: project.title,
        category: project.category,
        location: project.location,
        area: project.area,
        date: project.date,
        link: `/portfolio/${key}`,
        index: index
      };
    });
    
    setProjects(transformedProjects);
    setIsVisible(true);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  return (
    <section className="portfolio-section">
      <div className="portfolio-header">
        <h2 className="portfolio-title">Our Latest Projects</h2>
        <p className="portfolio-subtitle">Discover our portfolio of exceptional construction and design projects</p>
        
        {/* Filter Buttons */}
        <div className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id}
            className="portfolio-item"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <PortfolioCard
              image={project.image}
              name={project.name}
              title={project.title}
              category={project.category}
              location={project.location}
              area={project.area}
              date={project.date}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
