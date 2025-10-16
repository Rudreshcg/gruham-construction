import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const InternalLinks = ({ currentPage = 'home' }) => {
  const linkSections = {
    home: [
      { text: 'About Our Construction Services', to: '/about' },
      { text: 'View Our Construction Portfolio', to: '/portfolio' },
      { text: 'Get Construction Quote', to: '/contact' },
      { text: 'Construction Services in Bangalore', to: '/services' }
    ],
    about: [
      { text: 'Our Construction Services', to: '/services' },
      { text: 'Construction Portfolio', to: '/portfolio' },
      { text: 'Contact Us for Construction', to: '/contact' },
      { text: 'Construction Careers', to: '/careers' }
    ],
    services: [
      { text: 'About Gruham Construction', to: '/about' },
      { text: 'Construction Portfolio', to: '/portfolio' },
      { text: 'Get Construction Quote', to: '/contact' },
      { text: 'Construction Careers', to: '/careers' }
    ],
    portfolio: [
      { text: 'Our Construction Services', to: '/services' },
      { text: 'About Gruham Construction', to: '/about' },
      { text: 'Contact for Construction', to: '/contact' },
      { text: 'Construction Careers', to: '/careers' }
    ],
    contact: [
      { text: 'Our Construction Services', to: '/services' },
      { text: 'Construction Portfolio', to: '/portfolio' },
      { text: 'About Gruham Construction', to: '/about' },
      { text: 'Construction Careers', to: '/careers' }
    ]
  };

  const currentLinks = linkSections[currentPage] || linkSections.home;

  return (
    <Box sx={{ 
      mt: 4, 
      p: 3, 
      backgroundColor: '#f8f9fa', 
      borderRadius: 2,
      border: '1px solid #e9ecef'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 2, 
          color: '#2c3e50',
          fontWeight: 600
        }}
      >
        Related Construction Services
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {currentLinks.map((link, index) => (
          <MuiLink
            key={index}
            component={RouterLink}
            to={link.to}
            sx={{
              color: '#bfa974',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.9rem',
              padding: '8px 16px',
              backgroundColor: 'white',
              borderRadius: '20px',
              border: '1px solid #bfa974',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#bfa974',
                color: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(191, 169, 116, 0.3)'
              }
            }}
          >
            {link.text}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

export default InternalLinks;
