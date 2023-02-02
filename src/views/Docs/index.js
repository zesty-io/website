import { TreeItem, TreeView } from '@mui/lab';
import MainWrapper from 'layouts/Main';
import Fuse from 'fuse.js';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Grid, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { ZestyAccountsHead } from 'components/globals/ZestyAccountsHead';

import INSTANCE_DATA from './instance.data.json';
import ACCOUNTS_DATA from './accounts.data.json';
import AUTH_DATA from './auth.data.json';

const DOCS_DATA = [
  {
    label: 'Instance API',
    value: 'Instance API',
  },
  {
    label: 'Accounts API',
    value: 'Accounts API',
  },
  {
    label: 'Authentication API',
    value: 'Authentication API',
  },
];

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

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

const FolderTreeView = ({ data = {}, header = '', onClick = () => {} }) => {
  const [search, setsearch] = React.useState('');
  const newData = data?.item || [];

  const handleClick = (item) => {
    onClick(item);
  };

  const getTree = (data = []) => {
    const res = Array.isArray(data)
      ? data.map((e) => {
          if (Array.isArray(e.item)) {
            return (
              <TreeItem
                nodeId={uuidv4()}
                label={<Typography py={1}>{e.name}</Typography>}
              >
                {getTree(e.item)}
              </TreeItem>
            );
          } else {
            return (
              <TreeItem
                nodeId={uuidv4()}
                label={<Typography py={1}>{e.name}</Typography>}
                onClick={() => handleClick(e)}
                sx={{
                  whiteSpace: 'nowrap',
                }}
              ></TreeItem>
            );
          }
        })
      : console.error('Not array');

    return res;
  };

  const fuse = new Fuse(newData, options);
  const searchResult = fuse.search(search || '');
  const treeData =
    searchResult.length !== 0 && search.length !== 0
      ? searchResult[0].item.item
      : searchResult.length === 0 && search.length === 0
      ? newData
      : [];

  return (
    <Stack>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setsearch(e.currentTarget.value)}
      />

      <Typography variant="h5">{header}</Typography>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderIcon color="secondary" fontSize="large" />}
        defaultExpandIcon={
          <FolderOpenIcon color="secondary" fontSize="large" />
        }
        sx={{
          flexGrow: 1,
          maxWidth: 400,
          overflowY: 'auto',
        }}
      >
        {getTree(treeData)}
      </TreeView>
    </Stack>
  );
};

const DocsTabs = ({ value, onChange, data = [] }) => {
  return (
    <Stack sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={onChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {Array.isArray(data) &&
          data.map((e) => {
            return <Tab value={e.value} label={e.label} />;
          })}
      </Tabs>
    </Stack>
  );
};

const Main = () => {
  const [value, setValue] = React.useState('Instance API');
  const [treeData, settreeData] = React.useState(INSTANCE_DATA);

  const handleChange = (_, newValue) => {
    console.log(newValue, 44444);
    setValue(newValue);

    const getTreeData = (newValue) => {
      switch (newValue) {
        case 'Authentication API':
          return settreeData(AUTH_DATA);
        case 'Instance API':
          return settreeData(INSTANCE_DATA);
        case 'Accounts API':
          return settreeData(ACCOUNTS_DATA);

        default:
          return settreeData(AUTH_DATA);
      }
    };

    getTreeData(newValue);
  };

  return (
    <MainWrapper customRouting={[]}>
      <ZestyAccountsHead
        title={title}
        description={description}
        ogimage={ogimage}
      />

      <DocsTabs value={value} onChange={handleChange} data={DOCS_DATA} />
      <Grid container>
        <Grid item xs={2}>
          <FolderTreeView data={treeData} header="" />
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </MainWrapper>
  );
};

export const Docs = React.memo(Main);
