import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Packages.css';
import packagesData from '../../data/packages.json';
import SEOHead from '../SEO/SEOHead';

function Packages() {
  const navigate = useNavigate();
  // view: 'grid' | 'detail' | 'compare'
  const [view, setView] = useState('grid');
  const [activePackageIdx, setActivePackageIdx] = useState(0);
  const [openSections, setOpenSections] = useState({});

  const packageTemplate = packagesData.packages[0];
  const featureSections = Object.keys(packageTemplate.features);

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const openPackageDetail = (idx) => {
    setActivePackageIdx(idx);
    setOpenSections({});
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCompare = () => {
    setView('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    setView('grid');
    setOpenSections({});
  };

  const pkg = packagesData.packages[activePackageIdx];

  // ---- Individual Package Detail (both mobile & desktop) ----
  const PackageDetailView = () => (
    <div className="pkg-detail-view">
      {/* Top Navigation */}
      <div className="pkg-detail-nav">
        <button className="back-btn" onClick={goBack}>← Back to Packages</button>
      </div>

      {/* Navigation tabs */}
      <div className="pkg-detail-tabs">
        {packagesData.packages.map((p, i) => (
          <button
            key={p.id}
            className={`pkg-detail-tab ${activePackageIdx === i ? 'active' : ''}`}
            onClick={() => { setActivePackageIdx(i); setOpenSections({}); }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Package header */}
      <div className="pkg-detail-header">
        <div className="pkg-detail-header-left">
          <div className="pkg-detail-title-row">
            <h2>{pkg.name}</h2>
            {pkg.popular && <span className="popular-tag">★ Most Popular</span>}
            {pkg.tag && <span className="commercial-tag-dark">{pkg.tag}</span>}
          </div>
          {pkg.subtitle && <p className="pkg-detail-subtitle">{pkg.subtitle}</p>}
        </div>
        <div className="pkg-detail-price-badge">
          <span className="pkg-detail-price">{pkg.price}</span>
          <span className="pkg-detail-price-unit">/Sq Ft</span>
        </div>
      </div>

      {/* Feature sections as accordions */}
      <div className="pkg-detail-sections">
        {featureSections.map((section) => (
          <div key={section} className="pkg-accordion">
            <button
              className={`pkg-accordion-btn ${openSections[section] ? 'open' : ''}`}
              onClick={() => toggleSection(section)}
            >
              <span>{section}</span>
              <span className="pkg-accordion-arrow">{openSections[section] ? '▲' : '▼'}</span>
            </button>
            {openSections[section] && (
              <div className="pkg-accordion-content">
                {pkg.features[section].map((feat, idx) => {
                  const isIncluded = feat.value.toLowerCase() === 'included';
                  const isMissing = feat.value === '—';
                  return (
                    <div key={idx} className="pkg-feat-row">
                      <span className="pkg-feat-label">{feat.label}</span>
                      <span className={`pkg-feat-val ${isIncluded ? 'included' : ''} ${isMissing ? 'missing' : ''}`}>
                        {isIncluded ? '✓ Included' : feat.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action buttons */}
      <div className="pkg-detail-actions">
        <button className="compare-all-btn-outline" onClick={openCompare}>⇌ Compare All Packages</button>
        <button className="pkg-contact-btn" onClick={() => navigate('/contact')}>
          📞 Get a Quote
        </button>
      </div>
    </div>
  );

  // ---- Desktop comparison table ----
  const ComparisonTable = () => (
    <div className="comparison-view">
      <div className="comparison-actions">
        <button className="back-btn" onClick={goBack}>← Back to Packages</button>
        <p className="swipe-hint">Scroll horizontally to compare all packages ↔</p>
      </div>

      {/* Animated hint for mobile (hidden on desktop via CSS) */}
      <div className="mobile-scroll-hint">
        <span className="hint-arrows">‹‹</span>
        Swipe to compare all packages
        <span className="hint-arrows">››</span>
      </div>

      <div className="table-wrapper">
        <div className="table-scroll-shell">
          <table className="master-comparison-table">
            <thead>
              <tr>
                <th className="feature-col-header">Features</th>
                {packagesData.packages.map((p) => (
                  <th key={p.id} className={`pkg-col-header ${p.popular ? 'popular-col' : ''} ${p.tag ? 'commercial-col' : ''}`}>
                    {p.popular && <div className="popular-col-badge">★ Most Popular</div>}
                    {p.tag && <div className="commercial-col-badge">🏢 {p.tag}</div>}
                    <h3>{p.name}</h3>
                    <div className="pkg-price-badge">{p.price}<span className="per-sqft">/Sq Ft</span></div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureSections.map((sectionName) => (
                <React.Fragment key={sectionName}>
                  <tr className="section-head-row">
                    <td colSpan={packagesData.packages.length + 1}>
                      <h4>{sectionName}</h4>
                    </td>
                  </tr>
                  {packageTemplate.features[sectionName].map((featureRef, index) => (
                    <tr key={`${sectionName}-${index}`} className="feature-row-table">
                      <td className="feat-label-cell">{featureRef.label}</td>
                      {packagesData.packages.map((p) => {
                        const featArray = p.features[sectionName];
                        const featItem = featArray.find(f => f.label === featureRef.label);
                        const value = featItem ? featItem.value : '—';
                        const isMissing = value === '—';
                        const isIncluded = value.toLowerCase() === 'included';
                        return (
                          <td key={p.id} className={`feat-val-cell ${isMissing ? 'missing' : ''} ${isIncluded ? 'included' : ''}`}>
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

      {/* CTA below comparison table */}
      <div className="comparison-cta">
        <p>Ready to get started? Talk to our experts and get a personalised quote.</p>
        <button className="pkg-contact-btn large" onClick={() => navigate('/contact')}>
          📞 Contact Us for a Free Quote
        </button>
      </div>
    </div>
  );

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

      {view === 'grid' && (
        <>
          {/* Compare all button */}
          <div className="compare-bar">
            <button className="compare-all-btn" onClick={openCompare}>
              ⇌ Compare All Packages Side by Side
            </button>
          </div>

          <div className="packages-hero-grid">
            {packagesData.packages.map((p, idx) => (
              <div
                key={p.id}
                className={`package-hero-card ${p.popular ? 'popular' : ''}`}
              >
                {p.popular && <div className="popular-ribbon">Most Popular</div>}

                <div className="card-hexagon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <h2>{p.name}</h2>
                {p.tag && <span className="commercial-tag">{p.tag}</span>}
                <p className="card-subtitle">{p.subtitle}</p>
                <div className="price-block">
                  <span className="price-val">{p.price}</span>
                  <span className="price-unit">/Sq Ft</span>
                </div>

                <button
                  className="view-details-btn"
                  onClick={() => openPackageDetail(idx)}
                >
                  View Details →
                </button>
              </div>
            ))}
          </div>

          {/* Contact CTA on grid view */}
          <div className="packages-contact-cta">
            <div className="cta-content">
              <h3>Not sure which package fits you?</h3>
              <p>Our construction experts will guide you to the right choice for your budget and vision.</p>
              <div className="cta-actions">
                <button className="cta-primary-btn" onClick={() => navigate('/contact')}>
                  📞 Talk to an Expert
                </button>
                <button className="cta-secondary-btn" onClick={openCompare}>
                  ⇌ Compare All Packages
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {view === 'detail' && <PackageDetailView />}
      {view === 'compare' && <ComparisonTable />}
    </div>
  );
}

export default Packages;
