/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Composable DXP 
 * Name: composable_dxp 
 * Model ZUID: 6-f08fb2ec8c-tk1h08
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_description (wysiwyg_basic)
 * header_graphic (images)
 * why_composable (wysiwyg_basic)
 * future_of_composable (wysiwyg_basic)
 * future_of_composable_graphic (images)
 * benefits_title (text)
 * features (one_to_many)
 * businesses (wysiwyg_basic)
 * business_case_1 (wysiwyg_basic)
 * business_case_1_graphic (images)
 * business_case_2 (wysiwyg_basic)
 * business_case_2_graphic (images)
 * business_case_3 (wysiwyg_basic)
 * business_case_3_graphic (images)
 * business_case_4 (wysiwyg_basic)
 * business_case_4_graphic (images)
 * bottom_cta (wysiwyg_basic)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-f08fb2ec8c-tk1h08
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function ComposableDxp({content}) {
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
  
export default ComposableDxp;
