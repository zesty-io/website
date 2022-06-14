/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: DXP Benefits 
 * Name: dxp_benefits 
 * Model ZUID: 6-c48bd087c0-5xvl6s
 * File Created On: Wed Jun 15 2022 00:51:14 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * h1_title (text)
 * hero_description (textarea)
 * hero_graphic (images)
 * what_is (wysiwyg_basic)
 * what_is_graphic (images)
 * benefit_1 (wysiwyg_basic)
 * benefit_title_and_description (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * benefit_4 (wysiwyg_basic)
 * benefit_4_graphic (images)
 * benefit_5 (wysiwyg_basic)
 * benefit_5_graphic (images)
 * benefit_6 (wysiwyg_basic)
 * benefit_6_graphic (images)
 * businesses_title (text)
 * business_type_1 (wysiwyg_basic)
 * business_type_1_graphic (images)
 * business_type_2 (wysiwyg_basic)
 * business_type_2_graphic (images)
 * business_type_3 (wysiwyg_basic)
 * business_type_3_graphic (images)
 * business_type_4 (wysiwyg_basic)
 * business_type_4_graphic (images)
 * case_studies_title (text)
 * case_studies (one_to_many)
 * why_zesty (wysiwyg_basic)
 * why_zesty_graphic (images)
 * benefit_7 (wysiwyg_basic)
 * benefit_7_graphic (images)
 * benefit_8 (wysiwyg_basic)
 * benefit_8_graphic (images)
 * benefit_9 (wysiwyg_basic)
 * benefit_9_graphic (images)
 * benefit_10 (wysiwyg_basic)
 * benefit_10_graphic (images)
 * comparison_graphic_title (text)
 * comparison_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c48bd087c0-5xvl6s
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function DxpBenefit({content}) {
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
  
export default DxpBenefit;
