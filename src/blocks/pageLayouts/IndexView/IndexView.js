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
              href="/blocks#js--blocks__index-section--application-ui"
            >
              Application UI
            </Link>
            <Typography color="text.primary">Page Layouts</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Page Layouts
            </Typography>
            <Typography>
              Provides common application layout shells to get your app up and
              running in no time.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/page-layouts/with-fixed-sidebar'}
          title={'With fixed sidebar'}
          path={
            './src/blocks/pageLayouts/WithFixedSidebar/WithFixedSidebar.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/page-layouts/with-three-columns'}
          title={'Shell with three columns'}
          path={
            './src/blocks/pageLayouts/WithThreeColumns/WithThreeColumns.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/page-layouts/with-toggled-sidebar'}
          title={'With toggled sidebar'}
          path={
            './src/blocks/pageLayouts/WithToggledSidebar/WithToggledSidebar.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/page-layouts/with-fluid-layout-and-no-sidebar'}
          title={'With fluid layout and without sidebar'}
          path={
            './src/blocks/pageLayouts/WithFluidLayoutAndNoSidebar/WithFluidLayoutAndNoSidebar.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/page-layouts/with-narrow-layout-and-no-sidebar'}
          title={'With narrow layout and without sidebar'}
          path={
            './src/blocks/pageLayouts/WithNarrowLayoutAndNoSidebar/WithNarrowLayoutAndNoSidebar.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
