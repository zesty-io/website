/** * Zesty.io Content Model Component
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
import { useZestyStore } from 'store';
import { DocsHomePage } from 'components/docs/DocsHomePage';

// main file
const DocsOverViewLanding = (props) => {
  const content = props.content;
  const productsData = content.zesty.products;
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );

  const result = [];
  const groupByUri = (data = []) => {
    data.forEach((element) => {
      const parentMain = element.uri.split('/')[2];
      const childMain = element.uri.split('/')[3];

      data.forEach((item) => {
        const parentChild = item.uri.split('/')[2];
        const childChild = item.uri.split('/')[3];

        if (
          parentChild === parentMain &&
          childChild &&
          childChild !== childMain
        ) {
          const res = { ...element, children: [item] };
          result.push(res);
        }
      });
      // filtering out redundant 1st tier item
      // this will add only 1st tier that dont have children
      const res1 = result.find((q) => q.children);
      if (res1.uri !== element.uri && !childMain) {
        result.push(element);
      }
    });
  };
  groupByUri(productsData);

  React.useEffect(() => {
    setalgoliaApiKey(props.content.algolia.apiKey);
    setalgoliaAppId(props.content.algolia.appId);
    setalgoliaIndex(props.content.algolia.index);
  }, []);

  const algolia = {
    apiKey: props.content.algolia.apiKey,
    appId: props.content.algolia.appId,
    index: props.content.algolia.index,
  };

  return <DocsHomePage algolia={algolia} />;
};

export default DocsOverViewLanding;
