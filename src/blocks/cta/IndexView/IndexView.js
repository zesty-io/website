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
            <Typography color="text.primary">Call to actions</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Call to actions
            </Typography>
            <Typography>
              Used to display a prominent call-to-action that converts leads to
              customers.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/cta/cta-simple-centered'}
          title={'Simple centered CTA'}
          path={'./src/blocks/cta/CtaSimpleCentered/CtaSimpleCentered.js|ts'}
          iframeStyles={{ minHeight: 280 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-aligned-left-with-typed-text'}
          title={'Left aligned CTA with highlighted text'}
          path={
            './src/blocks/cta/CtaAlignedLeftWithTypedText/CtaAlignedLeftWithTypedText.js|ts'
          }
          iframeStyles={{ minHeight: 362 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-right-buttons'}
          title={'CTA with right buttons'}
          path={
            './src/blocks/cta/CtaWithRightButtons/CtaWithRightButtons.js|ts'
          }
          iframeStyles={{ minHeight: 307 }}
        />
        <ResizableFrame
          src={'/blocks/cta/support-center-cta'}
          title={'Support center CTA'}
          path={'./src/blocks/cta/SupportCenterCta/SupportCenterCta.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-input-field'}
          title={'CTA with input field'}
          path={'./src/blocks/cta/CtaWithInputField/CtaWithInputField.js|ts'}
          iframeStyles={{ minHeight: 300 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-right-download-button'}
          title={'CTA with right download button'}
          path={
            './src/blocks/cta/CtaWithRightDownloadButton/CtaWithRightDownloadButton.js|ts'
          }
          iframeStyles={{ minHeight: 308 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-cover-image'}
          title={'CTA with cover image'}
          path={'./src/blocks/cta/CtaWithCoverImage/CtaWithCoverImage.js|ts'}
          iframeStyles={{ minHeight: 377 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-illustration'}
          title={'CTA section with illustration'}
          path={
            './src/blocks/cta/CtaWithIllustration/CtaWithIllustration.js|ts'
          }
          iframeStyles={{ minHeight: 355 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-app-store-buttons'}
          title={'CTA with app store buttons'}
          path={
            './src/blocks/cta/CtaWithAppStoreButtons/CtaWithAppStoreButtons.js|ts'
          }
          iframeStyles={{ minHeight: 337 }}
        />
        <ResizableFrame
          src={'/blocks/cta/cta-with-right-app-store-buttons'}
          title={'CTA with app store buttons aligned right'}
          path={
            './src/blocks/cta/CtaWithRightAppStoreButtons/CtaWithRightAppStoreButtons.js|ts'
          }
          iframeStyles={{ minHeight: 307 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
