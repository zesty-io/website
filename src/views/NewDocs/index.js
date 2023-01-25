import { TreeItem, TreeView } from '@mui/lab';
import Main from 'layouts/Main';
import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import INSTANCE_DATA from './instance.data.json';
import ACCOUNTS_DATA from './accounts.data.json';
import AUTH_DATA from './auth.data.json';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Stack, Typography } from '@mui/material';

const title = 'Docs page';
const description = 'Docs page';
const ogimage = 'Docs page';

const FolderTreeView = ({ data = {}, header = '', onClick = () => {} }) => {
  const newData = data?.item || [];
  const handleClick = (item) => {
    console.log(item, 555);
    onClick(item);
  };
  const getTree = (data = []) => {
    const res = data.map((e) => {
      if (Array.isArray(e.item)) {
        return (
          <TreeItem nodeId={uuidv4()} label={e.name}>
            {getTree(e.item)}
          </TreeItem>
        );
      } else {
        return (
          <TreeItem
            nodeId={uuidv4()}
            label={e.name}
            onClick={() => handleClick(e)}
          ></TreeItem>
        );
      }
    });

    return res;
  };
  return (
    <Stack>
      <Typography variant="h5">{header}</Typography>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<FolderIcon color="secondary" fontSize="large" />}
        defaultExpandIcon={
          <FolderOpenIcon color="secondary" fontSize="large" />
        }
        sx={{
          fontSize: '40px',
          flexGrow: 1,
          maxWidth: 400,
          overflowY: 'auto',
        }}
      >
        {getTree(newData)}
      </TreeView>
    </Stack>
  );
};

export const NewDocs = () => {
  return (
    <Main customRouting={[]}>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" value={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogimage} />
      </Head>
      <FolderTreeView data={INSTANCE_DATA} header="Instance API" />
      <FolderTreeView data={ACCOUNTS_DATA} header="Accounts API" />
      <FolderTreeView data={AUTH_DATA} header="Authentication API" />
    </Main>
  );
};
