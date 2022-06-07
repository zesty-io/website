/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Capterra Landing Page 
 * Name: capterra_landing_page 
 * Model ZUID: 6-b4f1d99bec-bx5qm6
 * File Created On: Tue Jun 07 2022 18:38:44 GMT+0200 (Central European Summer Time)
 * 
 * Model Fields:
 * 
  * hero_h1 (text)
 * hero_description (wysiwyg_basic)
 * hero_background_image (images)
 * form_title (text)
 * companies_title (text)
 * company_logos (one_to_many)
 * hero_logo_images (images)
 * benefits_title (text)
 * benefits_cards (one_to_many)
 * reviews_title (text)
 * reviews_description (text)
 * reviews (one_to_many)
 * bottom_form_title (text)
 * bottom_form_description (text)
 * background_image_bottom (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b4f1d99bec-bx5qm6
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function CapterraLandingPage({content}) {
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
  
export default CapterraLandingPage;
