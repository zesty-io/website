/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless CMS Multi-lang 
 * Name: headless_cms_multi_lang 
 * Model ZUID: 6-e8dff7d0a0-np3tcx
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_title_and_description (wysiwyg_basic)
 * hero_graphic (images)
 * solution_1 (wysiwyg_basic)
 * solution_1_graphic (images)
 * solution_2 (wysiwyg_basic)
 * solution_2_graphic (images)
 * solution_3 (wysiwyg_basic)
 * solution_3_graphic (images)
 * solution_4 (wysiwyg_basic)
 * solution_4_graphic (images)
 * solution_5 (wysiwyg_basic)
 * solution_5_graphic (images)
 * why_zesty_title (text)
 * why_tiles (one_to_many)
 * bottom_cta (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e8dff7d0a0-np3tcx
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

function HeadlessCmsMultiLang({ content }) {
  const theme = useTheme();

  const heroProps = {
    mainTitle: content.hero_h1,
    title: content.hero_title_and_description,
    description: content.hero_description,
    image: content.hero_graphic?.data[0]?.url,
    cta_left: content.header_primary_cta?.data[0]?.button_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyBackgroundBlueGradient,
  };

  const alternateColumnsData = [
    {
      content: content.solution_1,
      image: content.solution_1_graphic?.data[0].url,
    },
    {
      content: content.solution_2,
      image: content.solution_2_graphic?.data[0].url,
    },
    {
      content: content.solution_3,
      image: content.solution_3_graphic?.data[0].url,
    },
    {
      content: content.solution_4,
      image: content.solution_4_graphic?.data[0].url,
    },
    {
      content: content.solution_5,
      image: content.solution_5_graphic?.data[0].url,
    },
  ];

  const benefitsProps = {
    // header_content: content.what_they_can_do_header,
    isHeaderEnabled: false,
    column_data: alternateColumnsData,
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
    features_header: content.why_zesty_title,
    data: featuresData(content.why_tiles),
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
    graphicBottom: -34,
    marginTop: 10,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <AlternateColumns {...benefitsProps} />
      <Features {...benefitsSection1} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default HeadlessCmsMultiLang;
