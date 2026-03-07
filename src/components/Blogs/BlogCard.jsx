import React, { useState } from 'react';
import './BlogCard.css';

const BlogCard = ({ image, title, summary, category, date, readTime, slug, onReadMore }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="blog-card">
      <div className="card-image-container">
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="card-image"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="card-image-placeholder">
            <div className="placeholder-icon">📝</div>
            <div className="placeholder-text">Blog Image</div>
          </div>
        )}
        <div className="card-category">{category}</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="blog-name">{title}</h3>
          <p className="blog-summary">{summary}</p>
        </div>
        <div className="card-footer">
          <div className="card-details">
            <div className="detail-item">
              <span className="detail-text">{date}</span>
            </div>
            <div className="detail-item">
              <span className="detail-text read-time">• {readTime}</span>
            </div>
          </div>
          <a href={`/blogs/${slug}`} className="explore-button" onClick={(e) => { e.preventDefault(); onReadMore(); }}>
            Read More
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

