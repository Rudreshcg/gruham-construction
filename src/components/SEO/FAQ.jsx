import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Container 
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What construction services does Gruham's offer in Bangalore?",
      answer: "Gruham's Construction offers comprehensive construction services in Bangalore including residential construction, commercial building projects, interior design, renovation services, architectural planning, and project management. We specialize in luxury homes, office buildings, and modern residential complexes."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Construction project timelines vary based on size and complexity. A typical residential project takes 6-12 months, while commercial projects may take 12-24 months. We provide detailed project timelines during the planning phase and keep clients updated throughout the construction process."
    },
    {
      question: "Do you provide construction quotes and consultations?",
      answer: "Yes, we offer free construction consultations and detailed quotes for all projects. Our team will visit your site, discuss your requirements, and provide a comprehensive estimate including timeline, materials, and costs. Contact us to schedule your free consultation."
    },
    {
      question: "What areas in Bangalore do you serve?",
      answer: "We serve all major areas in Bangalore including Whitefield, Electronic City, Koramangala, Indiranagar, HSR Layout, Sarjapur, and surrounding areas. Our construction services are available throughout Bangalore and nearby regions."
    },
    {
      question: "Do you handle all necessary permits and approvals?",
      answer: "Yes, we handle all construction permits, approvals, and regulatory compliance on behalf of our clients. Our team is experienced with BBMP regulations, building codes, and all necessary documentation required for construction projects in Bangalore."
    },
    {
      question: "What makes Gruham's Construction different from other contractors?",
      answer: "Gruham's Construction stands out with our commitment to quality, transparent communication, and timely project delivery. We use premium materials, employ skilled craftsmen, and provide comprehensive project management. Our focus on client satisfaction and attention to detail sets us apart in the Bangalore construction market."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h3" 
        component="h2"
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          color: '#2c3e50',
          fontWeight: 700
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Typography 
        variant="h6" 
        sx={{ 
          textAlign: 'center', 
          mb: 4,
          color: '#666',
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        Common questions about our construction services in Bangalore
      </Typography>
      
      <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            sx={{
              mb: 2,
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              borderRadius: '8px !important',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: '8px 8px 0 0',
                '&.Mui-expanded': {
                  backgroundColor: '#bfa974',
                  color: 'white',
                },
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0',
                },
              }}
            >
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  fontSize: '1.1rem'
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 3 }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  lineHeight: 1.6,
                  color: '#555'
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FAQ;
