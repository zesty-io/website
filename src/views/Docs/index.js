import React from 'react';
import MainWrapper from 'layouts/Main';
import dynamic from 'next/dynamic';
import { Stack, useScrollTrigger } from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';

const FolderTreeView = dynamic(() =>
  import('./FolderTreeView').then((mod) => mod.FolderTreeView),
);

const DocsPages = dynamic(() =>
  import('./DocsPages').then((mod) => mod.DocsPages),
);

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

const LeftNav = React.memo(({ trigger, newTreeData }) => {
  return (
    <Stack
      sx={{
        position: 'fixed',
        top: trigger ? '11rem' : '11rem',
        bgcolor: '#fff',
        height: '100%',
        borderRight: `1px solid ${grey[200]}`,
        width: '20vw',
      }}
    >
      <FolderTreeView data={newTreeData} />
    </Stack>
  );
});

const DocsView = React.memo(({ data = [] }) => {
  return (
    <Stack width={1} pl={54} pr={4}>
      <DocsPages data={data} />
    </Stack>
  );
});

const Main = ({ pageData = [], treeData }) => {
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const newTreeData = treeData?.item;

  const pageHeaderProps = {
    title,
    description,
    ogimage,
  };
  const leftNavProps = {
    trigger,
    newTreeData,
  };

  const isHomeDocsRoute =
    router.asPath.split('/').filter((e) => e)?.length === 1 ? true : false;
  // prevent null data when user go to /docs
  React.useEffect(() => {
    if (isHomeDocsRoute) {
      router.replace('/docs/instances/api-reference');
    }
  }, [isHomeDocsRoute]);

  return (
    <MainWrapper customRouting={[]}>
      {/* page header  */}
      <ZestyAccountsHead {...pageHeaderProps} />
      {/* left navigation tree */}
      <LeftNav {...leftNavProps} />
      {/* main docs view page  */}
      <DocsView data={pageData} />
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
