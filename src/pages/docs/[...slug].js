import React from 'react';
import { Docs } from 'views/Docs';

import INSTANCE_DATA from '../../views/Docs/instance.data.json';
import ACCOUNTS_DATA from '../../views/Docs/accounts.data.json';
import AUTH_DATA from '../../views/Docs/auth.data.json';

export default function DocsPage({ url }) {
  let mainCollection = [INSTANCE_DATA, ACCOUNTS_DATA, AUTH_DATA];
  mainCollection = mainCollection.map((e) => {
    return { ...e, parent: `/${e?.info?.name?.split(' ')[0]?.toLowerCase()}` };
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
        return { ...w, parent: q.name, url: e.parent + q.name + w.name };
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
            url: e.parent + q.name + w.name,
          };
        });
        return { ...w, item: res3 };
      });
      return { ...q, item: res2 };
    });
    return { ...e, item: res };
  });
  console.log(newCollect2, 565656);
  const [treeData, settreeData] = React.useState(INSTANCE_DATA);
  url = url && url.replace('/docs', '').replace(/\/$/, '');
  let item = [];
  const getPageData = (data) => {
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
    window.scrollTo(0, 0);
    if (data?.value) {
      settreeData(data?.value);
    } else {
      settreeData(INSTANCE_DATA);
    }
  };

  const pageData = getPageData(treeData.item);

  console.log(pageData, treeData, 88888);
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
