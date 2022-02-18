/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Landing Page Variations 
 * Name: landing_page_variations 
 * Model ZUID: 6-1ba0d4-m6p04m
 * File Created On: Thu Feb 17 2022 16:36:46 GMT-0800 (Pacific Standard Time)
 * 
 * Model Fields:
 * 
 * * query_name (text)
 * primary_title (text)
 * secondary_text (wysiwyg_basic)
 * internal_link_for_button (internal_link)
 * button_text (text)
 * link_for_button (link)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-1ba0d4-m6p04m
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

function LandingPageVariationZestyModel({content}) {
    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html:content.web.seo_meta_title}}></h1>
            <div dangerouslySetInnerHTML={{__html:content.web.seo_meta_description}}></div>
        </>
    );
};
  
export default LandingPageVariationZestyModel;
