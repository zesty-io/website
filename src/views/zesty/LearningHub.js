/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Learning Hub 
 * Name: learning_hub 
 * Model ZUID: 6-a8dfdfcca8-175lc8
 * File Created On: Fri Mar 08 2024 02:07:19 GMT+0800 (Philippine Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-a8dfdfcca8-175lc8
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import Hero from 'components/marketing/LearningHub/Hero';
import React from 'react';

function LearningHub({ content }) {
  const heroProps = {
    title: content?.title,
    description: content?.header_description,
    heroImage: content?.hero_image,
    monbileHeroImage: content?.mobile_hero_image,
    featuredCards: content?.cards?.data,
  };

  return (
    <>
      <Hero {...heroProps} />
    </>
  );
}

export default LearningHub;
