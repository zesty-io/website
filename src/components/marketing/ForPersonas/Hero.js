/**
 * React Imports
 */

import React from 'react';

/**
 * MUI Imports
 */
import { Box, Typography, Grid } from '@mui/material';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';
import { useTheme } from '@mui/material/styles';
import Container from 'components/Container';
import FillerContent from 'components/globals/FillerContent';

const SimpleHeroWithImageAndCtaButtons = ({
  mainTitle,
  description,
  cta_left,
  mainImage,
}) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        background: theme.palette.zesty.zestyBackgroundOrangeGradient,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  component={'h1'}
                  variant="p"
                  color={
                    isDarkMode
                      ? theme.palette.zesty.zestyWhite
                      : theme.palette.zesty.zestyOrange
                  }
                  gutterBottom
                  sx={{ fontWeight: 400, fontSize: '20px' }}
                >
                  {mainTitle || FillerContent.header}
                </Typography>
                <MuiMarkdown
                  options={{
                    overrides: {
                      h1: {
                        component: Typography,
                        props: {
                          component: 'h1',
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
                            color: theme.palette.text.secondary,
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
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              >
                <TryFreeButton
                  text={cta_left || FillerContent.cta}
                  variant="contained"
                  size="large"
                  color="secondary"
                ></TryFreeButton>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
            md={6}
          >
            <ZestyImage
              alt="hero image"
              loading="eager"
              style={{
                width: '100%',
                maxWidth: '600',
                height: 'auto',
                objectFit: 'contain',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              }}
              width={600}
              height={500}
              src={mainImage}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SimpleHeroWithImageAndCtaButtons;
