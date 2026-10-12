import React from 'react';
import {
  Box,
  Dialog,
  Typography,
} from '@mui/material';
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
          background: 'rgba(20, 20, 18, 0.78)',
          backdropFilter: 'blur(5px)',
        }
      }}
      PaperProps={{
        sx: {
          width: 'calc(100% - 24px)',
          height: { xs: 'calc(100dvh - 24px)', md: 'min(82dvh, 700px)' },
          maxWidth: { md: '900px' },
          maxHeight: 'calc(100% - 24px)',
          m: { xs: 1.5, sm: 2 },
          overflow: 'hidden',
          background: homeTheme.colors.backgroundNeutral,
          border: `1px solid ${homeTheme.colors.divider}`,
          borderRadius: { xs: '10px', sm: '16px' },
          boxShadow: '0 28px 90px rgba(0, 0, 0, 0.34)',
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          width: '100%',
          height: '100%',
          minHeight: 0,
          gridTemplateRows: 'minmax(0, 1fr)',
          gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '0.8fr 1.2fr' },
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'relative',
            minHeight: 0,
            overflow: 'hidden',
            color: homeTheme.colors.backgroundNeutral,
            gridColumn: { xs: '1', md: '1' },
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
              objectPosition: 'center',
            }}
          />
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              inset: 0,
              background: {
                xs: 'linear-gradient(0deg, rgba(20, 20, 18, 0.78), rgba(20, 20, 18, 0.06) 85%)',
                md: 'linear-gradient(0deg, rgba(20, 20, 18, 0.78), rgba(20, 20, 18, 0.02) 80%)',
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: { xs: 18, md: 32 },
              bottom: { xs: 16, md: 32 },
              left: { xs: 18, md: 32 },
              zIndex: 1,
            }}
          >
            <Typography
              sx={{
                color: '#e7c77d',
                fontSize: '0.68rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                lineHeight: 1.4,
                textTransform: 'uppercase',
              }}
            >
              Gruham&apos;s Construction · Bengaluru
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 0.8,
                maxWidth: 440,
                color: '#fffdf9',
                fontFamily: homeTheme.fonts.heading,
                fontSize: { xs: '1.45rem', md: '2.4rem' },
                lineHeight: 1.08,
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
            gridRow: '1',
          }}
        >
          <ContactUs onClose={onClose} />
        </Box>
      </Box>
    </Dialog>
  );
};

export default ContactUsModal;
