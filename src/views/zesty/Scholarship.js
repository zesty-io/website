/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Scholarship 
 * Name: scholarship 
 * Model ZUID: 6-c8cdc1a097-dqpswk
 * File Created On: Wed Jul 27 2022 18:58:43 GMT+0800 (Philippine Standard Time)
 * 
 * Model Fields:
 * 
  * page_title (text)
 * eyebrow_content (textarea)
 * page_content (wysiwyg_basic)
 * application_header (text)
 * application_content (textarea)

 * 
 * In the render function, text fields can be accessed like {content.field_name}, relationships are arrays,
 * images are objects {content.image_name.data[0].url}
 * 
 * This file is expected to be customized; because of that, it is not overwritten by the integration script.
 * Model and field changes in Zesty.io will not be reflected in this comment.
 * 
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-c8cdc1a097-dqpswk
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';

import JobListing from 'components/marketing/Scholarship/JobListing';

function Scholarship({ content }) {
  console.log(content);
  return (
    <>
      {/* <Hero
        page_title={content.page_title}
        eyebrow_content={content.eyebrow_content}
      />
      <LogoGridSimpleCentered
        title={content.logos_h3 || FillerContent.description}
        imageCollection={content.logos?.data || [FillerContent.image]}
      />
      <Content {...content} />
      <SimpleLeftAligned {...content} /> */}
      <JobListing {...content} />
    </>
  );
}

export default Scholarship;
