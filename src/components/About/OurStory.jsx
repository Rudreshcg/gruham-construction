import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import teamPhoto from "../../assets/images/images.jpg";
import "./OurStory.css";

const OurStory = () => {
  const stats = [
    { title: "PEOPLE", number: "30+" },
    { title: "YEARS", number: "5+" },
    { title: "ONGOING PROJECTS", number: "50+" },
  ];

  return (
    <div className="our-story-section">
      <SEOHead
        title="Our Story - Gruham's Construction - Leading Construction Company in Bangalore"
        description="Discover Our Story at Gruham's Construction (Gruhams), a premier construction company in Bangalore. Learn about our mission, values, and commitment to delivering exceptional construction services, luxury homes, and commercial buildings with Gruhams construction team."
        keywords="Gruham construction story, Gruhams construction story, gruham construction company, construction company Bangalore, construction mission, construction values, Bangalore construction team, construction expertise, Gruhams construction team, gruham construction story"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Gruham's Construction",
            "description": "Premier construction company in Bangalore specializing in luxury homes, commercial buildings, interior design, and renovation services.",
            "url": "https://gruhams.in/about"
          }
        }}
      />

      {/* Title Section */}
      <div className="story-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="story-title">Our Story</h2>
          <p className="story-subtitle">
            Discover the journey, values, and vision that drive Gruham's Construction to excellence.
          </p>
        </motion.div>
      </div>

      {/* Top Hero Image Section */}
      <div className="photo-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={teamPhoto}
            alt="Gruham's Construction - Building Excellence"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.minHeight = "400px";
              e.target.parentElement.style.backgroundColor = "#e0e0e0";
            }}
          />
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-item">
                <div className="stat-line" />
                <div className="stat-title">{stat.title}</div>
                <div className="stat-number">{stat.number}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Text Section - Middle Content */}
      <div className="story-section">
        <div className="story-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="story-text">
              Founded in Bangalore with a vision to transform the construction landscape, Gruham's Construction emerged from a passion for creating spaces that blend functionality with aesthetic excellence. What started as a modest venture with a dedicated team of construction professionals has grown into one of Bangalore's most trusted names in residential and commercial construction.
            </p>
            <p className="story-text">
              Our approach to construction has always been non-linear and client-centric. We believe in understanding each client's unique vision before breaking ground. By integrating traditional craftsmanship with modern construction techniques, we create spaces that tell stories and stand the test of time. Every project is a collaboration, where our team of architects, engineers, and construction specialists work in harmony to bring dreams to life.
            </p>
            <p className="story-text">
              At the heart of Gruham's Construction lies our commitment to quality, integrity, and innovation. We draw strength from the collective expertise of our diverse team, each member bringing unique skills and perspectives. This collaborative spirit, combined with our unwavering dedication to excellence, has enabled us to build not just structures, but lasting relationships with our clients. Our culture of continuous learning and adaptation has helped us navigate the evolving construction industry, always staying ahead with sustainable practices and cutting-edge technologies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Image Section */}
      <div className="photo-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={teamPhoto}
            alt="Gruham's Construction - Building Excellence"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.style.minHeight = "400px";
              e.target.parentElement.style.backgroundColor = "#e0e0e0";
            }}
          />
        </motion.div>
      </div>

      {/* Internal Links */}
      <div style={{ padding: "40px 5%", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <InternalLinks currentPage="our-story" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
