/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';
import DemoCta from 'components/cta/DemoCta';

// Local Assets Imports
import s_curve from '../../../../public/assets/images/headless-cms/sCurve.svg';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';
import MuiMarkdown from 'markdown-to-jsx';
import ZestyImage from 'blocks/Image/ZestyImage';

const ImageWithContentsCta = ({
  mainImage,
  header,
  headerColor,
  primaryCtaText,
  secondaryCtaText,
  secondaryCtaLink,
  isSCurveBackground = false,
  sx = {},
}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Box sx={sx} component="section">
      <Container sx={{ position: 'relative' }}>
        {isSCurveBackground && (
          <ZestyImage
            style={{
              position: 'absolute',
              top: -100,
              right: -120,
              margin: 'auto',
              display: isSmall ? 'none' : 'block',
              zIndex: 0,
            }}
            loading="lazy"
            src={s_curve.src}
          />
        )}

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
            <ZestyImage
              width={568}
              height={388}
              style={{
                width: '100%',
                height: 'auto',
              }}
              loading="lazy"
              src={mainImage || FillerContent.photos[0].src}
              alt={header || 'Zesty.io'}
            />
          </Grid>
          <Grid
            sx={{
              mt: isSmall ? 4 : 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            sm={12}
            md={6}
          >
            <Box sx={{ml: isSmall ? 0 : 5}}>
              <MuiMarkdown
                options={{
                  overrides: {
                    h2: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h2',
                        sx: {
                          textAlign: isSmall ? 'center' : 'left',
                          background: headerColor ? headerColor : theme.palette.zesty.zestyOrangeLinear,
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          fontWeight: 'bold',
                        },
                      },
                    },
                    span: {
                      component: Typography,
                      props: {
                        variant: 'h4',
                        component: 'h4',
                        sx: {
                          ml: isSmall ? 1 : 0,
                          fontWeight: 'bold',
                          color: isDarkMode
                            ? theme.palette.common.white
                            : theme.palette.zesty.zestyZambezi,
                        },
                      },
                    },
                  },
                }}
              >
                {header || FillerContent.headerAndDescription}
              </MuiMarkdown>
              <Box
                sx={{
                  mt: 2,
                  display: 'flex',
                  flexDirection: isSmall ? 'column' : 'row',
                  alignItems: 'center',
                  gap: 1,
                  width: '100%',
                }}
              >
                <Box sx={{ width: isSmall ? '100%' : '10rem' }}>
                  <TryFreeButton
                    fullWidth={true}
                    text={primaryCtaText}
                    variant="contained"
                    component="a"
                  />
                </Box>
                {secondaryCtaText && (
                  <DemoCta
                    sx={{ color: theme.palette.zesty.zestyOrange }}
                    text={secondaryCtaText || FillerContent.cta}
                    href={secondaryCtaLink || FillerContent.href}
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ImageWithContentsCta;
