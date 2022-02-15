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
            <Typography color="text.primary">Form Control Elements</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Form Control Elements
            </Typography>
            <Typography>
              Standard form elements with various styles and layout options.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/form-controls/custom-select'}
          title={'Custom select'}
          path={'./src/blocks/formControls/CustomSelect/CustomSelect.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/form-controls/stacked-custom-radio-group'}
          title={'Stacked custom radio group'}
          path={
            './src/blocks/formControls/StackedCustomRadioGroup/StackedCustomRadioGroup.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/form-controls/custom-radio-group'}
          title={'Custom radio group'}
          path={
            './src/blocks/formControls/CustomRadioGroup/CustomRadioGroup.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/form-controls/toggle-button'}
          title={'Toggle buttons'}
          path={'./src/blocks/formControls/ToggleButton/ToggleButton.js|ts'}
          iframeStyles={{ minHeight: 112 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
