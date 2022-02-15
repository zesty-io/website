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
            <Typography color="text.primary">Testimonials</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Testimonials
            </Typography>
            <Typography>
              Rave about customer testimonials of your services and products.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/testimonials/with-highlighted-card'}
          title={'With highlited card'}
          path={
            './src/blocks/team/WithHighlightedCard/WithHighlightedCard.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/testimonials/with-large-image'}
          title={'With large image'}
          path={'./src/blocks/team/WithLargeImage/WithLargeImage.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/testimonials/reviews-with-bordered-grid-layout'}
          title={'Review boxes with bordered grid layout'}
          path={
            './src/blocks/team/ReviewsWithBorderedGridLayout/ReviewsWithBorderedGridLayout.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/testimonials/with-brand-bg-color'}
          title={'With brand background color'}
          path={'./src/blocks/team/WithBrandBgColor/WithBrandBgColor.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/testimonials/with-company-logo'}
          title={'With company logo'}
          path={'./src/blocks/team/WithCompanyLogo/WithCompanyLogo.js|ts'}
          iframeStyles={{ minHeight: 314 }}
        />
        <ResizableFrame
          src={'/blocks/testimonials/reviews-with-simple-boxes'}
          title={'Reviews with simple boxes'}
          path={
            './src/blocks/team/ReviewsWithSimpleBoxes/ReviewsWithSimpleBoxes.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/testimonials/with-outlined-cards'}
          title={'With outlined cards'}
          path={'./src/blocks/team/WithOutlinedCards/WithOutlinedCards.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
