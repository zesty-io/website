/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 

 * Label: DXP ecommerce 
 * Name: dxp_ecommerce 
 * Model ZUID: 6-f2eed19e81-47vk87
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
 * what_are_digital_experiences (text)
 * what_are_description_1 (wysiwyg_basic)
 * what_are_graphic_1 (images)
 * what_are_description_2 (wysiwyg_basic)
 * what_are_graphic_2 (images)
 * what_are_description_3 (wysiwyg_basic)
 * what_are_graphic_3 (images)
 * benefits_title (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2_desc (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * benefit_4 (wysiwyg_basic)
 * benefit_4_graphic (images)
 * core_pillars_title (text)
 * core_pillars (one_to_many)
 * features_tiles_title (text)
 * features_tiles_dxp_commerce (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta (text)
 * bottom_cta_link (internal_link)
 * bottom_cta_graphic (images)


 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 

 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-f2eed19e81-47vk87

 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FillerContent from 'components/globals/FillerContent';
import TryFreeButton from 'components/cta/TryFreeButton';
import * as helper from 'utils';
import Slide from '@mui/material/Slide';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ZoomMui from '@mui/material/Zoom';
import ZestySvg from '../../../public/assets/images/zesty Logo.png';
import featuresBg1 from '../../../public/assets/images/dxp_features_bg1.svg';
import featuresBg2 from '../../../public/assets/images/dxp_features_bg2.svg';
import headlessCmsBg from '../../../public/assets/images/dxp_headless_bg.svg';
import bottomBg from '../../../public/assets/images/dxp_bottom_bg.svg';
import dxpCurve from '../../../public/assets/images/dxp_curve.svg';
import dxpLine from '../../../public/assets/images/dxp_line.svg';

function DxpEcommerce({ content }) {
  console.log(content, 12222);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return <Box sx={{ overflowX: 'hidden' }}></Box>;
}

export default DxpEcommerce;
