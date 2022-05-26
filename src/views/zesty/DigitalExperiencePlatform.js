/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Digital Experience Platform 
 * Name: digital_experience_platform 
 * Model ZUID: 6-b2a7a8abbb-xtc6nx
 * File Created On: Thu May 26 2022 19:53:01 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * header_eyebrow (text)
 * header_h1 (text)
 * header_description (text)
 * header_cta_primary (text)
 * header_cta_secondary (text)
 * header_graphic (images)
 * solutions_h2 (text)
 * solution_1_description (wysiwyg_basic)
 * solution_2_graphic (images)
 * solution_2_description (wysiwyg_basic)
 * solution_1_graphic (images)
 * solution_3_description (wysiwyg_basic)
 * solution_3_graphic (images)
 * solution_4_description (wysiwyg_basic)
 * solution_4_graphic (images)
 * about_dxp (wysiwyg_basic)
 * about_zesty_dxp (wysiwyg_basic)
 * about_dxp_graphic (images)
 * middle_solutions_header (text)
 * middle_solution_1_description (wysiwyg_basic)
 * middle_solution_1_graphic (images)
 * middle_solution_2_description (wysiwyg_basic)
 * middle_solution_2_graphic (images)
 * middle_solution_3_description (wysiwyg_basic)
 * middle_solution_3_graphic (images)
 * middle_solution_4_description (wysiwyg_basic)
 * middle_solution_4_graphic (images)
 * features_header (text)
 * features (one_to_many)
 * integrations_description (wysiwyg_basic)
 * integrations_graphic (images)
 * integrations_button_text (text)
 * integrations_button_link (internal_link)
 * integrations_airplane_graphic (images)
 * implementing_header (text)
 * headless_cms_toggle (text)
 * hybrid_cms_toggle (text)
 * headless_cms_description (wysiwyg_basic)
 * headless_cms_graphic (images)
 * hybrid_cms_description (wysiwyg_basic)
 * hybrid_cms_graphic (images)
 * headless_cms_toggle_graphic (images)
 * hybrid_cms_toggle_graphic (images)
 * case_study_header (text)
 * case_studies (one_to_many)
 * bottom_cta_description (wysiwyg_basic)
 * bottom_cta_graphic (images)
 * bottom_cta_button_primary (text)
 * bottom_cta_button_secondary (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-b2a7a8abbb-xtc6nx
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function DigitalExperiencePlatform({content}) {
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
  
export default DigitalExperiencePlatform;
