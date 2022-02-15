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
            <Typography color="text.primary">Blogs</Typography>
          </Breadcrumbs>
        </Container>
        <Container maxWidth={1500} paddingY={'0 !important'}>
          <Box>
            <Typography variant={'h4'} fontWeight={700}>
              Blog
            </Typography>
            <Typography>
              Used to display blog content in a clean and organised layout.
            </Typography>
          </Box>
        </Container>
        <ResizableFrame
          src={'/blocks/blog/vertical-minimal-designed-blog-cards'}
          title={
            'Simple and minimally designed vertically aligned blog article cards'
          }
          path={
            './src/blocks/blog/VerticalMinimalDesignedBlogCards/VerticalMinimalDesignedBlogCards.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/blog/blog-with-large-image'}
          title={'Blog article cards with large image'}
          path={'./src/blocks/blog/BlogWithLargeImage/BlogWithLargeImage.js|ts'}
          iframeStyles={{ minHeight: 880 }}
        />
        <ResizableFrame
          src={
            '/blocks/blog/vertically-aligned-blog-card-overlapped-with-description-box'
          }
          title={
            'Vertically aligned blog cards overlapped with description box'
          }
          path={
            './src/blocks/blog/VerticallyAlignedBlogCardOverlappedWithDescriptionBox/VerticallyAlignedBlogCardOverlappedWithDescriptionBox.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/blog/blog-cards-with-full-background-image'}
          title={'Blog cards with full background cover image'}
          path={
            './src/blocks/blog/BlogCardsWithFullBackgroundImage/BlogCardsWithFullBackgroundImage.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/blog/simple-vertical-blog-cards'}
          title={'Simple vertically aligned blog article cards'}
          path={
            './src/blocks/blog/SimpleVerticalBlogCards/SimpleVerticalBlogCards.js|ts'
          }
        />
        <ResizableFrame
          src={'/blocks/blog/horizontally-aligned-blog-card-with-shaped-image'}
          title={'Horizontally aligned blog card with shaped image'}
          path={
            './src/blocks/blog/HorizontallyAlignedBlogCardWithShapedImage/HorizontallyAlignedBlogCardWithShapedImage.js|ts'
          }
          iframeStyles={{ minHeight: 490 }}
        />
        <ResizableFrame
          src={'/blocks/blog/vertically-aligned-blog-cards-with-shaped-image'}
          title={'Vertically aligned blog card with shaped image'}
          path={
            './src/blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js|ts'
          }
        />
      </Box>
    </Fluid>
  );
};

export default IndexView;
