/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: freestyle 
 * Name: freestyle 
 * Model ZUID: 6-bcf781c4e4-pbcmpl
 * File Created On: Thu Apr 04 2024 21:06:18 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_eyebrow (text)
 * hero_promo_video (text)
 * hero_title (text)
 * hero_primary_cta_text (text)
 * hero_primary_cta_link (text)
 * hero_description (wysiwyg_basic)
 * resources_title (text)
 * resources_buttons (one_to_many)
 * logos_title (text)
 * logos (one_to_many)
 * feature_h2 (text)
 * feature_description_1 (wysiwyg_basic)
 * feature_1_image (images)
 * feature_description_2 (wysiwyg_basic)
 * feature_2_image (images)
 * feature_description_3 (wysiwyg_basic)
 * feature_3_image (images)
 * faq_title (text)
 * faqs (one_to_many)
 * popular_features (text)
 * freestyle_popular_features (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-bcf781c4e4-pbcmpl
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
import SimpleCardLogo from 'components/marketing/Freestyle/SimpleCardLogo';
import TabsSection from 'revamp/ui/TabsSection';
import SingleTestimonial from 'components/marketing/Freestyle/SingleTesimonial';
import TechStack from 'components/marketing/Freestyle/TechStack';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import FAQs from 'components/marketing/Freestyle/FAQs';
import FeaturedUseCase from 'components/marketing/Freestyle/FeaturedUseCase';

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

const featureUseCaseData = (dataArray) => {
  return (
    dataArray?.data?.reduce((acc, item) => {
      acc.push({
        icon_image: item.use_case_image?.data[0].url,
        title: item.header,
        content: item.use_case_content,
      });

      return acc;
    }, []) || []
  );
};

function Freestyle({ content }) {
  const theme = useTheme();

  const heroProps = {
    overline: content.header_eyebrow,
    description: content.hero_description,
    heroImage: content.header_graphic?.data[0]?.url,
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

  const integrationProps = {
    text_content: content.integrations_title,
    logos: content.integration_logos?.data,
    headerFontWeight: 700,
    cta_text: content.integrations_button_text,
    cta_link: content.integration_button_link,
  };

  const featuredUseCaseProps = {
    title: content.featured_use_cases_title,
    data: featureUseCaseData(content.featured_use_cases),
  };

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Hero {...heroProps} />
      <FeaturedUseCase {...featuredUseCaseProps} />
      <UseCase {...useCasesProps} />
      <SimpleCardLogo
        variant="outlined"
        heading_text={content?.logos_title}
        logoItems={content?.logos?.data}
      />
      <TabsSection tabs={content?.features_options} />
      <SingleTestimonial />
      <GetDemoSection {...demoProps} />
      {content.integrations_title && content.integration_logos && (
        <TechStack {...integrationProps} />
      )}
      <FAQs faqsData={content?.faqs.data} />
    </ThemeProvider>
  );
}

export default Freestyle;
