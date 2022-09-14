/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Agency Partners
 * Name: agency_partners
 * Model ZUID: 6-dcddf2b6b7-hdsjv3
 * File Created On: Thu Mar 03 2022 11:27:11 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dcddf2b6b7-hdsjv3
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import TwoRowsHero from 'blocks/zesty/Hero/TwoRowsHero';
import SimpleCardLogo from 'blocks/zesty/SimpleCardLogo/SimpleCardLogo';
import WhyZesty from 'blocks/zesty/WhyZesty/WhyZesty';
import Testimonials from 'blocks/testimonials/TestimonialsSlider/Testimonials';
import Features from 'blocks/zesty/Features/Features';
import TechStack from 'blocks/integrations/TechStack';
import Bottom from 'components/marketing/AgencyPartner.js/Bottom';

function AgencyPartner({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sx'));
  const isMedium = useMediaQuery(theme.breakpoints.down('md'));
  const isLarge = useMediaQuery(theme.breakpoints.down('lg'));
  const isExtraLarge = useMediaQuery(theme.breakpoints.down('xl'));
  const isDarkMode = theme.palette.mode === 'dark';

  const pageData = {
    theme,
    isSmall,
    isMedium,
    isLarge,
    isExtraLarge,
    isDarkMode,
    content,
    FillerContent,
  };

  const whyZestyData = [
    {
      text: content.why_zesty_1 || FillerContent.description,
      image:
        content.why_zesty_1_image.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_2 || FillerContent.description,
      image:
        content.why_zesty_2_image.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_3 || FillerContent.description,
      image:
        content.why_zesty_3_image.data[0]?.url || FillerContent.photos[0].url,
    },
    {
      text: content.why_zesty_4 || FillerContent.description,
      image:
        content.why_zesty_4_image.data[0]?.url || FillerContent.photos[0].url,
    },
  ];

  const testimonialsData = {
    title: content.testimonial_title,
    data: content.testimonials?.data,
  };

  const feature_data =
    content.partner_program_features?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.graphic?.data[0].url,
        feature_name: item.title,
        content: item.description,
      });

      return acc;
    }, []) || [];

  const techStackData = {
    text_content: content.looking_for_partner,
    logos: content.partner_logos?.data,
    cta_text: content.looking_button,
    cta_link: content.looking_button_link,
  };

  console.log(content);

  return (
    <>
      <TwoRowsHero
        header={content.header_title_and_description}
        eyebrow={content.title}
        primaryCta={content.cta_button_primary}
        primaryCta_link={content.cta_button_primary_link}
        secondaryCta={content.cta_button_secondary}
        secondaryCta_link={content.cta_button_secondary_link}
        heroImage={content.header_image.data[0].url}
      />
      <SimpleCardLogo logoItems={content.client_logos.data} {...pageData} />
      <WhyZesty
        header={content.why_zesty_}
        {...pageData}
        whyZestyData={whyZestyData}
      />
      <Testimonials {...testimonialsData} />
      <Features
        background="zesty"
        header_size={32}
        textHighlight={'Workflow management'}
        data={feature_data}
        features_header={content.features_title}
      />
      <TechStack textHighlight="agency partner?" {...techStackData} />
      <Bottom {...pageData} />
    </>
  );
}

export default AgencyPartner;
