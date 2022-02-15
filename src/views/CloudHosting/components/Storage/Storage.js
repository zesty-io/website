/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from 'components/Container';

const Storage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box bgcolor={'#0c133e'}>
      <Container paddingY={'0 !important'}>
        <Grid container>
          <Grid
            item
            container
            alignItems={'center'}
            xs={12}
            md={6}
            data-aos="fade-up"
          >
            <Container paddingLeft={'0 !important'}>
              <Box>
                <Box marginBottom={2}>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'medium',
                      color: 'common.white',
                    }}
                  >
                    COMPLETE CONTROL
                  </Typography>
                </Box>
                <Box marginBottom={2}>
                  <Typography
                    component={'span'}
                    variant="h4"
                    sx={{ fontWeight: 700, color: 'common.white' }}
                  >
                    Monitor and analyze usage patterns.
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ color: 'common.white' }}
                >
                  Keep track of what's happening with your data, change
                  permissions, and run reports against your data anywhere in the
                  world.
                  <br />
                  Forward thinking businesses use our cloud backup service to
                  ensure data reliability and safety.
                </Typography>
              </Box>
            </Container>
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={6}>
              <Box
                component={LazyLoadImage}
                effect="blur"
                src="https://assets.maccarianagency.com/backgrounds/img49.png"
                alt="Image Description"
                width={1}
                height={1}
              />
            </Grid>
          ) : null}
        </Grid>
      </Container>
    </Box>
  );
};

export default Storage;
