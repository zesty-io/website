/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';
import LayoutFluidIllustration from 'svg/illustrations/LayoutFluid';
import LayoutFixedIllustration from 'svg/illustrations/LayoutFixed';
import LayoutMainIllustration from 'svg/illustrations/LayoutMain';

const Layouts = () => {
  const theme = useTheme();
  return (
    <FixedLayout>
      <Container>
        <Box marginBottom={4}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Layouts
          </Typography>
          <Typography
            gutterBottom
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The layouts are declared inside <code>src/layouts/</code> folder.
          </Typography>
          <Typography gutterBottom>
            There 3 types of layouts used in the theme:
          </Typography>
          <ul>
            <Box component={'li'} marginY={1 / 2} marginX={0}>
              <Typography
                sx={{
                  '& code': {
                    background: colors.yellow[400],
                    color: theme.palette.common.black,
                  },
                }}
              >
                Main layout: <code>src/layouts/Main</code>
              </Typography>
            </Box>
            <Box component={'li'} marginY={1 / 2} marginX={0}>
              <Typography
                sx={{
                  '& code': {
                    background: colors.yellow[400],
                    color: theme.palette.common.black,
                  },
                }}
              >
                Fluid layout: <code>src/layouts/Fluid</code>
              </Typography>
            </Box>
            <Box component={'li'} marginY={1 / 2} marginX={0}>
              <Typography
                sx={{
                  '& code': {
                    background: colors.yellow[400],
                    color: theme.palette.common.black,
                  },
                }}
              >
                Fixed layout: <code>src/layouts/Fixed</code>
              </Typography>
            </Box>
          </ul>
        </Box>
        <Box>
          <Typography
            gutterBottom
            variant={'h4'}
            sx={{
              fontWeight: 700,
            }}
          >
            Examples
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box display={'flex'} flexDirection={'row'}>
                <Box
                  marginRight={1}
                  color={alpha(theme.palette.primary.main, 0.4)}
                >
                  <LayoutMainIllustration />
                </Box>
                <Box>
                  <Typography gutterBottom sx={{ fontWeight: 700 }}>
                    Main Layout
                  </Typography>
                  <Typography>
                    A usage example of the Fluid layout can be found{' '}
                    <Link
                      underline="hover"
                      href="/landing-software-company"
                      target={'_blank'}
                    >
                      here
                    </Link>
                    .
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display={'flex'} flexDirection={'row'}>
                <Box
                  marginRight={1}
                  color={alpha(theme.palette.primary.main, 0.4)}
                >
                  <LayoutFluidIllustration />
                </Box>
                <Box>
                  <Typography gutterBottom sx={{ fontWeight: 700 }}>
                    Fluid Layout
                  </Typography>
                  <Typography>
                    A usage example of the Fluid layout can be found{' '}
                    <Link
                      underline="hover"
                      href="/page-signup"
                      target={'_blank'}
                    >
                      here
                    </Link>
                    .
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box display={'flex'} flexDirection={'row'}>
                <Box
                  marginRight={1}
                  color={alpha(theme.palette.primary.main, 0.4)}
                >
                  <LayoutFixedIllustration />
                </Box>
                <Box>
                  <Typography gutterBottom sx={{ fontWeight: 700 }}>
                    Fixed Layout
                  </Typography>
                  <Typography>
                    A usage example of the Fluid layout can be found{' '}
                    <Link
                      underline="hover"
                      href="/docs/introduction"
                      target={'_blank'}
                    >
                      here
                    </Link>
                    .
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default Layouts;
