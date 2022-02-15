/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import Container from 'components/Container';

const mock = [
  {
    title: 300,
    subtitle:
      '300 + component compositions, which will help you to build any page easily.',
    suffix: '+',
  },
  {
    title: 45,
    subtitle:
      '45 + landing and supported pages to Build a professional website.',
    suffix: '+',
  },
  {
    title: 99,
    subtitle: '99% of our customers rated 5-star our themes over 5 years.',
    suffix: '%',
  },
];

const WithCountUpNumbersAndCoverImage = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              The powerful and flexible theme for all kinds of businesses
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Whether you're creating a subscription service, an on-demand
              marketplace, an e-commerce store, or a portfolio showcase,
              theFront helps you create the best possible product for your
              users.
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WithCountUpNumbersAndCoverImage;
