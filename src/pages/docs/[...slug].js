import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';
import { useRouter } from 'next/router';
import { SystemSecurityUpdateGoodOutlined } from '@mui/icons-material';

export default function DocsPage({ url }) {
  const router = useRouter();
  let mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  mainCollection = mainCollection.map((e) => {
    return {
      ...e,
      parent: `/${e?.info?.name?.split(' ')[0]?.toLowerCase()}`,
      url: `/${e?.info?.name?.split(' ')[0]?.toLowerCase()}`,
    };
  });

  // const getArr = (data) => {
  //   const newData = data?.map((e) => {
  //     const res = e.item.map((q) => {
  //       return { ...q, parent: e.parent || e.name };
  //     });
  //     return { ...e, item: res };
  //   });

  //   return newData;
  // };
  const newCollection = mainCollection?.map((e) => {
    const res = e.item.map((q) => {
      return { ...q, parent: e.parent || e.name, url: e.parent + q.name };
    });
    return { ...e, item: res };
  });

  const newColletion1 = newCollection.map((e) => {
    const res = e.item.map((q) => {
      const res2 = q?.item?.map((w) => {
        return { ...w, parent: q.name, url: e.parent + w.name };
      });
      return { ...q, item: res2 };
    });
    return { ...e, item: res };
  });

  const newCollect2 = newColletion1.map((e) => {
    const res = e.item.map((q) => {
      const res2 = q?.item?.map((w) => {
        const res3 = w?.item?.map((y) => {
          return {
            ...y,
            parent: w?.name,
            // url: e.parent + w.name,
          };
        });
        return { ...w, item: res3 };
      });
      return { ...q, item: res2 };
    });
    return { ...e, item: res };
  });
  console.log(newCollect2, 565656);

  const DOCS_DATA = [
    {
      label: 'Instance API',
      value: newCollect2[0],
    },
    {
      label: 'Accounts API',
      value: newCollect2[1],
    },
    {
      label: 'Authentication API',
      value: newCollect2[2],
    },
  ];

  const initialTreeData = (url) => {
    return newCollect2.find((e) => e.url === url);
  };
  const [treeData, settreeData] = React.useState(newCollect2[0]);
  url = url && url.replace('/docs', '').replace(/\/$/, '');
  let item = [];
  const getPageData = (data) => {
    if (data?.url === url) {
      item = data;
    }
    if (data?.item) {
      data?.item.forEach((e) => {
        if (e.url === url) {
          item = e;
        } else {
          getPageData(e.item);
        }
      });
    }
    return item;
  };

  console.log(initialTreeData(url), 424242, url);
  React.useEffect(() => {
    if (url) {
      settreeData(initialTreeData(url));
      // settreeData(getPageData(treeData));
    } else {
      router.push('/docs/instances');
    }
  }, []);

  const onChangeDropdown = (data) => {
    console.log(data);
    window.scrollTo(0, 0);
    if (data?.value) {
      router.push(`/docs` + data.value.parent);
      // settreeData(data?.value);
    } else {
      router.push(`/docs` + '/instances');
      // settreeData(INSTANCE_DATA);
    }
  };

  console.log(url, 676767);
  const pageData = getPageData(treeData);

  console.log(pageData, treeData, 5566, url);
  const docsProps = {
    data: pageData,
    onChangeDropdown,
    treeData,
    dropdownData: DOCS_DATA,
  };
  return <Docs {...docsProps} />;
}

export async function getServerSideProps({ resolvedUrl }) {
  let url = resolvedUrl;

  return {
    props: { url }, // will be passed to the page component as props
  };
}
