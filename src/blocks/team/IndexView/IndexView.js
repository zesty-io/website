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
              href="/blocks#js--blocks__index-section--marketing"
            >
              Marketing
            </Link>
            <Typography color="text.primary">Team</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Team
            </Typography>
            <Typography>
              Used to showcase your team, give your brand a face and gain
              customers' trust.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/team/team-with-circled-photos'}
          title={'Team with circled photos'}
          path={
            './src/blocks/team/TeamWithCircledPhotos/TeamWithCircledPhotos.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/team/with-overlapped-cards'}
          title={'Team boxes with overlapped card'}
          path={
            './src/blocks/team/WithOverlappedCards/WithOverlappedCards.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/team/with-large-images-and-social-icons'}
          title={'Team card with large photos and social media icons & links'}
          path={
            './src/blocks/team/WithLargeImagesAndSocialIcons/WithLargeImagesAndSocialIcons.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/team/team-with-small-square-photos'}
          title={'Team with small square photos'}
          path={
            './src/blocks/team/TeamWithSmallSquarePhotos/TeamWithSmallSquarePhotos.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/team/with-simple-card'}
          title={'Team with cards'}
          path={'./src/blocks/team/WithSimpleCards/WithSimpleCards.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/team/with-alternate-card'}
          title={'Team with alternate cards'}
          path={'./src/blocks/team/WithAlternateCards/WithAlternateCards.js|ts'}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
