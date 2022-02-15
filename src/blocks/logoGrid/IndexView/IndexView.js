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
            <Typography color="text.primary">Logo grid</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Logo grid
            </Typography>
            <Typography>
              Displays a grid of your customers' or sponsors' logo.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/logo-grid/logo-grid-simple-centered'}
          title={'Logo grid simple centered'}
          path={
            './src/blocks/logoGrid/LogoGridSimpleCentered/LogoGridSimpleCentered.js|ts'
          }
          iframeStyles={{ minHeight: 295 }}
        />
        <ResizableFrame
          src={'/blocks/logo-grid/logo-grid-with-boxed-logos'}
          title={'With boxed logos'}
          path={'./src/blocks/logoGrid/WithBoxedLogos/WithBoxedLogos.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/logo-grid/logo-grid-with-left-aligned-description-box'}
          title={'Logos with 2x grid and description box aligned left'}
          path={
            './src/blocks/logoGrid/WithLeftAlignedDescriptionBox/WithLeftAlignedDescriptionBox.js|ts'
          }
          iframeStyles={{ minHeight: 243 }}
        />
        <ResizableFrame
          src={
            '/blocks/logo-grid/logo-grid-with-swiper-and-brand-background-color'
          }
          title={'With brand background color'}
          path={
            './src/blocks/logoGrid/WithSwiperAndBrandBackgroundColor/WithSwiperAndBrandBackgroundColor.js|ts'
          }
          iframeStyles={{ minHeight: 109 }}
        />
        <ResizableFrame
          src={
            '/blocks/logo-grid/logo-grid-with-left-aligned-description-box-and-boxed-logos'
          }
          title={'With 2x grid of description area and boxed logos'}
          path={
            './src/blocks/logoGrid/WithLeftAlignedDescriptionBoxAndBoxedLogos/WithLeftAlignedDescriptionBoxAndBoxedLogos.js|ts'
          }
          iframeStyles={{ minHeight: 370 }}
        />
        <ResizableFrame
          src={
            '/blocks/logo-grid/logo-grid-with-dark-background-and-simple-description-box'
          }
          title={'With dark background and simple description area'}
          path={
            './src/blocks/logoGrid/WithDarkBackgroundAndSimpleDescriptionBox/WithDarkBackgroundAndSimpleDescriptionBox.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
