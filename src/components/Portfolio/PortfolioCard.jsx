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
        <div className="portfolio-card">
            <div className="card-image-container" onClick={() => onImageClick && onImageClick(image)}>
                <WatermarkedImage src={image} alt={name} className="card-image" watermarkSrc={Logo} />
                <div className="card-category">{category}</div>
                <div className="hover-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="white"/>
                    </svg>
                </div>
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3 className="project-name">{name}</h3>
                    <p className="project-title">{title}</p>
                </div>

                <div className="card-details">
                    <div className="detail-item">
                        <strong className="detail-label">Location:</strong>
                        <span className="detail-text">{location}</span>
                    </div>
                    <div className="detail-item">
                        <strong className="detail-label">Plot Area:</strong>
                        <span className="detail-text">{area}</span>
                    </div>
                    <div className="detail-item">
                        <strong className="detail-label">Year:</strong>
                        <span className="detail-text">{date}</span>
                    </div>
                    {status && (
                        <div className="detail-item">
                            <strong className="detail-label">Status:</strong>
                            <span className="detail-text">{status}</span>
                        </div>
                    )}
                </div>

                <Link to={link} className="explore-button">
                    <span>View Project</span>
                    <span className="arrow">→</span>
                </Link>
            </div>
        </div>
    );
}

export default PortfolioCard;
