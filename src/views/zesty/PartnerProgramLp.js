/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Partner Program LP 
 * Name: partner_program_lp 
 * Model ZUID: 6-fea599839a-22hv90
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_text (wysiwyg_basic)
 * header_graphic (images)
 * button_text (text)
 * logos_title (wysiwyg_basic)
 * logos (one_to_many)
 * benefits_header (wysiwyg_basic)
 * benefits (one_to_many)
 * open_text_area (wysiwyg_basic)
 * open_text_area_graphic (images)
 * features_titles (wysiwyg_basic)
 * features (one_to_many)
 * open_text_area_2 (wysiwyg_basic)
 * open_text_area_2_graphic (images)
 * testimonial (one_to_one)
 * open_text_area_3 (wysiwyg_basic)
 * open_text_area_3_graphic (images)
 * form_text_left (wysiwyg_basic)
 * form_title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-fea599839a-22hv90
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function PartnerProgramLp({ content }) {
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

export default PartnerProgramLp;
