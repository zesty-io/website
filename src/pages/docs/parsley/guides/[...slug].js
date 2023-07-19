import React, { useEffect } from 'react';
export { default as getServerSideProps } from 'lib/accounts/protectedRouteGetServerSideProps';
import MainWrapper from 'layouts/Main';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { DocsSidebar } from 'components/docs/DocsSidebar';
import { useZestyStore } from 'store';
import { fetchMarkdownFile } from 'utils/docs';
import { PARSLEY_GUIDES } from 'utils/docs/constants';
import { useRouter } from 'next/router';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { ZestyMarkdownParser } from 'components/markdown-styling/ZestyMarkdownParser';

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
    const githubURL = `https://raw.githubusercontent.com/zesty-io/zesty-docs-md/main/webengine/guides/web-engine/introduction-to-parsley/${router?.query?.slug[0]}.parse.md`;
    const markdown = await fetchMarkdownFile({ mdUrl: githubURL });
    setmdData(markdown);
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

  const title = `Zesty.io Guides - ${
    router?.query?.slug && router?.query?.slug[0]
  }`;

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
      <ZestyAccountsHead title={title} />
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
            <ZestyMarkdownParser
              markdown={mdData}
              mainKeywords={[]}
              productGlossary={[]}
            />
          </Stack>
        </Stack>
      </Stack>
    </MainWrapper>
  );
};

export default ApiReferencePage;
