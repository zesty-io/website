/**
 * Zesty.io Content Model Component
 * When the ZestyLoader [..slug].js file is used, this component will autoload if it associated with the URL
 * 
 * Label: Layouts-test-page 
 * Name: layouts_test_page 
 * Model ZUID: 6-beb298cbee-6f27hs
 * File Created On: Mon Dec 19 2022 23:21:22 GMT+0800 (Philippine Standard Time)
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
 * View and Edit this model's current schema on Zesty.io at https://8-aaeffee09b-7w6v22.manager.zesty.io/schema/6-beb298cbee-6f27hs
 * 
 * Data Output Example: https://zesty.org/services/web-engine/introduction-to-parsley/parsley-index#tojson
 * Images API: https://zesty.org/services/media-storage-micro-dam/on-the-fly-media-optimization-and-dynamic-image-manipulation
 */

import React from 'react';
import { AutoLayout } from '@zesty-io/react-autolayout';
import ComponentSelector from 'components/marketing/AppLayouts/ComponentSelector';

function LayoutsTestPage({ content }) {
  // create a function the returns two sum

  return (
    <>
      <AutoLayout
        content={content}
        components={{
          component: ComponentSelector,
        }}
      />
    </>
  );
}

export default LayoutsTestPage;
