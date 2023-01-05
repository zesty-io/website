/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: CDN Hosting 
 * Name: cdn_hosting 
 * Model ZUID: 6-ca81d1fdf3-vf07cl
 * File Created On: Wed Aug 10 2022 19:10:04 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header (wysiwyg_basic)
 * header_graphic (images)
 * cta_button (text)
 * cta_button_link (internal_link)
 * what_is (wysiwyg_basic)
 * what_is_graphic (images)
 * benefits_title (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * benefit_4 (wysiwyg_basic)
 * benefit_4_graphic (images)
 * cta_content (wysiwyg_basic)
 * cta_button_2 (text)
 * cta_button_2_link (internal_link)
 * cta_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ca81d1fdf3-vf07cl
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
import HeadingAndDescription from 'blocks/zesty/HeadingAndDescription/HeadingAndDescription';
import Benefits from 'blocks/benefits/Benefits';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function CdnHosting({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.cta_button,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const whatIsCdnProps = {
    heading: content.what_is,
    marginTop: 5,
  };

  const benefitData = [
    {
      content: content.benefit_1,
      icon_image: content.benefit_1_graphic?.data[0].url,
    },
    {
      content: content.benefit_2,
      icon_image: content.benefit_2_graphic?.data[0].url,
    },
    {
      content: content.benefit_3,
      icon_image: content.benefit_3_graphic?.data[0].url,
    },
    {
      content: content.benefit_4,
      icon_image: content.benefit_4_graphic?.data[0].url,
    },
  ];

  const benefitProps = {
    header: content.benefits_title,
    data: benefitData,
    marginTop: 20,
  };

  const bottomProps = {
    graphic: content?.cta_graphic?.data[0]?.url,
    titleAndDescription: content.cta_content,
    cta_text: content.bottom_primary_cta?.data[0]?.button_text,
    cta_button_link: content.bottom_primary_cta?.data[0]?.external_link,
    secondary_cta_text: content.bottom_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.bottom_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -30,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <HeadingAndDescription {...whatIsCdnProps} />
      <Benefits {...benefitProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default CdnHosting;
