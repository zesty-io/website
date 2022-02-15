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
            <Typography color="text.primary">Cards</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Cards
            </Typography>
            <Typography>
              Used to display information to users, with button to trigger
              actions.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/cards/card-with-color-accent'}
          title={'Card with color accent'}
          path={
            './src/blocks/cards/CardWithColorAccent/CardWithColorAccent.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/cards/card-with-checkboxes'}
          title={'Card with checkboxes'}
          path={
            './src/blocks/cards/CardWithCheckboxes/CardWithCheckboxes.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/cards/card-with-add-button'}
          title={'Card with add button'}
          path={'./src/blocks/cards/CardWithAddButton/CardWithAddButton.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
