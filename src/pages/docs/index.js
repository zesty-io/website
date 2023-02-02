import React from 'react';
import { Docs } from 'views/Docs';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const DocsPage = () => {
  return <Docs />;
};

export default DocsPage;
