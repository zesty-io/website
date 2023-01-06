/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless SEO 
 * Name: headless_seo 
 * Model ZUID: 6-d8a3c1f48c-ztbs3n
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header (wysiwyg_basic)
 * header_graphic (images)
 * explanation_paragraph (wysiwyg_basic)
 * cta_text (text)
 * benefits_header (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * why_zesty (wysiwyg_basic)
 * why_zesty_1 (wysiwyg_basic)
 * why_zesty_1_graphic (images)
 * why_zesty_2 (wysiwyg_basic)
 * why_zesty_2_graphic (images)
 * why_zesty_3 (wysiwyg_basic)
 * why_zesty_3_graphic (images)
 * why_zesty_4 (wysiwyg_basic)
 * why_zesty_4_graphic (images)
 * implementing (wysiwyg_basic)
 * implementing_graphic (images)
 * bottom_cta (wysiwyg_basic)
 * bottom_cta_text (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-d8a3c1f48c-ztbs3n
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
import CenteredContents from 'blocks/contentBlocks/CenteredContents';
import Benefits from 'blocks/benefits/Benefits';
import CardsInContainer from 'blocks/zesty/Cards/CardsInContainer';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function HeadlessSeo({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header,
    image:
      (content.header_graphic?.data && content.header_graphic?.data[0]?.url) ||
      FillerContent.image,
    cta_left: content.cta_text,
    backgroundColor: theme.palette.zesty.zestyBackgroundOrangeGradient,
  };

  const aboutData = [
    {
      content: content.explanation_paragraph,
      icon_image: content.explanation_graphic?.data[0]?.url,
    },
  ];

  const aboutProps = {
    data: aboutData,
    marginTop: 0,
  };

  const benefitsData = [
    {
      title: content?.benefit_1,
      icon_image: content?.benefit_1_graphic?.data[0]?.url,
      borderColor: theme.palette.zesty.zestyBlue,
    },
    {
      title: content?.benefit_2,
      icon_image: content?.benefit_2_graphic?.data[0]?.url,
      borderColor: theme.palette.zesty.zestyOrange,
    },
    {
      title: content?.benefit_3,
      icon_image: content?.benefit_3_graphic?.data[0]?.url,
      borderColor: theme.palette.zesty.zestyTealWhite,
    },
  ];

  const benefitsProps = {
    title: content.benefits_header,
    data: benefitsData,
    itemTitleColor: theme.palette.zesty.zestyOrange,
    imageWidth: 294,
    imageHeight: 179,
    backgroundColor: theme.palette.zesty.pureWhite,
    marginTop: 0,
  };

  const whyZestyData = [
    {
      content: content?.why_zesty_1,
      image: content?.why_zesty_1_graphic?.data[0]?.url,
    },
    {
      content: content?.why_zesty_2,
      image: content?.why_zesty_2_graphic?.data[0]?.url,
    },
    {
      content: content?.why_zesty_3,
      image: content?.why_zesty_3_graphic?.data[0]?.url,
    },
    {
      content: content?.why_zesty_4,
      image: content?.why_zesty_4_graphic?.data[0]?.url,
    },
  ];

  const whyZestyProps = {
    header_content: content.why_zesty,
    column_data: whyZestyData,
  };

  const splitParagraph = (p, start, deleteCount) => {
    var paragraph;
    if (p) {
      paragraph = (
        p.split('</p>').splice(start, deleteCount).join('</p>') + '</p>'
      ).replace(/\<\/p> *\<\/p>/g, '</p>');
    }

    return paragraph;
  };

  const implementingSeoProps = {
    header: splitParagraph(content.implementing, 0, 1),
    bottomContent: splitParagraph(content.implementing, 1, 1),
    mainImage: content.implementing_graphic?.data[0]?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const bottomData = {
    graphic: content?.bottom_graphic?.data[0]?.url,
    titleAndDescription: content.bottom_cta || FillerContent.rich_text,
    cta_text: content.bottom_cta_text || FillerContent.cta,
    secondary_cta_text: content.bottom_cta_secondary_text || FillerContent.cta,
    secondary_cta_link:
      content.bottom_cta_secondary_url?.data[0]?.meta.web.uri ||
      FillerContent.href,
    graphicBottom: -32,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <Benefits {...aboutProps} />
      <CardsInContainer {...benefitsProps} />
      <AlternateColumns {...whyZestyProps} />
      <CenteredContents {...implementingSeoProps} />
      <Bottom {...bottomData} />
    </>
  );
}

export default HeadlessSeo;
