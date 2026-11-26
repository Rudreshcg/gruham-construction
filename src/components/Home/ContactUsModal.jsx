import React from 'react';
import {
  Box,
  Dialog,
  IconButton,
  Typography,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import houseImage from '../../assets/images/luxury_villa_hero.png';
import ContactUs from './ContactUs';
import { homeTheme } from './sectionStyles';

const ContactUsModal = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-labelledby="contact-modal-title"
      BackdropProps={{
        sx: {
          background: 'rgba(18, 22, 27, 0.72)',
          backdropFilter: 'blur(6px)',
        }
      }}
      PaperProps={{
        sx: {
          width: { xs: 'calc(100% - 24px)', sm: 'calc(100% - 32px)' },
          height: { xs: 'auto', md: 'min(84dvh, 690px)' },
          maxWidth: { xs: '430px', md: '900px' },
          maxHeight: { xs: 'calc(100dvh - 24px)', md: 'calc(100dvh - 32px)' },
          m: { xs: 1.5, sm: 2 },
          overflow: 'hidden',
          background: homeTheme.colors.backgroundNeutral,
          border: `1px solid ${homeTheme.colors.divider}`,
          borderRadius: { xs: '16px', md: '18px' },
          boxShadow: '0 28px 90px rgba(0, 0, 0, 0.36)',
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          height: { xs: 'auto', md: '100%' },
          maxHeight: 'inherit',
          minHeight: 0,
          gridTemplateRows: { xs: 'auto minmax(0, 1fr)', md: 'minmax(0, 1fr)' },
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '0.82fr 1.18fr' },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: { xs: 112, sm: 126, md: '100%' },
            minHeight: 0,
            overflow: 'hidden',
            color: homeTheme.colors.backgroundNeutral,
            gridColumn: '1',
            gridRow: '1',
            background: homeTheme.colors.forest,
          }}
        >
          <Box
            component="img"
            src={houseImage}
            alt="Modern home built by Gruham's Construction"
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: { xs: 'center 42%', md: 'center' },
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,
              background: {
                xs: 'linear-gradient(180deg, rgba(18, 22, 27, 0.28) 0%, rgba(18, 22, 27, 0.84) 100%)',
                md: 'linear-gradient(0deg, rgba(20, 20, 18, 0.82), rgba(20, 20, 18, 0.04) 80%)',
              },
            }}
          />
          <IconButton
            onClick={onClose}
            aria-label="Close contact form"
            sx={{
              display: { xs: 'inline-flex', md: 'none' },
              position: 'absolute',
              top: 10,
              right: 10,
              zIndex: 2,
              width: 34,
              height: 34,
              color: '#fffdf9',
              backgroundColor: 'rgba(20, 20, 18, 0.45)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 253, 249, 0.24)',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: 'rgba(20, 20, 18, 0.72)',
              },
            }}
          >
            <Close fontSize="small" />
          </IconButton>
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 16, md: 32 },
              bottom: { xs: 14, md: 32 },
              left: { xs: 16, md: 32 },
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: '#e7c77d',
                fontSize: { xs: '0.62rem', md: '0.68rem' },
                fontWeight: 800,
                letterSpacing: '0.12em',
                lineHeight: 1.35,
                textTransform: 'uppercase',
              }}
            >
              Gruham&apos;s Construction · Bengaluru
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: { xs: 0.4, md: 0.8 },
                maxWidth: 440,
                color: '#fffdf9',
                fontFamily: `${homeTheme.fonts.heading} !important`,
                fontSize: { xs: '1.22rem', sm: '1.38rem', md: '2.4rem' },
                lineHeight: 1.12,
                letterSpacing: '0 !important',
              }}
            >
              Build a home that feels like yours.
            </Typography>
            <Typography
              sx={{
                display: { xs: 'none', md: 'block' },
                mt: 1.2,
                maxWidth: 380,
                color: 'rgba(255, 253, 249, 0.86)',
                fontSize: '0.95rem',
                lineHeight: 1.65,
              }}
            >
              Thoughtful design and dependable construction, from the first plan to the final handover.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: 0,
            minHeight: 0,
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            gridColumn: { xs: '1', md: '2' },
            gridRow: { xs: '2', md: '1' },
          }}
        >
          <ContactUs onClose={onClose} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default ContactUsModal;
