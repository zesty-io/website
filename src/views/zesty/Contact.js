/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Contact 
 * Name: contact 
 * Model ZUID: 6-e2bbe081f2-8lr9x8
 * File Created On: Fri Mar 04 2022 14:20:19 GMT+0100 (Central European Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e2bbe081f2-8lr9x8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import revampTheme from 'theme/revampTheme';
import GetDemoSection from 'revamp/ui/GetDemoSection';
import FAQs from 'components/marketing/Freestyle/FAQs';

function Contact({ content }) {
  const theme = useTheme();

  const getDemoSectionProps = {
    title: content?.demo_section_title,
    supportingText: content?.demo_section_supportingtext,
    formTitle: content?.demo_section_formtitle,
    cta: content?.cta_button_text,
    id: '#contact-cta',
    review: content?.review.data[0],
  };

  const faqsProps = {
    faqs: content?.faqs.data,
    title: content?.faq_title,
    subtitle: content?.faq_subtitle,
  };

  return (
    <ThemeProvider theme={() => revampTheme(theme.palette.mode)}>
      <GetDemoSection {...getDemoSectionProps} />
      <FAQs {...faqsProps} />
    </ThemeProvider>
  );
}

export default Contact;
