import React from 'react';
import MainWrapper from 'layouts/Main';
import dynamic from 'next/dynamic';
import { Grid, Stack, useTheme } from '@mui/material';
import { TreeNavigation } from 'components/globals/TreeNavigation';

const DocsPages = dynamic(() =>
  import('./DocsPages').then((mod) => mod.DocsPages),
);

const DocsView = React.memo(({ data = [] }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Stack
      sx={{
        width: '100%',
        maxWidth: 1920,
        px: 4,
        background: isDarkMode ? 'theme.palette.zesty.zestyDarkBlue' : 'white',
      }}
    >
      <DocsPages data={data} />
    </Stack>
  );
});

const Main = ({ pageData = [], treeData }) => {
  return (
    <MainWrapper customRouting={[]}>
      <Stack px={4}>
        <Grid container>
          <Grid item xs={0} lg={2.5}>
            {/* left navigation tree */}
            <TreeNavigation data={treeData?.item} />
          </Grid>
          <Grid item xs={12} lg={9.5}>
            {/* main docs view page  */}
            <DocsView data={pageData} />
          </Grid>
        </Grid>
      </Stack>
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
