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
            <Typography color="text.primary">Notifications</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Notifications
            </Typography>
            <Typography>
              Use notifications to inform a users about specific events.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/notifications/simple'}
          title={'Simple'}
          path={'./src/blocks/notifications/Simple/Simple.js|ts'}
          iframeStyles={{ minHeight: 140 }}
        />
        <ResizableFrame
          src={'/blocks/notifications/with-action-buttons'}
          title={'With action buttons'}
          path={
            './src/blocks/notifications/WithActionButtons/WithActionButtons.js|ts'
          }
          iframeStyles={{ minHeight: 204 }}
        />
        <ResizableFrame
          src={'/blocks/notifications/with-avatar-and-buttons-below'}
          title={'With avatar and buttons below'}
          path={
            './src/blocks/notifications/WithAvatarAndButtonsBelow/WithAvatarAndButtonsBelow.js|ts'
          }
          iframeStyles={{ minHeight: 204 }}
        />
        <ResizableFrame
          src={'/blocks/notifications/with-split-buttons'}
          title={'With split buttons'}
          path={
            './src/blocks/notifications/WithSplitButtons/WithSplitButtons.js|ts'
          }
          iframeStyles={{ minHeight: 204 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
