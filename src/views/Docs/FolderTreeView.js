import { Link, Stack, TextField, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import Fuse from 'fuse.js';
import { TreeItem, TreeView } from '@mui/lab';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

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

const Main = ({ data = {}, header = '' }) => {
  const [search, setsearch] = React.useState('');
  const newData = data?.item || [];

  const handleClick = (item) => {
    console.log(item, 444);

    //this will scroll to id
    document.getElementById(item?.name)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  const getTree = (data = []) => {
    const result = Array.isArray(data)
      ? data.map((e) => {
          if (Array.isArray(e.item)) {
            const res = e.item.map((x) => {
              return { ...x, scroll: true };
            });
            return (
              <TreeItem
                nodeId={uuidv4()}
                label={<Typography py={1}>{e.name}</Typography>}
                onClick={() => handleClick(e)}
              >
                {getTree(res)}
              </TreeItem>
            );
          } else {
            return (
              <TreeItem
                nodeId={uuidv4()}
                label={
                  <Link
                    href={`#${e.name}`}
                    variant="p"
                    color={'inherit'}
                    sx={{
                      textDecoration: 'none',
                    }}
                  >
                    <Typography py={1}>{e.name}</Typography>
                  </Link>
                }
                onClick={() => handleClick(e)}
                sx={{
                  whiteSpace: 'nowrap',
                }}
              ></TreeItem>
            );
          }
        })
      : console.error('Not array');

    return result;
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
    <Stack
      width={1}
      sx={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      <Stack px={4} py={2}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setsearch(e.currentTarget.value)}
        />
      </Stack>

      <Typography variant="h5">{header}</Typography>
      <Stack pl={2}>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={
            <FolderIcon color="secondary" fontSize="large" />
          }
          defaultExpandIcon={
            <FolderOpenIcon color="secondary" fontSize="large" />
          }
          sx={{
            flexGrow: 1,
            maxWidth: 350,
            overflowY: 'auto',
          }}
        >
          {getTree(treeData)}
        </TreeView>
      </Stack>
    </Stack>
  );
};
export const FolderTreeView = React.memo(Main);
