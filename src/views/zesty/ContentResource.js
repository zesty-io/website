/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Content Resources 
 * Name: content_resources 
 * Model ZUID: 6-c6dd93f5f2-qpdc9t
 * File Created On: Wed Aug 10 2022 19:10:04 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title_and_description (wysiwyg_basic)
 * newsletter_cta_text (text)
 * gated_content_pages (one_to_many)
 * highlighted_articles (one_to_many)
 * youtube_video_1 (link)
 * youtube_video_2 (link)
 * youtube_video_3 (link)
 * section_header_1 (text)
 * section_header_2 (text)
 * section_header_3 (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c6dd93f5f2-qpdc9t
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */

import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
/**
 * Helpers Import
 */
import FillerContent from 'components/globals/FillerContent';
import Hero from 'components/marketing/ContentResources/Hero';
import React from 'react';
import GatedContentCard from 'components/marketing/ContentResources/GatedContentCard';
import ArticlesCard from 'components/marketing/ContentResources/ArticlesCard';
import VideosCard from 'components/marketing/ContentResources/VideosCard';

function ContentResource({ content }) {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  console.log(content);

  const pageData = {
    theme,
    isMedium,
    isDarkMode,
    content,
    FillerContent,
  };

  return (
    <>
      <Box bgcolor={'alternate.main'}>
        <Hero {...pageData} />
      </Box>
      <GatedContentCard {...pageData} />
      <ArticlesCard {...pageData} />
      <VideosCard {...pageData} />
    </>
  );
}

export default ContentResource;
