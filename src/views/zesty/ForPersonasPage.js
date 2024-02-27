/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: For Personas Pages 
 * Name: for_personas_pages 
 * Model ZUID: 6-acf4d8f2c3-s74mjg
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_text (wysiwyg_basic)
 * header_graphic (images)
 * header_button_text (text)
 * header_button_link (internal_link)
 * benefits_title (wysiwyg_basic)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * benefit_4 (wysiwyg_basic)
 * benefit_4_graphic (images)
 * numbers_title (wysiwyg_basic)
 * numbers (one_to_many)
 * how_it_works (wysiwyg_basic)
 * how_it_works_video (images)
 * features_header (wysiwyg_basic)
 * features (one_to_many)
 * testimonials_title (text)
 * testimonials (one_to_many)
 * case_studies (one_to_many)
 * integrations_title (wysiwyg_basic)
 * integrations (images)
 * footer_cta (wysiwyg_basic)
 * footer_cta_graphic (images)
 * footer_button_text (text)
 * footer_button_link (internal_link)
 * persona_pages_title (text)
 * persona_pages_links (one_to_many)
 * header_eyebrow (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-acf4d8f2c3-s74mjg
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
import { Box, useTheme, useMediaQuery } from '@mui/material';

/**
 * Helpers Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Hero from 'components/marketing/ForPersonas/Hero';
import { ThemeProvider } from '@emotion/react';
import revampTheme from 'theme/revampTheme';
import UseCase from 'components/marketing/ForPersonas/UseCase';
import SimpleCardLogo from 'components/marketing/ForPersonas/SimpleCardLogo';
import TabsSection from 'revamp/ui/TabsSection';
import CaseStudy from 'components/marketing/ForPersonas/CaseStudy';
import SingleTestimonial from 'components/marketing/ForPersonas/SingleTesimonial';
import TechStack from 'components/marketing/ForPersonas/TechStack';

function ForPersonasPage({ content }) {
  const theme = useTheme();

  /* Taking the data from the content model and converting it into a format that the Features component can use. */
  const featuresData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.icon_image?.data[0].url,
          feature_name: item.feature_name,
          content: item.content,
        });

        return acc;
      }, []) || []
    );
  };

  const benefitsData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.benefit_image?.data[0].url,
          header: item.header,
          content: item.benefit_content,
        });

        return acc;
      }, []) || []
    );
  };

  const heroProps = {
    overline: content.header_eyebrow,
    description: content.header_text,
    heroImage: content.header_graphic?.data[0]?.url,
    primaryCta: content.header_button_text || FillerContent.link,
    primaryCtaLink:
      (content.header_button_link == 0 && '/join/') ||
      content.header_button_link?.data[0].meta.web.uri,
    secondaryCtaText: content.header_secondary_button_text,
    secondaryCtaLink:
      content.header_secondary_button_link?.data[0].meta.web.uri,
  };

  const useCasesProps = {
    header: content.benefits_title,
    data: benefitsData(content.benefits),
  };

    const caseStudyProps = {
    overline: content.case_studies?.data[0]?.overline,
    logo: content.case_studies?.data[0]?.logo?.data[0]?.url,
    heading: content.case_studies?.data[0]?.title,
    description: content.case_studies?.data[0]?.summary,
    image: content.case_studies?.data[0]?.image?.data[0]?.url,
    ctaText: content.case_studies?.data[0]?.cta,
    ctaLink: content.case_studies?.data[0]?.link,
    stats_1_number: content.case_studies?.data[0]?.stats_1_number,
    stats_1_description: content.case_studies?.data[0]?.stats_1_description,
        stats_2_number: content.case_studies?.data[0]?.stats_2_number,
    stats_2_description: content.case_studies?.data[0]?.stats_2_description,
        stats_3_number: content.case_studies?.data[0]?.stats_3_number,
    stats_3_description: content.case_studies?.data[0]?.stats_3_description,
  }

  const testimonialProps = {
    header: content.testimonials?.data[0]?.title,
    quote: content.testimonials?.data[0]?.review,
    link: content.testimonials?.data[0]?.review_link,
    name: content.testimonials?.data[0]?.reviewer_name,
    role: content.testimonials?.data[0]?.reviewer_title,
    witness: content.testimonials?.data[0]?.reviewer_headshot?.data[0]?.url || FillerContent.avatar,
    logo: content.testimonials?.data[0]?.company_logo,
    review_link_text: content.testimonials?.data[0]?.review_link_text,
    review_link: content.testimonials?.data[0]?.review_link,
  }

    const logoSliderProps = {
    text_content: content.integrations_title,
    logos: content.integrations_logos?.data,
    headerFontWeight: 700,
    cta_text: content.integrations_button_text,
    cta_link: content.integrations_button_link_2,
  };


  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <Hero {...heroProps} />
      <UseCase {...useCasesProps} />
      <SimpleCardLogo
        variant="outlined"
        heading_text={content?.client_logo_title}
        logoItems={content?.client_logos?.data}
      />
       <TabsSection tabs={content?.features_options} />
       <CaseStudy {...caseStudyProps}/>
        <SingleTestimonial {...testimonialProps}/>
         {content.integrations_title && content.integrations_logos && (
          <TechStack {...logoSliderProps} />
        )}
    </ThemeProvider>
  );
}

export default ForPersonasPage;
