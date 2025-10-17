/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Demos
 * Name: demos
 * Model ZUID: 6-ccf3cd8a82-16sw3z
 * File Created On: Thu Mar 10 2022 10:14:31 GMT-0800 (Pacific Standard Time)
 *
 * Model Fields:
 *
  * header_title (text)

 *
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 *
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 *
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-ccf3cd8a82-16sw3z
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import revampTheme from 'theme/revampTheme';
import GetDemoSection from 'revamp/ui/GetDemoSection';

function Demo({ content }) {
  const theme = useTheme();

  const getDemoSectionProps = {
    title: content?.demo_section_title,
    supportingText: content?.demo_section_supportingtext,
    formTitle: content?.demo_section_formtitle,
    cta: content?.cta_button_text,
    id: '#demo-cta',
  };

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <GetDemoSection {...getDemoSectionProps} />
    </ThemeProvider>
  );
}

export default Demo;
