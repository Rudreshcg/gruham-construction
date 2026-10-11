import React, { useState } from 'react';
import './ProjectPage.css'; // Main page styles
import '../Portfolio/PortfolioSection.css'; // Import viewer modal styles
import { useParams, useNavigate } from "react-router-dom";
import projectsData from '../../data/projects.json';
import WatermarkedImage from '../common/WatermarkedImage';
import Logo from '../../assets/images/Logo.png';

// --- Project Data from JSON ---
const projects = projectsData.projects;
const latestProjects = projectsData.latestProjects;

// --- Sub-Components ---
const Gallery = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <>
            <div className="project-gallery-grid">
                {images.map((img, index) => (
                    <div key={img.id} onClick={() => setSelectedIndex(index)} style={{ cursor: 'pointer', display: 'block' }}>
                        <WatermarkedImage 
                            src={img.src} 
                            alt={img.alt} 
                            className="gallery-img" 
                            watermarkSrc={Logo} 
                        />
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <div className="viewer-backdrop" onClick={() => setSelectedIndex(null)}>
                  <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
                    <button className="viewer-close" onClick={() => setSelectedIndex(null)}>&times;</button>
                    
                    <button className="viewer-nav viewer-prev" onClick={handlePrev}>&#10094;</button>
                    <button className="viewer-nav viewer-next" onClick={handleNext}>&#10095;</button>

                    <WatermarkedImage 
                      src={images[selectedIndex].src} 
                      alt={images[selectedIndex].alt || "Gallery Image"} 
                      className="viewer-image" 
                      watermarkSrc={Logo} 
                    />
                    
                    <div className="viewer-counter">
                        {selectedIndex + 1} / {images.length}
                    </div>
                  </div>
                </div>
            )}
        </>
    );
};

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

    const clientName = project.clientName || project.name;
    const projectDescription = project.content?.description ||
        `A ${project.category.toLowerCase()} construction project for ${clientName} in ${project.location}, planned for a ${project.plotArea} plot. Construction year: ${project.constructionYear}; current status: ${project.status.toLowerCase()}.`;

    const highlightItems = project.content?.highlights || [];
    const featureItems = project.content?.features || [];

    return (
        <div className="project-page editorial-project">
            <div className="project-banner">
                <WatermarkedImage
                    src={project.mainImage}
                    alt={project.name}
                    watermarkSrc={Logo}
                    className="project-banner-image"
                />

                <div className="banner-overlay">
                    <div className="project-labels">
                        <span><strong>Category:</strong> {project.category}</span>
                        <span><strong>Location:</strong> {project.location}</span>
                        <span><strong>Plot Area:</strong> {project.plotArea}</span>
                        <span><strong>Construction Year:</strong> {project.constructionYear}</span>
                        <span><strong>Status:</strong> {project.status}</span>
                    </div>

                    <h1 className="project-hero-title">{project.title}</h1>
                </div>
            </div>

            <div className="project-page-shell">
                <p className="project-subtitle">Modern living spaces with premium finishes</p>

                <div className="project-story">
                    <p>{projectDescription}</p>
                </div>

                <div className="project-details-grid">
                    <div className="detail-group">
                        <h3>Project Highlights</h3>
                        <ul>
                            {highlightItems.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="detail-group">
                        <h3>Key Features</h3>
                        <ul>
                            {featureItems.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="project-gallery-section">
                    <h2>Project Gallery</h2>
                    <Gallery images={project.galleryImages} />
                </div>

                {project.constructionImages && project.constructionImages.length > 0 && (
                    <div className="project-gallery-section construction-gallery-section" style={{ marginTop: '3rem' }}>
                        <h2>Behind the Build (Work in Progress)</h2>
                        <Gallery images={project.constructionImages} />
                    </div>
                )}

                <RelatedProjects currentProjectId={projectId} />
            </div>
        </div>
    );
}

export default ProjectPage;
