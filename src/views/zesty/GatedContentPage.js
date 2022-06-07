/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Gated Content Pages 
 * Name: gated_content_pages 
 * Model ZUID: 6-fe91d19b97-20jq6m
 * File Created On: Tue Jun 07 2022 18:38:44 GMT+0200 (Central European Summer Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * form_title (text)
 * hero_description_box (wysiwyg_basic)
 * section_1_h1 (text)
 * section_1_boxes (one_to_many)
 * section_2_content (wysiwyg_basic)
 * section_2_image (images)
 * section_3_content (wysiwyg_basic)
 * section_3_image (images)
 * bottom_form_title (text)
 * bottom_form_background_image (images)
 * hero_background_image (images)
 * additional_resources_boxes (one_to_many)
 * additional_resources_header (text)
 * contentdownload (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-fe91d19b97-20jq6m
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function GatedContentPage({content}) {
    return (
        <>
            {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
            <h1 dangerouslySetInnerHTML={{__html:content.meta.web.seo_meta_title}}></h1>
            <div>{content.meta.web.seo_meta_description}</div>
            <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px'}}>
                <h2>Accessible Zesty.io JSON Object</h2>
                <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
            {/* End of Zesty.io output example */}
        </>
    );
}
  
export default GatedContentPage;
