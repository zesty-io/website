/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: A/B Landing Page 
 * Name: a_b_landing_page 
 * Model ZUID: 6-beb393cb89-4dl2n5
 * File Created On: Thu Oct 27 2022 02:20:23 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)
 * description (wysiwyg_basic)
 * header_image (images)
 * cta_button_text (text)
 * logo_bar_title (text)
 * logo_bar (one_to_many)
 * benefits_title (text)
 * benefits_sections (one_to_many)
 * features_title (text)
 * features (one_to_many)
 * testimonial_title (text)
 * testimonial (one_to_one)
 * bottom_cta (wysiwyg_basic)
 * middle_cta_button (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-beb393cb89-4dl2n5
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function ABLandingPage({ content }) {
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

export default ABLandingPage;
