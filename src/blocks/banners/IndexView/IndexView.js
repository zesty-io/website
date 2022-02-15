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
            <Typography color="text.primary">Banners</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Banners
            </Typography>
            <Typography>
              Used to display an important message at the top or bottom of the
              page.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/banners/simple-snack-bar'}
          title={'Simple snack bar'}
          path={'./src/blocks/banners/SimpleSnackBar/SimpleSnackBar.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/banners/mui-standard-snack-bars'}
          title={'MUI standard snack bars'}
          path={
            './src/blocks/banners/MUIStandardSnackBars/MUIStandardSnackBars.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
