/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless Mobile 
 * Name: headless_mobile 
 * Model ZUID: 6-aa8c89f8a1-18dzf9
 * File Created On: Wed Aug 10 2022 19:10:04 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header (wysiwyg_basic)
 * header_graphic (images)
 * header_cta (text)
 * header_cta_link (internal_link)
 * why_ (wysiwyg_basic)
 * why_graphic (images)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * features_title (text)
 * features_tiles (one_to_many)
 * cta_footer (wysiwyg_basic)
 * cta_button_2 (text)
 * cta_button_2_link (internal_link)
 * footer_image (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-aa8c89f8a1-18dzf9
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
import Benefits from 'blocks/benefits/Benefits';
import Features from 'blocks/zesty/PageLayouts/Features';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function HeadlessMobile({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.header_cta,
    cta_right: content.header_secondary_cta,
    cta_right_url: content.header_cta_link?.data[0]?.meta?.web?.url,
  };

  const alternateColumnsData = [
    {
      content: content?.benefit_1,
      icon_image: content?.benefit_1_graphic?.data[0]?.url,
    },

    {
      content: content?.benefit_2,
      icon_image: content?.benefit_2_graphic?.data[0]?.url,
    },

    {
      content: content?.benefit_3,
      icon_image: content?.benefit_3_graphic?.data[0]?.url,
    },
  ];

  const benefitsProps = {
    header: content.why_,
    headerBackgroundColor: theme.palette.zesty.zestyBackgroundBlue,
    headerTextAlign: 'left',
    data: alternateColumnsData,
  };

  /* Taking the data from the content model and converting it into a format that the Features component can use. */
  const featuresData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.icon_image?.data[0]?.url,
          feature_name: item.feature_name,
          content: item.content,
        });

        return acc;
      }, []) || []
    );
  };

  const whyZestyProps = {
    features_header: content.features_title,
    data: featuresData(content.features_tiles),
    background_color: theme.palette.zesty.zestyWhite,
  };

  const bottomData = {
    graphic: content?.footer_image?.data[0]?.url,
    titleAndDescription: content.cta_footer,
    cta_text: content.cta_button_primary,
    secondary_cta_text: content.cta_button_secondary?.data[0]?.button_text,
    secondary_cta_link:
      content.cta_button_secondary?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -38,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Benefits {...benefitsProps} />
      <Features {...whyZestyProps} />
      <Bottom {...bottomData} />
    </>
  );
}

export default HeadlessMobile;
