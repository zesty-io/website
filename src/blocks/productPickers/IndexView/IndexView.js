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
            <Typography color="text.primary">Product Pickers</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Product Pickers
            </Typography>
            <Typography>
              Common eCommerce product controls like color picker, size picker,
              etc.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/product-pickers/color-picker'}
          title={'Color picker'}
          path={'./src/blocks/productPickers/ColorPicker/ColorPicker.js|ts'}
          iframeStyles={{ minHeight: 134 }}
        />
        <ResizableFrame
          src={'/blocks/product-pickers/quantity-picker'}
          title={'Quantity picker'}
          path={
            './src/blocks/productPickers/QuantityPicker/QuantityPicker.js|ts'
          }
          iframeStyles={{ minHeight: 134 }}
        />
        <ResizableFrame
          src={'/blocks/product-pickers/size-picker'}
          title={'Size picker'}
          path={'./src/blocks/productPickers/SizePicker/SizePicker.js|ts'}
          iframeStyles={{ minHeight: 134 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
