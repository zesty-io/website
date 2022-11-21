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
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import Benefits from 'blocks/benefits/Benefits';
import Features from 'blocks/features/Features/Features';
import ContainerWithBackground from 'components/marketing/ForPersonas/ContainerWithBackground';
import WordPressMigration from 'components/marketing/ForPersonas/WordPressMigration';
import { WithHighlightedCard } from 'blocks/testimonials';
import CaseStudyCards from 'blocks/caseStudies/CaseStudyCards';
import TechStack from 'blocks/integrations/TechStack';
import Bottom from 'blocks/zesty/Bottom/Bottom';
import Persona from 'blocks/zesty/Persona/Persona';

function ForPersonasPage({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

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
    headerEyebrow: content.header_eyebrow,
    description: content.header_text,
    mainImage: content.header_graphic?.data[0]?.url,
    primaryCta: content.header_button_text || FillerContent.link,
    primaryCtaLink:
      (content.header_button_link == 0 && '/join/') ||
      content.header_button_link?.data[0].meta.web.uri,
    cta_left: content.header_button_text,
  };

  const benefitsProps = {
    header: content.benefits_title,
    data: benefitsData(content.benefits),
  };

  const numbersProps = {
    features_header: content.numbers_title,
    data: featuresData(content.numbers),
    header_color: theme.palette.zesty.zestyZambezi,
    header_size: 32,
    textHighlight: '',
    card_name_color: theme.palette.zesty.zestyZambezi,
    background_color: theme.palette.zesty.zestyBackgroundBlue,
    isFullWidthSection: false,
  };

  const howItWorksProps = {
    titleAndDescription: content.how_it_works,
    mainImage: content.how_it_works_video?.data[0]?.url,
  };

  const featuresProps = {
    features_header: content.features_header,
    data: featuresData(content.features),
    header_color: theme.palette.zesty.zestyZambezi,
    header_size: 32,
    textHighlight: '',
    card_name_color: theme.palette.zesty.zestyZambezi,
    background_color: theme.palette.zesty.zestyBackgroundBlue,
    isFullWidthSection: false,
  };

  const testimonialsProps = {
    title: content.testimonials_title,
    data: content.testimonials?.data,
  };

  const caseStudiesProps = {
    caseStudiesHeader: content.case_studies_title,
    g2BadgesData: content.g2_badges?.data,
    caseStudiesData: content.case_studies?.data,
    caseStudiesBackground: content?.case_studies_image_background?.data[0].url,
  };
  const wordpressMigrationProps = {
    titleAndDescription: content.wordpress_migration_header,
    mainImage: content?.wordpress_migration_image?.data[0].url,
  };

  const logoSliderProps = {
    text_content: content.integrations_title,
    logos: content.integrations_logos?.data,
    headerColor: theme.palette.zesty.zestyZambezi,
    headerFontWeight: 700,
    cta_text: content.integrations_button_text,
    cta_link: content.integrations_button_link_2,
  };

  const bottomProps = {
    graphic: content?.footer_cta_graphic?.data[0].url,
    titleAndDescription: content.footer_cta,
    cta_text: content.footer_button_text,
    cta_button_link:
      (content.footer_button_link == 0 && '/join/') ||
      content.footer_button_link?.data[0].meta.web.uri,
  };

  const personaProps = {
    header: content.persona_pages_title,
    teamLinks: content.persona_pages_links,
  };
  return (
    <>
      <Hero {...heroProps} />
      <SimpleCardLogo
        variant="outlined"
        heading_text={content?.client_logo_title}
        logoItems={content?.client_logos?.data}
      />
      <Benefits {...benefitsProps} />
      <Features {...numbersProps} />
      <ContainerWithBackground {...howItWorksProps} />
      <Features {...featuresProps} />
      <Box sx={{ mt: isSmall ? 0 : -9, pb: 3 }}>
        <WithHighlightedCard {...testimonialsProps} />
      </Box>
      <CaseStudyCards {...caseStudiesProps} />
      {content.wordpress_migration_header && (
        <WordPressMigration {...wordpressMigrationProps} />
      )}
      {content.integrations_title && content.integrations_logos && (
        <TechStack {...logoSliderProps} />
      )}
      <Bottom {...bottomProps} />
      <Persona {...personaProps} />
    </>
  );
}

export default ForPersonasPage;
