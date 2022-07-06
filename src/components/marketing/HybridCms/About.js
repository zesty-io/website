/**
 * MUI Imports
 * */
import React from 'react';
import { Grid } from '@mui/material';

/**
 * Static Imports
 */
import headlessCmsBg from '../../../../public/assets/images/dxp_headless_bg.svg';

/**
 * Components Imports
 */
import MuiMarkdown from 'mui-markdown';

import { Box, Container, Typography } from '@mui/material';

const About = ({ content, isMobile, theme, FillerContent }) => {
  const swooshBg = headlessCmsBg.src;
  return (
    <Box
      paddingY={isMobile ? 0 : 0}
      sx={{ position: 'relative', background: theme.palette.zesty.zestyAzure }}
    >
      <Box
        sx={{
          zIndex: '10',
          position: 'absolute',
          right: 0,
          bottom: '-30vw',
          display: isMobile ? 'none' : 'flex',
        }}
      >
        <img src={swooshBg || FillerContent.dashboard_image} alt="bg" />
      </Box>
      <Container>
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
            <Box data-aos="fade-left">
              <Box sx={{ position: 'relative' }}>
                <MuiMarkdown
                  overrides={{
                    span: {
                      component: Typography,
                      props: {
                        component: 'span',
                        variant: 'h6',
                        sx: {
                          color: theme.palette.zesty.zestyOrange,
                        },
                      },
                    },
                    h2: {
                      component: Typography,
                      props: {
                        component: 'h2',
                        variant: 'h4',
                        sx: {
                          textAlign: isMobile ? 'center' : 'left',
                          color: theme.palette.zesty.zestyOrange,
                          fontWeight: 'bold',
                        },
                      },
                    },
                    p: {
                      component: Typography,
                      props: {
                        component: 'p',
                        variant: 'h6',
                        sx: {
                          textAlign: isMobile ? 'center' : 'left',
                          mt: 2,
                          color: theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                  }}
                >
                  {content.about_hybrid_cms || FillerContent.header}
                </MuiMarkdown>
              </Box>
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
            <Box data-aos="fade-right">
              <Box>
                <Box
                  component="img"
                  src={
                    content.about_hybrid_cms_graphic.data[0].url ||
                    FillerContent.photos[0].src
                  }
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
