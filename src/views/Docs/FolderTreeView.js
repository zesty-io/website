import { Link, Stack, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import { TreeItem, TreeView } from '@mui/lab';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

const GetTree = ({ data = [], handleClick = () => {} }) => {
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
              <GetTree data={res} handleClick={handleClick} />
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

const Main = ({ data = {}, header = '' }) => {
  const handleClick = (item) => {
    //this will scroll to id
    document.getElementById(item?.name)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  };

  return (
    <Stack
      width={1}
      sx={{
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
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
          <GetTree data={data} handleClick={handleClick} />
        </TreeView>
      </Stack>
    </Stack>
  );
};
export const FolderTreeView = React.memo(Main);
