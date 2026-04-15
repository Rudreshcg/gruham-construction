import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import "./OurStory.css";

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    { 
      name: "Dhanush N Gowda", 
      title: "FOUNDER & CEO", 
      image: null,
      bio: "Visionary leader dedicated to redefining construction excellence. Dhanush ensures every project aligns with the core philosophy of 'Building Homes with Purpose', bringing transparency and innovation to the forefront."
    },
    { 
      name: "Avinash", 
      title: "CO-FOUNDER", 
      image: null,
      bio: "Expert project strategist focused on operational efficiency and sustainable growth. Avinash bridges the gap between complex engineering requirements and client dreams with precision and care."
    },
    { 
      name: "Manasa N", 
      title: "HEAD OF OFFICE MANAGER", 
      image: null,
      bio: "The organizational heartbeat of Graham’s. Manasa ensures seamless coordination between our design teams and site operations, maintaining the high standards of communication our clients expect."
    },
    { 
      name: "Rajshekar", 
      title: "SITE ENGINEER", 
      image: null,
      bio: "Dedicated and results-oriented Site Execute Engineer with hands-on experience in managing construction activities across residential, commercial, and infrastructure projects. Skilled in coordinating with architects and subcontractors to ensure timely delivery."
    },
    { 
      name: "Darshan KG", 
      title: "DESIGNING HEAD", 
      image: null,
      bio: "Architectural visionary specializing in sustainable integration and material consciousness. Darshan shapes spaces that breathe, focusing on light, air, and the emotional resonance of every room."
    },
    { 
      name: "Rudresh", 
      title: "SOFTWARE ENGINEER & WEB DEVELOPER", 
      image: null,
      bio: "Architect of the digital ecosystem. Rudresh builds the transparent tracking systems and interactive platforms that keep our clients connected to their project's progress in real-time."
    },
  ];

  const [activeBio, setActiveBio] = useState(null);

  const toggleBio = (index) => {
    setActiveBio(activeBio === index ? null : index);
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  return (
    <div className="our-story-page">
      <SEOHead
        title="Our Story & Team - Graham’s | Building Homes with Purpose"
        description="Learn about the journey of Graham's construction. Three professionals, one vision: to make home building simpler, sustainable, and truly human."
        canonical="/about"
      />

      {/* --- HERO SECTION --- */}
      <section className="story-hero">
        <motion.div 
          className="story-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="brand-tagline">Our Story</span>
          <h1>Building Homes with Purpose</h1>
        </motion.div>
      </section>

      {/* --- NARRATIVE SECTION 1: THE MEANING --- */}
      <section className="narrative-section bg-cream">
        <div className="narrative-container">
          <motion.div className="narrative-text-block" {...fadeUp}>
            <p className="large-lead">
              The name Graham’s is rooted in meaning, culture, and emotion. It is inspired by the word <strong>“Gruham” (గృహం)</strong>, which translates to home—a place of belonging, comfort, and life.
            </p>
            <p>
              We evolved this idea into “Grahams” to represent not just one home, but many—each uniquely designed, thoughtfully built, and deeply personal.
            </p>
            <p>
              At its core, Graham’s stands for more than construction. It represents an ecosystem of living—where design, structure, and environment come together in harmony. A home, to us, is not just a physical space; it is an experience shaped by light, air, materials, and the emotions it holds within.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVE SECTION 2: THE JOURNEY --- */}
      <section className="narrative-section">
        <div className="narrative-container">
          <motion.div className="narrative-text-block" {...fadeUp}>
            <h2 className="section-title-gold">Our journey began with a shared realization.</h2>
            <p className="story-quote">Under one roof, the three of us discovered a common purpose:</p>
            
            <div className="triple-expertise-grid">
              <div className="expertise-item">
                <span className="expertise-role">The Architect</span>
                <p>Driven to create meaningful spaces</p>
              </div>
              <div className="expertise-item">
                <span className="expertise-role">The Interior Designer</span>
                <p>Focused on the beauty of detail</p>
              </div>
              <div className="expertise-item">
                <span className="expertise-role">The Civil Engineer</span>
                <p>Committed to strength, precision, and longevity</p>
              </div>
            </div>

            <p>
              While working on multiple projects, we observed a pattern. The process of building a home—something deeply personal—was often unnecessarily complicated. Miscommunication, fragmented execution, and lack of clarity left clients feeling disconnected from their own projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVE SECTION 3: THE VISION --- */}
      <section className="narrative-section active-bg">
        <div className="narrative-container">
          <motion.div className="narrative-text-block white-text" {...fadeUp}>
            <h2 className="section-title-white">We knew this could be different.</h2>
            <p>
              What began as conversations—during coffee breaks, on active sites, and after long working days—soon turned into a clear vision:
            </p>
            <div className="vision-highlight">
              To create a system where building a home is simple, transparent, and truly enjoyable.
            </div>
            <p>
              That vision became Graham’s. We stepped forward, bringing together our individual expertise into one unified approach. Today, architecture, interiors, and construction work seamlessly under a single system—eliminating confusion and ensuring clarity at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- NARRATIVE SECTION 4: THE VALUES --- */}
      <section className="narrative-section">
        <div className="narrative-container">
          <motion.div className="narrative-text-block" {...fadeUp}>
             <h2 className="section-title-gold">Responsibility and Intention</h2>
             <p>Every space we create is shaped by three core pillars:</p>
             
             <div className="pillars-grid">
                <div className="pillar-card">
                  <h4>Sustainability</h4>
                  <p>Ensuring minimal impact on the environment</p>
                </div>
                <div className="pillar-card">
                  <h4>Natural Integration</h4>
                  <p>Maximizing light, ventilation, and spatial comfort</p>
                </div>
                <div className="pillar-card">
                  <h4>Material Consciousness</h4>
                  <p>Balancing durability, aesthetics, and eco-awareness</p>
                </div>
             </div>

             <p className="closing-statement">
              We believe a home should breathe with its surroundings, not work against them. Our commitment goes beyond delivering projects. We focus on creating environments that support life, enhance well-being, and stand strong for generations.
             </p>
             
             <div className="manifesto-box">
                <p>We don’t just build structures.</p>
                <p>We create homes that feel alive.</p>
                <p>We build trust through transparency.</p>
                <p>We shape spaces that reflect people, purpose, and planet.</p>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="teams-section" id="team">
        <div className="narrative-container">
          <motion.div className="teams-header" {...fadeUp}>
            <h2 className="teams-title">Our Team</h2>
            <p className="teams-subtitle">
              At Gruham&apos;s Construction, our success is built on the foundation of our exceptional team. 
              Each member brings unique expertise, dedication, and passion to every project. Together, 
              we transform visions into reality, creating spaces that stand the test of time.
            </p>
          </motion.div>

          <div className={`teams-grid-square ${isVisible ? 'visible' : ''}`}>
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`team-card-square ${activeBio === index ? 'active' : ''}`}
                onClick={() => toggleBio(index)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="team-card-top">
                  <div className="team-initial">
                    {member.name.charAt(0)}
                  </div>
                  <div className="team-bio-overlay">
                    <p>{member.bio}</p>
                    <span className="close-bio-hint">Close Bio ×</span>
                  </div>
                  <div className="view-bio-hint">
                    <span>Read Bio</span>
                  </div>
                </div>
                <div className="team-card-bottom">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER LINKS --- */}
      <div className="internal-links-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 5%' }}>
          <InternalLinks currentPage="our-story" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
