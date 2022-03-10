/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Mindshare
 * Name: mindshare
 * Model ZUID: 6-2346b0-2t7vcn
 * File Created On: Fri Mar 04 2022 12:16:05 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * description (textarea)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-2346b0-2t7vcn
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/FillerContent';

import Container from 'components/Container';


import HeroWithBackgroundAndFullSearchBar from '../../blocks/heroes/HeroWithBackgroundAndFullSearchBar/';
import SearchBox from '../../blocks/searchBox/SearchBox'
import HorizontallyAlignedBlogCardWithShapedImage from '../../blocks/blog/HorizontallyAlignedBlogCardWithShapedImage'
import VerticallyAlignedBlogCardsWithShapedImage from '../../blocks/blog/VerticallyAlignedBlogCardsWithShapedImage';
import BlogCardsWithFullBackgroundImage from '../../blocks/blog/BlogCardsWithFullBackgroundImage';
import PopularArticles from '../../blocks/blog/popularArticles/PopularArticles'
import Newsletter from '../../blocks/newsletters/Newsletter'



function Mindshare({ content }) {
  const theme = useTheme();

  const chipsTitle = content.popular_categories
    ? Object.keys(content.popular_categories.data).map(
        (item) => content.popular_categories.data[item]?.category,
      )
    : FillerContent.missingDataArray; ;


  return (
    <>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <HeroWithBackgroundAndFullSearchBar
          image={content.hero_image.data[0].url}
          title={content.title}
          subTitle={content.subtitle}
        />

        <Container
          sx={{
            marginTop: '-5rem',
            position: 'relative',
            zIndex: 3,
            paddingY: '0 !important',
          }}
        >
          <SearchBox chipsTitle={chipsTitle} />
        </Container>
        <Container paddingTop={'0 !important'}>
          <HorizontallyAlignedBlogCardWithShapedImage />
        </Container>
        <Container paddingTop={'0 !important'}>
          <VerticallyAlignedBlogCardsWithShapedImage />
        </Container>
        <Container paddingTop={'0 !important'}>
          <BlogCardsWithFullBackgroundImage />
        </Container>
        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
          <Container paddingTop={'0 !important'}>
            <PopularArticles />
          </Container>
        </Box>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            transform: 'translateY(50%)',
            zIndex: 2,
            width: 1,
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>
      <Container>
        <Newsletter />
      </Container>

      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Mindshare;
