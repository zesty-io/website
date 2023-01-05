/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital governance 
 * Name: digital_governance 
 * Model ZUID: 6-a2d18de8e7-cvf80c
 * File Created On: Wed Aug 10 2022 19:10:04 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header (wysiwyg_basic)
 * header_graphic (images)
 * cta_button_text (text)
 * cta_button_link (internal_link)
 * what_is (wysiwyg_basic)
 * why_header (text)
 * why_1 (wysiwyg_basic)
 * why_1_graphic (images)
 * why_2 (wysiwyg_basic)
 * why_2_graphic (images)
 * why_3 (wysiwyg_basic)
 * why_3_graphic (images)
 * get_started (wysiwyg_basic)
 * get_started_graphic (images)
 * cta_button_2 (text)
 * cta_button_2_link (internal_link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a2d18de8e7-cvf80c
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme, useMediaQuery } from '@mui/material';

/**
 * Components Imports
 */
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import HeadingAndDescription from 'blocks/zesty/HeadingAndDescription/HeadingAndDescription';
import Benefits from 'blocks/benefits/Benefits';
import Bottom from 'blocks/zesty/Bottom/Bottom';

function DigitalGovernance({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  const heroProps = {
    title: content.header,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.cta_button_text,
    cta_right: content.header_secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.header_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    backgroundColor: theme.palette.zesty.zestyBackgroundOrangeGradient,
  };

  const whatIsDigitalGovernanceProps = {
    heading: content.what_is,
    marginTop: 5,
  };

  const benefitData = [
    {
      content: content.why_1,
      icon_image: content.why_1_graphic?.data[0].url,
    },
    {
      content: content.why_2,
      icon_image: content.why_2_graphic?.data[0].url,
    },
    {
      content: content.why_3,
      icon_image: content.why_3_graphic?.data[0].url,
    },
  ];

  const benefitProps = {
    header: content.why_header,
    data: benefitData,
    marginTop: 20,
  };

  const bottomProps = {
    graphic: content?.get_started_graphic?.data[0]?.url,
    titleAndDescription: content.get_started,
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
      <HeadingAndDescription {...whatIsDigitalGovernanceProps} />
      <Benefits {...benefitProps} />
      <Bottom {...bottomProps} />
    </>
  );
}

export default DigitalGovernance;
