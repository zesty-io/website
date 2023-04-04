/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Enterprise Growth 
 * Name: enterprise_growth 
 * Model ZUID: 6-8c8ff2baad-clz5vv
 * File Created On: Tue Apr 04 2023 22:31:00 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * eyebrow (text)
 * headline (text)
 * component_content (wysiwyg_basic)
 * cta_left (text)
 * cta_left_link (link)
 * cta_right (text)
 * cta_right_link (link)
 * case_study_1 (one_to_one)
 * case_study_2 (one_to_one)
 * case_study_3 (one_to_one)
 * case_study_4 (one_to_one)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8c8ff2baad-clz5vv
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function EnterpriseGrowth({ content }) {
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

export default EnterpriseGrowth;
