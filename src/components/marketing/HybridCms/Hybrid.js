/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MuiMarkdown from 'mui-markdown';
import TryFreeButton from 'components/cta/TryFreeButton';

const Hybrid = ({ content, theme, isMobile, FillerContent }) => {
  return (
    <Box paddingY={isMobile ? 4 : 15} sx={{ position: 'relative' }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ mt: 10 }} data-aos="zoom-in">
          <MuiMarkdown
            overrides={{
              h2: {
                component: Typography,
                props: {
                  component: 'h2',
                  variant: 'h4',
                  sx: {
                    textAlign: 'center',
                    color: theme.palette.zesty.zestyZambezi,
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
                    textAlign: 'center',
                    mt: 2,
                    color: theme.palette.zesty.zestyZambezi,
                  },
                },
              },
            }}
          >
            {content.hybrid_interface || FillerContent.header}
          </MuiMarkdown>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <TryFreeButton
              text={content.hybrid_interface_cta_text}
              variant="contained"
            />
          </Box>
        </Box>
        <Box data-aos="fade-right">
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
            <Box
              component="img"
              src={
                content.hybrid_interface_graphic?.data[0]?.url ||
                FillerContent.photos[0].src
              }
              sx={{
                mt: 4,
                width: '100%',
                maxWidth: 600,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hybrid;
