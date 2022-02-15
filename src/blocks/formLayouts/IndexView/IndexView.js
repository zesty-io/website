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
            <Typography color="text.primary">Form Layouts</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Form Layouts
            </Typography>
            <Typography>
              Pre-built layouts which can be easily modified to fit your
              usecase.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/form-layouts/account'}
          title={'Account settings form layout'}
          path={'./src/blocks/formLayouts/Account/Account.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/form-layouts/contact'}
          title={'Contact form layout'}
          path={'./src/blocks/formLayouts/Contact/Contact.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
