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
            <Typography color="text.primary">User Cards</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              User Cards
            </Typography>
            <Typography>
              Used to display information about users and contacts in your app.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/user-cards/user-card-grid'}
          title={'User card grid'}
          path={'./src/blocks/userCards/UserCardGrid/UserCardGrid.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/user-cards/user-card-with-background'}
          title={'User card with background'}
          path={
            './src/blocks/userCards/UserCardWithBackground/UserCardWithBackground.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/user-cards/user-card-with-rating'}
          title={'User card with rating'}
          path={
            './src/blocks/userCards/UserCardWithRating/UserCardWithRating.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
