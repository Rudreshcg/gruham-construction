import React from 'react';
import './ProjectPage.css'; // Main page styles

// --- Images (all filenames safe: lowercase, no spaces) ---
import mainProjectImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import interior1 from '../../assets/images/interior1.webp';
import interior2 from '../../assets/images/interior2.webp';
import interior3 from '../../assets/images/interior3.webp';
import interior4 from '../../assets/images/interior4.webp';
import interior5 from '../../assets/images/interior5.webp';
import interior6 from '../../assets/images/interior6.webp';

// --- Project Data ---
const projectDetails = {
    name: 'Mr. Jayachandra',
    date: 'August 7, 2024',
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
        { id: 1, src: interior1, alt: 'Interior 1' },
        { id: 2, src: interior2, alt: 'Interior 2' },
        { id: 3, src: interior3, alt: 'Kitchen' },
        { id: 4, src: interior4, alt: 'Living Room' },
        { id: 5, src: interior5, alt: 'Bedroom' },
        { id: 6, src: interior6, alt: 'Bathroom' },
    ]
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
                <img src={interior1} alt="Latest Project" className="latest-img"/>
                <p>A Six-level Residence in Vajarahalli that Blends Modern Design with Nature-inspired Luxury</p>
            </div>
            <div className="latest-item">
                <img src={interior2} alt="Latest Project 2" className="latest-img"/>
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
    return (
        <div className="project-page">
            {/* Banner */}
            <div className="project-banner" style={{backgroundImage: `url(${mainProjectImage})`}}>
                <div className="banner-overlay">
                    <h1>{projectDetails.name}</h1>
                    <p className="project-meta">admin | {projectDetails.date}</p>
                </div>
            </div>

            {/* Content and Sidebar */}
            <div className="project-content-layout">
                <div className="main-content">
                    <div className="project-text-content">{projectDetails.content}</div>

                    <h2>Project Gallery</h2>
                    <Gallery images={projectDetails.galleryImages} />

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
