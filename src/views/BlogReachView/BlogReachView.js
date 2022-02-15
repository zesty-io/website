import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  SearchBox,
  FeaturedArticle,
  LastStories,
  CaseStudies,
  PopularArticles,
  Newsletter,
} from './components';

const BlogReachView = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <Hero />
        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox />
        </Container>
        <Container>
          <FeaturedArticle />
        </Container>
        <Container paddingTop={'0 !important'}>
          <LastStories />
        </Container>
        <Container paddingTop={'0 !important'}>
          <CaseStudies />
        </Container>
        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
          <Container paddingTop={'0 !important'}>
            <PopularArticles />
          </Container>
        </Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default BlogReachView;
