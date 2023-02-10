import { Link, Stack, Typography } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';
import { TreeItem, TreeView } from '@mui/lab';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useRouter } from 'next/router';

const GetTree = ({ data = [], handleClick = () => {} }) => {
  const result = Array.isArray(data)
    ? data.map((e) => {
        if (Array.isArray(e.item)) {
          const res = e.item.map((x) => {
            return { ...x, scroll: true };
          });
          const id = uuidv4();
          return (
            <TreeItem
              expanded={true}
              nodeId={id}
              label={<Typography py={1}>{e.name}</Typography>}
              onClick={() => handleClick(e, id)}
            >
              <GetTree data={res} handleClick={handleClick} />
            </TreeItem>
          );
        } else {
          const id = uuidv4();
          return (
            <TreeItem
              expanded={true}
              nodeId={id}
              label={
                <Link
                  // href={`/docs${e.name}`}
                  variant="p"
                  color={'inherit'}
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography py={1}>{e.name}</Typography>
                </Link>
              }
              onClick={() => handleClick(e, id)}
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
  const router = useRouter();
  const handleClick = (item, x) => {
    router.push('/docs' + item.name);
    console.log(x, 444444444444444444444);
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
          expanded={['a47673f6-ff52-4d2c-8853-9fb90aa65bf0']}
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
