import React, { memo } from 'react';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { Typography, useTheme } from '@mui/material';

const slashedDocsChecker = (href, isDocs = false) => {
  if (isDocs) {
    if (href.includes('/docs')) {
      return href;
    } else {
      return `/docs/${href}`;
    }
  }

  return href;
};

const GetTree = ({ data = [] }) => {
  const router = useRouter();
  const isDocs = router?.asPath?.includes('/docs/');

  return data.map((e) => {
    if (e?.children?.length !== 0 && Array.isArray(e?.children)) {
      return (
        <TreeItem
          nodeId={e.uri}
          sx={{
            my: 0.5,
            color: '#6B7280',
          }}
          label={
            <NextLink
              href={slashedDocsChecker(e.uri, isDocs)}
              variant="p"
              color={'inherit'}
              style={{
                textDecoration: 'none',
                color: '#6B7280',
              }}
            >
              <Typography
                variant="body1"
                py={0.5}
                title={e.title}
                className="algolia-lvl0"
                component={'h3'}
              >
                {e.title || e.name}
              </Typography>
            </NextLink>
          }
        >
          <GetTree data={e.children} />
        </TreeItem>
      );
    } else {
      return (
        <TreeItem
          nodeId={e.uri}
          sx={{
            my: 0.5,
            color: '#6B7280',
          }}
          label={
            <NextLink
              href={slashedDocsChecker(e.uri, isDocs)}
              variant="p"
              color={'inherit'}
              style={{
                textDecoration: 'none',
                color: '#6B7280',
              }}
            >
              <Typography variant="body1" py={0.5} title={e.title}>
                {e.title || e.name}
              </Typography>
            </NextLink>
          }
        ></TreeItem>
      );
    }
  });
};

const Main = ({ data = [] }) => {
  const router = useRouter();
  const url = `${router?.asPath}`;
  const parts = url.split('/');
  parts.splice(3, 1);
  const expanded = [parts.join('/')];
  const theme = useTheme();
  return (
    <TreeView
      data-testid="navigation-tree"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        width: 1,
        overflowY: 'auto',

        '& .MuiTreeItem-content.Mui-focused, & .MuiTreeItem-content.Mui-selected, & .MuiTreeItem-content.Mui-selected.Mui-focused':
          {
            bgcolor: '#FFD6C4',
            color: theme?.palette?.zesty?.zestyOrange,
            fontWeight: 'bold !important',
            borderRadius: '5px',
          },
        '& .MuiTreeItem-content:hover': {
          bgcolor: '#F2F2F2',
          color: '#333333',
          fontWeight: '800 !important',
          borderRadius: '5px',
        },
      }}
      multiSelect
      selected={url}
      defaultSelected={url}
      defaultExpanded={expanded}
    >
      <GetTree data={data} />
    </TreeView>
  );
};
export const TreeNavigation = memo(Main);
