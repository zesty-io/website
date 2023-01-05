/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless CMS Enterprise 
 * Name: headless_cms_enterprise 
 * Model ZUID: 6-e6b7919994-n8p7t0
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * h1_title (text)
 * hero_description (textarea)
 * cta_button_hero (text)
 * hero_image (images)
 * hero_background (images)
 * logos_title (text)
 * customer_logos (one_to_many)
 * section_1_title (wysiwyg_basic)
 * solution_1 (wysiwyg_basic)
 * solution_1_image (images)
 * solution_2 (wysiwyg_basic)
 * solution_2_image (images)
 * solution_3 (wysiwyg_basic)
 * solution_3_image (images)
 * solution_4 (wysiwyg_basic)
 * solution_4_image (images)
 * how_it_works (wysiwyg_basic)
 * why_zesty_title (textarea)
 * why_zesty_features (one_to_many)
 * case_studies_title (text)
 * case_studies (one_to_many)
 * bottom_description (wysiwyg_basic)
 * bottom_cta_button (text)
 * bottom_cta_button_link (internal_link)
 * migration (wysiwyg_basic)
 * integration (wysiwyg_basic)
 * monolith_integration (wysiwyg_basic)
 * monolith_integration_graphic (images)
 * integrations_graphic (images)
 * migration_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e6b7919994-n8p7t0
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';

/**
 * Components Imports
 */
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import CardsInContainer from 'blocks/zesty/Cards/CardsInContainer';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import Bottom from 'blocks/zesty/Bottom/Bottom';
import Features from 'blocks/zesty/PageLayouts/Features';
import WordPressMigration from 'blocks/zesty/PageLayouts/WordPressMigration';
import CaseStudyCards from 'blocks/zesty/Cards/CaseStudyCards';
import TechStack from 'blocks/integrations/TechStack';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function HeadlessCmsEnterprise({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.h1_title,
    description: content.hero_description,
    image:
      (content.hero_image?.data && content.hero_image?.data[0]?.url) ||
      FillerContent.image,
    cta_left: content.cta_button_hero,
    cta_right: content.cta_button_hero_secondary?.data[0]?.button_text,
    cta_right_url:
      content.cta_button_hero_secondary?.data[0]?.internal_link?.data[0]?.meta
        ?.web?.url,
  };

  const integrateProps = [
    {
      content: content.solution_1,
      image: content.solution_1_image?.data[0]?.url,
    },
    {
      content: content.solution_2,
      image: content.solution_2_image?.data[0]?.url,
    },
    {
      content: content.solution_3,
      image: content.solution_3_image?.data[0]?.url,
    },
    {
      content: content.solution_4,
      image: content.solution_4_image?.data[0]?.url,
    },
  ];

  const featuresData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.icon_image && item.icon_image?.data[0]?.url,
          feature_name: item.feature_name,
          content: item.content,
        });

        return acc;
      }, []) || []
    );
  };

  const getData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.benefit_image?.data[0].url,
          title: item.header,
          content: item.benefit_content,
          url: item.link?.data[0]?.meta?.web?.uri || FillerContent.href,
        });

        return acc;
      }, []) || []
    );
  };

  const howItWorksProps = {
    title: content.how_it_works,
    data: getData(content.how_it_works_data),
    imageWidth: 294,
    imageHeight: 179,
    backgroundColor: theme.palette.zesty.pureWhite,
    marginTop: 10,
    marginBottom: 10,
  };

  const whyZestyProps = {
    textHighlight: content.why_zesty_eyebrow,
    features_header: content.why_zesty_title,
    card_name_color: theme.palette.zesty.zestyZambezi,
    background_color: theme.palette.zesty.zestyWhite,
    data: featuresData(content.why_zesty_features),
  };

  const wordpressMigrationProps = {
    titleAndDescription: content.migration,
    mainImage: content?.migration_graphic?.data[0].url,
  };

  const monolithIntegrationProps = {
    graphic: content?.monolith_integration_graphic?.data[0]?.url,
    titleAndDescription: content.monolith_integration,
    cta_text: content.monolith_integration_primary_cta?.data[0]?.button_text,
    cta_button_link:
      content.monolith_integration_primary_cta?.data[0]?.internal_link?.data[0]
        ?.meta?.web?.url,
    graphicBottom: -30,
  };

  const caseStudiesProps = {
    header: content.case_studies_title,
    caseStudiesData: content.case_studies?.data,
    caseStudiesBackground: theme.palette.zesty.pureWhite,
  };

  const integrationsProps = {
    text_content: content.integration,
    cta_text: content.integrations_cta?.data[0]?.button_text,
    cta_link: content.integrations_cta?.data[0]?.external_link,
    logos: content.integrations_logo?.data,
    headerColor: theme.palette.zesty.zestyZambezi,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const bottomProps = {
    graphic: content?.bottom_graphic?.data[0]?.url,
    titleAndDescription: content.bottom_description,
    cta_text: content.bottom_primary_cta?.data[0]?.button_text,
    cta_button_link: content.bottom_cta_button_link?.data[0]?.external_link,
    secondary_cta_text:
      content.bottom_secondary_cta_button?.data[0]?.button_text,
    secondary_cta_link:
      content.bottom_secondary_cta_button?.data[0]?.internal_link?.data[0]?.meta
        ?.web?.url,
    graphicBottom: -30,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <SimpleCardLogo
        heading_text={content?.logos_title}
        logoItems={content?.customer_logos?.data}
      />
      <AlternateColumns
        header_content={content.section_1_title}
        column_data={integrateProps}
      />
      <CardsInContainer {...howItWorksProps} />
      <Features {...whyZestyProps} />
      <WordPressMigration {...wordpressMigrationProps} />
      <Bottom {...monolithIntegrationProps} />
      <CaseStudyCards {...caseStudiesProps} />
      <TechStack {...integrationsProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default HeadlessCmsEnterprise;
