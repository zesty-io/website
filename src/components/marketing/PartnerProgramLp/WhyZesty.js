import React from 'react';
/**
 * MUI Imports
 */
import { Box, Typography, Grid, Container } from '@mui/material';
import MuiMarkdown from 'markdown-to-jsx';

const WhyZesty = ({
  theme,
  //  isMobile, isDarkMode,
  content,
  FillerContent,
}) => {
  return (
    <Box
      component="section"
      sx={{ background: theme.palette.zesty.zestyWhite }}
    >
      <Container sx={{ py: 15 }}>
        <Grid container spacing={2}>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            sm={12}
            md={6}
          >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Box
                sx={{ width: '100%' }}
                component="img"
                src={
                  content.why_zesty_graphic?.data[0].url ||
                  FillerContent.photos[0].src
                }
                alt="why zesty graphic"
              />
            </Box>
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            sm={12}
            md={6}
          >
            <Box>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h4',
                        sx: {
                          fontWeight: 'bold',
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          color: theme.palette.zesty.zestyZambezi,
                          lineHeight: 1.2,
                          mt: 2,
                        },
                      },
                    },
                  },
                }}
              >
                {content.why_zesty || FillerContent.description}
              </MuiMarkdown>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyZesty;
