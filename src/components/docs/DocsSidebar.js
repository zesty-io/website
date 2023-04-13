import { TreeItem, TreeView } from '@mui/lab';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Link, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { grey } from '@mui/material/colors';

export const DocsSidebar = React.memo(
  ({ setsearch, data, onClick = undefined, placeholder = 'Search...' }) => {
    const handleClick = (e) => {
      if (onClick) {
        onClick(e);
      }
    };
    return (
      <Stack
        sx={{
          position: 'sticky',
          top: '11rem',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'clip',
          width: 400,
          borderRight: `1px solid ${grey[200]}`,
        }}
      >
        <Stack p={2}>
          <TextField
            color="secondary"
            placeholder={placeholder}
            variant="outlined"
            name={'search'}
            fullWidth
            onChange={(e) => setsearch(e.currentTarget.value)}
          />
        </Stack>
        <Stack width={1} sx={{ height: '80vh' }}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={
              <FolderIcon color="secondary" fontSize="large" />
            }
            defaultExpandIcon={
              <FolderOpenIcon color="secondary" fontSize="large" />
            }
            sx={{
              width: 1,
              overflowY: 'auto',
            }}
          >
            {data.map((e) => {
              return (
                <TreeItem
                  nodeId={e.value}
                  onClick={() => handleClick(e)}
                  label={
                    <Link
                      href={onClick ? undefined : '#' + e.value}
                      variant="p"
                      color={'inherit'}
                      sx={{
                        textDecoration: 'none',
                        wordWrap: 'break-word',
                        wordBreak: 'break-all',
                      }}
                    >
                      <Typography
                        py={1}
                        sx={{
                          wordWrap: 'break-word',
                          wordBreak: 'break-all',
                        }}
                      >
                        {e.label}
                      </Typography>
                    </Link>
                  }
                ></TreeItem>
              );
            })}
          </TreeView>
        </Stack>
      </Stack>
    );
  },
);
