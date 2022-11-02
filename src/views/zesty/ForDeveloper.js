/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: For developers 
 * Name: for_developers 
 * Model ZUID: 6-a8aae6c2b5-n019mw
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_text (wysiwyg_basic)
 * header_graphic (images)
 * header_button_text (text)
 * header_button_link (internal_link)
 * nextjs_text (wysiwyg_basic)
 * nextjs_graphic (images)
 * nextjs_eyebrow (text)
 * why_zesty_eyebrow (text)
 * why_zesty_text (wysiwyg_basic)
 * why_zesty (one_to_many)
 * middle_cta_button_text (text)
 * middle_cta_button_link (internal_link)
 * node_sdk_eyebrow (text)
 * node_sdk_text (wysiwyg_basic)
 * node_sdk_graphic (images)
 * numbers_title (text)
 * numbers (one_to_many)
 * numbers_graphic (images)
 * integrations_text (wysiwyg_basic)
 * integrations_graphic (images)
 * support_eyebrow (text)
 * support_text (wysiwyg_basic)
 * support_graphic (images)
 * docs_text (wysiwyg_basic)
 * dev_docs (one_to_many)
 * testimonials_text (text)
 * testimonials (one_to_many)
 * footer_cta_text (wysiwyg_basic)
 * footer_cta_graphic (images)
 * footer_button_1 (text)
 * footer_button_1_link (internal_link)
 * footer_button_2 (text)
 * footer_button_2_link (internal_link)
 * zesty_for_the_team (text)
 * zesty_for_the_team_links (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a8aae6c2b5-n019mw
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * React Imports
 */

import React from 'react';

/**
 * MUI Imports
 */
import { useMediaQuery, useTheme, Box } from '@mui/material';

/**
 * Helper Imports
 */

import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Hero from 'components/marketing/ForDeveloper/Hero';
import ContainerWithBackground from 'components/marketing/ForDeveloper/ContainerWithBackground';
import Features from 'blocks/features/Features/Features';
import ZestyDrives from 'components/marketing/ForDeveloper/ZestyDrives';
import Documentation from 'components/marketing/ForDeveloper/Documentation';
import TechStack from 'blocks/integrations/TechStack';
import { WithHighlightedCard } from 'blocks/testimonials';
import Bottom from 'blocks/zesty/Bottom/Bottom';
import HowZestyWorks from 'components/marketing/ForDeveloper/HowZestyWorks';

function ForDeveloper({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageProps = {
    theme,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isDarkMode,
    FillerContent,
  };

  const heroProps = {
    eyebrow: content.header_eyebrow || FillerContent.header,
    header: content.header_text || FillerContent.rich_text,
    mainImage:
      content.header_graphic?.data[0]?.url || FillerContent.photos[0].src,
    primaryCta: content.header_button_text || FillerContent.cta,
    secondaryCta: content.header_button_text_2 || FillerContent.cta,
    secondaryCtaLink:
      content.header_button_link_2.data[0].meta.web.uri || FillerContent.href,
    theme,
    ...pageProps,
  };

  const nextJsProps = {
    eyebrow: content.nextjs_eyebrow || FillerContent.header,
    titleAndDescription: content.nextjs_text || FillerContent.rich_text,
    mainImage:
      content.nextjs_graphic?.data[0]?.url || FillerContent.photos[0].src,
    primaryCta: content.nextjs_button_text || FillerContent.cta,
    primaryCtaLink: content.nextjs_button_link_2 || FillerContent.href,
    ...pageProps,
  };

  /* Taking the data from the content model and converting it into a format that the Features component can use. */
  const whyZestyFeaturesData =
    content.why_zesty?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.icon_image?.data[0].url,
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  const whyZestyProps = {
    background: 'zesty',
    header_size: 32,
    textHighlight: content.why_zesty_eyebrow || FillerContent.header,
    features_header: content.why_zesty_eyebrow || FillerContent.header,
    feature_description: content.why_zesty_text || FillerContent.header,
    cta_button_text: content.middle_cta_button_text || FillerContent.cta,
    cta_button_link:
      content.middle_cta_button_link.data[0].meta.web.uri || FillerContent.href,
    card_name_color: theme.palette.zesty.zestyZambezi,
    icon_width: 60,
    data: whyZestyFeaturesData,
    ...pageProps,
  };

  const nodeSDKProps = {
    eyebrow: content.node_sdk_eyebrow || FillerContent.header,
    titleAndDescription: content.node_sdk_text || FillerContent.rich_text,
    mainImage:
      content.node_sdk_graphic?.data[0]?.url || FillerContent.photos[0].src,
    primaryCta: content.node_sdk_button_text || FillerContent.cta,
    primaryCtaLink: content.node_sdk_button_link || FillerContent.href,
    ...pageProps,
  };

  const zestyDrivesData =
    content.numbers?.data.reduce((acc, item) => {
      acc.push({
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  const zestyDrivesProps = {
    header_size: 32,
    textHighlight: '',
    card_name_color: theme.palette.zesty.zestyZambezi,
    data: zestyDrivesData,
    features_header: content.numbers_title,
    ...pageProps,
  };

  const integrationsProps = {
    text_content: content.integrations_text,
    logos: content.integrations_logo?.data,
    headerColor: theme.palette.zesty.zestyZambezi,
    headerFontWeight: 700,
    cta_text: content.integrations_button_text || FillerContent.cta,
    cta_link: content.integrations_button_link || FillerContent.href,
    ...pageProps,
  };

  const supportProps = {
    eyebrow: content.support_eyebrow || FillerContent.header,
    titleAndDescription: content.support_text || FillerContent.rich_text,
    ...pageProps,
  };

  const documentationProps = {
    header: content.docs_text || FillerContent.header,
    documentations: content.dev_docs,
    ...pageProps,
  };

  const testimonialsProps = {
    title: content.testimonials_title,
    data: content.testimonials?.data,
  };

  const bottomProps = {
    graphic: content?.footer_cta_graphic?.data[0].url || '',
    titleAndDescription: content.footer_cta_text || FillerContent.rich_text,
    cta_text: content.footer_button_1 || FillerContent.cta,
    secondary_cta_text: content.footer_button_2 || FillerContent.cta,
    secondary_cta_link:
      content.footer_button_2_link?.data[0].meta.web.uri || FillerContent.href,
    ...pageProps,
  };

  const howZestyWorksProps = {
    header: content.zesty_for_the_team || FillerContent.description,
    teamLinks: content.zesty_for_the_team_links || FillerContent.rich_text,
    ...pageProps,
  };

  return (
    <>
      <Hero {...heroProps} />
      <Box sx={{ mb: 7 }}>
        <ContainerWithBackground {...nextJsProps} />
      </Box>
      <Features {...whyZestyProps} />
      <ContainerWithBackground {...nodeSDKProps} />
      <ZestyDrives {...zestyDrivesProps} />
      <TechStack {...integrationsProps} />
      <ContainerWithBackground {...supportProps} />
      <Documentation {...documentationProps} />
      <WithHighlightedCard {...testimonialsProps} />
      <Box sx={{ mt: isSmall ? 15 : 20 }}>
        <Bottom {...bottomProps} />
      </Box>
      <HowZestyWorks {...howZestyWorksProps} />
    </>
  );
}

export default ForDeveloper;
