/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Headless CMS Enterprise 
 * Name: headless_cms_enterprise 
 * Model ZUID: 6-e6b7919994-n8p7t0
 * File Created On: Tue Jun 14 2022 20:20:46 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * h1_title (text)
 * hero_description (textarea)
 * cta_button_hero (text)
 * hero_image (images)
 * hero_background (images)
 * logos_title (text)
 * customer_logos (one_to_many)
 * section_1_title (wysiwyg_basic)
 * solution_1 (wysiwyg_basic)
 * solution_1_image (images)
 * solution_2 (wysiwyg_basic)
 * solution_2_image (images)
 * solution_3 (wysiwyg_basic)
 * solution_3_image (images)
 * solution_4 (wysiwyg_basic)
 * solution_4_image (images)
 * how_it_works (wysiwyg_basic)
 * why_zesty_title (textarea)
 * why_zesty_features (one_to_many)
 * case_studies_title (text)
 * case_studies (one_to_many)
 * bottom_description (wysiwyg_basic)
 * bottom_cta_button (text)
 * bottom_cta_button_link (internal_link)
 * migration (wysiwyg_basic)
 * integration (wysiwyg_basic)
 * monolith_integration (wysiwyg_basic)
 * monolith_integration_graphic (images)
 * integrations_graphic (images)
 * migration_graphic (images)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-e6b7919994-n8p7t0
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function HeadlessCmsEnterprise({content}) {
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
  
export default HeadlessCmsEnterprise;
