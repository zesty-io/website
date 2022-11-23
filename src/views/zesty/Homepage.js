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
import Hero from 'components/marketing/Homepage/Hero';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import DigitalExperience from 'components/marketing/Homepage/DigitalExperience';
import Growth from 'blocks/zesty/Growth/Growth';
import CaseStudies from 'components/marketing/Homepage/CaseStudies';
import LogoSlider from 'components/marketing/Homepage/LogoSlider';
import Bottom from 'blocks/zesty/Bottom/Bottom';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';
import AlternateColumns from 'blocks/pageLayouts/ColumnLayouts/AlternateColumns';
import { WithHighlightedCard } from 'blocks/testimonials';
import Dashboard from 'components/accounts/dashboard';
import DarkBlueCta from 'blocks/zesty/Cta/DarkBlueCta';
import AOS from 'aos';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { useZestyStore } from 'store';
import { Join } from 'components/accounts/join';

function Homepage({ content }) {
  const { userInfo, ZestyAPI } = useZestyStore();
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

  let isNewUser = null;
  let hasPersona = null;
  let ssoLaunchVsUserCreated = null;

  const ssoLaunchDate = dayjs('2022-11-18');
  const userCreatedDate = dayjs(userInfo?.createdAt);

  if (typeof userInfo?.prefs === 'string') {
    const obj = JSON.parse(userInfo?.prefs);
    hasPersona = obj.hasOwnProperty('persona') ? true : false;
  }

  if (userInfo) {
    ssoLaunchVsUserCreated = userCreatedDate.diff(ssoLaunchDate, 'hours');
  }

  if (ssoLaunchVsUserCreated > 0 && hasPersona) {
    isNewUser = true;
  }

  const alternateColumnsData = content.zesty_benefits_tiles?.data?.map(
    (item) => {
      return {
        header: item.header,
        content: item.benefit_content,
        image: item.benefit_image.data[0].url,
      };
    },
  );

  const growthData = {
    background: content?.growth_background?.data[0].url || '',
    titleAndDescription:
      content.growth_title_and_description || FillerContent.rich_text,
    cards: content?.growth_cards?.data,
  };

  const bottomData = {
    graphic: content?.bottom_cta_graphic?.data[0].url || '',
    titleAndDescription:
      content.bottom_cta_title_and_description || FillerContent.rich_text,
    cta_text: content.footer_button_text_1 || FillerContent.cta,
    secondary_cta_text: content.footer_button_text_2 || FillerContent.cta,
    secondary_cta_link:
      content.footer_button_link_2?.data[0].meta.web.uri || FillerContent.href,
  };

  if (isNewUser) {
    return <Join content={content} />;
  }

  if (content?.zesty?.isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <>
      <Hero {...pageData} />
      <SimpleCardLogo
        variant="outlined"
        heading_text={content?.logo_heading}
        logoItems={content?.homepage_logos.data}
      />
      <DigitalExperience {...pageData} />
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
      <CaseStudies {...pageData} />
      <WithHighlightedCard {...testimonialsData} />
      <LogoSlider cta_text={content?.marketplace_cta_text} {...pageData} />
      <Bottom {...bottomData} />
    </>
  );
}

export default Homepage;
