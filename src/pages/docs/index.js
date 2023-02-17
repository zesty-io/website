import React from 'react';
import Docs from './[...slug]';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const DocsPage = (props) => {
  return <Docs {...props} />;
};

export default DocsPage;
