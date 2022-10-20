/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital governance 
 * Name: digital_governance 
 * Model ZUID: 6-a2d18de8e7-cvf80c
 * File Created On: Wed Aug 10 2022 19:10:04 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header (wysiwyg_basic)
 * header_graphic (images)
 * cta_button_text (text)
 * cta_button_link (internal_link)
 * what_is (wysiwyg_basic)
 * why_header (text)
 * why_1 (wysiwyg_basic)
 * why_1_graphic (images)
 * why_2 (wysiwyg_basic)
 * why_2_graphic (images)
 * why_3 (wysiwyg_basic)
 * why_3_graphic (images)
 * get_started (wysiwyg_basic)
 * get_started_graphic (images)
 * cta_button_2 (text)
 * cta_button_2_link (internal_link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a2d18de8e7-cvf80c
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function DigitalGovernance({ content }) {
  return (
    <>
      {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
      <h1
        dangerouslySetInnerHTML={{ __html: content.meta.web.seo_meta_title }}
      ></h1>
      <div>{content.meta.web.seo_meta_description}</div>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default DigitalGovernance;
