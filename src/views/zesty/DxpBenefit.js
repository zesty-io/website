/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: DXP Benefits 
 * Name: dxp_benefits 
 * Model ZUID: 6-c48bd087c0-5xvl6s
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * h1_title (text)
 * hero_description (textarea)
 * hero_graphic (images)
 * what_is (wysiwyg_basic)
 * what_is_graphic (images)
 * benefit_1 (wysiwyg_basic)
 * benefit_title_and_description (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * benefit_4 (wysiwyg_basic)
 * benefit_4_graphic (images)
 * benefit_5 (wysiwyg_basic)
 * benefit_5_graphic (images)
 * benefit_6 (wysiwyg_basic)
 * benefit_6_graphic (images)
 * businesses_title (text)
 * business_type_1 (wysiwyg_basic)
 * business_type_1_graphic (images)
 * business_type_2 (wysiwyg_basic)
 * business_type_2_graphic (images)
 * business_type_3 (wysiwyg_basic)
 * business_type_3_graphic (images)
 * business_type_4 (wysiwyg_basic)
 * business_type_4_graphic (images)
 * case_studies_title (text)
 * case_studies (one_to_many)
 * why_zesty (wysiwyg_basic)
 * why_zesty_graphic (images)
 * benefit_7 (wysiwyg_basic)
 * benefit_7_graphic (images)
 * benefit_8 (wysiwyg_basic)
 * benefit_8_graphic (images)
 * benefit_9 (wysiwyg_basic)
 * benefit_9_graphic (images)
 * benefit_10 (wysiwyg_basic)
 * benefit_10_graphic (images)
 * comparison_graphic_title (text)
 * comparison_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c48bd087c0-5xvl6s
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
import HeadlessVsTraditionalCms from 'components/marketing/DxpBenefits/HeadlessVsTraditionalCms';
import TabContent from 'blocks/zesty/TabContent/TabContent.js';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function DxpBenefit({ content }) {
  const theme = useTheme();

  const COLORS = [
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
    {
      backgroundColor: theme.palette.zesty.pureWhite,
      textColor: theme.palette.zesty.zestyZambezi,
    },
  ];

  const heroProps = {
    title: content.h1_title,
    description: content.hero_description,
    image: content.hero_graphic?.data[0]?.url,
    cta_left: content.primary_cta_text,
    cta_right: content.secondary_cta?.data[0]?.button_text,
    cta_right_url:
      content.secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web?.url,
  };

  const headlessCmsProps = {
    header: content.what_is,
    mainImage: content.what_is_graphic?.data[0]?.url,
    backgroundColor: theme.palette.zesty.zestyWhite,
    marginTop: 5,
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
    {
      content: content?.benefit_4,
      image: content?.benefit_4_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_5,
      image: content?.benefit_5_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_6,
      image: content?.benefit_6_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_7,
      image: content?.benefit_7_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_8,
      image: content?.benefit_8_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_9,
      image: content?.benefit_9_graphic?.data[0]?.url,
    },
    {
      content: content?.benefit_10,
      image: content?.benefit_10_graphic?.data[0]?.url,
    },
  ];

  const whatCanDoProps = {
    header_content: content?.benefit_title_and_description,
    column_data: alternateColumnsData,
  };

  const comparisonData = [
    {
      content: content.comparison_1,
    },
    {
      content: content.comparison_2,
    },
    {
      content: content.comparison_3,
    },
    {
      content: content.comparison_4,
    },
    {
      content: content.comparison_5,
    },
  ];

  const vsProps = {
    header: content.comparison_graphic_title,
    data: comparisonData,
  };

  const headerRegex = /\>(.*?)\</;

  const tabData = [
    {
      id: 0,
      icon:
        content.business_type_1_icon?.data[0]?.url ||
        FillerContent.logos[0].url,
      text: content.business_type_1 || FillerContent.description,
      subText:
        content.business_type_1?.match(headerRegex)[1] ||
        FillerContent.description,
      img: content.business_type_1_graphic,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 1,
      icon:
        content.business_type_2_icon?.data[0]?.url ||
        FillerContent.logos[0].url,
      text: content.business_type_2 || FillerContent.description,
      subText:
        content.business_type_2?.match(headerRegex)[1] ||
        FillerContent.description,
      img: content.business_type_2_graphic,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 2,
      icon:
        content.business_type_3_icon?.data[0]?.url ||
        FillerContent.logos[0].url,
      text: content.business_type_3 || FillerContent.description,
      subText:
        content.business_type_3?.match(headerRegex)[1] ||
        FillerContent.description,
      img: content.business_type_3_graphic,
      ctaName: 'Learn More',
      href: '',
    },
    {
      id: 3,
      icon:
        content.business_type_4_icon?.data[0]?.url ||
        FillerContent.logos[0].url,
      text: content.business_type_4 || FillerContent.description,
      subText:
        content.business_type_4?.match(headerRegex)[1] ||
        FillerContent.description,
      img: content.business_type_4_graphic,
      ctaName: 'Learn More',
      href: '',
    },
  ];

  const businessTypeProps = {
    header: content.businesses_title,
    data: tabData,
    marginTop: 10,
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

  const splitHeader = (p, start, deleteCount) => {
    var paragraph;
    if (p) {
      paragraph = (
        p.split('</h2>').splice(start, deleteCount).join('</h2>') + '</h2>'
      ).replace(/\<\/h2> *\<\/h2>/g, '</h2>');
    }

    return paragraph;
  };

  const whyZestyData = [
    {
      content: splitParagraph(content?.why_zesty, 0, 1),
      image: content?.why_zesty_graphic?.data[0]?.url,
    },
    {
      content: splitParagraph(content?.why_zesty, 1, 3),
      image: content?.why_zesty_graphic?.data[1]?.url,
    },
  ];

  const whyZestyProps = {
    header_content: splitHeader(content.why_zesty, 0, 1),
    column_data: whyZestyData,
    alternateColors: COLORS,
  };

  const bottomData = {
    graphic: content?.bottom_graphic?.data[0]?.url,
    titleAndDescription: content.bottom_content,
    cta_text: content.bottom_primary_cta?.data[0]?.button_text,
    cta_button_link: content.bottom_primary_cta?.data[0]?.external_link,
    secondary_cta_text: content.bottom_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.bottom_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -22,
    marginTop: 5,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <CenteredContents {...headlessCmsProps} />
      <AlternateColumns {...whatCanDoProps} />
      <HeadlessVsTraditionalCms {...vsProps} />
      <TabContent {...businessTypeProps} />
      <AlternateColumns {...whyZestyProps} />
      <Bottom {...bottomData} />
    </>
  );
}

export default DxpBenefit;
