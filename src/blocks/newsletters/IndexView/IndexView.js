/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import Fluid from 'layouts/Fluid';
import Container from 'components/Container';
import ResizableFrame from 'components/ResizableFrame';

const IndexView = () => {
  return (
    <Fluid>
      <Box bgcolor={'alternate.main'}>
        <Container maxWidth={1500} paddingBottom={'16px !important'}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/blocks">
              Components
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/blocks#js--blocks__index-section--marketing"
            >
              Marketing
            </Link>
            <Typography color="text.primary">Newsletters</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Newsletters
            </Typography>
            <Typography>
              Get your visitors and followers to subscribe or signup to your
              mailing list.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/newsletters/newsletter-with-card'}
          title={'Newsletter section with card'}
          path={
            './src/blocks/newsletters/NewsletterWithCard/NewsletterWithCard.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/newsletters/newsletter-with-image'}
          title={'Newsletter section with image'}
          path={
            './src/blocks/newsletters/NewsletterWithImage/NewsletterWithImage.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/newsletters/with-dark-background'}
          title={'With dark background'}
          path={
            './src/blocks/newsletters/WithDarkBackground/WithDarkBackground.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
