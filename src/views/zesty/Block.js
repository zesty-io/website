/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Blocks 
 * Name: blocks 
 * Model ZUID: 6-9c92d8dbd3-mtsn94
 * File Created On: Wed Feb 19 2025 23:21:33 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_primary_cta_text (text)
 * hero_eyebrow (text)
 * hero_secondary_cta_link (internal_link)
 * use_cases (one_to_many)
 * hero_secondary_cta_text (text)
 * hero_description (wysiwyg_basic)
 * hero_primary_cta_link (internal_link)
 * hero_title (text)
 * hero_promo_video (text)
 * use_cases_title (wysiwyg_basic)
 * logos_title (text)
 * faq_title (text)
 * logos (one_to_many)
 * faq_subtitle (text)
 * resources_buttons (one_to_many)
 * resources_title (text)
 * demo_title (text)
 * faqs (one_to_many)
 * demo_cta_link (internal_link)
 * demo_cta_text (text)
 * integrations_button_text (text)
 * integrations_title (wysiwyg_basic)
 * demo_description (wysiwyg_basic)
 * integration_button_link (link)
 * integration_logos (one_to_many)
 * featured_use_cases (one_to_many)
 * featured_use_cases_title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-9c92d8dbd3-mtsn94
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { ThemeProvider, useTheme } from '@emotion/react';
import React from 'react';

import FillerContent from 'components/globals/FillerContent';
import revampTheme from 'theme/revampTheme';

import Hero from 'components/marketing/Freestyle/Hero';
import UseCase from 'components/marketing/Freestyle/UseCase';
import TabsSection from 'revamp/ui/TabsSection';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import Resources from 'components/marketing/IntegrationsIndividualPage/Resources';
import { useMediaQuery } from '@mui/material';

const benefitsData = (dataArray) => {
  return (
    dataArray?.data?.reduce((acc, item) => {
      acc.push({
        icon_image: item.use_case_image?.data[0].url,
        header: item.header,
        content: item.use_case_content,
        primaryCtaText: item.primary_cta_text,
        secondaryCtaText: item.secondary_cta_text,
        primaryCtaLink: item.left_cta_link?.data?.[0].meta?.web?.uri,
        secondaryCtaLink: item.right_cta_link?.data?.[0].meta?.web?.uri,
      });

      return acc;
    }, []) || []
  );
};

function Block({ content }) {
  const theme = useTheme();

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  const heroProps = {
    overline: content.header_eyebrow,
    description: content.hero_description,
    heroImage: content.header_graphic?.data[0]?.url,
    heroVideo: content.hero_promo_video,
    primaryCta: content.hero_primary_cta_text || FillerContent.link,
    primaryCtaLink:
      (content.hero_primary_cta_link == 0 && '/join/') ||
      content.header_button_link?.data[0].meta.web.uri,
    secondaryCtaText: content.hero_secondary_cta_text,
    secondaryCtaLink: content.hero_secondary_cta_link?.data[0].meta.web.uri,
  };

  const useCasesProps = {
    header: content.use_cases_title,
    data: benefitsData(content.use_cases),
  };

  const demoProps = {
    title: content.demo_title || FillerContent.demo.title,
    supportingText:
      content?.demo_description_2 || FillerContent.demo.supportingText,
    cta: content?.demo_cta || FillerContent.demo.cta,
  };

  const resourcesProps = {
    theme,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isDarkMode,
    content: {
      resources_title: content?.resources_title,
      resources_buttons: content?.resources_buttons,
    },
    FillerContent,
  };

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Hero {...heroProps} />
      <Resources {...resourcesProps} />
      <UseCase {...useCasesProps} />
      <TabsSection tabs={content?.features_options} />
      <GetDemoSection {...demoProps} />
    </ThemeProvider>
  );
}

export default Block;
