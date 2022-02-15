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
            <Typography color="text.primary">Heroes</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Heroes
            </Typography>
            <Typography>
              Used to display the core value proposition of your product or
              service above the fold.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/heroes/hero-with-form-and-background-gradient'}
          title={'Hero with form and background gradient'}
          path={
            './src/blocks/heroes/HeroWithFormAndBackgroundGradient/HeroWithFormAndBackgroundGradient.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/full-screen-hero-with-subscription-form'}
          title={'Full screen hero with subscription form'}
          path={
            './src/blocks/heroes/FullScreenHeroWithSubscriptionForm/FullScreenHeroWithSubscriptionForm.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-mobile-app-screenshot'}
          title={'Hero with mobile app screenshot on the right'}
          path={
            './src/blocks/heroes/HeroWithMobileAppScreenshot/HeroWithMobileAppScreenshot.js|ts'
          }
          iframeStyles={{ minHeight: 900 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/simple-hero-with-search-box'}
          title={'Simple Hero with search box and background image'}
          path={
            './src/blocks/heroes/SimpleHeroWithSearchBox/SimpleHeroWithSearchBox.js|ts'
          }
        />
        <ResizableFrame
          src={
            '/blocks/heroes/full-screen-hero-with-promo-images-and-typed-text'
          }
          title={'Full screen hero with promo images and highlighted text'}
          path={
            './src/blocks/heroes/FullScreenHeroWithPromoImagesAndTypedText/FullScreenHeroWithPromoImagesAndTypedText.js|ts'
          }
          iframeStyles={{ minHeight: 725 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/full-screen-hero-with-image-slider'}
          title={'Full screen hero with shaped image'}
          path={
            './src/blocks/heroes/FullScreenHeroWithImageSlider/FullScreenHeroWithImageSlider.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-background-video'}
          title={'Hero with background video'}
          path={
            './src/blocks/heroes/HeroWithBackgroundVideo/HeroWithBackgroundVideo.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-illustration-and-search-bar'}
          title={
            'Hero with illustration on the right and search bar on the bottom'
          }
          path={
            './src/blocks/heroes/HeroWithIllustrationAndSearchBar/HeroWithIllustrationAndSearchBar.js|ts'
          }
        />
        <ResizableFrame
          src={
            '/blocks/heroes/hero-with-primary-background-and-desktop-screenshot'
          }
          title={'Hero with primary background and desktop screenshot'}
          path={
            './src/blocks/heroes/HeroWithPrimaryBackgroundAndDesktopScreenshot/HeroWithPrimaryBackgroundAndDesktopScreenshot.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/simple-hero-with-cta'}
          title={'Simple Hero with CTA buttons'}
          path={'./src/blocks/heroes/SimpleHeroWithCta/SimpleHeroWithCta.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/heroes/simple-hero-with-bottom-video'}
          title={'Simple Hero with a video on the bottom'}
          path={
            './src/blocks/heroes/SimpleHeroWithBottomVideo/SimpleHeroWithBottomVideo.js|ts'
          }
          iframeStyles={{ minHeight: 1200 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-illustration-and-cta'}
          title={
            'Hero with illustration on the right and CTA buttons on the bottom'
          }
          path={
            './src/blocks/heroes/HeroWithIllustrationAndCta/HeroWithIllustrationAndCta.js|ts'
          }
          iframeStyles={{ minHeight: 720 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-logo-grid-and-desktop-screenshot'}
          title={'Hero with logo grid and desktop app screenshot on the right'}
          path={
            './src/blocks/heroes/HeroWithLogoGridAndDesktopScreenshot/HeroWithLogoGridAndDesktopScreenshot.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/full-screen-hero-with-logo-grid'}
          title={'Full screen hero with logo grid'}
          path={
            './src/blocks/heroes/FullScreenHeroWithLogoGrid/FullScreenHeroWithLogoGrid.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-for-ecommerce-app'}
          title={'Hero for e-commerce web apps'}
          path={
            './src/blocks/heroes/HeroForEcommerceApp/HeroForEcommerceApp.js|ts'
          }
          iframeStyles={{ minHeight: 587 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/hero-with-dashboard-screenshot-and-cta'}
          title={
            'Hero with dashboard screenshot on the right and CTA buttons on the bottom'
          }
          path={
            './src/blocks/heroes/HeroWithDashboardScreenshotAndCta/HeroWithDashboardScreenshotAndCta.js|ts'
          }
          iframeStyles={{ minHeight: 637 }}
        />
        <ResizableFrame
          src={'/blocks/heroes/simple-hero-with-image-and-cta-buttons'}
          title={'Simple hero with image on the right and CTA buttons'}
          path={
            './src/blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js|ts'
          }
          iframeStyles={{ minHeight: 635 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
