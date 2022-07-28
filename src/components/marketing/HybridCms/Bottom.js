/**
 * MUI Imports
 * */

import React from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';

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
      mb={10}
      paddingY={isMobile ? 5 : 10}
      sx={{
        position: 'relative',

        background: theme.palette.zesty.zestyLightRedOrange,
      }}
    >
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
            <Box data-aos="fade-right">
              <Box>
                <Box
                  component="img"
                  src={
                    content.bottom_cta_graphic.data[0].url ||
                    FillerContent.photos[0].src
                  }
                  sx={{
                    width: '100%',
                    maxWidth: 579,
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid
            sx={{
              mt: isMobile ? 4 : 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            item
            sm={12}
            md={6}
          >
            <Box data-aos="fade-left">
              <Box>
                <Typography
                  component={'h2'}
                  variant={'p'}
                  sx={{
                    fontSize: isMobile ? '1.5rem' : '2.1rem',
                    color: theme.palette.zesty.zestyZambezi,
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
                    mt: 2,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: 1,
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

                  <Button
                    component="a"
                    href="/demos"
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
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Bottom;
