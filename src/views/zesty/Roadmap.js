/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: roadmap 
 * Name: roadmap 
 * Model ZUID: 6-c4e2bb9798-4twn5z
 * File Created On: Tue Jun 07 2022 18:38:44 GMT+0200 (Central European Summer Time)
 * 
 * Model Fields:
 * 
  * roadmap (link)
 * roadmap_title (text)
 * roadmap_description (wysiwyg_basic)
 * discussion_title (text)
 * discussion_description (wysiwyg_basic)
 * feedback_link (link)
 * open_discussion_link (link)
 * project_number (number)
 * max_column (number)
 * max_card (number)
 * max_discussion (number)
 * github_data (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c4e2bb9798-4twn5z
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';

function Roadmap({content}) {
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
  
export default Roadmap;
