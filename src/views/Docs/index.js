import React, { useEffect, useState } from 'react';
import MainWrapper from 'layouts/Main';
import dynamic from 'next/dynamic';
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  useScrollTrigger,
} from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';

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
  const [filteredData, setFilteredData] = useState();
  const filterData = (e) => {
    const searchTerms = e.target.value;
    const filtered = newTreeData.filter((item) => {
      return (
        item.name?.toLowerCase().includes(searchTerms.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerms.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(newTreeData);
  }, [newTreeData]);

  console.log(trigger);

  return (
    <Stack
      sx={{
        position: 'sticky',
        top: trigger ? '11rem' : '11rem',
        bgcolor: '#fff',
        height: '100%',
        borderRight: `1px solid ${grey[200]}`,
        height: '100vh',
        minWidth: 320,
      }}
    >
      <Box
        sx={{
          px: 2,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TextField
          onChange={filterData}
          size="small"
          color="secondary"
          placeholder="Search"
          sx={{ my: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <FolderTreeView data={filteredData || newTreeData} />
    </Stack>
  );
});

const DocsView = React.memo(({ data = [] }) => {
  return (
    <Stack sx={{ width: '100%', px: 4, justifyContent: 'center ' }}>
      <DocsPages data={data} />
    </Stack>
  );
});

const Main = ({ pageData = [], treeData }) => {
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

  return (
    <MainWrapper customRouting={[]}>
      {/* page header  */}
      <ZestyAccountsHead {...pageHeaderProps} />
      <Stack direction={'row'}>
        {/* left navigation tree */}
        <LeftNav {...leftNavProps} />
        {/* main docs view page  */}
        <DocsView data={pageData} />
      </Stack>
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
