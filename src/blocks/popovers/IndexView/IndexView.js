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
            <Typography color="text.primary">Popovers</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Popovers
            </Typography>
            <Typography>
              A Popover can be used to display some content on top of another.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/popovers/simple'}
          title={'Simple'}
          path={'./src/blocks/popovers/Simple/Simple.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/popovers/stacked-with-footer-actions'}
          title={'Stacked with footer actions'}
          path={
            './src/blocks/popovers/StackedWithFooterActions/StackedWithFooterActions.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/popovers/with-recent-posts'}
          title={'With recent posts links'}
          path={'./src/blocks/popovers/WithRecentPosts/WithRecentPosts.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/popovers/with-two-column-grid'}
          title={'With two-column grid'}
          path={
            './src/blocks/popovers/WithTwoColumnGrid/WithTwoColumnGrid.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
