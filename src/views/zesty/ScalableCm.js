/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Scalable CMS 
 * Name: scalable_cms 
 * Model ZUID: 6-fecf91e7e6-40xgbb
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_title_and_description (wysiwyg_basic)
 * header_graphic (images)
 * benefits_title (wysiwyg_basic)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * why_zesty (wysiwyg_basic)
 * features_tiles (one_to_many)
 * bottom_cta (wysiwyg_basic)
 * background_graphic_header (images)
 * background_graphic_2 (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-fecf91e7e6-40xgbb
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
import Features from 'blocks/zesty/PageLayouts/Features';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function ScalableCm({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header_title_and_description,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.header_primary_cta?.data[0]?.button_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyBackgroundBlueGradient,
  };

  const alternateColumnsData = [
    {
      content: content?.benefit_1,
      image: content?.benefit_1_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_2,
      image: content?.benefit_2_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_3,
      image: content?.benefit_3_graphic?.data[0]?.url,
    },
  ];

  const benefitsProps = {
    header_content: content?.benefits_title,
    column_data: alternateColumnsData,
    cta_link: content?.middle_cta_button_link?.data[0]?.meta.web.uri,
    cta_text: content?.middle_cta_button_text,
  };

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

  const whyZestyProps = {
    features_header: content.why_zesty,
    background_color: theme.palette.zesty.zestyWhite,
    data: featuresData(content.features_tiles),
  };

  const bottomProps = {
    graphic: content?.background_graphic_header?.data[0]?.url,
    titleAndDescription: content.bottom_cta,
    cta_text: content.bottom_primary_cta?.data[0]?.button_text,
    cta_button_link: content.bottom_primary_cta?.data[0]?.external_link,
    secondary_cta_text: content.bottom_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.bottom_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -42,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <AlternateColumns {...benefitsProps} />
      <Features {...whyZestyProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default ScalableCm;
