/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Scale to new heights LP 
 * Name: scale_to_new_heights_lp 
 * Model ZUID: 6-dab3acefa4-kl9x3v
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (wysiwyg_basic)
 * challenges (wysiwyg_basic)
 * challenges_image (images)
 * about_zesty_image (images)
 * benefits_title_and_description (wysiwyg_basic)
 * benefits_scale (one_to_many)
 * case_study (wysiwyg_basic)
 * case_study_image (images)
 * case_study_logo (images)
 * case_study_video_option (images)
 * review (one_to_one)
 * footer_title_and_description (wysiwyg_basic)
 * content_selection (one_to_many)
 * articles_title (text)
 * about_zesty_title_and_description (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-dab3acefa4-kl9x3v
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function ScaleToNewHeightsLp({ content }) {
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

export default ScaleToNewHeightsLp;
