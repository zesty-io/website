/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless eCommerce 
 * Name: headless_ecommerce 
 * Model ZUID: 6-b69895e8cf-p4125x

 * File Created On: Tue May 31 2022 23:39:21 GMT+0800 (Philippine Standard Time)

 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (textarea)
 * header_cta_button_primary (text)
 * header_cta_button_secondary (text)
 * header_graphic (images)
 * headless_cms_benefit_description (wysiwyg_basic)
 * headless_cms_benefit_graphic (images)
 * traditional_v_headless_description (wysiwyg_basic)
 * traditional_v_headless_cta (text)
 * traditional_v_headless_link (internal_link)
 * traditional_description (wysiwyg_basic)
 * traditional_graphic (images)
 * headless_description (wysiwyg_basic)
 * headless_graphic (images)
 * headless_ecomm_benefits_header (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * ecomm_integrations_header (text)
 * ecomm_integrations_logos (one_to_many)
 * why_zesty_description (wysiwyg_basic)
 * why_zesty_ecomm_cards (one_to_many)
 * customers (text)
 * customer_logos (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b69895e8cf-p4125x
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
import TradionalVsHeadless from 'components/marketing/HeadlessCommerce/TradionalVsHeadless';
import Benefits from 'blocks/benefits/Benefits';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import Features from 'blocks/zesty/PageLayouts/Features';
import ImageWithContentsCta from 'blocks/zesty/Cta/ImageWithContentsCta';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

function HeadlessEcommerce({ content }) {
  const theme = useTheme();

  const heroProps = {
    mainTitle: content.header_eyebrow,
    title: content.header_h1,
    description: content.header_description,
    image:
      (content.header_graphic?.data && content.header_graphic?.data[0]?.url) ||
      FillerContent.image,
    cta_left: content.header_cta_button_primary || FillerContent.cta,
    cta_right: content.header_cta_button_secondary || FillerContent.cta,
    cta_right_url: content.header_cta_link_secondary?.data[0]?.meta?.web?.url,
    backgroundColor: theme.palette.zesty.zestyOrangeRadialGradient,
  };

  const implementingSeoProps = {
    header: content.headless_cms_benefit_description,
    mainImage: content.headless_cms_benefit_graphic?.data[0]?.url,
  };

  const tradionalVsHeadlessProps = {
    header: content.traditional_v_headless_description,
    traditionalImage: content.traditional_graphic?.data[0]?.url,
    traditionalDescription: content.traditional_description,
    headlessImage: content.headless_graphic?.data[0]?.url,
    headlessDescription: content.headless_description,
    primaryCtaText: content.traditional_v_headless_cta,
    primaryCtaLink:
      content.traditional_v_headless_link?.data[0]?.meta?.web?.url,
  };

  const benefitsData = [
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
  ];

  const benefitsProps = {
    header: content.headless_ecomm_benefits_header,
    data: benefitsData,
  };

  const integrationLogo =
    content.integration_logos?.data.reduce((acc, item) => {
      acc.push({
        customer_logo: item.logo,
      });

      return acc;
    }, []) || [];

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

  const whyZestyProps = {
    features_header: content.why_zesty_description,
    data: featuresData(content.why_zesty_ecomm_cards),
    background_color: theme.palette.zesty.zestyWhite,
    marginTop: 15,
  };

  const bottomProps = {
    mainImage: content.bottom_cta_graphic.data[0].url,
    header: content.bottom_cta_description,
    headerColor: theme.palette.zesty.zestyZambezi,
    primaryCtaText: content.bottom_cta_primary,
    secondaryCtaText: content.bottom_cta_secondary,
    secondaryCtaLink:
      content.bottom_cta_secondary_link?.data[0]?.meta?.web?.url,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <CenteredContents {...implementingSeoProps} />
      <TradionalVsHeadless {...tradionalVsHeadlessProps} />
      <Benefits {...benefitsProps} />
      <SimpleCardLogo
        heading_text={content?.ecomm_integrations_header}
        logoItems={integrationLogo}
      />
      <Features {...whyZestyProps} />
      <SimpleCardLogo
        heading_text={content?.customers}
        logoItems={content.customer_logos.data}
        marginTop={10}
      />
      <ImageWithContentsCta {...bottomProps} sx={{ mt: 10 }} />
    </>
  );
}

export default HeadlessEcommerce;
