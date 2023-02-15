import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';
import { useRouter } from 'next/router';
import { transFormMainData } from 'views/Docs/helper';

const VALID_URLS = ['/accounts', '/instances', '/authentication'];

const initialTreeData = (url, data) => {
  if (VALID_URLS.includes(url)) {
    return data.find((e) => e.url === url);
  }
};

export default function DocsPage({ url }) {
  const router = useRouter();
  const mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  const mainData = transFormMainData(mainCollection);

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

  const [treeData, settreeData] = React.useState(mainData[0]);
  url = url && url.replace('/docs', '').replace(/\/$/, '');
  let item = [];
  const getPageData = (data) => {
    if (!url) {
      item = mainData[0];
    }
    if (data?.url === url) {
      item = data;
    }
    (data?.item ?? data)?.forEach((e) => {
      if (e.url === url) {
        item = e;
      } else {
        getPageData(e.item);
      }
    });

    return item;
  };

  // for initial data
  let match = false;
  VALID_URLS.forEach((e) => {
    if (e === url) {
      match = true;
    }
  });

  React.useEffect(() => {
    if (match) {
      settreeData(initialTreeData(url, mainData));
    } else {
    }
  }, [match, url]);

  const onChangeDropdown = (data) => {
    console.log(data);
    window.scrollTo(0, 0);
    if (data?.value) {
      router.push(`/docs` + data.value.parent);
    } else {
      router.push(`/docs` + '/instances');
    }
  };

  const pageData = getPageData(treeData);

  console.log(pageData, treeData, 3333333, url);
  const docsProps = {
    pageData,
    onChangeDropdown,
    treeData,
    dropdownData: DOCS_DATA_DROPDOWN,
  };
  return <Docs {...docsProps} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  let url = resolvedUrl;

  return {
    props: { url },
  };
}
