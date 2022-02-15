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
            <Typography color="text.primary">Product Details</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Product Details
            </Typography>
            <Typography>
              Used to display details of a product with beautiful galleries.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/product-details/with-image-grid'}
          title={'With image grid'}
          path={'./src/blocks/productDetails/WithImageGrid/WithImageGrid.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/product-details/with-large-image'}
          title={'With large image'}
          path={
            './src/blocks/productDetails/WithLargeImage/WithLargeImage.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
