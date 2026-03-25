import React, { useState, useEffect } from 'react';
import PortfolioCard from './PortfolioCard';
import './PortfolioSection.css';
import projectsData from '../../data/projects.json';
import Logo from '../../assets/images/Logo.png';
import WatermarkedImage from '../common/WatermarkedImage';

function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Transform JSON data - images are now direct paths in the JSON
    const transformedProjects = Object.keys(projectsData.projects).map((key, index) => {
      const project = projectsData.projects[key];
      return {
        id: key,
        image: project.mainImage,
        name: project.name,
        title: project.title,
        category: project.category,
        location: project.location,
        area: project.plotArea, // Use plotArea from JSON
        status: project.status, // Pass status
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

  // Hardcoded categories to ensure 'Commercial' Tab exists even if empty
  const categories = ['all', 'Residential', 'Commercial'];

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
              status={project.status} // Pass status prop
              date={project.date}
              link={project.link}
              onImageClick={(img) => setSelectedImage(img)}
            />
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div className="viewer-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
            <button className="viewer-close" onClick={() => setSelectedImage(null)}>&times;</button>
            <WatermarkedImage src={selectedImage} alt="Full Size" className="viewer-image" watermarkSrc={Logo} />
          </div>
        </div>
      )}
    </section>
  );
}

export default PortfolioSection;
