import React, { useState } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiMarkdown from 'markdown-to-jsx';

const FAQs = ({ faqs, title, subtitle }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!faqs) return null;
  return (
    <Box
      sx={{
        width: '100%',
        margin: 0,
        padding: 0,
        py: 10,
        backgroundColor: '#f9fafb',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth={'lg'}>
        <Grid
          container
          direction={{ xs: 'column', md: 'row' }}
          alignItems={{ xs: 'flex-start', md: 'center' }}
          mb={5}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Typography
              sx={{
                fontSize: { sm: '44px', xs: '36px' },
                fontWeight: 'bold',
                color: theme.palette.zesty.zestyDarkText,
                textAlign: 'left',
                lineHeight: '1.2',
                mb: 2,
              }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={0} lg={2} />
          {subtitle === '' && subtitle && (
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                sx={{
                  fontSize: { sm: '20px', xs: '18px' },
                  color: theme.palette.zesty.zestyZambezi,
                }}
              >
                {subtitle}
              </Typography>
            </Grid>
          )}
        </Grid>
        <Box sx={{ borderTop: '2.64px solid #181A1D' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index + 1}a-content`}
                id={`panel${index + 1}a-header`}
                sx={{ height: '80px', minHeight: '80px' }}
              >
                <Typography
                  sx={{ fontSize: { xs: '18px', sm: '20px', md: '24px' } }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MuiMarkdown
                  options={{
                    overrides: {
                      p: {
                        component: Typography,
                        props: {
                          style: {
                            padding: 0,
                            color: theme.palette.zesty.zestyZambezi,
                          },
                        },
                      },
                    },
                  }}
                >
                  {faq.answer}
                </MuiMarkdown>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQs;
