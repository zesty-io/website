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
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import About from 'components/marketing/HybridCms/About';
import CenteredContents from 'blocks/contentBlocks/CenteredContents';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Bottom from 'components/marketing/HybridCms/Bottom';
import CaseStudyCards from 'blocks/zesty/Cards/CaseStudyCards';
import SimpleVerticalBlogCards from 'blocks/blog/SimpleVerticalBlogCards/SimpleVerticalBlogCards';

function HybridCm({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isXL = useMediaQuery(theme.breakpoints.between(2000, 99999));
  const isDarkMode = theme.palette.mode === 'dark';

  const COLORS = [
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.zestyWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.zestyDarkBlue,
      textColor: theme.palette.common.white,
    },
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
  ];

  const heroProps = {
    mainTitle: content.hero_eyebrow,
    title: content.hero_title,
    description: content.hero_description,
    image: content.hero_graphic?.data && content.hero_graphic?.data[0]?.url,
    cta_left: content.hero_cta_primary,
    cta_right: content.hero_cta_secondary,
    cta_right_url: content.hero_cta_secondary_url?.data[0]?.meta?.web?.url,
    bgImage: true,
  };

  const pageData = {
    isMobile,
    theme,
    isDarkMode,
    content,
    FillerContent,
    isXL,
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const timelineData = {
    header_content: content.hybrid_cms_features_header,
    column_data: [
      {
        content: content.hybrid_cms_feature_1,
        image: content.hybrid_cms_feature_1_image?.data[0]?.url,
      },
      {
        content: content.hybrid_cms_feature_2,
        image: content.hybrid_cms_feature_2_image?.data[0]?.url,
      },
      {
        content: content.hybrid_cms_feature_3,
        image: content.hybrid_cms_feature_3_image?.data[0]?.url,
      },
      {
        content: content.hybrid_cms_feature_4,
        image: content.hybrid_cms_feature_4_image?.data[0]?.url,
      },
    ],
  };

  const hybridProps = {
    header: content.hybrid_interface,
    primaryCtaText: content.hybrid_interface_cta_text,
    mainImage: content.hybrid_interface_graphic?.data[0]?.url,
  };

  const caseStudiesProps = {
    header: content.case_study_title,
    g2BadgesData: content.g2_badges?.data,
    caseStudiesData: content.case_studies?.data,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <About {...pageData} />
      <CenteredContents {...hybridProps} />
      {/* <TimeLine timelineData={timelineData} {...pageData} /> */}
      <AlternateColumns alternateColors={COLORS} {...timelineData} />

      <CaseStudyCards {...caseStudiesProps} />
      <Bottom {...pageData} />
      <SimpleVerticalBlogCards
        cards={content.related_content_articles?.data}
        title={content.related_content_header}
        isCtaButton={false}
        gridMd={4}
      />
    </>
  );
}

export default HybridCm;
