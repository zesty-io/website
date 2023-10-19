import { Link, Stack, Typography } from '@mui/material';
import { TreeItem, TreeView } from '@mui/lab';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useRouter } from 'next/router';

const GetTree = ({ data = [], handleClick = () => {} }) => {
  const result = Array.isArray(data)
    ? data.map((e, i) => {
        const name = e.name.replaceAll(' ', '-');
        if (Array.isArray(e.item)) {
          const res = e.item.map((x) => {
            return { ...x, scroll: true };
          });
          return (
            <TreeItem
              key={i}
              // expanded={true}
              nodeId={name}
              label={<Typography py={1}>{e.name}</Typography>}
              onClick={() => handleClick(e)}
            >
              <GetTree data={res} handleClick={handleClick} />
            </TreeItem>
          );
        } else {
          return (
            <TreeItem
              key={i}
              nodeId={name}
              label={
                <Link
                  href={`#${name}`}
                  variant="p"
                  color={'inherit'}
                  sx={{
                    textDecoration: 'none',
                  }}
                >
                  <Typography py={1}>{e.name}</Typography>
                </Link>
              }
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
  const handleClick = (item) => {
    router.push('/docs' + item.url);
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
          defaultExpanded={['mui-7-23ec4824-7f6d-4ac8-b65d-06efdb80ca34' || '']}
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
