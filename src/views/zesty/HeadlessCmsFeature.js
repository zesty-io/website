/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Headless CMS Features
 * Name: headless_cms_features
 * Model ZUID: 6-b0ad9acbea-721hmm
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 *
 * Model Fields:
 *
 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b0ad9acbea-721hmm
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material';

/**
 * Components Imports
 */
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import TechStack from 'blocks/integrations/TechStack';
import Features from 'blocks/zesty/PageLayouts/Features';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function HeadlessCmsFeature({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.hero_description,
    image: content.hero_graphic?.data[0]?.url,
    cta_left: content.header_primary_cta?.data[0]?.button_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

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

  const benefitsSection1 = {
    features_header: content.benefit_section_1_title,
    data: featuresData(content.features_section_1),
  };

  const benefitsSection2 = {
    features_header: content.benefits_section_2_title,
    data: featuresData(content.features_section_2),
    background_color: theme.palette.zesty.zestyBackgroundBlue,
  };

  const benefitsSection3 = {
    features_header: content.benefits_section_3_title,
    data: featuresData(content.features_section_3),
    background_color: theme.palette.zesty.zestyWhite,
  };

  const logoSliderProps = {
    text_content: content.integrations,
    logos: content.integrations_logos?.data,
    cta_text: content.integrations_cta?.data[0]?.button_text,
    cta_link: content.integrations_cta?.data[0]?.external_link,
  };

  const alternateColumnsData = [
    {
      content: content?.what_section_1,
      image: content?.what_section_1_graphic?.data[0]?.url,
    },
    {
      content: content?.what_section_2,
      image: content?.what_section_2_graphic?.data[0]?.url,
    },
    {
      content: content?.what_section_3,
      image: content?.what_section_3_graphic?.data[0]?.url,
    },
  ];

  const COLORS = [
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.zestyLightOrange,
      textColor: theme.palette.common.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.zestyWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
  ];

  const benefitsProps = {
    header_content: content.what_they_can_do_header,
    column_data: alternateColumnsData,
    alternateColors: COLORS,
  };

  const bottomProps = {
    graphic: content?.bottom_graphic?.data[0]?.url,
    titleAndDescription: content.bottom_cta,
    cta_text: content.bottom_primary_cta?.data[0]?.button_text,
    cta_button_link: content.bottom_primary_cta?.data[0]?.external_link,
    secondary_cta_text: content.bottom_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.bottom_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Features {...benefitsSection1} />
      <Features {...benefitsSection2} />
      <Features {...benefitsSection3} />
      <TechStack {...logoSliderProps} />
      <AlternateColumns {...benefitsProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default HeadlessCmsFeature;
