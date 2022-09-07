/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Product Overview
 * Name: product_overview
 * Model ZUID: 6-8294d9f1a4-c1tn1n
 * File Created On: Wed Feb 23 2022 07:25:45 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8294d9f1a4-c1tn1n
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 *
 * View /solutions/
 */

/**
 * Mui Import
 */

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Helpers Imports
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Import
 */

import Hero from 'components/marketing/PlatformOverview/Hero';
import Features from 'blocks/features/Features/Features';
import Benefits from 'components/marketing/PlatformOverview/Benefits';
import LevelUp from 'components/marketing/PlatformOverview/LevelUp';
import PowerHeadless from 'components/marketing/PlatformOverview/PowerHeadless';
import CaseStudies from 'components/marketing/PlatformOverview/CaseStudies';
import Bottom from 'components/marketing/PlatformOverview/Bottom';

function PlatformOverview({ content }) {
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

  /* Taking the data from the content model and converting it into a format that the Features component can use. */
  const feature_data =
    content.what_you_can_do_tiles?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.image.data[0].url,
        feature_name: item.title,
        content: item.description,
      });

      return acc;
    }, []) || [];

  const feature_data_2 =
    content.why_zesty_tiles?.data.reduce((acc, item) => {
      acc.push({
        icon_image: item.icon_image.data[0].url,
        feature_name: item.feature_name,
        content: item.content,
      });

      return acc;
    }, []) || [];

  return (
    <>
      <Hero {...pageData} />
      <Features
        features_header={content.what_you_can_do}
        data={feature_data}
        content={content}
        header_size={28}
      />
      <Benefits {...pageData} />
      <LevelUp {...pageData} />
      <PowerHeadless {...pageData} />
      <Features
        background="zesty"
        features_header={content.why_zesty_title}
        data={feature_data_2}
        content={content}
        header_size={28}
        textHighlight={'Power more'}
      />
      <CaseStudies {...pageData} />
      <Bottom {...pageData} />
    </>
  );
}

export default PlatformOverview;
