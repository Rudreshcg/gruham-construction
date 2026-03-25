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
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="project-gallery-grid">
                {images.map(img => (
                    <div key={img.id} onClick={() => setSelectedImage(img.src)} style={{ cursor: 'pointer', display: 'block' }}>
                        <WatermarkedImage 
                            src={img.src} 
                            alt={img.alt} 
                            className="gallery-img" 
                            watermarkSrc={Logo} 
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="viewer-backdrop" onClick={() => setSelectedImage(null)}>
                  <div className="viewer-content" onClick={(e) => e.stopPropagation()}>
                    <button className="viewer-close" onClick={() => setSelectedImage(null)}>&times;</button>
                    <WatermarkedImage src={selectedImage} alt="Full Size" className="viewer-image" watermarkSrc={Logo} />
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
                    <strong>Plot Area:</strong> {project.plotArea}
                </div>
                <div className="detail-item">
                    <strong>Construction Year:</strong> {project.constructionYear}
                </div>
                <div className="detail-item">
                    <strong>Status:</strong> {project.status}
                </div>
            </div>
        </>
    );

    return (
        <div className="project-page">
            {/* Banner */}
            <div className="project-banner" style={{ backgroundImage: `url('${project.mainImage}')` }}>
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
