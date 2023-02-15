import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';
import { useRouter } from 'next/router';
import { getPageData, transFormMainData } from 'views/Docs/helper';

const VALID_URLS = ['/accounts', '/instances', '/authentication'];

const initialTreeData = (url, data) => {
  if (VALID_URLS.includes(url)) {
    return data.find((e) => e.url === url);
  }
};

export default function DocsPage({ url }) {
  url = url && url?.replace('/docs', '').replace(/\/$/, '');
  const router = useRouter();
  const mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  const mainData = transFormMainData(mainCollection);
  const [treeData, settreeData] = React.useState(mainData[0]);
  const parentUrl = url && '/' + url?.split('/').filter((e) => e)[0];
  const pageData = getPageData(treeData, mainData, url);

  const DOCS_DATA_DROPDOWN = [
    {
      label: 'Instance API',
      value: mainData[0],
    },
    {
      label: 'Accounts API',
      value: mainData[1],
    },
    {
      label: 'Authentication API',
      value: mainData[2],
    },
  ];

  const onChangeDropdown = (data) => {
    window.scrollTo(0, 0);
    if (data?.value) {
      router.push(`/docs` + data.value.parent);
    } else {
      router.push(`/docs` + '/instances');
    }
  };

  console.log(pageData, treeData, 3333333, url, parentUrl);

  const docsProps = {
    pageData,
    onChangeDropdown,
    treeData,
    dropdownData: DOCS_DATA_DROPDOWN,
  };

  React.useEffect(() => {
    settreeData(initialTreeData(parentUrl, mainData));
  }, [url]);

  return <Docs {...docsProps} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  let url = resolvedUrl;

  return {
    props: { url },
  };
}
