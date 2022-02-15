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
            <Typography color="text.primary">Reviews</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Reviews
            </Typography>
            <Typography>
              Used to display the customer reviews for a product.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/product-reviews/review-dialog'}
          title={'Review dialog'}
          path={'./src/blocks/productReviews/ReviewDialog/ReviewDialog.js|ts'}
          iframeStyles={{ minHeight: 800 }}
        />
        <ResizableFrame
          src={'/blocks/product-reviews/review-overview'}
          title={'Review overview'}
          path={
            './src/blocks/productReviews/ReviewOverview/ReviewOverview.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/product-reviews/review-quick-overview'}
          title={'Review quick overview'}
          path={
            './src/blocks/productReviews/ReviewQuickOverview/ReviewQuickOverview.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
