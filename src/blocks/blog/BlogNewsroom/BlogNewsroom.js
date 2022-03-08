import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FeaturedArticles,
  FooterNewsletter,
  Hero,
  LatestStories,
  MostViewedArticles,
  PopularNews,
  SidebarArticles,
  SidebarNewsletter,
  Tags,
} from './components';

const BlogNewsroom = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Main colorInvert={true}>
      <Hero />
      <Container>
        <PopularNews />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <FeaturedArticles />
        </Container>
      </Box>
      <Container>
        <Grid container spacing={isMd ? 4 : 2}>
          <Grid item xs={12} md={8}>
            <LatestStories />
          </Grid>
          {isMd ? (
            <Grid item xs={12} md={4}>
              <SidebarArticles />
            </Grid>
          ) : null}
        </Grid>
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12} md={8}>
              <MostViewedArticles />
            </Grid>
            <Grid item xs={12} md={4}>
              <SidebarNewsletter />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth={800}>
        <Tags />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <FooterNewsletter />
      </Container>
    </Main>
  );
};

export default BlogNewsroom;
