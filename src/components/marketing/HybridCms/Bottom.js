/**
 * MUI Imports
 * */

import React from 'react';
import {
  Box,
  Button,
  Card,
  cardClasses,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

/**
 * Helper Imports
 */

import * as helper from 'utils';

/**
 * Components Imports
 */
import TryFreeButton from 'components/cta/TryFreeButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Bottom = ({ content, theme, isMobile, FillerContent }) => {
  return (
    <Box
      marginY={10}
      paddingY={isMobile ? 0 : 0}
      sx={{
        position: 'relative',

        background: theme.palette.zesty.zestyLightRedOrange,
      }}
    >
      <Container>
        <Box
          paddingY={isMobile ? 2 : 8}
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row-reverse',
            gap: isMobile ? '1rem' : '4rem',
          }}
        >
          <div data-aos="fade-left">
            <Box sx={{ position: 'relative' }}>
              <Typography
                component={'h2'}
                variant={'p'}
                sx={{
                  fontSize: isMobile ? '.9rem' : '2.1rem',
                  color: theme.palette.secondary.darkCharcoal,
                  textAlign: isMobile ? 'center' : 'left',
                }}
                dangerouslySetInnerHTML={{
                  __html: helper.strColorChanger(
                    content.bottom_cta_header || FillerContent.header,
                    'Hybrid CMS',
                    theme.palette.zesty.zestyOrange,
                  ),
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: isMobile ? '6rem' : '10rem',
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  alignItems: 'center',
                  gap: '.5rem',
                  color: theme.palette.zesty.zestyTealDark,
                  width: '100%',
                }}
              >
                <Box sx={{ width: isMobile ? '100%' : '10rem' }}>
                  <TryFreeButton
                    fullWidth={true}
                    text={content.bottom_cta_primary}
                    variant="contained"
                    component="a"
                  />
                </Box>
                {/* <Button
                    sx={{ padding: '.5rem 4rem' }}
                    variant="contained"
                    color="secondary"
                    fullWidth={isMobile}
                  >
                    {content.bottom_cta_primary}
                  </Button> */}
                <Button
                  variant="text"
                  color="secondary"
                  fullWidth={isMobile}
                  sx={{ textDecoration: 'underline' }}
                >
                  {content.bottom_cta_secondary}
                  <ArrowRightAltIcon />
                </Button>
              </Box>
            </Box>
          </div>
          <div data-aos="fade-right">
            <Box paddingY={isMobile ? 15 : 0}>
              <img
                src={
                  content.bottom_cta_graphic.data[0].url ||
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

export default Bottom;
