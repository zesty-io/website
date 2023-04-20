import React, { useEffect } from 'react';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import MuiMarkdown from 'markdown-to-jsx';
import MainWrapper from 'layouts/Main';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { DocsSidebar } from 'components/docs/DocsSidebar';
import { useZestyStore } from 'store';
import { fetchMarkdownFile, parseMarkdownFile } from 'utils/docs';

const PARSLEY_OVERVIEW_URL =
  'https://raw.githubusercontent.com/zesty-io/zesty-org/master/services/web-engine/introduction-to-parsley/README.md';
const muiContentOverrides = {
  h1: {
    component: 'h1',
    props: {
      style: { fontSize: '24px' },
    },
  },
  h2: {
    component: 'h2',
    props: {
      style: { fontSize: '1.5em' },
    },
  },
  p: {
    component: 'p',
    props: {
      style: { fontSize: '24px' },
    },
  },

  img: {
    component: 'img',
    props: {
      style: { width: '80%', margin: '10px 10%' },
    },
  },
};

const ParsleyOverviewPage = (props) => {
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => ({
      setalgoliaApiKey: e.setalgoliaApiKey,
      setalgoliaAppId: e.setalgoliaAppId,
      setalgoliaIndex: e.setalgoliaIndex,
    }),
  );
  const [search, setsearch] = useState('');
  const [navData, setnavData] = useState([]);
  const [mdData, setmdData] = useState('');

  const getMd = async () => {
    const markdown = await fetchMarkdownFile({ mdUrl: PARSLEY_OVERVIEW_URL });
    parseMarkdownFile(markdown, setmdData, setnavData);
  };

  const newNavData = navData?.filter((e) =>
    e.label.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    getMd();
  }, []);

  useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);
  useEffect(() => {
    console.log(navData, 444444444);
  }, [navData]);

  return (
    <MainWrapper>
      <Stack direction={'row'}>
        {/* SIDEBAR */}
        <DocsSidebar
          search={search}
          setsearch={setsearch}
          data={newNavData}
          onClick={undefined}
        />
        {/* MAIN PAGE */}
        <Stack pl={4} sx={{ width: 1 }}>
          <Stack width={'70vw'}>
            <MuiMarkdown overrides={muiContentOverrides}>{mdData}</MuiMarkdown>
          </Stack>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default ParsleyOverviewPage;
