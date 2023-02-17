import React from 'react';
import MainWrapper from 'layouts/Main';
import dynamic from 'next/dynamic';
import { Stack, useScrollTrigger } from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { grey } from '@mui/material/colors';
import { AlgoSearch } from './AlgoSearch';
import { SearchModal } from './SearchModal';

const DocsComboBox = dynamic(() =>
  import('./DocsComboBox').then((mod) => mod.DocsComboBox),
);

// const SearchComponent = dynamic(() =>
//   import('./SearchComponent').then((mod) => mod.SearchComponent),
// );

const FolderTreeView = dynamic(() =>
  import('./FolderTreeView').then((mod) => mod.FolderTreeView),
);

const DocsPages = dynamic(() =>
  import('./DocsPages').then((mod) => mod.DocsPages),
);

// const options = {
//   includeScore: true,
//   useExtendedSearch: true,
//   includeMatches: true,
//   ignoreLocation: true,
//   findAllMatches: true,
//   threshold: 0,
//   isCaseSensitive: false,
//   minMatchCharLength: 1,
//   keys: ['name', 'item.name', 'item.item.name'],
// };

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

// const LANGUAGE_LIST = [
//   {
//     label: 'Javascript Fetch',
//     value: 'Javascript Fetch',
//   },
//   {
//     label: 'Javascript Axios',
//     value: 'Javascript Axios',
//   },
// ];

const LeftNav = React.memo(
  ({ trigger, onChangeDropdown, newTreeData, dropdownData }) => {
    // const [currentLang, setcurrentLang] = React.useState('Javascript Fetch');
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
          {/* <LangSelector
            value={currentLang}
            setvalue={setcurrentLang}
            options={LANGUAGE_LIST}
          /> */}
          <SearchModal>
            <AlgoSearch />
          </SearchModal>
          <DocsComboBox onChange={onChangeDropdown} options={dropdownData} />
        </Stack>
        <FolderTreeView data={newTreeData} />
      </Stack>
    );
  },
);

const DocsView = React.memo(({ data = [] }) => {
  return (
    <Stack width={1} pl={54} pr={4}>
      <DocsPages data={data} />
    </Stack>
  );
});

const Main = ({ pageData = [], treeData, onChangeDropdown, dropdownData }) => {
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
    onChangeDropdown,
    newTreeData,
    dropdownData,
  };

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
