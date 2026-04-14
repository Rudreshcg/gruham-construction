import React, { useState } from 'react';
import './Packages.css';
import packagesData from '../../data/packages.json';
import SEOHead from '../SEO/SEOHead';

function Packages() {
  const [showComparison, setShowComparison] = useState(false);

  // We can dynamically extract the sections and feature labels from the first package,
  // assuming all packages strictly follow the same label structure.
  const packageTemplate = packagesData.packages[0];
  const featureSections = Object.keys(packageTemplate.features);

  return (
    <div className="packages-page">
      <SEOHead
        title="Construction Packages - Gruham's Construction"
        description="Explore our transparent and detailed construction packages ranging from Essential to Luxury and Custom options. Find the right fit for your dream home."
        keywords="construction packages, custom home packages, bangalore home construction, gruham construction packages"
        canonical="/packages"
      />
      
      <div className="packages-header">
        <h1>Construction Packages</h1>
        <p>Choose the perfect tier to build your dream home.</p>
      </div>

      {!showComparison ? (
        <div className="packages-hero-grid">
          {packagesData.packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`package-hero-card ${pkg.popular ? 'popular' : ''}`}
            >
              {pkg.popular && <div className="popular-ribbon">Most Popular</div>}
              
              <div className="card-hexagon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              
              <h2>{pkg.name}</h2>
              <div className="price-block">
                <span className="price-val">{pkg.price}</span>
                <span className="price-unit">/Sq Ft</span>
              </div>
              
              <button 
                className="view-details-btn"
                onClick={() => setShowComparison(true)}
              >
                Compare Packages →
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="comparison-view">
          <div className="comparison-actions">
            <button className="back-btn" onClick={() => setShowComparison(false)}>
              ← Back to Overview
            </button>
            <p className="swipe-hint">Swipe horizontally to compare ↔</p>
          </div>

          <div className="table-wrapper">
            <table className="master-comparison-table">
              <thead>
                <tr>
                  <th className="feature-col-header">Features</th>
                  {packagesData.packages.map((pkg) => (
                    <th key={pkg.id} className="pkg-col-header">
                      <h3>{pkg.name}</h3>
                      <div className="pkg-price-badge">{pkg.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featureSections.map((sectionName) => (
                  <React.Fragment key={sectionName}>
                    {/* Section Header Row */}
                    <tr className="section-head-row">
                      <td colSpan={packagesData.packages.length + 1}>
                        <h4>{sectionName}</h4>
                      </td>
                    </tr>
                    {/* Feature Rows within the section */}
                    {packageTemplate.features[sectionName].map((featureRef, index) => (
                      <tr key={`${sectionName}-${index}`} className="feature-row-table">
                        <td className="feat-label-cell">
                          {featureRef.label}
                        </td>
                        {packagesData.packages.map((pkg) => {
                          const featArray = pkg.features[sectionName];
                          const featItem = featArray.find(f => f.label === featureRef.label);
                          const value = featItem ? featItem.value : '—';
                          const isMissing = value === '—';
                          const isIncluded = value.toLowerCase() === 'included';
                          
                          return (
                            <td key={pkg.id} className={`feat-val-cell ${isMissing ? 'missing' : ''} ${isIncluded ? 'included' : ''}`}>
                              {isIncluded ? <span className="check-mark">✓ Included</span> : value}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Packages;
