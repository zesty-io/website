/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: PPC-Short Form 
 * Name: ppc_short_form 
 * Model ZUID: 6-9efacf9c98-wbtkns
 * File Created On: Tue Mar 29 2022 12:52:58 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * zesty_overview (wysiwyg_basic)
 * client_logos (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-9efacf9c98-wbtkns
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import HeroWithFormAndBackgroundGradient from 'blocks/heroes/HeroWithFormAndBackgroundGradient';
import FillerContent from 'components/FillerContent';

function PpcShortForm({ content }) {
  const formContent = {
    leadDetail: 'Adwords',
    businessType: 'Direct',
    leadSource: 'Advertisement',
    selectedValue: 2,
    hideSelect: true,
    hideMessage: true,
    ctaText: FillerContent.cta,
    modalTitle: 'Thank you for submitting your information.',
    modalMessage: 'Our team will be in touch soon to discuss next steps.',
    displayMsgUnderButton: ' ',
    additionalTextfield: { company: true, jobTitle: true },
    buttonFullWidth: true,
    hidePrivacySection: true,
    messageLabel: 'Is there anything you would like to cover in the demo?',
    phoneNumber: true,
  };
  return (
    <>
      <HeroWithFormAndBackgroundGradient
        headelineTitle={content.hero_h1 || FillerContent.header}
        description={content.zesty_overview || FillerContent.description}
        imageCollection={
          content.client_logos?.data?.slice(0, 3) || [FillerContent.image]
        }
        backgroundImage={
          content.background_image.data &&
          content.background_image?.data[0]?.url
        }
        form_title={content.form_title || FillerContent.header}
        formContent={formContent}
      />
    </>
  );
}

export default PpcShortForm;
