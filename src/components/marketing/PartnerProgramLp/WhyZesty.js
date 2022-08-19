import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/**
 * MUI Imports
 */
import { Box, Typography, Button, Grid } from '@mui/material';
import Divider from '@mui/material/Divider';
import Container from 'blocks/container/Container';
import MuiMarkdown from 'mui-markdown';
import { useTheme, alpha } from '@mui/material/styles';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const WhyZesty = ({ theme, isMobile, isDarkMode, content, FillerContent }) => {
  return (
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
              overrides={{
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
              }}
            >
              {content.why_zesty || FillerContent.description}
            </MuiMarkdown>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyZesty;
