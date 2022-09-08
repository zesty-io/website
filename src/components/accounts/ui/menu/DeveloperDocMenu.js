import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

const developerDocs = [
  { label: 'Guides and Docs', link: 'https://zesty.org/' },
  { label: 'Node SDK', link: 'https://github.com/zesty-io/node-sdk' },
  { label: 'Instance API', link: 'https://instances-api.zesty.org/' },
  { label: 'Accounts API', link: 'https://accounts-api.zesty.org/' },
  { label: 'Auth API', link: 'https://auth-api.zesty.org/' },
  { label: 'Media API', link: 'https://media-api.zesty.org/' },
  { label: 'Fetch Wrapper', link: 'https://github.com/zesty-io/fetch-wrapper' },
  { label: 'Status', link: 'https://status.zesty.io/' },
  { label: 'Parsley', link: 'https://github.com/zesty-io/parsley' },
];

export const DeveloperDocMenu = ({ parent }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (pathname) => {
    setAnchorEl(null);
    if (typeof pathname === 'string') {
      router.push({ pathname });
    }
  };

  return (
    <Box>
      <Button
        title={`Developer Docs`}
        color="inherit"
        id="profile-btn"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
        variant="text"
      >
        {parent}
      </Button>
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
