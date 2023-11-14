import React from 'react';
import { Docs } from 'views/Docs';
import { useRouter } from 'next/router';
import { transFormMainDataMedia } from 'views/Docs/helper';
import { useZestyStore } from 'store';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';

export default function Index(props) {
  const router = useRouter();
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex, setmainData } =
    useZestyStore((e) => e);
  let url = router.asPath;
  url = url && url?.replace('/docs', '').replace(/\/$/, '');
  const mainCollection = props.docs.data;
  const mainData = transFormMainDataMedia(mainCollection);
  const [treeData, settreeData] = React.useState(mainData[2]);

  // main logic that will populate the data in the page
  let item = [];
  const getPageData = (data, mainData = []) => {
    const currentUrl = url?.split('#')[0].replace(/\/$/, '');
    // to be  removed or change
    if (!url) {
      return (item = mainData[0]);
    }

    // exeption in authentication collection
    // authentication collection doesnt have tiers or subfolders
    if (
      data?.url === currentUrl &&
      currentUrl === '/authentication/api-reference'
    ) {
      // insert the info inside the data.item
      const newItem = [
        {
          ...data.info,
          request: {},
          item: [],
        },
        ...data.item,
      ];
      const newData = { ...data, item: newItem };
      return (item = newData);
    }
    // data.info getter from 1st tier
    if (data?.url === currentUrl) {
      return (item = data.info);
    }
    // compares the current url vs the treedata url's
    // if match it will set the item or pagedata
    // remove hash and trailing slash
    // getter for 2nd and 3rd tiers
    (data?.item ?? data)?.forEach((e) => {
      if (e.url === currentUrl) {
        item = e;
      } else {
        getPageData(e?.item);
      }
    });

    return item;
  };

  const pageData = getPageData(treeData, mainData);

  const docsProps = {
    // data of pages
    // pagedata is dependent on treedata
    pageData,
    // treedata is the data of the sidebar
    treeData,
  };

  React.useEffect(() => {
    settreeData(mainData[3]);
  }, [url]);

  React.useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  React.useEffect(() => {
    if (mainData?.length === 0) {
      setmainData(mainData);
    }
  }, [mainData]);

  const title = `Zesty.io - ${pageData?.name || 'Documentation'}`;
  return (
    <>
      <ZestyAccountsHead title={title} />
      <Docs {...docsProps} />;
    </>
  );
}
