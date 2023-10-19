import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

export const AppSearch = ({ apiKey, appId, index }) => {
  const SearhProsp = {
    apiKey,
    appId,
    indexName: index,
  };
  return <DocSearch {...SearhProsp} />;
};
