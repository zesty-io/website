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
            <Typography color="text.primary">Lists</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Lists
            </Typography>
            <Typography>
              Lists are a simple ways to displays related data.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/lists/with-avatars'}
          title={'List with user avatars'}
          path={'./src/blocks/lists/WithAvatars/WithAvatars.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/lists/list-with-nested-item'}
          title={'Simple list with nested item'}
          path={
            './src/blocks/lists/ListWithNestedItem/ListWithNestedItem.js|ts'
          }
          iframeStyles={{ minHeight: 328 }}
        />
        <ResizableFrame
          src={'/blocks/lists/list-with-vertical-line'}
          title={'List with vertical line'}
          path={
            './src/blocks/lists/ListWithVerticalLine/ListWithVerticalLine.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
