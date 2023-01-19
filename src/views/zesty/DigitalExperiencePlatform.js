/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital Experience Platform 
 * Name: digital_experience_platform 
 * Model ZUID: 6-b2a7a8abbb-xtc6nx
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (text)
 * header_cta_primary (text)
 * header_cta_secondary (text)
 * header_graphic (images)
 * solutions_h2 (text)
 * solution_1_description (wysiwyg_basic)
 * solution_2_graphic (images)
 * solution_2_description (wysiwyg_basic)
 * solution_1_graphic (images)
 * solution_3_description (wysiwyg_basic)
 * solution_3_graphic (images)
 * solution_4_description (wysiwyg_basic)
 * solution_4_graphic (images)
 * about_dxp (wysiwyg_basic)
 * about_zesty_dxp (wysiwyg_basic)
 * about_dxp_graphic (images)
 * middle_solutions_header (text)
 * middle_solution_1_description (wysiwyg_basic)
 * middle_solution_1_graphic (images)
 * middle_solution_2_description (wysiwyg_basic)
 * middle_solution_2_graphic (images)
 * middle_solution_3_description (wysiwyg_basic)
 * middle_solution_3_graphic (images)
 * middle_solution_4_description (wysiwyg_basic)
 * middle_solution_4_graphic (images)
 * features_header (text)
 * features (one_to_many)
 * integrations_description (wysiwyg_basic)
 * integrations_graphic (images)
 * integrations_button_text (text)
 * integrations_button_link (internal_link)
 * integrations_airplane_graphic (images)
 * implementing_header (text)
 * headless_cms_toggle (text)
 * hybrid_cms_toggle (text)
 * headless_cms_description (wysiwyg_basic)
 * headless_cms_graphic (images)
 * hybrid_cms_description (wysiwyg_basic)
 * hybrid_cms_graphic (images)
 * headless_cms_toggle_graphic (images)
 * hybrid_cms_toggle_graphic (images)
 * case_study_header (text)
 * case_studies (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_button_primary (text)
 * bottom_cta_button_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b2a7a8abbb-xtc6nx
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { Box, useMediaQuery, useTheme } from '@mui/material';

/**
 * React Imports
 */

/**
 * Helper Imports
 */

import FillerContent from 'components/globals/FillerContent';

/**
 * Components Import
 */
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import Solution from 'components/marketing/DigitalExperiencePlatform/Solution';
import CenteredContents from 'blocks/contentBlocks/CenteredContents';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Features from 'blocks/zesty/PageLayouts/Features';
import Integrations from 'components/marketing/DigitalExperiencePlatform/Integrations';
import Implementation from 'components/marketing/DigitalExperiencePlatform/Implementation';
import CaseStudyCards from 'blocks/zesty/Cards/CaseStudyCards';
import ImageWithContentsCta from 'blocks/zesty/Cta/ImageWithContentsCta';

function DigitalExperiencePlatform({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isDarkMode = theme.palette.mode === 'dark';

  const heroProps = {
    mainTitle: content.header_eyebrow,
    title: content.header_h1,
    description: content.header_description,
    image: content.header_graphic?.data && content.header_graphic?.data[0]?.url,
    cta_left: content.header_cta_primary,
    cta_right: content.header_cta_secondary,
    cta_right_url: content.header_cta_secondary_link?.data[0]?.meta?.web?.url,
    backgroundColor: isDarkMode
      ? theme.palette.zesty.zestyDarkBlue
      : theme.palette.zesty.zestyWhite,
  };

  const middleData = {
    header_content: content.middle_solutions_header,
    column_data: [
      {
        content: content.middle_solution_1_description,
        image: content.middle_solution_1_graphic?.data[0]?.url,
      },
      {
        content: content.middle_solution_2_description,
        image: content.middle_solution_2_graphic?.data[0]?.url,
      },
      {
        content: content.middle_solution_3_description,
        image: content.middle_solution_3_graphic?.data[0]?.url,
      },
      {
        content: content.middle_solution_4_description,
        image: content.middle_solution_4_graphic?.data[0]?.url,
      },
    ],
  };

  const PageData = {
    content,
    theme,
    isMobile,
    isTablet,
    FillerContent,
    isDarkMode,
    isLarge,
  };

  /* Taking the data from the content model and converting it into a format that the Features component can use. */
  const feature_data =
    content?.features?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.icon_image.data[0].url,
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  const aboutProps = {
    header: content.about_dxp,
    primaryCtaText: content.middle_cta_text,
    mainImage: content.about_dxp_graphic?.data[0]?.url,
  };

  const caseStudiesProps = {
    header: content.case_study_header,
    g2BadgesData: content.g2_badges?.data,
    caseStudiesData: content.case_studies?.data,
  };

  const bottomProps = {
    mainImage: content.bottom_cta_graphic.data[0].url,
    header: content.bottom_cta_description,
    headerColor: theme.palette.zesty.zestyZambezi,
    primaryCtaText: content.bottom_cta_button_primary,
    secondaryCtaText: content.bottom_cta_button_secondary,
  };

  return (
    <Box>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Solution {...PageData} />
      <CenteredContents {...aboutProps} />
      <AlternateColumns {...middleData} />
      <Features
        cta_button_text={content.feature_cta_text}
        textHighlight=""
        card_name_color={theme.palette.zesty.zestyZambezi}
        features_header={content.features_header}
        data={feature_data}
      />
      <Integrations {...PageData} />
      <Implementation {...PageData} />
      <CaseStudyCards {...caseStudiesProps} />
      <ImageWithContentsCta {...bottomProps} sx={{ mt: 10 }} />
    </Box>
  );
}

export default DigitalExperiencePlatform;
