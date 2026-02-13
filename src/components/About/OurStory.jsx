import React from "react";
import { motion } from "framer-motion";
import SEOHead from "../SEO/SEOHead";
import InternalLinks from "../SEO/InternalLinks";
import "./OurStory.css";



const OurStory = () => {
  const stats = [
    { title: "People", number: "15+" },
    { title: "Years", number: "3+" },
    { title: "Ongoing Experiences", number: "24+" },
  ];

  const values = [
    { title: "Integrity", desc: "Honesty in every brick we lay and every promise we make." },
    { title: "Quality", desc: "Uncompromising standards in materials and craftsmanship." },
    { title: "Innovation", desc: "Embracing modern techniques for sustainable & smart living." },
    { title: "Customer Centric", desc: "Your vision is our blueprint. We build around your dreams." },
  ];

  return (
    <div className="our-story-section">
      <SEOHead
        title="Our Story - Gruham's Construction"
        description="Discover the journey of Gruham's Construction, delivering excellence in luxury homes and commercial spaces in Bangalore."
        canonical="/about"
      />

      <div className="story-header-minimal">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="story-title">Our Story</h2>
          <p className="story-subtitle">
            From humble beginnings to shaping Bangalore&apos;s skyline, our journey is defined by passion and precision.
          </p>
        </motion.div>
      </div>

      <div className="story-container">
        <motion.div
          className="story-content-wrapper full-width"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="story-text-block">
            <p>
              Founded with a vision to redefine construction, <strong>Gruham&apos;s</strong> began as a promise—to build not just structures, but sanctuaries. What started as a modest team of visionaries has evolved into one of the city&apos;s most trusted names in luxury development. We recognized early on that a home is more than bricks and mortar; it is a canvas for life&apos;s most cherished moments.
            </p>
            <p>
              We believe every project tells a story. Ours is one of <strong>unwavering quality</strong>, where traditional craftsmanship meets modern innovation. We don&apos;t just build; we collaborate, listening intently to your dreams before laying a single brick. Our process is deeply personal, ensuring that every corner of your space reflects your unique identity and aspirations.
            </p>
            <p>
              In an era of rapid urbanization, we remain steadfast in our commitment to <strong>sustainable luxury</strong>. We integrate eco-friendly practices with high-end design, proving that responsibility and opulence can coexist. From energy-efficient architectural planning to the sourcing of premium, ethically harvested materials, every decision is made with the future in mind.
            </p>
            <p>
              Today, Gruham&apos;s stands as a beacon of <strong>trust and transparency</strong> in the Bangalore construction landscape. Our legacy is built on the relationships we nurture—with our clients, our partners, and our community. We invite you to join us on this journey of creation, where your vision becomes our blueprint for excellence.
            </p>
          </div>

          <div className="stats-row-integrated">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item-integrated">
                <span className="stat-number-integrated">{stat.number}</span>
                <span className="stat-label-integrated">{stat.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. Mission & Vision */}
      <div className="mission-vision-section">
        <div className="mv-grid">
          <motion.div
            className="mv-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="mv-title">Our Mission</h3>
            <p className="mv-text">
              To deliver exceptional construction solutions that exceed client expectations through innovation, quality, and integrity. We strive to create spaces that inspire and endure, ensuring every project is a testament to our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            className="mv-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mv-title">Our Vision</h3>
            <p className="mv-text">
              To be the leading construction company in Bangalore, known for transforming skylines and creating sustainable, luxurious living spaces. We envision a future where Gruham&apos;s is synonymous with trust, design innovation, and superior craftsmanship.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 4. Core Values */}
      <div className="core-values-section">
        <h2 className="values-title">Our Core Values</h2>
        <div className="values-grid">
          {values.map((val, index) => (
            <motion.div
              key={index}
              className="value-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="value-heading">{val.title}</h4>
              <p className="value-desc">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>



      <div className="internal-links-wrapper">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
          <InternalLinks currentPage="our-story" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
