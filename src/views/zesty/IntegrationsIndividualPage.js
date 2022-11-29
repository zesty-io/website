/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Integrations-Individual Pages 
 * Name: integrations_individual_pages 
 * Model ZUID: 6-88e5918e85-tmg13p
 * File Created On: Thu Apr 07 2022 01:46:58 GMT+0800 (Philippine Standard Time)
 * * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (text)
 * cta_primary_text (text)
 * cta_secondary_text (text)
 * integration_benefits_h2 (text)
 * integration_benefits (one_to_many)
 * feature_description_1 (wysiwyg_basic)
 * feature_description_2 (wysiwyg_basic)
 * feature_description_3 (wysiwyg_basic)
 * testimonial (one_to_one)
 * logos_title (text)
 * logos (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-88e5918e85-tmg13p
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

/**
 * Fillers Imports
 */
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FillerContent from 'components/globals/FillerContent';
import Resources from 'components/marketing/IntegrationsIndividualPage/Resources';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import CardsInContainer from 'blocks/cards/CardsInContainer';
import Feature from 'components/marketing/IntegrationsIndividualPage/Feature';
import ResourcesCards from 'components/marketing/IntegrationsIndividualPage/ResourcesCards';
import { WithHighlightedCard } from 'blocks/testimonials';
import Bottom from 'components/marketing/IntegrationsIndividualPage/Bottom';

function IntegrationsIndividualPage({ content }) {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
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

  const testimonialsData = {
    title: content.testimonial_title,
    data: content.testimonials_carousel?.data,
  };

  const benefitsData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.graphic_icon?.data[0].url,
          title: item.title,
          content: item.description,
        });

        return acc;
      }, []) || []
    );
  };

  const integrationBenefitsProps = {
    title: content.integration_benefits_h2,
    data: benefitsData(content.integration_benefits),
  };

  const cardData = [
    {
      title: content.page_1 || FillerContent.description,
      icon_image:
        content.page_1_graphic?.data[0]?.url || FillerContent.photos[0].src,
      url: content.page_1_link?.data[0]?.meta?.web?.uri || FillerContent.href,
    },
    {
      title: content.page_2 || FillerContent.description,
      icon_image:
        content.page_2_graphic?.data[0]?.url || FillerContent.photos[0].src,
      url: content.page_2_link?.data[0]?.meta?.web?.uri || FillerContent.href,
    },
    {
      title: content.page_3 || FillerContent.description,
      icon_image:
        content.page_3_graphic?.data[0]?.url || FillerContent.photos[0].src,
      url: content.page_3_link?.data[0]?.meta?.web?.uri || FillerContent.href,
    },
  ];

  const learnMoreProps = {
    title: content.learn_more_title,
    data: cardData,
  };

  const headerProps = {
    title: content.hero_h1 || FillerContent.header,
    video: content.video_link || FillerContent.image,
    description: content.hero_description || FillerContent.description,
    integrationLogo: content.next_js_logo?.data[0]?.url,
    cta_left: content.cta_primary_text || FillerContent.cta,
    cta_right: content.cta_secondary_text || FillerContent.cta,
    cta_right_url:
      content.secondary_cta_link?.data[0]?.meta?.web?.uri || FillerContent.href,
    backgroundColor: theme.palette.zesty.zestyDarkBlue,
    isDarkBackground: true,
    isCodeBlock: true,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtonsPage {...headerProps} />
      <Resources {...pageData} />
      <SimpleCardLogo
        heading_text={content?.logos_title}
        logoItems={content?.logos?.data}
      />
      <CardsInContainer {...integrationBenefitsProps} />
      <Feature {...pageData} />
      <ResourcesCards {...pageData} />
      <WithHighlightedCard {...testimonialsData} />
      <Bottom {...pageData} />
      <CardsInContainer {...learnMoreProps} />
      {/* <NewsLetterSubscription {...pageData} /> */}
    </>
  );
}

export default IntegrationsIndividualPage;
