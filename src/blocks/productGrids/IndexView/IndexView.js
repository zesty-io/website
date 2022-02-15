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
              href="/blocks#js--blocks__index-section--e-commerce"
            >
              E-commerce
            </Link>
            <Typography color="text.primary">Product Grids</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Product Grids
            </Typography>
            <Typography>
              Great for presenting your products in an organized way.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/product-grids/with-cta-button'}
          title={'With CTA button'}
          path={'./src/blocks/productGrids/WithCtaButton/WithCtaButton.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/product-grids/minimally-designed'}
          title={'Grid with minimally designed articles'}
          path={
            './src/blocks/productGrids/MinimallyDesigned/MinimallyDesigned.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/product-grids/with-promo-badge'}
          title={'Items with promo badge'}
          path={'./src/blocks/productGrids/WithPromoBadge/WithPromoBadge.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
