import { TreeItem, TreeView } from '@mui/lab';
import MainWrapper from 'layouts/Main';
import Head from 'next/head';
import Fuse from 'fuse.js';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Grid, Stack, TextField, Typography } from '@mui/material';

import INSTANCE_DATA from './instance.data.json';
// import ACCOUNTS_DATA from './accounts.data.json';
// import AUTH_DATA from './auth.data.json';

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
    console.log(item, 555);
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

const Main = () => {
  return (
    <MainWrapper customRouting={[]}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" value={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <Grid container>
        <Grid item xs={2}>
          <Stack
            sx={{
              height: '80vh',
              overflow: 'auto',
            }}
          >
            <FolderTreeView data={INSTANCE_DATA} header="Instance API" />
            {/* <FolderTreeView data={ACCOUNTS_DATA} header="Accounts API" />
      <FolderTreeView data={AUTH_DATA} header="Authentication API" /> */}
          </Stack>
        </Grid>
        <Grid item xs={10}></Grid>
      </Grid>
    </MainWrapper>
  );
};

export const NewDocs = React.memo(Main);
