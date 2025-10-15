import React from 'react';
import './ProjectPage.css'; // Main page styles
import { useParams } from "react-router-dom";

// Images
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp'; 
import adityaImage from '../../assets/images/WhatsApp Image 2025-10-15 at 18.19.19_dfc7e126.jpg';
import brindavanamImage from '../../assets/images/RENDERED 3D VIEW-04.R2[1].png';

// --- Project Data ---
const projects = {
  jayachandra: {
    name: 'Mr. Jayachandra',
    date: 'August 7, 2024',
    mainImage: jayachandraImage,
    content: (
      <>
        <p>This magnificent residence, titled "A Six-level Residence in Vajarahalli that Blends Modern Design with Nature-inspired Luxury," is a testament to cutting-edge contemporary architecture. It focuses on maximizing natural light and integrating seamlessly with the urban environment.</p>
        <p>The design utilizes warm wood tones, large expanses of glass, and textured stone to create a luxurious yet welcoming atmosphere. Every detail, from the gated entrance to the rooftop terrace, was meticulously planned to offer unparalleled comfort and style.</p>
        <h3>Project Highlights:</h3>
        <ul>
          <li>Six levels of modern living space.</li>
          <li>Innovative use of wood, glass, and vertical fins on the facade.</li>
          <li>Smart home integration and energy-efficient lighting.</li>
          <li>Indoor-outdoor living concepts on every floor.</li>
        </ul>
      </>
    ),
    galleryImages: [
      { id: 1, src: jayachandraImage, alt: 'Interior 1' },
      { id: 2, src: jayachandraImage, alt: 'Interior 2' },
      { id: 3, src: jayachandraImage, alt: 'Kitchen' },
      { id: 4, src: jayachandraImage, alt: 'Living Room' },
      { id: 5, src: jayachandraImage, alt: 'Bedroom' },
      { id: 6, src: jayachandraImage, alt: 'Bathroom' },
    ]
  },
  aditya: {
    name: 'Mr. Aditya',
    date: 'July 15, 2024',
    mainImage: adityaImage,
    content: <p>Luxury Villa Project for Mr. Aditya.</p>,
    galleryImages: [
      { id: 1, src: adityaImage, alt: 'Aditya Interior 1' },
      { id: 2, src: adityaImage, alt: 'Aditya Interior 2' }
    ]
  },
  brindavanam: {
    name: 'Mr Brindavanam',
    date: 'September 1, 2024',
    mainImage: brindavanamImage,
    content: <p>Elegant Urban Architecture for Mr Brindavanam.</p>,
    galleryImages: [
      { id: 1, src: brindavanamImage, alt: 'Brindavanam Interior 1' },
      { id: 2, src: brindavanamImage, alt: 'Brindavanam Interior 2' }
    ]
  }
};

// --- Sub-Components ---
const Gallery = ({ images }) => (
  <div className="project-gallery-grid">
    {images.map(img => (
      <img key={img.id} src={img.src} alt={img.alt} className="gallery-img" />
    ))}
  </div>
);

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-search">
      <input type="text" placeholder="Search..." />
      <button className="search-button">🔍</button>
    </div>
    
    <h3 className="latest-title">Latest Portfolio</h3>
    <div className="latest-projects-list">
      <div className="latest-item">
        <img src={jayachandraImage} alt="Latest Project" className="latest-img"/>
        <p>A Six-level Residence in Vajarahalli that Blends Modern Design with Nature-inspired Luxury</p>
      </div>
      <div className="latest-item">
        <img src={adityaImage} alt="Latest Project 2" className="latest-img"/>
        <p>Crafting a Captivating Family Home in Electronic City, Bangalore</p>
      </div>
    </div>
  </aside>
);

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
            {project.content}
          </div>

          <h2>Project Gallery</h2>
          <Gallery images={project.galleryImages} />
          
          <h2 className="section-title related-title">Our Related Projects</h2>
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
