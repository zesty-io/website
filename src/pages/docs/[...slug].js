import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
// import ACCOUNTS_DATA from './accounts.data.json';
// import AUTH_DATA from './auth.data.json';

export default function DocsPage(props) {
  const { data } = props;

  return <Docs data={data} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  let url = resolvedUrl;
  url = url.replace('/docs', '').replace(/\/$/, '');
  let item = [];
  const getPageData = (data) => {
    data?.forEach((e) => {
      if (e.name === url) {
        item = e.item;
      } else {
        getPageData(e.item);
      }
    });
    return item;
  };

  const pageData = getPageData(INSTANCE_DATA.item);

  return {
    props: { data: pageData }, // will be passed to the page component as props
  };
}
