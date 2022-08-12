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

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Hero from 'components/marketing/Homepage/Hero';
import SimpleCardLogo from 'blocks/logoGrid/SimpleCardLogo/SimpleCardLogo';
import DigitalExperience from 'components/marketing/Homepage/DigitalExperience';
import NewBenefits from 'components/marketing/Homepage/NewBenefits';
import Migration from 'components/marketing/Homepage/Migration';
import Growth from 'components/marketing/Homepage/Growth';
import CaseStudies from 'components/marketing/Homepage/CaseStudies';
import Testimonials from 'blocks/testimonials/TestimonialsSlider/Testimonials';
import LogoSlider from 'components/marketing/Homepage/LogoSlider';
import Bottom from 'components/marketing/Homepage/Bottom';

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

  return (
    <>
      <Hero {...pageData} />
      <SimpleCardLogo logoItems={content.homepage_logos.data} {...pageData} />
      <DigitalExperience {...pageData} />
      <NewBenefits {...pageData} />
      <Migration {...pageData} />
      <Growth {...pageData} />
      <CaseStudies {...pageData} />
      <Testimonials {...testimonialsData} />
      <LogoSlider {...pageData} />
      <Bottom {...pageData} />
    </>
  );
}

export default Homepage;
