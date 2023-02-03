import MainWrapper from 'layouts/Main';
import React from 'react';
import Fuse from 'fuse.js';
import { Stack, useScrollTrigger } from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

import { ShowPage } from './ShowPage';
import { FolderTreeView } from './FolderTreeView';
import { grey } from '@mui/material/colors';
import { DocsComboBox } from './DocsComboBox';
import { SearchComponent } from './SearchComponent';

import INSTANCE_DATA from './instance.data.json';
import ACCOUNTS_DATA from './accounts.data.json';
import AUTH_DATA from './auth.data.json';

const options = {
  includeScore: true,
  useExtendedSearch: true,
  includeMatches: true,
  ignoreLocation: true,
  findAllMatches: true,
  threshold: 0,
  isCaseSensitive: false,
  minMatchCharLength: 1,
  keys: ['name', 'item.name', 'item.item.name'],
};

const DOCS_DATA = [
  {
    label: 'Instance API',
    value: INSTANCE_DATA,
  },
  {
    label: 'Accounts API',
    value: ACCOUNTS_DATA,
  },
  {
    label: 'Authentication API',
    value: AUTH_DATA,
  },
];

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

const LeftNav = React.memo(
  ({ trigger, onChangeDropdown, setsearch, search, newTreeData }) => {
    return (
      <Stack
        sx={{
          position: 'fixed',
          top: trigger ? '8rem' : '8rem',
          bgcolor: '#fff',
          height: '100%',
          borderRight: `1px solid ${grey[200]}`,
          width: '20vw',
        }}
      >
        <Stack px={4} spacing={2} py={3}>
          <DocsComboBox onChange={onChangeDropdown} options={DOCS_DATA} />
          <SearchComponent search={search} onChange={setsearch} />
        </Stack>
        <FolderTreeView
          data={newTreeData}
          search={search}
          setsearch={setsearch}
        />
      </Stack>
    );
  },
);

const DocsView = React.memo(({ data = [] }) => {
  return (
    <Stack width={1} pl={54} pr={4}>
      <ShowPage data={data} />
    </Stack>
  );
});

const Main = () => {
  const [search, setsearch] = React.useState('');
  const [treeData, settreeData] = React.useState(INSTANCE_DATA);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 5,
  });

  const onChangeDropdown = (data) => {
    window.scrollTo(0, 0);
    if (data?.value) {
      settreeData(data?.value);
    } else {
      settreeData(INSTANCE_DATA);
    }
  };

  const fuse = new Fuse(treeData.item, options);
  const searchResult = fuse.search(search || '');
  const newTreeData =
    searchResult.length !== 0 && search.length !== 0
      ? searchResult[0].item.item
      : searchResult.length === 0 && search.length === 0
      ? treeData.item
      : [];

  const pageHeaderProps = {
    title,
    description,
    ogimage,
  };
  const leftNavProps = {
    trigger,
    onChangeDropdown,
    setsearch,
    search,
    newTreeData,
  };

  return (
    <MainWrapper customRouting={[]}>
      {/* page header  */}
      <ZestyAccountsHead {...pageHeaderProps} />
      {/* left navigation tree */}
      <LeftNav {...leftNavProps} />
      {/* main docs view page  */}
      <DocsView data={treeData.item} />
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
