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
          src={'/blocks/app-stats/simple'}
          title={'Simple'}
          path={'./src/blocks/appStats/Simple/Simple.js|ts'}
          iframeStyles={{ minHeight: 230 }}
        />
        <ResizableFrame
          src={'/blocks/app-stats/with-brand-icon'}
          title={'With brand icon'}
          path={'./src/blocks/appStats/WithBrandIcon/WithBrandIcon.js|ts'}
          iframeStyles={{ minHeight: 350 }}
        />
        <ResizableFrame
          src={'/blocks/app-stats/with-shared-borders'}
          title={'With shared borders'}
          path={
            './src/blocks/appStats/WithSharedBorders/WithSharedBorders.js|ts'
          }
          iframeStyles={{ minHeight: 293 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
