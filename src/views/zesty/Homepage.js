/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Homepage
 * Name: homepage
 * Model ZUID: 6-31079c-vdg69q
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * title (text)
 * content (wysiwyg_advanced)
 * image (images)
 * customer_logo_heading (text)
 * main_headline (text)
 * main_description (wysiwyg_advanced)
 * og_image (images)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-31079c-vdg69q
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 * MUI Imports
 */
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 * Components Imports
 */
// import Hero from 'components/marketing/Homepage/Hero';
import SimpleHeroWithImageAndCtaButtons from 'blocks/zesty/Hero/SimpleHeroWithImageAndCtaButtons';
import SimpleCardLogo from 'blocks/zesty/LogoGrid/SimpleCardLogo';
import CardsInContainer from 'blocks/zesty/Cards/CardsInContainer';
import Growth from 'blocks/zesty/Growth/Growth';
import CaseStudyCards from 'blocks/zesty/Cards/CaseStudyCards';
import LogoSlider from 'blocks/zesty/Slider/LogoSlider';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';
import AlternateColumns from 'blocks/zesty/PageLayouts/AlternateColumns';
import WithHighlightedCard from 'blocks/zesty/Testimonials/WithHighlightedCard';
import Dashboard from 'components/accounts/dashboard';
import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import AOS from 'aos';
import { useEffect } from 'react';

function Homepage({ content }) {
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

  const testimonialsData = {
    title: content.testimonials_content,
    data: content.testimonials?.data,
  };

  useEffect(() => {
    AOS.init({
      disable: isMedium,
    });
  }, [isMedium]);

  if (content?.zesty?.isAuthenticated) {
    return <Dashboard />;
  }

  const getData = (dataArray) => {
    return (
      dataArray?.data?.reduce((acc, item) => {
        acc.push({
          icon_image: item.graphic?.data[0].url,
          title: item.product_name,
          content: item.product_description,
          url: item.link?.data[0]?.meta?.web?.uri || FillerContent.href,
        });

        return acc;
      }, []) || []
    );
  };

  const heroProps = {
    mainTitle: content.header_title_main,
    title: content.header_title_and_description || FillerContent.header,
    image:
      (content.header_graphic?.data && content.header_graphic?.data[0]?.url) ||
      FillerContent.image,
    cta_left: content.hero_button_left || FillerContent.cta,
    cta_right: content.hero_button_right || FillerContent.cta,
    cta_left_url:
      (content.hero_button_left_link?.data &&
        content.hero_button_left_link?.data[0]?.meta?.web?.url) ||
      FillerContent.href,
    cta_right_url:
      (content.hero_button_right_link.data &&
        content.hero_button_right_link?.data[0]?.meta?.web?.url) ||
      FillerContent.href,
  };

  const digitalExperienceProps = {
    title: content.product_title_and_description,
    data: getData(content.product_options),
    itemTitleColor: theme.palette.zesty.zestyOrange,
    imageWidth: 294,
    imageHeight: 179,
  };

  const alternateColumnsData = content.zesty_benefits_tiles?.data?.map(
    (item) => {
      return {
        header: item.header,
        content: item.benefit_content,
        image: item.benefit_image?.data[0]?.url,
      };
    },
  );

  const growthData = {
    background: content?.growth_background?.data[0]?.url || '',
    titleAndDescription:
      content.growth_title_and_description || FillerContent.rich_text,
    cards: content?.growth_cards?.data,
  };

  const statsData = [
    {
      stats: content.case_study_card_1 || FillerContent.description,
    },
    {
      stats: content.case_study_card_2 || FillerContent.description,
    },
    {
      stats: content.case_study_card_3 || FillerContent.description,
    },
  ];

  const caseStudiesProps = {
    header: content.case_studies_eyebrow,
    description: content.case_studies_header,
    statsData: statsData,
    g2BadgesData: content.g2_badges?.data,
    caseStudiesData: content.case_study_cards?.data,
  };

  const logoSliderData = {
    titleAndDescription: content?.integration_title_and_description,
    integrations_logos: content?.integrations_logos?.data,
    integrations_logos_2: content?.integrations_logos_2?.data,
    cta_text: content.marketplace_cta_text,
    integrationsBackground: content.integrations_background?.data[0]?.url,
  };

  const bottomData = {
    graphic: content?.bottom_cta_graphic?.data[0]?.url || '',
    titleAndDescription:
      content.bottom_cta_title_and_description || FillerContent.rich_text,
    cta_text: content.footer_button_text_1 || FillerContent.cta,
    secondary_cta_text: content.footer_button_text_2 || FillerContent.cta,
    secondary_cta_link:
      content.footer_button_link_2?.data[0]?.meta?.web?.uri ||
      FillerContent.href,
  };

  return (
    <>
      <SimpleHeroWithImageAndCtaButtons {...heroProps} />
      <SimpleCardLogo
        variant="outlined"
        heading_text={content?.logo_heading}
        logoItems={content?.homepage_logos.data}
      />
      <CardsInContainer {...digitalExperienceProps} />
      <AlternateColumns
        column_data={alternateColumnsData}
        header_content={content?.zesty_new_benefits}
        cta_link={content?.middle_cta_button_link?.data[0].meta.web.uri}
        cta_text={content?.middle_cta_button_text}
      />
      <DarkBlueCta
        sx={{ mt: 15, py: 10 }}
        cta_text={content?.middle_cta_text}
        cta_secondary_link={
          content?.middle_cta_secondary_cta_link?.data[0].meta.web.uri
        }
        cta_secondary_text={content?.middle_secondary_cta_text}
        header_content={content?.middle_cta_header}
      />
      <Growth {...growthData} />
      <CaseStudyCards {...caseStudiesProps} />
      <WithHighlightedCard {...testimonialsData} />
      <LogoSlider {...logoSliderData} />
      <Bottom {...bottomData} />
    </>
  );
}

export default Homepage;
