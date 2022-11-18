/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

/**
 *  Components Imports
 * */
import DemoCta from 'components/cta/DemoCta';
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const Hero = ({
  headerEyebrow = FillerContent.header,
  description = FillerContent.header,
  mainImage,
  primaryCta = 'Try Free',
  primaryCtaLink = '/join/',
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      paddingTop={isSmall ? 4 : 15}
      paddingBottom={isSmall ? 4 : 15}
      sx={{
        position: 'relative',
        textAlign: 'center',
        background: theme.palette.zesty.zestyOrangeRadialGradient,
      }}
    >
      <Container
        sx={{
          display: 'flex',
          gap: '3rem',
          flexDirection: isSmall ? 'column' : 'column',
        }}
      >
        <Box
          sx={{
            background: '',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            component={'h1'}
            variant="h4"
            color={
              isDarkMode
                ? theme.palette.zesty.zestyWhite
                : theme.palette.zesty.zestyOrange
            }
            gutterBottom
            sx={{ fontWeight: 'bold', fontSize: '20px' }}
          >
            {headerEyebrow || FillerContent.header}
          </Typography>
          <Box sx={{ px: isSmall ? 0 : 10 }}>
            <MuiMarkdown
              options={{
                overrides: {
                  h1: {
                    component: Typography,
                    props: {
                      component: 'h2',
                      variant: 'h3',
                      sx: {
                        fontWeight: 700,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                  h3: {
                    component: Typography,
                    props: {
                      component: 'h3',
                      variant: 'h4',
                      sx: {
                        fontWeight: 700,
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                  p: {
                    component: Typography,
                    props: {
                      my: 2.5,
                      component: 'p',
                      variant: 'h6',
                      sx: {
                        color: theme.palette.zesty.zestyZambezi,
                      },
                    },
                  },
                },
              }}
            >
              {description || FillerContent.description}
            </MuiMarkdown>
          </Box>
          <Box
            sx={{
              display: isSmall ? 'block' : 'flex',
              width: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <Box sx={{ width: isSmall ? '100%' : '10rem' }}>
              <DemoCta
                icon={false}
                sx={{
                  width: '10rem',
                }}
                target="_self"
                variant="contained"
                color="secondary"
                text={primaryCta}
                href={primaryCtaLink}
              />
            </Box>
          </Box>
        </Box>

        {mainImage && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <ZestyImage
              alt="hero image"
              loading="eager"
              style={{
                maxWidth: 800,
                width: '100%',
                height: 'auto',
                position: 'relative',
              }}
              width={800}
              src={mainImage}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Hero;
