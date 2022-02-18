import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Contact,
  Gallery,
  Hero,
  Partners,
  Story,
  Team,
  WhoWeAre,
  Application,
} from './components';
import { Content } from 'views/BlogArticle/components';

const AboutPage = (content) => {
  return (
    <Main colorInvert={true}>
      <Hero title={content.title} subtitle ={content.hero_content} hero_image={content.hero_image.data[0].url} />
      <Container>
        <Story content={content.page_content} section_image={content.section_image.data[0].url}/>
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Partners />
        </Container>
      </Box>
      <Contact />
      <Container>
        <Gallery />
      </Container>
      <Container maxWidth={800} paddingTop={'0 !important'}>
        <Application />
      </Container>
    </Main>
  );
};

export default AboutPage;
