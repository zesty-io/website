import React, { useEffect } from 'react';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import MuiMarkdown from 'markdown-to-jsx';
import MainWrapper from 'layouts/Main';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { DocsSidebar } from 'components/docs/DocsSidebar';
import { useZestyStore } from 'store';
import { fetchMarkdownFile, parseMarkdownFile } from 'utils/docs';
import { PARSLEY, PARSLEY_GUIDES } from 'utils/docs/constants';
import { useRouter } from 'next/router';

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

const ApiReferencePage = (props) => {
  const router = useRouter();
  const { setalgoliaApiKey, setalgoliaAppId, setalgoliaIndex } = useZestyStore(
    (e) => ({
      setalgoliaApiKey: e.setalgoliaApiKey,
      setalgoliaAppId: e.setalgoliaAppId,
      setalgoliaIndex: e.setalgoliaIndex,
    }),
  );
  const [search, setsearch] = useState('');
  const [mdData, setmdData] = useState('');

  const handleNavClick = (e) => {
    window.location.href = e.url;
  };
  const getMd = async () => {
    const githubURL = `https://raw.githubusercontent.com/zesty-io/zesty-docs/main/webengine/guides/web-engine/introduction-to-parsley/${router?.query?.slug[0]}.md`;
    const markdown = await fetchMarkdownFile({ mdUrl: githubURL });
    const { pageData } = await parseMarkdownFile({
      markdown,
      tags: ['h3', 'h4', 'h2'],
      parentURL: PARSLEY[1].parentURL,
      title: PARSLEY[1].title,
    });

    setmdData(pageData);
  };

  const newNavData = PARSLEY_GUIDES.map((e) => {
    const githubURL = `https://raw.githubusercontent.com/zesty-io/zesty-docs/main/webengine/guides/web-engine/introduction-to-parsley/${e}`;
    const newName = e.replaceAll('.md', '');
    return {
      label: `${newName}`,
      value: `${newName}`,
      title: `${newName}`,
      file: githubURL,
      url: `/docs/parsley/guides/${newName}`,
    };
  }).filter((e) => e.label.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    getMd();
  }, []);

  useEffect(() => {
    setalgoliaApiKey(props.algolia.apiKey);
    setalgoliaAppId(props.algolia.appId);
    setalgoliaIndex(props.algolia.index);
  }, []);
  return (
    <MainWrapper>
      <Stack direction={'row'}>
        {/* SIDEBAR */}
        <DocsSidebar
          search={search}
          setsearch={setsearch}
          data={newNavData}
          onClick={handleNavClick}
          url={`${router?.query?.slug && router?.query?.slug[0]}`}
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

export default ApiReferencePage;
