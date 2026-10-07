import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import SectionWrapper from './SectionWrapper';
import SectionHeading from './SectionHeading';
import { homeTheme } from './sectionStyles';
import PortfolioCard from '../Portfolio/PortfolioCard';

// Import images
import jayachandraImage from '../../assets/images/residential-architects-mr-jayachandra-residence.webp';
import adityaImage from '../../assets/images/adityaImage.jpg';
import brindavanamImage from '../../assets/images/brindavanam.png';
import interior1 from '../../assets/images/interior1.webp';
import interior2 from '../../assets/images/interior2.webp';

// Image mapping
const imageMap = {
  '/images/residential-architects-mr-jayachandra-residence.webp': jayachandraImage,
  '/images/adityaImage.jpg': adityaImage,
  '/images/brindavanam.png': brindavanamImage,
  '/images/interior1.webp': interior1,
  '/images/interior2.webp': interior2,
};

const PortfolioPreview = () => {
  const navigate = useNavigate();
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Get the first 3 projects from the JSON data
    const projects = Object.keys(projectsData.projects).slice(0, 3).map(key => {
      const project = projectsData.projects[key];
      return {
        id: project.id,
        name: project.name,
        title: project.title,
        category: project.category,
        image: imageMap[project.mainImage] || project.mainImage,
        year: project.date,
        location: project.location,
        area: project.plotArea,
        status: project.status,
        link: `/portfolio/${project.id}`
      };
    });
    setPortfolioItems(projects);
  }, []);

  return (
    <SectionWrapper id="portfolio-preview" variant="white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SectionHeading
          eyebrow="Signature Work"
          title="Featured Projects"
          subtitle="Explore a curated selection of our recent architectural, interior, and construction projects that highlight our craftsmanship and attention to detail."
        />
      </motion.div>

      <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
        {portfolioItems.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.id} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
            >
              <PortfolioCard
                image={project.image}
                name={project.name}
                title={project.title}
                category={project.category}
                location={project.location}
                area={project.area}
                status={project.status}
                date={project.year}
                link={project.link}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={6}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => navigate('/portfolio')}
            sx={{
              background: homeTheme.colors.accent,
              color: homeTheme.colors.textPrimary,
              px: { xs: 4, md: 6 },
              py: { xs: 1.5, md: 2 },
              fontSize: { xs: '1rem', md: '1.08rem' },
              fontWeight: 700,
              borderRadius: '4px',
              textTransform: 'none',
              fontFamily: homeTheme.fonts.body,
              boxShadow: 'none',
              transition: 'all 0.35s ease',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent)',
                transition: 'left 0.5s ease',
              },
              '&:hover': {
                background: '#d6bd83',
                transform: 'translateY(-2px)',
                boxShadow: 'none',
                '&::before': {
                  left: '100%',
                },
              },
            }}
          >
            View All Projects
          </Button>
        </motion.div>
      </Box>
    </SectionWrapper>
  );
};

export default PortfolioPreview;
