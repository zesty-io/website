import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
// import ACCOUNTS_DATA from './accounts.data.json';
// import AUTH_DATA from './auth.data.json';

export default function DocsPage({ url }) {
  const [treeData, settreeData] = React.useState(INSTANCE_DATA);
  url = url && url.replace('/docs', '').replace(/\/$/, '');
  let item = [];
  const getPageData = (data) => {
    console.log(data, 888777);
    data?.forEach((e) => {
      if (e.name === url) {
        item = e;
      } else {
        getPageData(e.item);
      }
    });
    return item;
  };

  const onChangeDropdown = (data) => {
    console.log();
    window.scrollTo(0, 0);
    if (data?.value) {
      settreeData(data?.value);
    } else {
      settreeData(INSTANCE_DATA);
    }
  };

  const pageData = getPageData(treeData.item);

  console.log(pageData, 88888);
  const docsProps = {
    data: pageData,
    onChangeDropdown,
    treeData,
  };
  return <Docs {...docsProps} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  let url = resolvedUrl;

  return {
    props: { url }, // will be passed to the page component as props
  };
}
