import React from 'react';
import { useZestyStore } from 'store';
import Docs from './[...slug]';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const DocsPage = (props) => {
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );

  React.useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  return <Docs {...props} />;
};

export default DocsPage;
