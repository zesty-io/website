import React, { useEffect } from 'react';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import MainWrapper from 'layouts/Main';
import { useState } from 'react';
import { useZestyStore } from 'store';
import axios from 'axios';
import { PARSLEY_GUIDES } from 'utils/docs/constants';

const GuidePage = (props) => {
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => ({
      setalgoliaApiKey: e.setalgoliaApiKey,
      setalgoliaAppId: e.setalgoliaAppId,
      setalgoliaIndex: e.setalgoliaIndex,
    }),
  );
  const [search, setsearch] = useState('');
  const [pageData, setpageData] = useState({});

  const newNavData = PARSLEY_GUIDES.map((e) => {
    const githubURL = `https://raw.githubusercontent.com/zesty-io/zesty-docs/main/webengine/guides/web-engine/introduction-to-parsley/${e}`;
    const newName = e.replaceAll('.md', '');
    return {
      label: `${newName}`,
      value: `${newName}`,
      file: githubURL,
      url: `/docs/parsley/guides/${newName}`,
    };
  }).filter((e) => e.label.toLowerCase().includes(search.toLowerCase()));

  const handleNavClick = (e) => {
    window.location.href = e.url;
  };

  const getPageData = async () => {
    await axios
      .get(
        'https://parsleydev-dev.webengine.zesty.io/-/instant/7-c005a8-zv6024.json',
      )
      .then((e) => {
        setpageData(e.data.data[0].content);
      })
      .catch((e) => {
        console.log(e);
        setpageData({});
      });
  };
  useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);

  useEffect(() => {
    // getPageData();
  }, []);
  return (
    <MainWrapper>
      {/* <Stack direction={'row'}>
        <DocsSidebar
          search={search}
          setsearch={setsearch}
          data={newNavData}
          onClick={handleNavClick}
        />
        <Stack pl={4} sx={{ width: 1 }}>
          <Stack width={'70vw'}>
            <Typography variant="h2" component={'h1'}>
              GUIDE PAGE
            </Typography>
          </Stack>
        </Stack>
      </Stack> */}
    </MainWrapper>
  );
};

export default GuidePage;
