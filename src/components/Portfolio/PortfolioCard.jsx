// File: src/components/Portfolio/PortfolioCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCard.css'; 

function PortfolioCard({ image, name, link }) {
    return (
        <div className="portfolio-card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-overlay">
                <h3 className="project-name">{name}</h3>
                <Link to={link} className="explore-button">
                    EXPLORE <span className="arrow">➔</span>
                </Link>
            </div>
        </div>
    );
}

export default PortfolioCard;
