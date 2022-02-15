import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import Main from '../../layouts/Main';
import Container from 'components/Container';

import {
  PromoGrid,
  Features,
  Categories,
  TopItems,
  TrendingItems,
  Newsletter,
  Partners,
} from './components';

const IndexView = () => {
  return (
    <Main>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <PromoGrid />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Divider />
      <Container paddingBottom={'0 !important'}>
        <Typography variant={'h4'} fontWeight={700} align={'center'}>
          The better way to shop with our online
          <br />
          e-commerce website
        </Typography>
      </Container>
      <Container>
        <Categories />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <TopItems />
        </Container>
      </Box>
      <Container>
        <TrendingItems />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Newsletter />
        </Container>
      </Box>
      <Container>
        <Partners />
      </Container>
    </Main>
  );
};

export default IndexView;
