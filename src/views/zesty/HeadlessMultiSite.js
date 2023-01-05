/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless Multi Site 
 * Name: headless_multi_site 
 * Model ZUID: 6-a4f2ed849b-r1cwpc
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_title_description (wysiwyg_basic)
 * header_graphic (images)
 * what_is_multi_site (wysiwyg_basic)
 * what_is_graphic (images)
 * why_zesty_title (text)
 * why_1 (wysiwyg_basic)
 * why_1_graphic (images)
 * why_2 (wysiwyg_basic)
 * why_2_graphic (images)
 * why_3 (wysiwyg_basic)
 * why_3_graphic (images)
 * what_header (wysiwyg_basic)
 * what_1 (wysiwyg_basic)
 * what_1_graphic (images)
 * what_2 (wysiwyg_basic)
 * what_2_graphic (images)
 * what_3 (wysiwyg_basic)
 * what_3_graphic (images)
 * how_title (text)
 * how_1 (wysiwyg_basic)
 * how_1_graphic (images)
 * how_2 (wysiwyg_basic)
 * how_2_graphic (images)
 * how_3 (wysiwyg_basic)
 * how_3_graphic (images)
 * features_title (text)
 * footer_cta_button (text)
 * footer_cta_text (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a4f2ed849b-r1cwpc
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
import WhatIsMultiSite from 'components/marketing/HeadlessMultiSite/WhatIsMultiSite';
import CardsInContainer from 'blocks/zesty/Cards/CardsInContainer';
import Features from 'blocks/zesty/PageLayouts/Features';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import Growth from 'blocks/zesty/Growth/Growth';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function HeadlessMultiSite({ content }) {
  const theme = useTheme();

  const heroProps = {
    title: content.header_title_description,
    description: content.header_description,
    image: content.header_graphic?.data[0]?.url,
    cta_left: content.primary_cta_text || FillerContent.cta,
    cta_right: content.secondary_cta?.data[0]?.button_text || FillerContent.cta,
    cta_right_url:
      content.secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const whatIsMultiSiteProps = {
    content: content.what_is_multi_site,
  };

  const whyChooseData = [
    {
      title: content?.why_1,
      icon_image: content?.why_1_graphic?.data[0]?.url,
    },
    {
      title: content?.why_2,
      icon_image: content?.why_2_graphic?.data[0]?.url,
    },
    {
      title: content?.why_3,
      icon_image: content?.why_3_graphic?.data[0]?.url,
    },
  ];

  const whyChooseProps = {
    title: content.why_zesty_title,
    data: whyChooseData,
    imageWidth: 300,
    imageHeight: 187.73,
    marginTop: 15,
  };

  const alternateColumnsData = [
    {
      content: content?.what_1,
      image: content?.what_1_graphic?.data[0]?.url,
    },
    {
      content: content?.what_2,
      image: content?.what_2_graphic?.data[0]?.url,
    },
    {
      content: content?.what_3,
      image: content?.what_3_graphic?.data[0]?.url,
    },
  ];

  const whatCanDoProps = {
    header_content: content?.what_header,
    column_data: alternateColumnsData,
    cta_link: content?.middle_cta_button_link?.data[0]?.meta.web.uri,
    cta_text: content?.middle_cta_button_text,
  };

  const growthData = [
    {
      feature_name: content?.how_3,
      icon_image: content?.how_3_graphic,
    },
    {
      feature_name: content?.how_2,
      icon_image: content?.how_2_graphic,
    },
    {
      feature_name: content?.how_1,
      icon_image: content?.how_1_graphic,
    },
  ];

  const growthProps = {
    background: content?.growth_background?.data[0]?.url || '',
    titleAndDescription: content.how_title || FillerContent.rich_text,
    cards: growthData,
    cardWidth: 450,
    iconWidth: 236,
    isIconOnTop: true,
    marginTop: 10,
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
    data: featuresData(content.features),
    background: 'zesty',
  };

  const bottomData = {
    graphic: content?.footer_graphic?.data[0]?.url,
    titleAndDescription: content.footer_cta_text,
    cta_text: content.footer_primary_cta?.data[0]?.button_text,
    secondary_cta_text: content.footer_secondary_cta?.data[0]?.button_text,
    secondary_cta_link:
      content.footer_secondary_cta?.data[0]?.internal_link?.data[0]?.meta?.web
        ?.url,
    graphicBottom: -33,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <WhatIsMultiSite {...whatIsMultiSiteProps} />
      <CardsInContainer {...whyChooseProps} />
      <AlternateColumns {...whatCanDoProps} />
      <Growth {...growthProps} />
      <Features {...whyZestyProps} />
      <Bottom {...bottomData} />
    </>
  );
}

export default HeadlessMultiSite;
