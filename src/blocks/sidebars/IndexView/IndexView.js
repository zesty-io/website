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
            <Typography color="text.primary">Sidebars</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Sidebars
            </Typography>
            <Typography>
              Used to provide a sticky side navigation to your users while using
              your application.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/sidebars/simple'}
          title={'Simple'}
          path={'./src/blocks/sidebars/Simple/Simple.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/sidebars/with-dark-bg'}
          title={'With brand background color'}
          path={'./src/blocks/sidebars/WithDarkBg/WithDarkBg.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/sidebars/with-collapsible-menu-items'}
          title={'With collapsible menu items'}
          path={
            './src/blocks/sidebars/WithCollapsibleMenuItems/WithCollapsibleMenuItems.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
