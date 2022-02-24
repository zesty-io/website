/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Why Zesty 
 * Name: why_zesty 
 * Model ZUID: 6-8eb7dc85be-bjf80f
 * File Created On: Wed Feb 23 2022 14:50:40 GMT+0100 (Central European Standard Time)
 * 
 * Model Fields:
 * 
  * title (text)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-8eb7dc85be-bjf80f
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React  from 'react';
import SimpleHeroWithImageAndCtaButtonsPage from '../../blocks/heroes/SimpleHeroWithImageAndCtaButtons/SimpleHeroWithImageAndCtaButtons.js';
import FeaturesWithIllustration from '../../blocks/features/FeaturesWithIllustration';
import FeaturesWithMobileScreenshot  from '../../blocks/features/FeaturesWithMobileScreenshot/FeaturesWithMobileScreenshot.js';
import WithBorderedCardsAndBrandColor from '../../blocks/stats/WithBorderedCardsAndBrandColor/WithBorderedCardsAndBrandColor.js';
import CtaWithCoverImage from '../../blocks/cta/CtaWithCoverImage/CtaWithCoverImage.js';
import CtaWithIllustration from '../../blocks/cta/CtaWithIllustration/CtaWithIllustration.js'
import  VerticallyAlignedBlogCardsWithShapedImage from '../../blocks/blog/VerticallyAlignedBlogCardsWithShapedImage/VerticallyAlignedBlogCardsWithShapedImage.js';
import  CtaWithInputField from '../../blocks/cta/CtaWithInputField/CtaWithInputField.js';

function WhyZestyZestyModel({content}) {
    let overview_text = (undefined !== content.overview_of_process_text) ? content.overview_of_process_text : 'Failed to load content.'
    let image_url = (undefined !== content.overview_of_process_image.data) ? content.overview_of_process_image.data[0].url : 'https://pzcvtc6b.media.zestyio.com/content-management.png'
    return (
        <>
            {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
            <SimpleHeroWithImageAndCtaButtonsPage></SimpleHeroWithImageAndCtaButtonsPage>
            <FeaturesWithIllustration rich_text={overview_text} image_url={image_url} />
            <FeaturesWithMobileScreenshot></FeaturesWithMobileScreenshot>
            <FeaturesWithMobileScreenshot></FeaturesWithMobileScreenshot>
            <FeaturesWithMobileScreenshot></FeaturesWithMobileScreenshot>
            <WithBorderedCardsAndBrandColor></WithBorderedCardsAndBrandColor>
            <FeaturesWithIllustration rich_text={overview_text} image_url={image_url} />
            <CtaWithCoverImage></CtaWithCoverImage>
            <VerticallyAlignedBlogCardsWithShapedImage></VerticallyAlignedBlogCardsWithShapedImage>
            <CtaWithInputField></CtaWithInputField>
            {/*
            <div style={{background: '#eee', border: '1px #000 solid', margin: '10px', padding: '20px', whiteSpace: 'pre-wrap', overflow: 'hidden'}}>
                <h2>Accessible Zesty.io JSON Object</h2>
                <pre>{JSON.stringify(content, null, 2)}</pre>
            </div>
            */}
            {/* End of Zesty.io output example */}
        </>
    );
}
  
export default WhyZestyZestyModel;
