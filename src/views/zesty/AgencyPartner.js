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

  console.log(content);

  return (
    <>
      <TwoRowsHero {...pageData} />
    </>
  );
}

export default AgencyPartner;
