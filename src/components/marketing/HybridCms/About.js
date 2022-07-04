/**
 * MUI Imports
 * */
import React from 'react';

/**
 * Static Imports
 */
import headlessCmsBg from '../../../../public/assets/images/dxp_headless_bg.svg';

/**
 * Helper Imports
 */

import * as helper from 'utils';

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
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                sx={{
                  fontSize: isMobile ? '.9rem' : '1.3rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'left' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    content.about_hybrid_cms || FillerContent.header,
                    'Hybrid CMS',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
              {/* {about_hybrid_cms} */}
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 1 : 0}>
              <img
                src={
                  content.about_hybrid_cms_graphic.data[0].url ||
                  FillerContent.photos[0].src
                }
                width={isMobile ? 350 : 600}
              />
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
