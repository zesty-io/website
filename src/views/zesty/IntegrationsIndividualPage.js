/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Integrations-Individual Pages 
 * Name: integrations_individual_pages 
 * Model ZUID: 6-88e5918e85-tmg13p
 * File Created On: Thu Apr 07 2022 01:46:58 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (text)
 * cta_primary_text (text)
 * cta_secondary_text (text)
 * integration_benefits_h2 (text)
 * integration_benefits (one_to_many)
 * feature_description_1 (wysiwyg_basic)
 * feature_description_2 (wysiwyg_basic)
 * feature_description_3 (wysiwyg_basic)
 * testimonial (one_to_one)
 * logos_title (text)
 * logos (one_to_many)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-88e5918e85-tmg13p
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

function IntegrationsIndividualPage({ content }) {
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

export default IntegrationsIndividualPage;
