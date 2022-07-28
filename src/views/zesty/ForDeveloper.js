/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: For developers 
 * Name: for_developers 
 * Model ZUID: 6-a8aae6c2b5-n019mw
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_text (wysiwyg_basic)
 * header_graphic (images)
 * header_button_text (text)
 * header_button_link (internal_link)
 * nextjs_text (wysiwyg_basic)
 * nextjs_graphic (images)
 * nextjs_eyebrow (text)
 * why_zesty_eyebrow (text)
 * why_zesty_text (wysiwyg_basic)
 * why_zesty (one_to_many)
 * middle_cta_button_text (text)
 * middle_cta_button_link (internal_link)
 * node_sdk_eyebrow (text)
 * node_sdk_text (wysiwyg_basic)
 * node_sdk_graphic (images)
 * numbers_title (text)
 * numbers (one_to_many)
 * numbers_graphic (images)
 * integrations_text (wysiwyg_basic)
 * integrations_graphic (images)
 * support_eyebrow (text)
 * support_text (wysiwyg_basic)
 * support_graphic (images)
 * docs_text (wysiwyg_basic)
 * dev_docs (one_to_many)
 * testimonials_text (text)
 * testimonials (one_to_many)
 * footer_cta_text (wysiwyg_basic)
 * footer_cta_graphic (images)
 * footer_button_1 (text)
 * footer_button_1_link (internal_link)
 * footer_button_2 (text)
 * footer_button_2_link (internal_link)
 * zesty_for_the_team (text)
 * zesty_for_the_team_links (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a8aae6c2b5-n019mw
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function ForDeveloper({ content }) {
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

export default ForDeveloper;
