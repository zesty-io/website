/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless localization 
 * Name: headless_localization 
 * Model ZUID: 6-ee89a9ecc8-n5f7nv
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_and_description (wysiwyg_basic)
 * header_graphic (images)
 * how_title (text)
 * how_1 (wysiwyg_basic)
 * how_1_graphic (images)
 * how_2 (wysiwyg_basic)
 * how_2_graphic (images)
 * how_3 (wysiwyg_basic)
 * how_3_graphic (images)
 * how_4 (wysiwyg_basic)
 * how_4_graphic (images)
 * why_title (text)
 * features_tiles (one_to_many)
 * footer_cta (wysiwyg_basic)
 * how_5 (wysiwyg_basic)
 * how_5_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ee89a9ecc8-n5f7nv
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
import Features from 'blocks/zesty/PageLayouts/Features';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function HeadlessLocalization({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header_and_description,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.header_primary_cta?.data[0]?.button_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
  };

  const alternateColumnsData = [
    {
      content: content?.how_1,
      image: content?.how_1_graphic?.data[0]?.url,
    },
    {
      content: content?.how_2,
      image: content?.how_2_graphic?.data[0]?.url,
    },
    {
      content: content?.how_3,
      image: content?.how_3_graphic?.data[0]?.url,
    },
    {
      content: content?.how_4,
      image: content?.how_4_graphic?.data[0]?.url,
    },
    {
      content: content?.how_5,
      image: content?.how_5_graphic?.data[0]?.url,
    },
  ];

  const whatCanDoProps = {
    header_content: content?.how_title,
    column_data: alternateColumnsData,
    cta_link: content?.middle_cta_button_link?.data[0].meta.web.uri,
    cta_text: content?.middle_cta_button_text,
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

  const featuresProps = {
    features_header: content.why_title,
    data: featuresData(content.features_tiles),
    card_name_color: theme.palette.zesty.zestyZambezi,
    background_color: theme.palette.zesty.zestyBackgroundBlue,
  };

  const bottomProps = {
    graphic: content?.footer_graphic?.data[0]?.url,
    titleAndDescription: content.footer_cta,
    cta_text: content.footer_primary_cta?.data[0]?.button_text,
    cta_button_link:
      content.footer_primary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    secondary_cta_text: content.footer_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.footer_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -42,
    // marginTop: 20,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <AlternateColumns {...whatCanDoProps} />
      <Features {...featuresProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default HeadlessLocalization;
