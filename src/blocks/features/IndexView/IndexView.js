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
            <Typography color="text.primary">Features</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Features
            </Typography>
            <Typography>
              Displays the awesome features of your product or service in an
              organised layout.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/features/simple-centered'}
          title={'Simple centered features section'}
          path={'./src/blocks/features/SimpleCentered/SimpleCentered.js|ts'}
        />
        <ResizableFrame
          src={'/blocks/features/features-with-card-representation'}
          title={'Features section with card representation'}
          path={
            './src/blocks/features/FeaturesWithCardRepresentation/FeaturesWithCardRepresentation.js|ts'
          }
        />
        <ResizableFrame
          src={
            '/blocks/features/feature-cards-with-colorfull-icons-and-learn-more-link'
          }
          title={'Feature cards with colorfull icons and "learn more" link'}
          path={
            './src/blocks/features/FeatureCardsWithColorfullIconsAndLearnMoreLink/FeatureCardsWithColorfullIconsAndLearnMoreLink.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/features-with-simple-left-aligned-icons'}
          title={'Features with icons aligned to the left'}
          path={
            './src/blocks/features/FeaturesWithSimpleLeftAlignedIcons/FeaturesWithSimpleLeftAlignedIcons.js|ts'
          }
          iframeStyles={{ minHeight: 320 }}
        />
        <ResizableFrame
          src={'/blocks/features/features-with-minimal-design'}
          title={'Feature cards with minimal design'}
          path={
            './src/blocks/features/FeaturesWithMinimalDesign/FeaturesWithMinimalDesign.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/features-with-simple-icons'}
          title={'Features section with simple icons'}
          path={
            './src/blocks/features/FeaturesWithSimpleIcons/FeaturesWithSimpleIcons.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/simple-left-aligned'}
          title={'Simple features cards aligned to the left'}
          path={
            './src/blocks/features/SimpleLeftAligned/SimpleLeftAligned.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/simple-features-with-alternate-cards'}
          title={
            'Simple, left-aligned feature cards with alternate background color'
          }
          path={
            './src/blocks/features/SimpleFeaturesWithAlternateCards/SimpleFeaturesWithAlternateCards.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/features-with-learn-more-link'}
          title={'Feature boxes with "learn more" link'}
          path={
            './src/blocks/features/FeaturesWithLearnMoreLink/FeaturesWithLearnMoreLink.js|ts'
          }
          iframeStyles={{ minHeight: 324 }}
        />
        <ResizableFrame
          src={'/blocks/features/features-with-check-marks-and-abstract-images'}
          title={
            'Features section with check marks and abstract, circled images on the right'
          }
          path={
            './src/blocks/features/FeaturesWithCheckMarksAndAbstractImages/FeaturesWithCheckMarksAndAbstractImages.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/one-line-feature-list-with-check-marks'}
          title={'One line feature list with check icons and CTA button'}
          path={
            './src/blocks/features/OneLineFeatureListWithCheckMarks/OneLineFeatureListWithCheckMarks.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/feature-list-with-form'}
          title={'Feature list with form card'}
          path={
            './src/blocks/features/FeatureListWithForm/FeatureListWithForm.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/features-with-mobile-screenshot'}
          title={'Features with app screenshot on the right'}
          path={
            './src/blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/feature-card-with-cta-button'}
          title={'Feature card with CTA button'}
          path={
            './src/blocks/features/FeatureCardWithCtaButton/FeatureCardWithCtaButton.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/feature-list-with-desktop-app-screenshot'}
          title={'With desktop app screenshot on the right'}
          path={
            './src/blocks/features/FeatureListWithDesktopAppScreenshot/FeatureListWithDesktopAppScreenshot.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/features-with-masonry-cards-and-check-icons'}
          title={'With masonry cards and check icons'}
          path={
            './src/blocks/features/FeaturesWithMasonryCardsAndCheckIcons/FeaturesWithMasonryCardsAndCheckIcons.js|ts'
          }
          iframeStyles={{ minHeight: 800 }}
        />
        <ResizableFrame
          src={'/blocks/features/features-with-illustration'}
          title={'Features with illustration on the right'}
          path={
            './src/blocks/features/FeaturesWithIllustration/FeaturesWithIllustration.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/features/feature-grid-with-backgrounds'}
          title={'With masonry grid and backgrounds'}
          path={
            './src/blocks/features/FeatureGridWithBackgrounds/FeatureGridWithBackgrounds.js|ts'
          }
          iframeStyles={{ minHeight: 1300 }}
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
