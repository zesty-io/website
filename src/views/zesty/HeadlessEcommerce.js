/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless eCommerce 
 * Name: headless_ecommerce 
 * Model ZUID: 6-b69895e8cf-p4125x
 * File Created On: Tue Jun 07 2022 18:38:44 GMT+0200 (Central European Summer Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (textarea)
 * header_cta_button_primary (text)
 * header_cta_button_secondary (text)
 * header_graphic (images)
 * headless_cms_benefit_description (wysiwyg_basic)
 * headless_cms_benefit_graphic (images)
 * traditional_v_headless_description (wysiwyg_basic)
 * traditional_v_headless_cta (text)
 * traditional_v_headless_link (internal_link)
 * traditional_description (wysiwyg_basic)
 * traditional_graphic (images)
 * headless_description (wysiwyg_basic)
 * headless_graphic (images)
 * headless_ecomm_benefits_header (text)
 * benefit_1 (wysiwyg_basic)
 * benefit_1_graphic (images)
 * benefit_2 (wysiwyg_basic)
 * benefit_2_graphic (images)
 * benefit_3 (wysiwyg_basic)
 * benefit_3_graphic (images)
 * ecomm_integrations_header (text)
 * ecomm_integrations_logos (one_to_many)
 * why_zesty_description (wysiwyg_basic)
 * why_zesty_ecomm_cards (one_to_many)
 * customers (text)
 * customer_logos (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_primary (text)
 * bottom_cta_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b69895e8cf-p4125x
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function HeadlessEcommerce({content}) {
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
  
export default HeadlessEcommerce;
