import React from 'react';
import { NewDocs } from 'views/NewDocs';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const NewDocsPage = () => {
  return <NewDocs />;
};

export default NewDocsPage;
