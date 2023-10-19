import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

import {
  Headline,
  Image,
  Details,
  Reviews,
  SimilarProducts,
  Newsletter,
} from './components';

import Main from '../../layouts/Main';
import Container from 'components/Container';

const mock = {
  images: [
    'https://assets.maccarianagency.com/backgrounds/img57.jpg',
    'https://assets.maccarianagency.com/backgrounds/img56.jpg',
    'https://assets.maccarianagency.com/backgrounds/img58.jpg',
  ],
  title: 'Sport shoes',
  description:
    'The finishes of this product are very realistic with a double stitching on the neck, sleeves and bottom, and with a banded neck cleaning that allows optimal support in all situations.',
  price: '$59.99',
  reviewScore: 4,
  reviewCount: 519,
};
const ProductOverview = () => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container paddingY={{ xs: 2, sm: 2.5 }}>
          <Headline />
        </Container>
      </Box>
      <Container>
        <Box>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={7}>
              <Image images={mock.images} title={mock.title} />
            </Grid>
            <Grid item xs={12} md={5}>
              <Details
                title={mock.title}
                description={mock.description}
                price={mock.price}
                reviewCount={mock.reviewCount}
                reviewScore={mock.reviewScore}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container paddingY={4} id="reviews">
        <Divider />
      </Container>
      <Container>
        <Reviews />
      </Container>
      <Container paddingY={4}>
        <Divider />
      </Container>
      <Container>
        <SimilarProducts />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
    </Main>
  );
};

export default ProductOverview;
