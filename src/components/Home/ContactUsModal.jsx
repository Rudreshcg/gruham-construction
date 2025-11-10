import React, { useState, useEffect } from 'react';
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Close, Construction, PersonOutline, MailOutline, LocalPhoneOutlined, SendRounded, Star, CheckCircle } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import ContactUs from './ContactUs';

const ContactUsModal = ({ open, onClose, isFirstVisit = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isLowHeight = useMediaQuery('(max-height: 500px)');
  const shouldScroll = isMobile && isLowHeight;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.6
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        sx: {
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
        }
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              width: '100%',
              maxWidth: isMobile ? '100%' : '500px',
              maxHeight: isMobile ? '100vh' : '90vh',
              overflow: shouldScroll ? 'auto' : 'hidden',
              margin: '0 auto',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.98)',
                borderRadius: { xs: '0px', sm: '20px' },
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
                overflow: shouldScroll ? 'auto' : 'hidden',
                maxHeight: isMobile ? '100vh' : '90vh',
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
              }}
            >
              {/* Header with close button */}
              <Box
                sx={{
                  position: 'relative',
                  p: { xs: 1.5, sm: 2, md: 3 },
                  background: 'linear-gradient(135deg, #bfa974, #9c8658)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                  borderRadius: { xs: '0px', sm: '20px 20px 0 0' },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Construction sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                      fontFamily: "'Montserrat', sans-serif",
                    }}
                  >
                    Get Your Free Quote
                  </Typography>
                </Box>
                
                <IconButton
                  onClick={onClose}
                  sx={{
                    color: 'white',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    width: { xs: '32px', sm: '36px' },
                    height: { xs: '32px', sm: '36px' },
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.3)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Close sx={{ fontSize: { xs: '1.2rem', sm: '1.4rem' } }} />
                </IconButton>
              </Box>

              {/* Welcome message for first visit */}
              {isFirstVisit && (
                <Box
                  sx={{
                    p: { xs: 1, sm: 1.5 },
                    background: 'linear-gradient(135deg, rgba(191, 169, 116, 0.1), rgba(156, 134, 88, 0.1))',
                    borderBottom: '1px solid rgba(191, 169, 116, 0.2)',
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5a6c7d',
                      textAlign: 'center',
                      fontStyle: 'italic',
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                    }}
                  >
                    Welcome! Get started with your dream project today.
                  </Typography>
                </Box>
              )}

              {/* Contact Form */}
              <Box sx={{ 
                p: { xs: 0, sm: 0 }, 
                flex: 1, 
                overflow: shouldScroll ? 'auto' : 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <ContactUs shouldScroll={shouldScroll} />
              </Box>

              {/* Footer */}
              <Box
                sx={{
                  p: { xs: 1, sm: 1.5 },
                  background: 'rgba(191, 169, 116, 0.05)',
                  borderTop: '1px solid rgba(191, 169, 116, 0.1)',
                  textAlign: 'center',
                  flexShrink: 0,
                  borderRadius: { xs: '0px', sm: '0 0 20px 20px' },
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: '#7f8c8d',
                    fontSize: { xs: '0.7rem', sm: '0.8rem' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Star sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem' }, color: '#bfa974' }} />
                  Trusted by 500+ satisfied customers
                </Typography>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default ContactUsModal;
