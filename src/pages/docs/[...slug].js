import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';
import { useRouter } from 'next/router';
import { transFormMainData } from 'views/Docs/helper';
import { useZestyStore } from 'store';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

const VALID_URLS = ['/accounts', '/instances', '/authentication'];

const initialTreeData = (url, data) => {
  if (VALID_URLS.includes(url)) {
    return data.find((e) => e.url === url);
  }
};

export default function DocsPage(props) {
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => e,
  );
  let url = typeof window !== 'undefined' && window.location.pathname;
  url = url && url?.replace('/docs', '').replace(/\/$/, '');
  const router = useRouter();
  const mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  const mainData = transFormMainData(mainCollection);
  const [treeData, settreeData] = React.useState(mainData[0]);
  const parentUrl = url && '/' + url?.split('/').filter((e) => e)[0];

  let item = [];
  const getPageData = (data, mainData = []) => {
    if (!url) {
      return (item = mainData[0]);
    }
    if (data?.url === url) {
      item = data;
    }
    (data?.item ?? data)?.forEach((e) => {
      if (e.url === url) {
        item = e;
      } else {
        getPageData(e?.item);
      }
    });

    return item;
  };

  const pageData = getPageData(treeData, mainData);

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
    // data of pages
    // pagedata is dependent on treedata
    pageData,
    // treedata is the data of the sidebar
    treeData,
    onChangeDropdown,
    dropdownData: DOCS_DATA_DROPDOWN,
  };

  React.useEffect(() => {
    if (!url) {
      settreeData(mainData[0]);
    } else {
      settreeData(initialTreeData(parentUrl, mainData));
    }
  }, [url]);

  React.useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  return <Docs {...docsProps} />;
}

// export async function getServerSideProps({ resolvedUrl }) {
//   let url = resolvedUrl;

//   return {
//     props: { url },
//   };
// }
