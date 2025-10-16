import React from 'react';
import { Box, Typography, Link as MuiLink, Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Home, Business, Build, ContactMail, Work } from '@mui/icons-material';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const getBreadcrumbItems = () => {
    const items = [
      {
        label: 'Home',
        path: '/',
        icon: <Home sx={{ fontSize: 16 }} />
      }
    ];

    if (pathname === '/about') {
      items.push({
        label: 'About Us',
        path: '/about',
        icon: <Business sx={{ fontSize: 16 }} />
      });
    } else if (pathname === '/services') {
      items.push({
        label: 'Construction Services',
        path: '/services',
        icon: <Build sx={{ fontSize: 16 }} />
      });
    } else if (pathname === '/portfolio') {
      items.push({
        label: 'Construction Portfolio',
        path: '/portfolio',
        icon: <Build sx={{ fontSize: 16 }} />
      });
    } else if (pathname === '/contact') {
      items.push({
        label: 'Contact Us',
        path: '/contact',
        icon: <ContactMail sx={{ fontSize: 16 }} />
      });
    } else if (pathname === '/careers') {
      items.push({
        label: 'Construction Careers',
        path: '/careers',
        icon: <Work sx={{ fontSize: 16 }} />
      });
    }

    return items;
  };

  const breadcrumbItems = getBreadcrumbItems();

  return (
    <Box sx={{ 
      py: 2, 
      px: 2,
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e9ecef'
    }}>
      <MuiBreadcrumbs 
        separator="›" 
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: '#bfa974',
            fontWeight: 'bold'
          }
        }}
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          
          return (
            <Box key={item.path} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {item.icon}
              {isLast ? (
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#2c3e50',
                    fontWeight: 600,
                    fontSize: '0.9rem'
                  }}
                >
                  {item.label}
                </Typography>
              ) : (
                <MuiLink
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: '#bfa974',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': {
                      color: '#a48d5e',
                      textDecoration: 'underline'
                    }
                  }}
                >
                  {item.label}
                </MuiLink>
              )}
            </Box>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
