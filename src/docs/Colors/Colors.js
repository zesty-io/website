/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import FixedLayout from 'layouts/Fixed';
import Container from 'components/Container';
import { light as lightPalette, dark as darkPalette } from 'theme/palette';

const Colors = () => {
  const theme = useTheme();

  const palette = theme.palette.mode === 'dark' ? darkPalette : lightPalette;
  console.log(palette.background);

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
            Colors
          </Typography>
          <Typography
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The MUI <code>palette</code> object declaration is{' '}
            <code>src/theme/palette.js</code>
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Primary
              </Typography>
              <Grid container spacing={2}>
                {[
                  palette.primary.light,
                  palette.primary.main,
                  palette.primary.dark,
                ].map((color) => (
                  <Grid item xs={12} sm={4} key={color}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Secondary
              </Typography>
              <Grid container spacing={2}>
                {[
                  palette.secondary.light,
                  palette.secondary.main,
                  palette.secondary.dark,
                ].map((color) => (
                  <Grid item xs={12} sm={4} key={color}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Alternate
              </Typography>
              <Grid container spacing={2}>
                {[palette.alternate.main, palette.alternate.dark].map(
                  (color) => (
                    <Grid item xs={12} sm={6} key={color}>
                      <Box component={Card} boxShadow={3} borderRadius={2}>
                        <Box width={1} height={200} bgcolor={color} />
                        <CardContent>{color}</CardContent>
                      </Box>
                    </Grid>
                  ),
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 700,
                }}
              >
                Background
              </Typography>
              <Grid container spacing={2}>
                {[
                  palette.background.paper,
                  palette.background.default,
                  palette.background.level1,
                  palette.background.level2,
                ].map((color, i) => (
                  <Grid item xs={12} sm={3} key={i}>
                    <Box component={Card} boxShadow={3} borderRadius={2}>
                      <Box width={1} height={200} bgcolor={color} />
                      <CardContent>{color}</CardContent>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </FixedLayout>
  );
};

export default Colors;
