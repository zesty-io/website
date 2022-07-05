/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: ROI calculator 
 * Name: roi_calculator 
 * Model ZUID: 6-82e1ad9d8d-c2rq2z
 * File Created On: Tue Jul 05 2022 21:46:15 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * page_title_and_description (wysiwyg_basic)
 * header_graphic (images)
 * widget_title_and_description (wysiwyg_basic)
 * calculations_title (text)
 * results_title (text)
 * cta_button_text (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-82e1ad9d8d-c2rq2z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

/**
 *  MUI Imports
 */

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

/**
 *  Helper Imports
 */
import FillerContent from 'components/globals/FillerContent';

/**
 * Components Imports
 */
import Hero from 'components/marketing/RoiCalculator/Hero';
import Widget from 'components/marketing/RoiCalculator/Widget';
import Calculator from 'components/marketing/RoiCalculator/Calculator';

function RoiCalculator({ content }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const pageData = {
    theme,
    isMobile,
    FillerContent,
    content,
  };

  return (
    <>
      <Hero {...pageData} />
      <Widget {...pageData} />
      <Calculator {...pageData} />
    </>
  );
}

export default RoiCalculator;
