/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: CM World Demo 
 * Name: cm_world_demo 
 * Model ZUID: 6-e28c95e39a-rkxbxv
 * File Created On: Sat Sep 09 2023 01:14:39 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
 
 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e28c95e39a-rkxbxv
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import { ThemeProvider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FillerContent from 'components/globals/FillerContent';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import revampTheme from 'theme/revampTheme';

function CmWorldDemo({ content }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <GetDemoSection
        formCtaText={content?.button_cta_text ?? FillerContent.cta}
        title={content?.header ?? FillerContent.header}
        supportingText={content?.body ?? FillerContent.description}
        formTitle={content?.form_title ?? FillerContent.cta}
      />
    </ThemeProvider>
  );
}

export default CmWorldDemo;
