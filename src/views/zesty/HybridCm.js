/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Hybrid CMS 
 * Name: hybrid_cms 
 * Model ZUID: 6-dece98fde3-4vzxq8
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_eyebrow (text)
 * hero_title (text)
 * hero_description (text)
 * hero_cta_primary (text)
 * hero_cta_secondary (text)
 * hero_graphic (images)
 * about_hybrid_cms (wysiwyg_basic)
 * about_hybrid_cms_graphic (images)
 * hybrid_interface (wysiwyg_basic)
 * hybrid_interface_graphic (images)
 * hybrid_cms_features_header (wysiwyg_basic)
 * hybrid_cms_feature_1 (wysiwyg_basic)
 * hybrid_cms_feature_1_image (images)
 * hybrid_cms_feature_2 (wysiwyg_basic)
 * hybrid_cms_feature_2_image (images)
 * hybrid_cms_feature_3 (wysiwyg_basic)
 * hybrid_cms_feature_3_image (images)
 * hybrid_cms_feature_4 (wysiwyg_basic)
 * hybrid_cms_feature_4_image (images)
 * hybrid_cms_feature_5 (wysiwyg_basic)
 * hybrid_cms_feature_5_image (images)
 * hybrid_cms_feature_6 (wysiwyg_basic)
 * hybrid_cms_feature_6_image (images)
 * case_study_title (text)
 * case_studies (one_to_many)
 * bottom_cta_header (text)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)
 * related_content_header (text)
 * related_content_articles (one_to_many)
 * related_content_cta_button (text)
 * related_content_button_link (internal_link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dece98fde3-4vzxq8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FillerContent from 'components/globals/FillerContent';

/*
 * Components Imports
 */
import Hero from 'components/marketing/HybridCms/Hero';
import About from 'components/marketing/HybridCms/About';
import Hybrid from 'components/marketing/HybridCms/Hybrid';
import TimeLine from '../../blocks/Timeline/TimeLine';
import Bottom from 'components/marketing/HybridCms/Bottom';
import TopBrands from '../../blocks/caseStudies/TopBrands';
import Articles from '../../blocks/blog/Articles/Articles';

function HybridCm({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDarkMode = theme.palette.mode === 'dark';

  const HeroProps = {
    eyebrow: content.hero_eyebrow || FillerContent.header,
    header: content.hero_title || FillerContent.description,
    subHeader: content.hero_description || FillerContent.description,
    mainImage:
      content.hero_graphic?.data[0]?.url || FillerContent.photos[0].src,
    bgImage: isDarkMode
      ? 'https://brand.zesty.io/zesty-io-logo-light.png' ||
        FillerContent.photos[0].src
      : 'https://brand.zesty.io/zesty-io-logo.svg' ||
        FillerContent.photos[0].src,
    primaryCta: content.hero_cta_primary,
    secondaryCta: content.hero_cta_secondary,
    isMobile,
    theme,
  };

  const pageData = {
    isMobile,
    theme,
    isDarkMode,
    content,
    FillerContent,
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const timelineData = {
    header: content.hybrid_cms_features_header,
    data: [
      {
        description: content.hybrid_cms_feature_1 || FillerContent.description,
        image:
          content.hybrid_cms_feature_1_image?.data[0].url ||
          FillerContent.photos[0].src,
      },
      {
        description: content.hybrid_cms_feature_2 || FillerContent.description,
        image:
          content.hybrid_cms_feature_2_image?.data[0].url ||
          FillerContent.photos[0].src,
      },
      {
        description: content.hybrid_cms_feature_3 || FillerContent.description,
        image:
          content.hybrid_cms_feature_3_image?.data[0].url ||
          FillerContent.photos[0].src,
      },
      {
        description: content.hybrid_cms_feature_4 || FillerContent.description,
        image:
          content.hybrid_cms_feature_4_image?.data[0].url ||
          FillerContent.photos[0].src,
      },
    ],
  };

  return (
    <>
      <Hero {...HeroProps} />
      <About {...pageData} />
      <Hybrid {...pageData} />
      <TimeLine timelineData={timelineData} {...pageData} />
      <TopBrands
        sx={{ pt: 5 }}
        title={content.case_study_title}
        {...pageData}
      />
      <Bottom {...pageData} />
      <Articles
        title={content.related_content_header}
        articles={content.related_content_articles?.data}
        {...pageData}
      />
    </>
  );
}

export default HybridCm;
