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
            <Typography color="text.primary">Stats</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Stats
            </Typography>
            <Typography>
              Displays usage related data, statistics or limits.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/stats/with-bordered-cards-and-brand-color'}
          title={'With bordered card and brand color'}
          path={
            './src/blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/stats/with-abstract-visual-representation'}
          title={'With abtract visual representation'}
          path={
            './src/blocks/stats/WithAbstractVisualRepresentation/WithAbstractVisualRepresentation.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/stats/client-satisfaction'}
          title={'Client satisfaction'}
          path={
            './src/blocks/stats/ClientSatisfaction/ClientSatisfaction.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/stats/with-count-up-numbers-and-cover-image'}
          title={'With count-up numbers and cover image'}
          path={
            './src/blocks/stats/WithCountUpNumbersAndCoverImage/WithCountUpNumbersAndCoverImage.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/stats/with-count-up-numbers-and-map'}
          title={'With count-up numbers and map'}
          path={
            './src/blocks/stats/WithCountUpNumbersAndMap/WithCountUpNumbersAndMap.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/stats/stats-with-card'}
          title={'Stats representation with simple card'}
          path={'./src/blocks/stats/StatsWithCard/StatsWithCard.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
