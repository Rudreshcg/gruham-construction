import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCard.css';
import Logo from '../../assets/images/Logo.png';
import WatermarkedImage from '../common/WatermarkedImage';

function PortfolioCard({
    image,
    name,
    title,
    category,
    location,
    area,
    status,
    date,
    link,
    onImageClick
}) {
    return (
        <div className="portfolio-card-minimal">
            <Link to={link} className="card-image-link">
                <div className="card-image-wrapper">
                    <WatermarkedImage src={image} alt={title || name} className="card-image" watermarkSrc={Logo} />
                    <div className="hover-overlay">
                        <span className="view-text">View Details</span>
                    </div>
                </div>
            </Link>

            <div className="card-info-minimal">
                <div className="card-info-header">
                    <Link to={link} className="title-link">
                        <h3 className="project-title-minimal">{title || name}</h3>
                    </Link>
                    <span className="project-year-minimal">{date}</span>
                </div>
                {name && title && name !== title && (
                    <div className="client-name-minimal" style={{ fontSize: '0.9rem', color: '#927944', fontWeight: 600, marginBottom: '8px' }}>
                        {name}
                    </div>
                )}
                <div className="card-info-sub">
                    <span className="project-category-minimal">{category}</span>
                    {location && <span className="project-location-minimal">• {location}</span>}
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;
