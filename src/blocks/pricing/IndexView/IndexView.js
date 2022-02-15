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
            <Typography color="text.primary">Pricing</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Pricing
            </Typography>
            <Typography>
              Used to display the prices of your software, product, or service.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/pricing/with-highlighting-and-primary-color'}
          title={
            'Pricing cards with highlighted option and primary colored check mark features'
          }
          path={
            './src/blocks/pricing/WithHighlightingAndPrimaryColor/WithHighlightingAndPrimaryColor.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/with-two-column-and-mixed-height'}
          title={'2 column pricing cards with mixed height'}
          path={
            './src/blocks/pricing/WithTwoColumnAndMixedHeight/WithTwoColumnAndMixedHeight.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/with-simple-bordered-cards'}
          title={'Pricing options with simple bordered cards'}
          path={
            './src/blocks/pricing/WithSimpleBorderedCards/WithSimpleBorderedCards.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/single-choice-option'}
          title={'Single choice pricing option'}
          path={
            './src/blocks/pricing/SingleChoiceOption/SingleChoiceOption.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/with-highlighting-and-secondary-color'}
          title={
            'Pricing cards with highlighted option and secondary colored check mark features'
          }
          path={
            './src/blocks/pricing/WithHighlightingAndSecondaryColor/WithHighlightingAndSecondaryColor.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/with-option-toggler-button'}
          title={'With toggler button'}
          path={
            './src/blocks/pricing/WithOptionTogglerButton/WithOptionTogglerButton.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/pricing/compare-table'}
          title={'Pricing compare table'}
          path={'./src/blocks/pricing/CompareTable/CompareTable.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
