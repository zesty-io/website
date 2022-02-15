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
            <Typography color="text.primary">Progress Steps</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Progress Steps
            </Typography>
            <Typography>
              A progress indicator component communicates to the user the
              progress of a particular process.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/progress-steps/linear-steps'}
          title={'Linear steps'}
          path={'./src/blocks/progressSteps/LinearSteps/LinearSteps.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/progress-steps/with-numbers-only'}
          title={'With numbers only'}
          path={
            './src/blocks/progressSteps/WithNumbersOnly/WithNumbersOnly.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/progress-steps/vertical-stepper'}
          title={'Vertical stepper'}
          path={
            './src/blocks/progressSteps/VerticalStepper/VerticalStepper.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
