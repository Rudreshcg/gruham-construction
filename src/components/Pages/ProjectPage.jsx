import React from 'react';
import './ProjectPage.css'; // Main page styles
import { useParams, useNavigate } from "react-router-dom";
import projectsData from '../../data/projects.json';

// Images
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp'; 
import adityaImage from '../../assets/images/adityaImage.jpg';
import brindavanamImage from '../../assets/images/brindavanam.png';

import interior1 from '../../assets/images/interior1.webp';
import interior2 from '../../assets/images/interior2.webp';
import interior3 from '../../assets/images/interior3.webp';
import interior4 from '../../assets/images/interior4.webp';
import interior5 from '../../assets/images/interior5.webp';
import interior6 from '../../assets/images/interior6.webp';

// --- Image mapping for JSON data ---
const imageMap = {
  '/images/residential-architects-mr-jayachandra-residence.webp': jayachandraImage,
  '/images/adityaImage.jpg': adityaImage,
  '/images/brindavanam.png': brindavanamImage,
  '/images/interior1.webp': interior1,
  '/images/interior2.webp': interior2,
  '/images/interior3.webp': interior3,
  '/images/interior4.webp': interior4,
  '/images/interior5.webp': interior5,
  '/images/interior6.webp': interior6,
};

// --- Project Data from JSON with image mapping ---
const projects = Object.keys(projectsData.projects).reduce((acc, key) => {
  const project = projectsData.projects[key];
  acc[key] = {
    ...project,
    mainImage: imageMap[project.mainImage] || project.mainImage,
    galleryImages: project.galleryImages.map(img => ({
      ...img,
      src: imageMap[img.src] || img.src
    }))
  };
  return acc;
}, {});

const latestProjects = projectsData.latestProjects.map(project => ({
  ...project,
  image: imageMap[project.image] || project.image
}));

// --- Sub-Components ---
const Gallery = ({ images }) => (
    <div className="project-gallery-grid">
        {images.map(img => (
            <img key={img.id} src={img.src} alt={img.alt} className="gallery-img" />
        ))}
    </div>
);

const RelatedProjects = ({ currentProjectId }) => {
    const navigate = useNavigate();
    
    // Get related projects (exclude current project)
    const relatedProjects = latestProjects.filter(project => project.id !== currentProjectId).slice(0, 3);
    
    const handleProjectClick = (projectId) => {
        navigate(`/portfolio/${projectId}`);
    };

    return (
        <div className="related-projects">
            <h2 className="section-title">Related Projects</h2>
            <div className="related-projects-grid">
                {relatedProjects.map((project) => (
                    <div 
                        key={project.id}
                        className="related-project-card"
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <img src={project.image} alt={project.name} className="related-project-img" />
                        <div className="related-project-content">
                            <h4 className="related-project-name">{project.name}</h4>
                            <p className="related-project-title">{project.title}</p>
                            <span className="related-project-date">{project.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Sidebar = () => {
    const navigate = useNavigate();

    const handleProjectClick = (projectId) => {
        navigate(`/portfolio/${projectId}`);
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-search">
                <input type="text" placeholder="Search..." />
                <button className="search-button">🔍</button>
            </div>

            <h3 className="latest-title">Latest Portfolio</h3>
            <div className="latest-projects-list">
                {latestProjects.map((project) => (
                    <div 
                        key={project.id}
                        className="latest-item clickable" 
                        onClick={() => handleProjectClick(project.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={project.image} alt={project.name} className="latest-img" />
                        <div className="latest-content">
                            <h4 className="latest-project-name">{project.name}</h4>
                            <p className="latest-project-title">{project.title}</p>
                            <span className="latest-project-date">{project.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

const CommentSection = () => (
    <div className="comment-section">
        <h2 className="section-title">Submit a Comment</h2>
        <p className="comment-info">Your email address will not be published. Required fields are marked *</p>

        <form className="comment-form">
            <textarea placeholder="Comment *" required></textarea>
            <input type="text" placeholder="Name *" required />
            <input type="email" placeholder="Email *" required />
            <input type="url" placeholder="Website" />

            <div className="captcha-and-submit">
                <div className="recaptcha-placeholder">
                    <input type="checkbox" id="robot-check" />
                    <label htmlFor="robot-check">I'm not a robot</label>
                    <small>reCAPTCHA...</small>
                </div>
                <button type="submit" className="submit-button">SUBMIT COMMENT</button>
            </div>
        </form>
    </div>
);

// --- Main Component ---
function ProjectPage() {
    const { projectId } = useParams();
    const project = projects[projectId];

    if (!project) return <p>Project not found!</p>;

    // Create content from JSON data
    const projectContent = (
        <>
            <p>{project.content.description}</p>
            
            <h3>Project Highlights:</h3>
            <ul>
                {project.content.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>

            <h3>Key Features:</h3>
            <ul>
                {project.content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            <div className="project-details">
                <div className="detail-item">
                    <strong>Category:</strong> {project.category}
                </div>
                <div className="detail-item">
                    <strong>Location:</strong> {project.location}
                </div>
                <div className="detail-item">
                    <strong>Area:</strong> {project.area}
                </div>
                <div className="detail-item">
                    <strong>Duration:</strong> {project.duration}
                </div>
            </div>
        </>
    );

    return (
        <div className="project-page">
            {/* Banner */}
            <div className="project-banner" style={{ backgroundImage: `url(${project.mainImage})` }}>
                <div className="banner-overlay">
                    <h1>{project.name}</h1>
                    <p className="project-meta">admin | {project.date}</p>
                </div>
            </div>

            {/* Content and Sidebar */}
            <div className="project-content-layout">
                <div className="main-content">
                    <div className="project-text-content">
                        {projectContent}
                    </div>

                    <h2>Project Gallery</h2>
                    <Gallery images={project.galleryImages} />

                    <RelatedProjects currentProjectId={projectId} />

                    <div className="admin-bar">
                        <div className="avatar-placeholder"></div>
                        admin
                    </div>
                    <CommentSection />
                </div>
                <Sidebar />
            </div>
        </div>
    );
}

export default ProjectPage;
