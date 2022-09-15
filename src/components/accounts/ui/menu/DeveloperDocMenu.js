import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NavItem } from 'layouts/Main/components/Topbar/components';

const developerDocs = [
  { title: 'Guides and Docs', url: 'https://zesty.org/' },
  { title: 'Node SDK', url: 'https://github.com/zesty-io/node-sdk' },
  { title: 'Instance API', url: 'https://instances-api.zesty.org/' },
  { title: 'Accounts API', url: 'https://accounts-api.zesty.org/' },
  { title: 'Auth API', url: 'https://auth-api.zesty.org/' },
  { title: 'Media API', url: 'https://media-api.zesty.org/' },
  { title: 'Fetch Wrapper', url: 'https://github.com/zesty-io/fetch-wrapper' },
  { title: 'Status', url: 'https://status.zesty.io/' },
  { title: 'Parsley', url: 'https://github.com/zesty-io/parsley' },
];

export const DeveloperDocMenu = ({}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = (pathname) => {
    setAnchorEl(null);
    if (typeof pathname === 'string') {
      router.push({ pathname });
    }
  };

  return (
    <Box>
      <NavItem
        title={'Documentation'}
        id={'documentation'}
        items={developerDocs}
        colorInvert={false}
      />

      <Menu
        id="Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box paddingY={1}>
          {developerDocs.map((e) => (
            <MenuItem title={e.label} onClick={() => handleClose(e.link)}>
              {e.label}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};
