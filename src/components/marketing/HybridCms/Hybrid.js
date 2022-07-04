/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Container, Typography } from '@mui/material';

/**
 * Helper Imports
 */

import * as helper from 'utils';

const Hybrid = ({ content, theme, isMobile, FillerContent }) => {
  return (
    <Box paddingY={isMobile ? 4 : 0} sx={{ position: 'relative' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div data-aos="zoom-in">
          <Typography
            sx={{
              fontSize: isMobile ? '.9rem' : '1.3rem',
              color: theme.palette.secondary.darkCharcoal,
              textAlign: isMobile ? 'center' : 'center',
            }}
            dangerouslySetInnerHTML={{
              __html: helper.strColorChanger(
                content.hybrid_interface || FillerContent.description,
                'A Quick Look Into Zesty&rsquo;s Hybrid CMS Interface',
                theme.palette.zesty.zestyOrange,
              ),
            }}
          />
        </div>
        <div data-aos="fade-right">
          <Box
            paddingY={isMobile ? 1 : 0}
            sx={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              zIndex: '100',
            }}
          >
            <img
              src={
                content.hybrid_interface_graphic?.data[0]?.url ||
                FillerContent.photos[0].src
              }
              width={isMobile ? 350 : 600}
            />
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Hybrid;
