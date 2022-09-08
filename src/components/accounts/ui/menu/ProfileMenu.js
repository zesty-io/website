import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { grey } from '@mui/material/colors';

const dropdown = [
  { link: '/profile/', label: 'Profile' },
  { link: '/profile/security', label: 'Security' },
  { link: '/profile/preference', label: 'Preferences' },
];

const signOut = [{ link: '/logout', label: 'Logout' }];

export const ProfileMenu = ({ profilePic, userInfo }) => {
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
      <Box
        title={`${userInfo?.firstName} ${userInfo?.lastName}`}
        id="profile-btn"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      >
        {profilePic}
      </Box>
      <Menu
        id="Profile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box padding={2} sx={{ borderBottom: `1px solid ${grey[300]}` }}>
          <Typography>Logged in as </Typography>
          <Typography variant="p" sx={{ fontWeight: '800' }}>
            {userInfo?.email}
          </Typography>
        </Box>
        <Box paddingY={1}>
          {dropdown.map((e) => (
            <MenuItem onClick={() => handleClose(e.link)}>{e.label}</MenuItem>
          ))}
        </Box>
        <Box sx={{ borderTop: `1px solid ${grey[300]}` }} paddingY={1}>
          {signOut.map((e) => (
            <MenuItem onClick={() => handleClose(e.link)}>{e.label}</MenuItem>
          ))}
        </Box>
      </Menu>
    </Box>
  );
};
