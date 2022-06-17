/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 *
 * Label: Product
 * Name: product
 * Model ZUID: 6-001018-0xvfj9
 * File Created On: Mon Feb 21 2022 07:38:12 GMT-0800 (Pacific Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-001018-0xvfj9
 *
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import FillerContent from 'components/globals/FillerContent';
import SimpleHeroWithImageAndCtaButtons from 'blocks/heroes/SimpleHeroWithImageAndCtaButtons';
import FeaturesWithIllustration from 'blocks/features/FeaturesWithIllustration/FeaturesWithIllustration.js';
import Container from 'components/Container';
function Product({ content }) {
  let overview_text =
    undefined !== content.overview_of_process_text
      ? content.overview_of_process_text
      : FillerContent.rich_text;
  let image_url =
    undefined !== content.overview_of_process_image
      ? content.overview_of_process_image.data[0].url
      : FillerContent.image;
  return (
    <>
      <Container>
        {/* Zesty.io Output Example and accessible JSON object for this component. Delete or comment out when needed.  */}
        <SimpleHeroWithImageAndCtaButtons></SimpleHeroWithImageAndCtaButtons>
        <FeaturesWithIllustration
          rich_text={overview_text}
          image_url={image_url}
        />
      </Container>
      <div
        style={{
          background: '#eee',
          border: '1px #000 solid',
          margin: '10px',
          padding: '20px',
        }}
      >
        <h2>Accessible Zesty.io JSON Object</h2>
        <pre>{JSON.stringify(content, null, 2)}</pre>
      </div>
      {/* End of Zesty.io output example */}
    </>
  );
}

export default Product;
